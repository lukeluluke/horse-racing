import { combineReducers } from 'redux';
import CompetitionReducer from './competition';

export default combineReducers({
    competitionData: CompetitionReducer
});
