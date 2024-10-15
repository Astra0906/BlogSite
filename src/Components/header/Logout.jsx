import React from 'react';
import { useDispatch } from 'react-redux';
import authservice from '../../appwrite/auth';
import { logout } from '../../store/authSlice';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LogoutBtn = ({ onLogout }) => {
    const dispatch = useDispatch();

    const handleLogout = async () => {
        try {
            await authservice.logout();
            dispatch(logout());
            toast.success('Successfully logged out!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        } catch (error) {
            toast.error('Logout failed. Please try again.', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                theme: "dark",
            });
        }
    };

    return (
        <>
            <button
                onClick={handleLogout}
                className="text-white bg-transparent border border-gray-500 px-3 py-1 rounded-md hover:text-black hover:bg-white transition duration-300"
            >
                Logout
            </button>
            <ToastContainer />
        </>
    );
};

export default LogoutBtn;
