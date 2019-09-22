import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';
import { submitUserAction } from '../../actions/user/UserAction';

const UserFormFunc = props => {
    const {handleSubmit} = props

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))}>
            <label>
                Name
            </label>
            <Field
                type="text"
                component="input"
                name="name"
            />
            <label>
                E-mail
            </label>
            <Field
                type="text"
                component="input"
                name="email"
            />
            <button
                type="submit"
                className="waves-effect waves-light btn-small blue"
            >
                Submit
            </button>
        </form>
    )
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)
 
const mapStatetoProps = state => ({
})

export default connect(mapStatetoProps, {submitUserAction})(UserForm)