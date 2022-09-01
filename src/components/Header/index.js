import React from 'react';
import Nav from '../Nav';

function Header({ currentPage, handlePageChange }) {

    return (
        <header className="flex-row px-1">
        <h2>
            <a data-testid="link" href="/">
                Sarah King Web Development Portfolio
            </a>
        </h2>
        <Nav
            currentPage={currentPage}
            handlePageChange={handlePageChange}
        />
        </header>
    )
}

export default Header;