import axios from "axios";
import { getData } from '../api'

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

/*export const takeData = async() => async (dispatch) => {
    debugger
    try {
        debugger
      const data = await getData(value)
      const sortedArr = data.sort((a, b) => {
        if (a.show.name < b.show.name) {
          return -1;
        }
        if (a.show.name > b.show.name) {
          return 1;
        }
        return 0;
      })
        return dispatch(addMovies(sortedArr));
    } catch (error) {
        console.error(error)
    }
};*/

export const setData = () => async (dispatch) => {
        try {
            const response = await axios.get('https://reqres.in/api/users?per_page=12')
            return dispatch(getData(response.data.data));
        } catch (error) {
            console.error(error)
        }
    };