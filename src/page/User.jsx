import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const User = () => {
    const {id} = useParams();
    const [user, setrUser]=useState(null)
    const [loading, setLoading]=useState(true)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => {
            console.log(res)
            setrUser(res.data);
            setLoading(false);
        })
    }, [id])
    return (
        <div className='userWrap'>
            <h2>user</h2>
            {
                loading ? (<div>loding...</div>) : (
                <div className='userDetail'>
                    <div>{user.name}</div>
                    <div>{user.email}</div>
                    <div>{user.phone}</div>
                    <div>{user.website}</div>
                </div>
                )
            }
        </div>
    );
};

export default User;