import { Component } from "react"
import { IBaseProps, IBaseState } from "../../@types/base/BaseComponet";

export default abstract class BaseComponent<T extends IBaseProps, K extends IBaseState> extends Component<T,K> {
}