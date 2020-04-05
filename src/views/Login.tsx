import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { IBaseProps, IBaseState } from "../@types/base/BaseComponet";
import BaseComponent from "../components/base/BaseComponent";
import { Spinner } from "../components/Spinner";
import AuthorizeNetwork from "../services/profiles/AuthorizeNetwork";

class LoginView extends BaseComponent<IBaseProps, IBaseState>{
    constructor(props: IBaseProps) {
        super(props);
    }

    componentWillMount() {
        this.getCode();
    }

    getCode = () => {
        if (this.props.location.search.indexOf("?code=") > -1 && this.props.location.pathname === "/callback") {
            let a = this.props.location.search.substring(6);
            let b = a.indexOf("&scope");
            let token: string;
            token = a.substring(0, b);
            localStorage.setItem("code", token);
            this.props.history.push("/");
        } else {
            if (!localStorage.getItem("code")) {
                this.checkLogin();
            }
        }
    }

    checkLogin = async () => {
        try {
            let access_token = localStorage.getItem("access_token");
            if (access_token) {
                this.props.history.push("/");
            } else {
                let urlRedirect = await AuthorizeNetwork.CreateUrlRedirectAsync("salesforce");
               if(urlRedirect.ok){
                window.location.href = urlRedirect.data.data.url;
               }
            }
        } catch (error) {
            this.props.history.push("/403");
        }
    };

    render() {
        return (
            <Spinner />
        )
    }
}

export const Login = withTranslation()(withRouter(LoginView));