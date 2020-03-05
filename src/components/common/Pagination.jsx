import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers=[];
    for (let i=1; i<= Math.ceil(totalPosts/postsPerPage); i++){
        pageNumbers.push(i);   
    }
    
    return (
        <>
            <nav aria-label="Page navigation example">
                <ul className="pagination justify-content-center">
                    <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#" tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    {pageNumbers.map(number => (
                        <li key = {number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                            <a onClick={() => paginate(number)}  className="page-link">
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className={`page-item ${currentPage === totalPosts - 1 ? 'disabled' : ''}`}>
                        <a className="page-link" href="#">Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Pagination;
