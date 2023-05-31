import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handleClick = (page) => {
    if (onPageChange) {
      onPageChange(page);
    }
  };

  const renderPaginationItems = () => {
    const paginationItems = [];

    for (let page = 1; page <= totalPages; page++) {
      paginationItems.push(
        <li
          key={page}
          className={page === currentPage ? 'font-bold mr-1' : 'mr-1'}
          onClick={() => handleClick(page)}
        >
          {page}
        </li>
      );
    }

    return paginationItems;
  };

  return (
    <ul className="flex flex-row">
      {renderPaginationItems()}
    </ul>
  );
};

export default Pagination;
