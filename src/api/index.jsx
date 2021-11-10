// create function to get the data from the api axios
import axios from 'axios'

export const getData = async (word) => {
    try {
        const response = await axios
        .get(`https://api.tvmaze.com/search/shows?q=${word}`)
        .then(res => res.data)
        return response
    } catch(e) {
        console.log(e)
    }
}