export const initialState = {
    search_query: null,
    movie: null,
    tv: null,
    person: null,
    media_cast: null,
    person_known_for: null,
    season_details: null,
    current_season: 1,
    user: null,
    watchlist: [],
};

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_MOVIE':
            return { ...state, movie: action.result };

        case 'SET_TV':
            return { ...state, tv: action.result };

        case 'SET_PERSON':
            return { ...state, person: action.result };

        case 'SET_SEASON_DETAILS':
            return { ...state, season_details: action.result };

        case 'SET_CURRENT_SEASON':
            return { ...state, current_season: action.result };

        case 'SET_PERSON_KNOWN_FOR':
            return { ...state, person_known_for: action.result };

        case 'SET_SEARCH_QUERY':
            return { ...state, search_query: action.result };

        case 'SET_CAST':
            return { ...state, media_cast: action.result };

        case 'SET_WATCHLIST': {
            return { ...state, watchlist: JSON.parse(localStorage.getItem('watchlist')) || [] };
        }

        case 'UPDATE_WATCHLIST': {
            let watchlist = JSON.parse(localStorage.getItem('watchlist')) || [];
            switch (action?.operation) {
                case 'ADD_TO_WATCHLIST': {
                    watchlist = [...watchlist, action?.media];
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));

                    return {
                        ...state,
                        watchlist,
                    };
                }

                case 'REMOVE_FROM_WATCHLIST': {
                    watchlist = watchlist.filter((media) => media?.id !== action?.media_id);
                    localStorage.setItem('watchlist', JSON.stringify(watchlist));

                    return {
                        ...state,
                        watchlist,
                    };
                }

                default:
                    return state;
            }
        }

        default:
            return state;
    }
};

export default reducer;
