import React from "react";

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    const totalPages = Math.ceil(totalPosts/postsPerPage);
    for ( let i = 1; i <= totalPages ; i++){
        pageNumbers.push(i);   
    }
    
    return (
        <>
            <nav aria-label = "Page navigation example">
                <ul className = "pagination justify-content-center">
                    <li className = {`page-item ${currentPage === 1 ? 'disabled' : ''}`} onClick = {()=> (currentPage>1)?paginate(currentPage-1):paginate(1)}>
                        <a className = "page-link"  tabIndex="-1" aria-disabled="true">Previous</a>
                    </li>
                    {pageNumbers.map(number => (
                        <li key = {number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                            <a   onClick = {() => paginate(number)}    className = "page-link" >
                                {number}
                            </a>
                        </li>
                    ))}
                    <li className = {`page-item ${currentPage === totalPages ? 'disabled' : ''}`} onClick={()=> (currentPage<totalPages)?paginate(currentPage+1):paginate(totalPages)} >
                        <a className="page-link" >Next</a>
                    </li>
                </ul>
            </nav>
        </>
    )
};

export default Pagination;
