import { Button, Result } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";
import BaseComponent from "../../components/base/BaseComponent";

class PageNotFoundView extends BaseComponent<IBaseProps, IBaseState>{
    constructor(props: IBaseProps) {
        super(props);

    }

    exrtra = () => {
        return (
            <div>
                <Button type="primary" onClick={() => { this.props.history.goBack() }}>{this.props.t("goBack")}</Button>
                <Button type="primary" onClick={() => { this.props.history.push("/quan-tri") }}>{"Next "}</Button>
            </div>
        )
    }

    render() {
        return (
            <Result
                status="404"
                title="404"
                subTitle={this.props.t("errorPage:notfound")}
                extra={this.exrtra()}
            />
        )
    }
}

export const PageNotFound = withTranslation()(withRouter(PageNotFoundView));