import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../../components/form-controls/Input-Field';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

function TodoForm(props) {
    const schema = yup.object().shape({
        title: yup.string()
            .required("Hay nhap du thong tin")
            .min(5,"Title qua ngan"),
      });
    const form = useForm({
        defaultValues: {
            title: '',
        },
        resolver: yupResolver(schema),
    });

    const handleSubmit = (values) => {
        console.log("TodoForm :", values);
        const {onSubmit} = props;
        if(onSubmit){
            onSubmit(values);
        }
        form.reset();
    };
    return (
        <div>
            <form action="" onSubmit={form.handleSubmit(handleSubmit)}>
            <InputField name="title" label="Todo" form={form}/>
            </form>
            
        </div>
    );
}

export default TodoForm;
