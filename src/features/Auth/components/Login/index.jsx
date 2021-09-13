import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../userSlice';
import LoginForm from '../LoginForm';

Login.propTypes = {
    closeDialog: PropTypes.func,
};

function Login(props) {
    const dispatch = useDispatch();
    // Dùng NotiStaack để hiển thị thông báo
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        try{

            values.username = values.email;
            const action = login(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("User Login: ", user);

            //đóng dialog khi thành công
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog();
            }
        }catch(error){
            console.log("Failed register", error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Login;