import React from "react";
import { BsMicFill } from "react-icons/bs";
import { SlMagnifier } from "react-icons/sl";
import SearchContext from "../../utils/SearchContext";

const Search = () => {
  return (
    <SearchContext.Consumer>
      {(value) => {
        const {setSearchObject, searchObject}=value
        return (
          <div className="flex">
            <input
              onFocus={() =>setSearchObject({...searchObject, showSuggestion:true}) }
              onBlur={() => setSearchObject({...searchObject, showSuggestion:false})}
              className="w-[70%] h-10 rounded-l-full border border-gray-400 shadow-inner pl-4 before:bg-red-500"
              type="text"
              placeholder="Search"
              onChange={(e)=>setSearchObject({...searchObject, searchValue:e.target.value})}
            />
            <button className="px-5 py-3 w-16 rounded-r-full border h-10 border-gray-200 bg-gray-100">
              <SlMagnifier />
            </button>
            <BsMicFill className="h-10 text-lg ml-5" />
          </div>
        );
      }}
    </SearchContext.Consumer>
  );
};

export default Search;
