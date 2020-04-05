import { Layout } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter, Route, Redirect, Switch } from "react-router-dom";
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";
import BaseComponent from "../../components/base/BaseComponent";
import { MenuLeft } from "./Menu";
import { Spinner } from "../../components/Spinner";
import AuthorizeNetwork from "../../services/profiles/AuthorizeNetwork";
import ProfileNetwork from "../../services/profiles/ProfileNetwork";

interface ILayoutProps extends IBaseProps {

}
interface ILayoutState extends IBaseState {
    checked: boolean,
}

const { Header, Footer, Sider, Content } = Layout;

class LayoutView extends BaseComponent<ILayoutProps, ILayoutState>{
    constructor(props: ILayoutProps) {
        super(props);
        this.state = {
            checked: true,
        }
    }

    UNSAFE_componentWillMount() {
        this.validateToken().then(() => { }).catch(() => {
            this.props.history.push("/401");
        })
    }


    validateToken = async () => {
        let code = localStorage.getItem('code');
        let token = localStorage.getItem('access_token');
        let refresh_token = localStorage.getItem('refresh_token');
        let user = localStorage.getItem('user');
        let userLocal = JSON.parse(user || "{}") as any;
        if (!token) {
            let a = await AuthorizeNetwork.ConnectCodeGetTokenAsync(code || "");
            if (a.ok) {
                localStorage.setItem('id_token', a.data.data.tokenInfo.id_token);
                localStorage.setItem('access_token', a.data.data.tokenInfo.access_token);
                localStorage.setItem('refresh_token', a.data.data.tokenInfo.refresh_token);
                if (a.data.data.userInfo.fullname) {
                    let paramsData = a.data.data.userInfo;
                    await this.checkPermission(paramsData, 1);
                    localStorage.setItem('user', JSON.stringify(a.data.data.userInfo));
                    this.setState({
                        checked: false
                    })
                }
            }
            else {
                localStorage.clear();
                this.props.history.push("/login");
            }

        }
        else {
            let checkToken = await AuthorizeNetwork.ConnetTokenGetUserInfor();
            if (checkToken.ok) {
                let user = await ProfileNetwork.GetUserByProfileIdAsync(userLocal.userProfileId);
                if (user.data.data.items[0]) {
                    let userSave = await ProfileNetwork.GetProfileByIdAsync(user.data.data.items[0].id);
                    if (userSave.status === 200) {
                        let kq = userSave.data.data;
                        let paramsData = kq;
                        await this.checkPermission(paramsData, 2);
                        localStorage.setItem('user', JSON.stringify(kq));
                        this.setState({
                            checked: false
                        })

                    } else {
                        localStorage.clear();
                        this.props.history.push("/login")
                    }
                }
            }
        }
    }

    checkPermission = async (paramsData: any, type: number) => {
        let pos;
        if (type === 1) {
            pos = paramsData.positionId ? paramsData.positionId : null;
        } else {
            pos = paramsData.position.id ? paramsData.position.id : null;
        }
        let params = {
            limits: 'max',
            flike_profileIds: paramsData.id,
            flike_positionIds: pos,
            f_organizationId: paramsData.organizations && paramsData.organizations[0] && paramsData.organizations[0].organizationId
                ? paramsData.organizations[0].organizationId
                : null,
            flike_unitIds: paramsData.organizations && paramsData.organizations[0] && paramsData.organizations[0].unitId
                ? paramsData.organizations[0].unitId
                : null
        };

        let kq = await AuthorizeNetwork.CheckPermission(params);
        let per = kq.data.data.items.filter((item: any) => {
            return item !== null;
        });
        let permission = this.concatPermission(per);
        if (permission.accessPermissionsOfWeb.length > 0) {
            localStorage.setItem("perrmisson", JSON.stringify(permission));
            this.setState({
                checked: false
            })
        }
        else {
            this.props.history.push("/403");
        }
    }

    concatPermission = (arrayPer: any) => {
        let arrayPermission: {
            accessPermissionsOfWeb: any
        } = {
            accessPermissionsOfWeb: []
        };
        for (let i = 0; i < arrayPer.length; i++) {
            for (let j = 0; j < arrayPer[i].accessPermissionsOfWeb.length; j++) {
                arrayPermission.accessPermissionsOfWeb.push(arrayPer[i].accessPermissionsOfWeb[j]);
            }
        }
        return arrayPermission;
    }


    render() {
        if (this.state.checked) {
            return <Spinner></Spinner>
        }

        return (
            <Layout style={{ height: "100%" }}>
                <Header>Header</Header>
                <Layout >
                    <Sider style={{ height: "100%" }}>
                        <MenuLeft></MenuLeft>
                    </Sider>
                    <Content className="scroll-siderbar-custom">
                        <Switch>
                            <Route exact path={`/123`}> {"<Spinner></Spinner>"} </Route>
                            <Route exact path={`/456`}> <Spinner></Spinner> </Route>
                            <Route path={`/789`}> <Spinner></Spinner> </Route>
                            <Route exact path={`/`}> <Spinner></Spinner> </Route>
                            <Route>
                                <Redirect to="/404"></Redirect>
                            </Route>
                        </Switch>
                    </Content>
                </Layout>
            </Layout>
        )
    }
}

export const LayoutSalesForce = withTranslation()(withRouter(LayoutView));