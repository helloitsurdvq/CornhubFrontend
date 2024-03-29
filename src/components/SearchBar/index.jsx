import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

export default function SearchBar() {
  return (
    <div className="relative flex-1 w-full mr-8 border border-gray-300 rounded-full hover:bg-white hover:bg-opacity-25 md:w-auto md:flex">
      <div className="absolute inset-y-0 left-0 flex items-center pl-2">
        <SearchIcon />
      </div>
      <input
        type="text"
        placeholder="Search..."
        aria-label="search"
        className="block w-full py-3 pl-12 pr-3 text-black bg-transparent focus:outline-none"
      />
    </div>
  );
}