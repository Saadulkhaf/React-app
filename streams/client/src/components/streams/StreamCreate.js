import React from 'react';
import { Field, reduxForm } from 'redux-form';

class StreamCreate extends React.Component {
    renderInput (formProps){
        return (
            <div>
            <label>{formProps.label}</label>
            <input {...formProps.input} />
            </div>
            
        )
    }

    render() {
        console.log(this.props);
        return (
            <form className="ui form">
                <Field name="title" component={this.renderInput} label="Title"/>
                <Field name="description" component={this.renderInput} label="Description"/>
            </form>
            
        );
    }
}

export default reduxForm({
    form: 'StreamCreate'
})(StreamCreate);