import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { CiMenuKebab } from "react-icons/ci";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { toggleSidebar } from "../../slices/navSlice";
import Search from "../search/Search";
import SearchContext from "../../utils/SearchContext";
import SearchSuggestion from "../search/SearchSuggestion";
import { useEffect } from "react";
import { addSuggestion } from "../../slices/searchSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const cachedSuggestion = useSelector(
    (store) => store.suggestions.searchSuggestions
  );
  const [searchObject, setSearchObject] = useState({
    searchValue: "",
    showSuggestion: false,
    suggestions: [],
  });
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleSidebar());
  };

  useEffect(() => {
    // Used debouncing to delay the API call
    const timer = setTimeout(() => {
      // This condition is to read cache from redux store
      if (cachedSuggestion[searchObject?.searchValue]) {
        setSearchResults((prev) => ({
          ...prev,
          suggestions: cachedSuggestion[searchObject?.searchValue],
        }));
      } else {
        getSuggestions();
      }
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [searchObject?.searchValue]);

  const getSuggestions = async () => {
    const url =
      process.env.REACT_APP_MODE === "LOCAL"
        ? `http://localhost:3000/suggestions.json`
        : `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searchObject?.searchValue}&key=${process.env.REACT_APP_YOUTUBE_API_KEY}`;
    try {
      console.log("Called");
      const data = await fetch(url);
      if (!data.ok) {
        throw new Error("Request failed with status", data.status);
      }
      const jsonData = await data.json();
      // await setSearchResults(jsonData);
      const topSuggestion = await jsonData?.items
        ?.slice(0, 7)
        ?.map((item) => item?.snippet?.title);
      await setSearchObject((prev) => ({
        ...prev,
        suggestions: topSuggestion,
      }));

      if (searchObject?.searchValue) {
        dispatch(addSuggestion({ [searchObject?.searchValue]: topSuggestion }));
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="grid grid-cols-4 sticky top-0 z-10 bg-white">
      <div className="col-span-1 flex gap-6 px-6 py-4">
        <FiMenu className="text-xl cursor-pointer" onClick={handleToggle} />
        {/* <Link to="/"> */}
        <img
          onClick={() => (window.location.href = "/")}
          alt="logo"
          src="https://upload.wikimedia.org/wikipedia/commons/3/34/YouTube_logo_%282017%29.png"
          className="w-auto h-5 cursor-pointer"
        />
        {/* </Link> */}
      </div>
      <div className="col-span-2 py-2 justify-center">
        <SearchContext.Provider value={{ searchObject, setSearchObject }}>
          <Search />
          {searchObject.showSuggestion && <SearchSuggestion />}
        </SearchContext.Provider>
      </div>
      <div className="col-span-1 flex px-7 py-4 gap-2 justify-end">
        <CiMenuKebab className="text-2xl mx-5" />
        <HiOutlineUserCircle className="text-2xl" /> Sign in
      </div>
    </div>
  );
};

export default Header;
