import React, { Component } from 'react';
import '../styles/scss/SidenavTop.scss';
import { withTranslation } from 'react-i18next';

class SidenavTop extends Component {
    render() {
        const { t } = this.props;
        return (
            <div className="sidenav-top">
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