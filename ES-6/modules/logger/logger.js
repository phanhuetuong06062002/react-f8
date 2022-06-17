import {TYPE_LOG,TYPE_WARN,TYPE_ERROR} from '../constant.js';

function logger(log="default",TYPE_LOG){
    console[TYPE_LOG](log);
}
export default logger;