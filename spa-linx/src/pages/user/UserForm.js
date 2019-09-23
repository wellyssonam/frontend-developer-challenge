import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { submitUserAction } from '../../actions/user/UserAction';

const UserFormFunc = props => {
    const {handleSubmit} = props
    const { t } = useTranslation('common');

    const submit = (data, submitUserAction) => {
        submitUserAction(data)
    }

    return (
        <form className="user-form" onSubmit={handleSubmit((fields) => submit(fields, submitUserAction))} noValidate>
            <div className="row">
                <div className="col s12 m6">
                    <div className="field">
                        <label>
                            { t("homepage.userform.label_name") }
                        </label>
                        <Field
                            type="text"
                            component="input"
                            name="name"
                        />
                    </div>
                </div>
                <div className="col s12 m6">
                    <div className="field">
                        <label>
                            { t("homepage.userform.label_email") }
                        </label>
                        <Field
                            type="text"
                            component="input"
                            name="email"
                        />
                    </div>
                </div>
                <div style={{ textAlign: "center" }}>
                    <button
                        type="submit"
                        className="button btn-default btn-more"
                        style={{ marginTop: "42px" }}
                    >
                        <span>{ t("homepage.userform.brn_send_now") }</span>
                    </button>
                </div>
            </div>
        </form>
    )
}

const UserForm = (reduxForm({
    form: 'formUser'
}))(UserFormFunc)
 
const mapStatetoProps = state => ({
})

export default connect(mapStatetoProps, {submitUserAction})(UserForm)