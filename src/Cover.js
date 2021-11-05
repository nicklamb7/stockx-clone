import React from 'react';
import './Cover.css';
import SearchIcon from '@material-ui/icons/Search';

function Cover() {
    return (
        <section className="cover">
            <h1><span className="top-text">Buy &amp; Sell<br /></span></h1>
            <h1 className="highlighted-text">Authentic Collectibles</h1> 
            <form>
                <SearchIcon />
                <input placeholder="Search..." type="text" name="search" id="search-bar" />
            </form>
        </section>
    )
}

export default Cover;
