import { Row, Spin } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { IBaseState, IBaseTransProps } from "../@types/base/BaseComponet";
import BaseComponentTrans from "./base/BaseComponentTrans";


class SpinnerView extends BaseComponentTrans<IBaseTransProps, IBaseState> {
    render() {
        return (
            <Row style={{ height: "100%", width: "100%", alignItems: "center", justifyContent: "center", display: "flex" }} >
                <Spin size="large" tip={this.props.t('spinner:wait')} />
            </Row>
        )
    }
}

export const Spinner = withTranslation()(SpinnerView)