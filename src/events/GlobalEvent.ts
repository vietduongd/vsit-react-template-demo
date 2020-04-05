import BaseEvent from "./BaseEvent";

export default class GlobalEvent extends BaseEvent {
    public static Init = new GlobalEvent();
}