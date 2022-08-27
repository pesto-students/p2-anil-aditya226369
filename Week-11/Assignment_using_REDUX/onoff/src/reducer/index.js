import onOff from './onOff';
import stepCount from './stepCount';
import {combineReducers} from 'redux';

const rootRender = combineReducers({onOff,stepCount});

export default rootRender;