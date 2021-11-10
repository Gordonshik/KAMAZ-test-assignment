import axios from "axios"

export const ActionTypes = {
    ADD_MOVIES: "ADD_MOVIES",
    CHANGE_WORD: "CHANGE_WORD",
    CHANGE_ID: "CHANGE_ID"
}

export function addMovies(movies) {
    return {type: "ADD_MOVIES", payload: movies}
}

export function changeWord(word) {
    return {type: "CHANGE_WORD", payload: word}
}

export function changeId(id) {
    return {type: "CHANGE_ID", payload: id}
}

export const setData = word => async (dispatch) => {
    try {
        const response = await axios
        .get(`https://api.tvmaze.com/search/shows?q=${word}`)
        .then(res => res.data.sort((a, b) => {
            if (a.show.name < b.show.name) {
              return -1;
            }
            if (a.show.name > b.show.name) {
              return 1;
            }
            return 0;
          }))
        return dispatch(addMovies(response));
    } catch (error) {
        console.error(error)
    }
}