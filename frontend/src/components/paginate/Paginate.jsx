import React from 'react'
import "./Paginate.css"
import { Link } from 'react-router-dom'
import {BsChevronDoubleLeft} from 'react-icons/bs'

const Paginate = ({ pages, page, isAdmin=false, keyword=''}) => {
  return pages > 1 && (
    <nav>
    <ul className="pagination">
    <Link to={`/page/1`} className='left'><BsChevronDoubleLeft/></Link>
      {[...Array(pages).keys()].map((x) => (
         <Link key={x + 1} to={keyword ? `/search/${keyword}/page/${x + 1}` : `/page/${x + 1}`}
         style={{textDecoration:"none"}}
         >
            <div className='paginate'>{x + 1}</div>
         </Link>
      ))}
      <Link to={`/page/${pages}`} className='right' style={{color:"black"}}><BsChevronDoubleLeft/></Link>
    </ul>
  </nav>
    )
  
}

export default Paginate