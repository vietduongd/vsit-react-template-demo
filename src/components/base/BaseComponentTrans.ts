import { IBaseTransProps, IBaseState } from "../../@types/base/BaseComponet";
import { Component } from "react";

export default abstract class BaseComponentTrans<T extends IBaseTransProps, K extends IBaseState> extends Component<T,K> {
}