import React from 'react';

const Card = ({data,search}) => {
  return (
    <div>
        <div className='card-wrapper'>
            {
                data.filter((item)=>{
                    return search.toLowerCase()===''?item:item.first_name.toLowerCase().includes(search);
                }) .map((curElem)=>{
                    const {id,first_name,last_name,email,gender,avatar,domain,available}=curElem;
                    return(
                    <>
                    <div className="card-box" key={id}>
                        <div className="card-img">
                            <img src={avatar} alt="" />
                        </div>
                        <div className="card-text">
                        <table>
                            <tr>
                                <td>First Name</td>
                                <td>{first_name}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{last_name}</td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>{email}</td>
                            </tr>
                            <tr>
                                <td>Gender</td>
                                <td>{gender}</td>
                            </tr>
                            <tr>
                                <td>Domain</td>
                                <td>{domain}</td>
                            </tr>
                            <tr>
                                <td>Available</td>
                                <td>{available?'Yes':'No'}</td>
                            </tr>
                        </table>
                        </div>
                    </div>
                    </>
                    );
                })
            }
        </div>
        
      
    </div>
  )
}

export default Card;
