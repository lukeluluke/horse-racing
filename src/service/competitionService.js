import NetworkHelp from '../helper/NetworkHelper';
const GET_COMPETITION_URL = 'https://adsfeed.sportsbet.com.au/v1/sportsbook/competitions';

class CompetitionService {
    async getCompetition(param) {
        return await NetworkHelp.get(GET_COMPETITION_URL, param);
    }

    async getVenueEvents(param) {
        return await NetworkHelp.get(GET_COMPETITION_URL, param);
    }
}


export default new CompetitionService();
