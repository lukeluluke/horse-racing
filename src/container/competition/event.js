import {connect} from "react-redux";
import {
    getEvents,
    getVenueEvents
} from '../../action/competition';
import EventView from "../../component/competition/event";

function mapStateToProps({competitionData}) {
    const {
        competitions,
        venues,
        venueEvents
    } = competitionData;
    return {
        competitions, venues, venueEvents
    }
}

const actionCreator = {
    getEvents,
    getVenueEvents
};

export default connect(mapStateToProps, actionCreator)(EventView);

