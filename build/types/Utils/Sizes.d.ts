/**
 * 屏幕尺寸
*/
import { EventEmitter } from 'pietile-eventemitter';
import { IEvents } from '../interfaces/IEvents';
declare type options = {
    dom: HTMLElement;
};
export default class Sizes {
    width: number;
    height: number;
    viewport: {
        width: number;
        height: number;
    };
    $sizeViewport: HTMLElement;
    emitter: EventEmitter<IEvents>;
    /**
     * Constructor
     */
    constructor(options: options);
    /**
     * 目前用于监听历史记录执行 historyChange
     * @param event 事件
     * @param fun 执行
     */
    $on<T extends keyof IEvents>(event: T, fun: () => void): void;
    /**
     * Resize
     */
    resize(): void;
}
export {};
