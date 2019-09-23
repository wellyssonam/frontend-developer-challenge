import React, { Component } from 'react';
import '../styles/scss/CardData.scss';
import { withTranslation } from 'react-i18next';

class CardData extends Component {
    
    render() {
        const { t } = this.props;

        return (
            <div className="carddata">
                <div className="card-header">
                    <div className="card-image">
                        <img alt="" src={this.props.image} />
                    </div>
                </div>
                <div className="card-content">
                    <p className="name">{ this.props.name }</p>
                    <p className="description">{ this.props.description }</p>
                    <p className="old-price">{ t("carddata.text_from") }: R${ (this.props.oldPrice).toFixed(2) }</p>
                    <p className="price">{ t("carddata.text_for") }: R${ (this.props.price).toFixed(2) }</p>
                    <p className="installments">{ t("carddata.text_installments", { count: this.props.count, value: (this.props.value).toFixed(2) }) }</p>
                </div>
                <div className="card-footer">
                    <button className="button btn-first">
                        <span>{ t("carddata.btn_buy") }</span>
                        <i className="material-icons add-cart">add_shopping_cart</i>
                    </button>
                </div>
            </div>
        );
    }
}

CardData.defaultProps = {
    name: '',
    image: '',
    description: '',
    oldPrice: '0.00',
    price: '0.00',
    count: '0',
    value: '0.00'
}

export default withTranslation('common')(CardData);