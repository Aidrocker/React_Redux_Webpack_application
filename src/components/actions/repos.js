import axios from 'axios';
import { setIsFetching, setRepos } from '../../reducers/repos-reducer'


export const getRepos = (searchQuery = 'stars:%3E1', current, perPage) => {
    if (searchQuery === '') {
        searchQuery = 'stars:%3E1'
    }

    return async (dispatch) => {
        try {
            dispatch(setIsFetching(true))
            const responce = await axios.get(`https://api.github.com/search/repositories?q=${searchQuery}&sort=stars&per_page=${perPage}&page=${current}`);
            dispatch(setRepos(responce.data))
        } catch (e){
            dispatch(setErrorFetch(true))
            dispatch(setIsFetching(false))
            setTimeout(() => {
                setErrorFetch(false)
            }, 2000)
        }
      
    }
}

export const getCurrentRepo = async (username, reponame, setRepo) => {
    const responce = await axios.get(`https://api.github.com/repos/${username}/${reponame}`);
    setRepo(responce.data)
}

export const getContrtRepo = async (username, reponame, setContr) => {
    const responce = await axios.get(`https://api.github.com/repos/${username}/${reponame}/contributors?page=1&per_page=10`);
    setContr(responce.data)
}