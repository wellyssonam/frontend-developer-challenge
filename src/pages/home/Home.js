import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';
import '../../styles/scss/Home.scss';
import CardData from '../../components/CardData';
import UserForm from '../user/UserForm';

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            nextPage: 'https://frontend-intern-challenge-api.iurykrieger.now.sh/products?page=1',
            products: [],
            btnSpinner: false
        }
    }

    getListProductsApi = () => {
        console.log(this.props)
        fetch(this.state.nextPage)
        .then(response => response.json())
        .then(resJson => {
            this.setState({
                products: this.state.products.concat(resJson.products),
                nextPage: 'https://' + resJson.nextPage,
                btnSpinner: false
            })
        })
        .catch(err => console.error(err))
    }

    componentDidMount() {
        this.getListProductsApi()
    }

    moreProducts = () => {
        this.setState({ btnSpinner: true })
        this.getListProductsApi(this.state.nextPage)
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
                        <button className="button btn-default btn-more" onClick={ this.moreProducts }>
                            { this.state.btnSpinner ? (<i className="fa fa-spinner fa-spin"></i>) : (<i></i>)}
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