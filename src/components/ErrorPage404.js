import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../styles/scss/ErrorPage404.scss'

class ErrorPage404 extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="error-page-404">
                <h1 className="error-number">404</h1>
                <p className="error-message">{ t("errorpage404.text") }</p>
            </div>
        );
    }
}

export default withTranslation('common')(ErrorPage404);