import React from "react";
import { Pagination } from "react-bootstrap";

function CustomPagination({ currentPage, totalPages, handleChangePage }) {
  const handleClick = (page) => {
    console.log(currentPage, totalPages);
    handleChangePage(page);
  };

  return (
    <>
      <Pagination>
        {currentPage > 0 && <Pagination.First onClick={() => handleClick(0)} />}
        {currentPage > 0 && (
          <Pagination.Prev onClick={() => handleClick(currentPage - 1)} />
        )}
        {currentPage > 0 && (
          <Pagination.Item onClick={() => handleClick(currentPage - 1)}>
            {currentPage}
          </Pagination.Item>
        )}
        {<Pagination.Item active>{currentPage + 1}</Pagination.Item>}
        {totalPages > currentPage + 1 && (
          <Pagination.Item onClick={() => handleClick(currentPage + 1)}>
            {currentPage + 2}
          </Pagination.Item>
        )}
        {totalPages > currentPage + 1 && (
          <Pagination.Next onClick={() => handleClick(currentPage + 1)} />
        )}
        {totalPages > currentPage + 1 && (
          <Pagination.Last onClick={() => handleClick(totalPages - 1)} />
        )}
      </Pagination>
    </>
  );
}
export default CustomPagination;
