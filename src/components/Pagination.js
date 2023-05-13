import React from 'react'

const Pagination = ({totalPosts,postsPerPage,setCurrentPage,currentPage}) => {
    let pages = [];
    for(let i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
        pages.push(i);
    }
  return (
    <>
      <div>
        {
            pages.map((page,index)=>{
                return <button key={index} onClick={()=>setCurrentPage(page)} className={page==currentPage?'active':''}>{page}</button>
            })
        }
        <button onClick={()=>setCurrentPage(currentPage-1)} style={{backgroundColor:'green'}}>prev</button>
        <button onClick={()=>setCurrentPage(currentPage+1)} style={{backgroundColor:'green'}}>next</button>
      </div>
    </>
  )
}

export default Pagination;
