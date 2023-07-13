import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";
import "../CSS/components/MyPagination.css";

const MyPagination = ({ count, limit, onActiveChange, onActivePerPageChange }) => {
  const [active, setActive] = useState(1);
  const [activePerPage, setActivePerPage] = useState(3);

  const handleActiveChange = (number) => {
    setActive(number);
    onActiveChange(number); // Call the callback function with the updated value
  };

  const handlePerPageChange = (number) => {
    setActivePerPage(number);
    onActivePerPageChange(number);
    // Perform any action when the per-page value changes
  };

  const perPageValues = [3, 5, 10, 20]; // Array of per-page values

  const perPageItems = perPageValues.map((value) => (
    <Pagination.Item
      key={value}
      active={activePerPage === value}
      onClick={() => handlePerPageChange(value)}
    >
      {value}
    </Pagination.Item>
  ));

  let items = [];
  for (let number = 1; number <= Math.ceil(count / limit); number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={active === number}
        onClick={() => handleActiveChange(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="d-flex">
      <Pagination className="my-pagination fit-content">{items}</Pagination>
      <Pagination className="per-page fit-content">
        {/* Items Per Page */}
        {perPageItems}
      </Pagination>
    </div>
  );
};

export default MyPagination;
