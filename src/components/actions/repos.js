import axios from 'axios';
import {setIsFetching, setRepos} from '../../reducers/repos-reducer'


export const getRepos = (searchQuery='stars:%3E1', current, perPage) => {
    if(searchQuery === ''){
        searchQuery = 'stars:%3E1'
    }
    return async (dispatch) => {
        dispatch(setIsFetching(true))
        const responce = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${current}`);
        dispatch(setRepos(responce.data))
    }
}