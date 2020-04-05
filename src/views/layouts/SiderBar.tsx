import React from "react"
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";
import BaseComponent from "../../components/base/BaseComponent";

interface ILayoutProps extends IBaseProps {

}
interface ILayoutState extends IBaseState {

}

export default class LayoutView extends BaseComponent<ILayoutProps, ILayoutState>{

    constructor(props: ILayoutProps) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}