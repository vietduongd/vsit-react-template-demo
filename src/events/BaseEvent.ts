import { EventEmitter } from "events";

export default abstract class BaseEvent {
    protected readonly events: EventEmitter;
    constructor() {
        this.events = new EventEmitter();
    }

    public Subcribe<T>(event: string, callback: (value: T) => void): void {
        this.events.on(event, callback);
    }
    public Public<T>(event: string, value: T): void {
        this.events.emit(event, value);
    }
}