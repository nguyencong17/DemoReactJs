import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@material-ui/core';
import { Controller } from 'react-hook-form';
// import { message } from 'antd';

InputField.propTypes = {
    form: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    label: PropTypes.string,
    disabled: PropTypes.bool,
};

function InputField(props) {
    const { form, name, label, disabled} = props;
    const {control} = form;
    // const hasError = formState.touched[name] && errors[name];
    return (
        <Controller 
        name={name} 
        control={control} 
        render={({ field: { onChange, onBlur, value, name }, fieldState: { invalid, error } }) => (
            <TextField
              margin="normal"
              variant="outlined"
              fullWidth
              label={label}
              error={invalid}
              helperText={error?.message}
              onChange={onChange}
              onBlur={onBlur}
              name={name}
              value={value}
              disabled={disabled}
            />
          )}
        />
    );
}

export default InputField;