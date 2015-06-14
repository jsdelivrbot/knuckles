// Build upon the IList standard from Sonic
// import {IList} from '../../sonic/dist/list.d';
// import Id from '../../sonic/dist/key.d';
// import {ILens} from './lenses';
// import _Fetchable from './fetchable';
import _Record from './record';
import _ObservableRecord from './observable_record';
import _MutableRecord from './mutable_record';
import _SimpleRecord from './simple_record';
// import _Knuckle          from './knuckle';
// import _RemoteRecord     from './remote_record';
// import _XHRRecord        from './xhr';
function Knuckles(key, value) {
    // if (arguments.length == 2) return Knuckles.set(key, value);
    // else return Knuckles.get(key);
}
;
var Knuckles;
(function (Knuckles) {
    Knuckles.Record = _Record;
    Knuckles.ObservableRecord = _ObservableRecord;
    Knuckles.MutableRecord = _MutableRecord;
    Knuckles.SimpleRecord = _SimpleRecord;
})(Knuckles || (Knuckles = {}));
module.exports = Knuckles;
