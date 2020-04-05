import BaseComponent from "../../components/base/BaseComponent";
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";
import { withTranslation } from "react-i18next";
import { withRouter, NavLink } from "react-router-dom";
import { Result, Button } from "antd";
import React from "react";

class ForbiddenView extends BaseComponent<IBaseProps, IBaseState>{
    constructor(props: IBaseProps) {
        super(props);

    }

    exrtra = () => {
        return (
            <div>
                <Button type="primary">{this.props.t("goBack")}</Button>
                <Button type="primary" onClick={() => { this.props.history.push("/") }}>{"Next "}</Button>
            </div>
        )
    }

    render() {
        return (
            <Result
                status="403"
                title="403"
                subTitle={this.props.t("errorPage:forbidden")}
                extra={this.exrtra()}
            />
        )
    }
}

export const Forbidden = withTranslation()(withRouter(ForbiddenView));