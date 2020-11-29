import React, { useState } from 'react'

interface SearchBarProps {
    onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [keyword, setKeyword] = useState("");

    return (
        <div className="search-bar">
            <input type="text" placeholder="search..." onChange={handleSearchStringChange} />
            <button type="button" id="button-search" onClick={onSearch}>🔎</button>
        </div>
    )

    function handleSearchStringChange(e: any) {
        setKeyword(e.target.value);
    }

    function onSearch() {
        props.onSearch(keyword);
    }
}

export default SearchBar