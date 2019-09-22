import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../../styles/scss/Home.scss';
import CardData from '../../components/CardData';
import UserForm from '../user/UserForm';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            products: []
        }
    }

    componentDidMount() {
        console.log('>>>> mounted')
        this.setState({
            products: [
                {
                    "id": 0,
                    "name": "Product Number 0",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
                    "oldPrice": 397,
                    "price": 381,
                    "description": "Product long description number 0 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 38.1
                    }
                },
                {
                    "id": 1,
                    "name": "Product Number 1",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6829158",
                    "oldPrice": 179,
                    "price": 164,
                    "description": "Product long description number 1 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 16.4
                    }
                },
                {
                    "id": 2,
                    "name": "Product Number 2",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6747399",
                    "oldPrice": 220,
                    "price": 189,
                    "description": "Product long description number 2 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 18.9
                    }
                },
                {
                    "id": 3,
                    "name": "Product Number 3",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6124117",
                    "oldPrice": 267,
                    "price": 237,
                    "description": "Product long description number 3 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 23.7
                    }
                },
                {
                    "id": 4,
                    "name": "Product Number 4",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=5783178",
                    "oldPrice": 288,
                    "price": 261,
                    "description": "Product long description number 4 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 26.1
                    }
                },
                {
                    "id": 5,
                    "name": "Product Number 5",
                    "image": "//imagens.pontofrio.com.br/Control/ArquivoExibir.aspx?IdArquivo=6670538",
                    "oldPrice": 390,
                    "price": 367,
                    "description": "Product long description number 5 just to make more than one like of text.",
                    "installments": {
                        "count": 10,
                        "value": 36.7
                    }
                }
            ]
        })
    }

    render() {
        const { t } = this.props;

        return (
            <div className="home">
                <section className="products">
                    <h2 className="title">{ t('homepage.title') }</h2>
                    <div className="row">
                    {
                        this.state.products.map((item, index) => {
                            return (
                                <div className="col s12 m4 l4 xl3" key={index}>
                                    <CardData
                                        name={item.name}
                                        image={item.image}
                                        description={item.description}
                                        oldPrice={item.oldPrice}
                                        price={item.price}
                                        count={item.installments.count}
                                        value={item.installments.value}
                                    ></CardData>
                                </div>
                            );
                        })
                    }
                    </div>
                    <div style={{ textAlign: 'center' }}>
                        <button className="button btn-default btn-more">
                            <span>{ t("homepage.btn_more") }</span>
                        </button>
                    </div>
                </section>
                <section className="share">
                    <h2 className="title">{ t('homepage.share.title2') }</h2>
                    <p className="line1">{ t('homepage.share.line1') }</p>
                    <UserForm></UserForm>
                </section>
            </div>
        );
    }
}

export default withTranslation('common')(Home);