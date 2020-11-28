import React, { useState } from 'react'

interface SearchBarProps {
    onSearch: (keyword: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = (props) => {
    const [keyword, setKeyword] = useState("");

    return (
        <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="search..." aria-label="search" aria-describedby="button-search" onChange={handleSearchStringChange} />
            <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-search" onClick={onSearch}>Search 🔎</button>
            </div>
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