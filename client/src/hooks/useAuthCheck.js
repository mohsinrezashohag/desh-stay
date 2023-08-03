import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import { setUserInfo } from '../rtk/features/user/userSlice';

const useAuthCheck = () => {
    const [isChecked, setIsChecked] = useState(false)
    const dispatch = useDispatch()
    const userInfo = localStorage.getItem('userInfo')

    useEffect(() => {
        if (userInfo) {
            setIsChecked(true)
            dispatch(setUserInfo(JSON.parse(userInfo)))
        }
    }, [dispatch, userInfo])


    return isChecked;
}

export default useAuthCheck;