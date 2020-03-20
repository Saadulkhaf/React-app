import React from 'react';
import { Field, reduxForm } from 'redux-form';
 
class StreamForm extends React.Component {
    renderError(meta) {
        if(meta.touched && meta.error) {
            return(
                <div className="ui error message">
                    <div className="error">{meta.error}</div>
                </div>
            )
        }
    }

    renderInput = (formProps) => {
        return (
            <div>
            <label>{formProps.label}</label>
            <input {...formProps.input} autoComplete= "off"/>
            {this.renderError(formProps.meta)}
            </div>
            
        );
    };

    onSubmit = (formValues) =>{
        this.props.onSubmit(formValues);
    }

    render() {
        // console.log(this.props);
        return (
            <form onSubmit={this.props.handleSubmit(this.onSubmit)}  className="ui form error">
                <Field name="title" component={this.renderInput} label="Title"/>
                <Field name="description" component={this.renderInput} label="Description"/>
                <button className="ui button">Submit</button>
            </form>
            
        );
    }
}

const validate = (formValues) => {
    const errors = {};
    if(!formValues.title) {
        errors.title = "Please Enter Title!"
    }
    if(!formValues.description) {
        errors.description = "Please Enter Description!"
    }
    return errors;
};

 export default reduxForm({
    form: 'StreamForm',
    validate: validate
})(StreamForm);
