import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../../userSlice';
import RegisterForm from '../RegisterForm';

Register.propTypes = {
    closeDialog: PropTypes.func,
};

function Register(props) {
    const dispatch = useDispatch();
    // Dùng NotiStaack để hiển thị thông báo
    const {enqueueSnackbar} = useSnackbar();

    const handleSubmit = async (values) => {
        try{

            values.username = values.email;
            const action = register(values);
            const resultAction = await dispatch(action);
            const user = unwrapResult(resultAction);
            console.log("New User: ", user);

            //đóng dialog khi thành công
            const {closeDialog} = props;
            if(closeDialog){
                closeDialog();
            }
            // Thông báo khi thành công 
            enqueueSnackbar('Register successfully!!!', { variant: 'success' });
        }catch(error){
            console.log("Failed register", error);
            enqueueSnackbar(error.message, { variant: 'error' });
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit}/>
        </div>
    );
}

export default Register;