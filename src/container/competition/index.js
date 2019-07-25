import {connect} from "react-redux";
import CompetitionView from "../../component/competition/competition";
import {
    getCompetition
} from '../../action/competition';

function mapStateToProps({competitionData}) {
    const {
        competitions,
        venues
    } = competitionData;
    return {
        competitions, venues
    }
}

const actionCreator = {
    getCompetition
};

export default connect(mapStateToProps, actionCreator)(CompetitionView);

