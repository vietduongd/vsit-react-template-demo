import React from 'react';
import { withTranslation } from 'react-i18next';
import { Route, Switch, withRouter } from "react-router-dom";
import { IBaseProps, IBaseState } from './@types/base/BaseComponet';
import './App.css';
import BaseComponent from './components/base/BaseComponent';
import { Forbidden } from './views/error/Forbidden';
import { PageNotFound } from './views/error/PageNotFound';
import { LayoutSalesForce } from './views/layouts/LayoutSalesForce';
import { Login } from './views/Login';

interface IAppProps extends IBaseProps {

}
interface IAppState extends IBaseState {
}

class AppComponent extends BaseComponent<IAppProps, IAppState> {

    onSaveData = () =>{

    }

    render() {
        return (
            <Switch>
                <Route path="/404" component={PageNotFound} />
                <Route path="/403" component={Forbidden} />
                <Route path="/login" component={Login} />
                <Route path="/callback" component={Login} />
                <Route path="/" component={LayoutSalesForce} />
                <Route component={PageNotFound} />
            </Switch>
        );
    }
}

export const App = withTranslation()(withRouter(AppComponent));


