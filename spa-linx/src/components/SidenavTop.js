import React, { Component } from 'react';
import '../styles/scss/SidenavTop.scss';
import { withTranslation } from 'react-i18next';

class SidenavTop extends Component {
    constructor(props) {
        super(props)
        this.state = {
            changeLangTo: 'en',
            currentLang: 'pt_br'
        }
    }

    changeLanguage = () => {
        const { i18n } = this.props;
        let changeLangTo = this.state.currentLang
        let currentLang = this.state.changeLangTo
        i18n.changeLanguage(this.state.changeLangTo)
        this.setState({
            changeLangTo: changeLangTo,
            currentLang: currentLang
        })
    }

    render() {
        const { t } = this.props;

        return (
            <div className="sidenav-top">
                <button className="btn-link btn-lang" type="button" onClick={this.changeLanguage}>
                    { this.state.changeLangTo }
                </button>
                <div className="presentation">
                    <p className="line-1">{ t('sidenavtop.presentation.line1') }</p>
                    <p className="line-2">{ t('sidenavtop.presentation.line2') }</p>
                    <p className="line-3">{ t('sidenavtop.presentation.line3') }</p>
                </div>
                <nav className="sidenav-top-nav">
                    { this.props.children }
                </nav>
            </div>
        );
    }
}

export default withTranslation('common')(SidenavTop);