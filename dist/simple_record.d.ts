import Key from '../node_modules/sonic/dist/key';
import { IRecordObserver } from './observable_record';
import { MutableRecord } from './mutable_record';
import { ISubscription, Subject } from '../node_modules/sonic/dist/observable';
export default class SimpleRecord<V> extends MutableRecord<V> {
    private _object;
    protected _subject: Subject<IRecordObserver>;
    constructor(object: {
        [key: string]: V;
    });
    has(key: Key): boolean;
    get(key: Key): V;
    observe(observer: IRecordObserver): ISubscription;
    set(key: Key, value: V): void;
    delete(key: Key): void;
}