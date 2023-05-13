import React, { useEffect, useState } from 'react';
import userData from '../api/userData';
import Card from '../components/Card';
import Pagination from '../components/Pagination';

const UserDetails = () => {
    const [data,setData] = useState(userData);
    const [currentPage,setCurrentPage]= useState(1);
    const [postsPerPage,setPostsPerPage]=useState(20);

    const [search,setSearch]=useState('');

    const filterDomain=(domainCategory)=>{
        const updatedItem=data.filter((curElem)=>{
            return curElem.domain===domainCategory;
        });
        if(domainCategory==='IT' || domainCategory==='Finance' || domainCategory==='Sales' || domainCategory==='Marketing' || domainCategory==='Management' || domainCategory==='Business Development' || domainCategory==='UI Designing'){
            setData(updatedItem);
        }else{
            setData(userData);
        }
    }

    const filterGender=(genderCategory)=>{
        const updatedItem = data.filter((curElem)=>{
            return curElem.gender===genderCategory;
        })
        if(genderCategory==='Male' || genderCategory==='Female' || genderCategory==='Genderqueer' || genderCategory==='Genderfluid' || genderCategory==='Non-binary' || genderCategory==='Polygender' || genderCategory==='Bigender' || genderCategory==='Agender'){
            setData(updatedItem);
        }else{
            setData(userData);
        }
    }

    const filterAvailable=(availableCategory)=>{
        const updatedItem = data.filter((curElem)=>{
            return curElem.available===(availableCategory === 'true' ? true : false);
        })
        if(availableCategory==='true' || availableCategory==='false'){
            setData(updatedItem);
        }else{
            setData(userData);
        }
    }


    const lastPostIndex = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = data.slice(firstPostIndex,lastPostIndex);

  return (
    <div>
    <div className='container'>
      <div className='header'>
        <div>
        <input type='search' placeholder='Enter name' onChange={(e)=>setSearch(e.target.value)} /><button>Search</button>
        </div>
        <div style={{display:'flex',gap:'1rem'}} className='box'>
        <div>
            <span>Domain</span>
            <select name="domain" onChange={(e)=>filterDomain(e.target.value)}>
            <option value="All">All</option>
            <option value="Sales">Sales</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="IT">IT</option>
            <option value="Management">Management</option>
            <option value="UI Designing">UI Designing</option>
            <option value="Business Development">Business Development</option>
            </select>
        </div>
        <div>
        <span>Gender</span>
        <select name="gender" onChange={(e)=>filterGender(e.target.value)}>
            <option value="All">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Agender">Agender</option>
            <option value="Bigender">Bigender</option>
            <option value="Polygender">Polygender</option>
            <option value="Non-binary">Non-binary</option>
            <option value="Genderfluid">Genderfluid</option>
            <option value="Genderqueer">Genderqueer</option>
            </select>
        </div>
        <div>
        <span>Available</span>
        <select name="available" onChange={(e)=>filterAvailable(e.target.value)}>
            <option value="All">All</option>
            <option value="true">Yes</option>
            <option value="false">No</option>
        </select>
        </div>
        </div>
      </div>
      <Card data={currentPosts} search={search} />
      <Pagination totalPosts={data.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
    </div>
  )
}

export default UserDetails;
