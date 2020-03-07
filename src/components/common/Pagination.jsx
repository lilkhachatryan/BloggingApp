import React from "react";
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const Pagination = ({postsPerPage = 10, totalPosts, paginate, currentPage}) => {
const pageNumbers = [];
const totalPages = Math.ceil(totalPosts/postsPerPage);

for ( let i = 1; i <= totalPages ; i++){
        pageNumbers.push(i);   
    }
    
return (
    <>
        <nav aria-label = "Page navigation example">
            <ul className = "pagination justify-content-center">
                <li className = {`page-item ${currentPage === 1 ? 'disabled' : ''}`} >
                    <Link   to={`/posts/${(currentPage>1)?(currentPage-1):paginate(1)}`}
                            onClick={()=> (currentPage>1)?paginate(currentPage-1):paginate(1)}
                            className = "page-link"  tabIndex="-1" aria-disabled="true" >
                       <FontAwesomeIcon icon={faChevronLeft} />
                    </Link>
                </li>
                    
                {pageNumbers.map(number => (
                <li key = {number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
                    <Link   to={`/posts/${number}`}
                            onClick= {() => paginate(number)} 
                            className = "page-link">
                        {number}
                    </Link>
                </li>
                ))}
                <li className = {`page-item ${currentPage === totalPages ? 'disabled' : ''}`} >
                    <Link   to={`/posts/${(currentPage<totalPages)?(currentPage+1):(totalPages)}`}
                            onClick={()=> (currentPage<totalPages)?paginate(currentPage+1):paginate(totalPages)}
                            className = "page-link"  tabIndex="-1" aria-disabled="true" >
                        <FontAwesomeIcon icon={faChevronRight } />
                    </Link>
                        
                    </li>
                </ul>
            </nav>
        </>
)
};

export default Pagination;
