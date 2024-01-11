import React from "react";
import { useState } from "react";

const SearchBar = ({ filterPhotosBySearch }) => {
  const [searchText, setSearchText] = useState('');

  const handleSearchText = (e) => {
    setSearchText(e.target.value);
  };

  const handleClick = (searchText) => {
    console.log('file name SearchBar.jsx: search click fired! searchText is:', searchText);
    filterPhotosBySearch(searchText.trim());
  }

  return (
    <>
      <label>
        Search Photos: <input type="text" name="searchBar" value={searchText} onChange={handleSearchText} />
      </label>
      <button type="submit" onClick={() => handleClick(searchText)} >Search</button>
    </>
  );

};

export default SearchBar;