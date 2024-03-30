'use client'
import { addUserData, removeUserData, setIsVerified, setUserLoading } from '@/lib/redux/features/userSlice'
import { useSession } from 'next-auth/react'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

const InfoProvider = ({
    children,
  }: {
    children: React.ReactNode
  }) => {

    const {data:session,status}=useSession()

    const dispatch=useDispatch()

    useEffect(()=>{

        if(status=='loading'){
            dispatch(setUserLoading(true))
        }
        if(status=='authenticated'){
            dispatch(setUserLoading(false))
            dispatch(setIsVerified(true))
            const fetchData = async () => {
                try {
                    const response = await fetch(`http://localhost:3000/api/users/${session.user?.email}`);
                    const data = await response.json();
                    console.log(data);
                    dispatch(addUserData({email:data.email,firstName:data.firstName,lastName:data.lastName,mobile:data.mobile,role:data.role,specialist:data?.specialist?data.specialist:''}))

                } catch (error) {
                    console.error('Error fetching data:', error);
                }
            };
            fetchData();
        }
        if(status=='unauthenticated'){
            dispatch(removeUserData())
            dispatch(setUserLoading(false))
            dispatch(setIsVerified(false))
        }

    },[status])

  return (
    <div>{children}</div>
  )
}

export default InfoProvider