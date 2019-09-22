import React, { Component } from 'react';
import '../styles/scss/FooterPage.scss';
import { withTranslation } from 'react-i18next';

class FooterPage extends Component {
    render() {
        const { t } = this.props;

        return (
            <div className="footer-page">
                <div className="content">
                    <div><p className="text">{ t('footerpage.text_line1') }</p></div>
                    <div><p className="text">{ t('footerpage.text_line2') }</p></div>
                    <div><p className="text">{ t('footerpage.text_line3') }</p></div>
                </div>
            </div>
        );
    }
}

export default withTranslation('common')(FooterPage);