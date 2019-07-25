import {
    COMPETITION_SAVE_COMPETITIONS,
    COMPETITION_SAVE_COMPETITION_EVENTS,
    COMPETITION_SAVE_COMPETITION_VENUES,
    EVENT_SAVE_VENUE_EVENTS
} from "../../action/actionTypes";

const INITIAL_STATE = {
    competitions: [],
    venues: [],
    venueEvents: {}
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case COMPETITION_SAVE_COMPETITIONS:
            return {...state, competitions: action.payload};
        case COMPETITION_SAVE_COMPETITION_VENUES:
            return {...state, venues: action.payload};
        case COMPETITION_SAVE_COMPETITION_EVENTS:
            return {...state, event: action.payload};
        case EVENT_SAVE_VENUE_EVENTS:
            return {...state, venueEvents: action.payload};
        default:
            return state;
    }
}
