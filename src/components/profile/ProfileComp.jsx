import React, { useEffect } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { userProfile } from '../../features/authSlice';
import LoadingComp from "../LoadingComp";

const ProfileComp = () => {

    const { token, isLoading } = useSelector(state => state.auth);
    const { username, email, role } = useSelector(state => state.auth);
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchUserData = async() => {
        try {
            if(token){
              dispatch(userProfile(token));
            }
        } catch (error) {
            console.log("error-profile", error);
        }
    }

    fetchUserData();
    },[])

    if(isLoading){
        return <LoadingComp />
    }

  return (
    <>
        <div>
            <h1 className='text-center text-3xl md:text-4xl mb-10 font-semibold'>Profile</h1>
        </div>
        <div className='md:w-[500px] h-[250px] shadow-md bg-white rounded-3xl text-2xl p-5 py-10'>
            <h3 className='text-lg'>Username: { username && username }</h3>
            <h3 className='my-5 text-lg'>email: { email && email }</h3>
            <h3 className='text-lg'>Role: { role && role }</h3>
        </div>
    </>
  )
}

export default ProfileComp