import React from "react";
import { SlMagnifier } from "react-icons/sl";
import SearchContext from "../../utils/SearchContext";

const SearchSuggestion = () => {
  return (
    <SearchContext.Consumer>
      {({ searchObject }) => {
        const { suggestions } = searchObject;
        return (
          <ul className="z-10 absolute bg-white w-[35%] rounded-xl shadow-lg outline-8 px-4 font-semibold pb-3 pt-1">
            {suggestions.map((item) => (
              <li className="flex pt-3 gap-x-4" key={item}>
                <SlMagnifier className="mt-1" />{" "}
                <span className="">{item}</span>
              </li>
            ))}
          </ul>
        );
      }}
    </SearchContext.Consumer>
  );
};

export default SearchSuggestion;
