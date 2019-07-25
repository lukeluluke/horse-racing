import {
    COMPETITION_SAVE_COMPETITIONS,
    COMPETITION_SAVE_COMPETITION_VENUES, EVENT_SAVE_VENUE_EVENTS
} from "../actionTypes";
import CompetitionService from '../../service/competitionService';
import store from '../../store';
export const competitionSaveCompetitions = (competition) => ({
   type: COMPETITION_SAVE_COMPETITIONS,
   payload: competition
});

export const competitionSaveCompetitionVenues = (venues) => ({
   type: COMPETITION_SAVE_COMPETITION_VENUES,
   payload: venues
});

export const eventSaveVenueEvents = (venueEvents) => ({
    type: EVENT_SAVE_VENUE_EVENTS,
    payload: venueEvents
});


/**
 * Get competition list
 * @param classIds
 * @param detailsLevel
 * @param numMarkets
 * @param venueId
 * @returns {Function}
 */
export const getCompetition = (classIds, detailsLevel, numMarkets, venueId) => {
   return (dispatch) => {
      const params = {
         classIds: classIds,
         detailsLevel: detailsLevel,
         numMarkets: numMarkets
      };
      CompetitionService.getCompetition(params)
          .then(
              (response) => {
                 if (response) {
                     const venues = response.competitionList.map(function (competition) {
                         return {
                             id: competition.id,
                             name: competition.name,
                             className: competition.className,
                             region: competition.region,
                             numEvents: competition.eventList.length
                         }
                     });
                    dispatch(competitionSaveCompetitions(response.competitionList));
                    dispatch(competitionSaveCompetitionVenues(venues));
                 }
              }
          )
   }
};

/**
 * Get event, this function need to update endpoint in the future
 * @param classIds
 * @param detailsLevel
 * @param numMarkets
 * @param venueId
 * @returns {Function}
 */
export const getEvents = (classIds, detailsLevel, numMarkets, venueId) => {
    return (dispatch) => {
        const params = {
            classIds: classIds,
            detailsLevel: detailsLevel,
            numMarkets: numMarkets
        };
        CompetitionService.getVenueEvents(params)
            .then(
                (response) => {
                    if (response) {
                        const venues = response.competitionList.map(function (competition) {
                            return {
                                id: competition.id,
                                name: competition.name,
                                className: competition.className,
                                region: competition.region,
                                numEvents: competition.eventList.length
                            }
                        });
                        dispatch(competitionSaveCompetitions(response.competitionList));
                        dispatch(competitionSaveCompetitionVenues(venues));
                        if (venueId !== undefined) {
                            dispatch(eventSaveVenueEvents(filterVenueEvents(response.competitionList, venueId)));
                        }
                    }
                }
            )
    }
};

/**
 * Get venue events from local
 * @param venueId
 * @returns {Function}
 */
export const getVenueEvents = (venueId) => {
    const competitions = store.getState().competitionData.competitions;
    return (dispatch) => {
        dispatch(eventSaveVenueEvents(filterVenueEvents(competitions, venueId)));
    }
};

function filterVenueEvents(competitions, venueId) {
    return  competitions.find(function (competition) {
        return competition.id === parseInt(venueId);
    });
}
