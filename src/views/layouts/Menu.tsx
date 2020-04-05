import { Menu } from "antd";
import React from "react";
import { withTranslation } from "react-i18next";
import { withRouter } from "react-router-dom";
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";
import BaseComponent from "../../components/base/BaseComponent";

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

interface ILayoutProps extends IBaseProps {

}
interface ILayoutState extends IBaseState {
    group: string
}

class MenuView extends BaseComponent<ILayoutProps, ILayoutState>{

    constructor(props: ILayoutProps) {
        super(props);
        this.state = {
            group: "sub1"
        }
        console.log(this.props.match.url);
        
    }


    chooseSiderBar = (value: string, group: string) => {
        this.props.history.push(value, { group });
    }

    render() {
        return (
            <Menu
                defaultSelectedKeys={[this.props.location.pathname]}
                defaultOpenKeys={[this.state.group]}
                mode="inline"
                style={{ height: "100%", overflowY: "auto", overflowX: "hidden" }}
                className="scroll-siderbar-custom"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <span>Navigation One</span>
                        </span>
                    }
                >
                    <MenuItemGroup key="g1" title="Item 1">
                        <Menu.Item key="/123" onClick={() => this.chooseSiderBar("/123", "sub1")}>Option 1</Menu.Item>
                        <Menu.Item key="/456" onClick={() => this.chooseSiderBar("/456", "sub1")}>Option 2</Menu.Item>
                    </MenuItemGroup>
                    <MenuItemGroup key="g2" title="Item 2">
                        <Menu.Item key="3">Option 3</Menu.Item>
                        <Menu.Item key="4">Option 4</Menu.Item>
                    </MenuItemGroup>
                </SubMenu>
                <SubMenu
                    key="sub2"
                    title={
                        <span>
                            <span>Navigation Two</span>
                        </span>
                    }
                >
                    <Menu.Item key="5">Option 5</Menu.Item>
                    <Menu.Item key="6">Option 6</Menu.Item>
                    <SubMenu key="sub3" title="Submenu">
                        <Menu.Item key="7">Option 7</Menu.Item>
                        <Menu.Item key="8">Option 8</Menu.Item>
                    </SubMenu>
                </SubMenu>
                <SubMenu
                    key="sub4"
                    title={
                        <span>
                            <span>Navigation Three</span>
                        </span>
                    }
                >
                    <Menu.Item key="9">Option 9</Menu.Item>
                    <Menu.Item key="10">Option 10</Menu.Item>
                    <Menu.Item key="11">Option 11</Menu.Item>
                    <Menu.Item key="12">Option 12</Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export const MenuLeft = withTranslation()(withRouter(MenuView));