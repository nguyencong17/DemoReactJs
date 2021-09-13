import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/Input-Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { Avatar, LinearProgress, Typography } from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import { makeStyles, MuiThemeProvider, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import PasswordField from '../../../../components/form-controls/PasswordField';

const useStyles = makeStyles({
    root: {
        paddingTop: '32px',
    },
    avatar: {
        margin: '0 auto',
        backgroundColor: '#dc004e',
        marginTop: '15px',
    },
    title: {
        margin: '16px 0px 24px 0px',
        textAlign: 'center',
    },
    submit: {
        margin: '24px 0px 16px 0px',
    },
    progress: {
        position: 'absolute',
        top: '8px',
        left: 10,
        right: 10
    }

});

RegisterForm.propTypes = {
    onSubmit: PropTypes.func,
};

function RegisterForm(props) {

    const classes = useStyles();
    //validation form
    const schema = yup.object().shape({
        fullname: yup.string()
            .required("Please enter your fullname")
            .min(5, "Text very short, Please input longer")
            .test('Should has at least two words.', 'Please enter at least two words.', value => {
                return value.split(' ').length >= 2
            }),
        email: yup.string()
        .required("Please enter your email")
        .email("Please enter a valid email address"),
        password: yup.string()
            .required("Please enter your password")
            .min(6, "Password very short, Please input longer"),
        retypepassword: yup.string()
            .required("Please enter retype password")
            .oneOf([yup.ref('password')],'Password does not match'),
    });
    const form = useForm({
        defaultValues: {
            fullname: '',
            email: '',
            password: '',
            retypepassword: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = async (values) => {
        console.log("RegisterForm :", values);
        const { onSubmit } = props;
        if (onSubmit) {
            await onSubmit(values);
        }
        form.reset();
    };

    // láy isSubmitting để lấy trang thái đang Subimit để làm Loading
    const {isSubmitting} = form.formState; 
    return (
        <div>
            {isSubmitting && <LinearProgress className={classes.progress}/>}
            <Avatar className={classes.avatar}>
                <LockOutlined></LockOutlined>
            </Avatar>
            <Typography component="h3" variant="h5" className={classes.title}>
                Create An Account ?
            </Typography>
            <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
                <InputField name="fullname" label="Full Name" form={form} />
                <InputField name="email" label="Email" form={form} />
                <PasswordField name="password" label="Password" form={form} />
                <PasswordField name="retypepassword" label="Retype Password" form={form} />

                <Button disabled={isSubmitting} type="submit" variant="contained" color="primary" className={classes.submit} size="large" fullWidth>
                    Create An Account
                </Button>
            </form>

        </div>
    );
}

export default RegisterForm;
