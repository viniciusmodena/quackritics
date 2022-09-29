import ReactPaginate from "react-paginate";
import arrow from "../../assets/pagination-arrow.svg";

import "./styles.css";

const Pagination = ({ totalPages, request, onClick, id }) => {
  const handlePageClick = (event) => {
    if (id) {
      request(id, event.selected + 1);
    } else {
      request(event.selected + 1);
    }
  };

  return (
    <ReactPaginate
      breakLabel="..."
      nextLabel=" >"
      onPageChange={handlePageClick}
      pageRangeDisplayed={2}
      marginPagesDisplayed={1}
      pageCount={totalPages}
      previousLabel="<"
      renderOnZeroPageCount={null}
      breakClassName="paginate-dots"
      breakLinkClassName="paginate-dots--link"
      containerClassName="paginate-container"
      pageClassName="paginate-page"
      pageLinkClassName="paginate-link"
      activeClassName="paginate-active-page"
      previousClassName="paginate-previous"
      nextClassName="paginate-next"
      onClick={onClick}
    />
  );
};

export default Pagination;
