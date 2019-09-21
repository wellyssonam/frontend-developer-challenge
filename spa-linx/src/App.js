import React from 'react';
import SidenavTop from './components/SidenavTop';
import { Link } from 'react-router-dom';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import { useTranslation } from 'react-i18next';
import './styles/scss/App.scss';

function App() {
  const { t } = useTranslation('common');
  return (
    <div className="App">
      <header>
        <SidenavTop>
          <Link className="link" to="/"><button className="btn-link" type="button">{ t("app.sidenavtop.btn_linx") }</button></Link>
          <Link className="link" to="/"><button className="btn-link" type="button">{ t("app.sidenavtop.btn_help_algor") }</button></Link>
          <Link className="link" to="/"><button className="btn-link" type="button">{ t("app.sidenavtop.btn_products") }</button></Link>
          <Link className="link" to="/"><button className="btn-link" type="button">{ t("app.sidenavtop.btn_share") }</button></Link>
        </SidenavTop>
      </header>
      <main>
        <div className="container-fluid container-default">
          <div className="row">
              <div className="col s12 m12">
                <Switch>
                    <Route path="/" component={Home} exact={true} />
                    {/* <Route path="*" component={ErrorPage404} exact={true} /> */}
                </Switch>
              </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </div>
  );
}

export default App;
