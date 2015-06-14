import { default as Key } from '../node_modules/sonic/dist/key';
import { IList, List } from '../node_modules/sonic/dist/list';
export interface IRecord<V> {
    has(key: Key): Promise<boolean>;
    get(key: Key): Promise<V>;
}
export declare class Record<V> implements IRecord<V> {
    constructor(record?: IRecord<V>);
    has(key: Key): Promise<boolean>;
    get(key: Key): Promise<V>;
    zoom(key: Key): List<V>;
    static create<V>(record: IRecord<V>): Record<V>;
    static zoom<V>(record: IRecord<V>, key: Key): IList<V>;
}
export default Record;
