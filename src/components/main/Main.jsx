import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../../reducers/repos-reducer';
import { createPages } from '../../utils/pageCreator';
import { getRepos } from '../actions/repos';
import './main.less';
import Repo from './repo/Repo';

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.repos.items);
    const isFetching = useSelector(state => state.repos.isFetching);
    const currentPage = useSelector(state => state.repos.currentPage);
    const totalCount = useSelector(state => state.repos.totalCount);
    const perPage = useSelector(state => state.repos.purePage);
    const [searchValue, setSearchValue] = useState("");
    const pagesCount = Math.ceil(totalCount/perPage);
    const pages = []
    createPages(pages, pagesCount, currentPage)

   

    useEffect(() => {
        dispatch(getRepos(searchValue, currentPage, perPage))
    }, [currentPage])

    function searchHandler() {
        dispatch(setCurrentPage(1))
        dispatch(getRepos(searchValue, currentPage, perPage))
    }

    return (
        <div className="main">
            <div className="search">
                <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className='search-input' />
                <button onClick={() => searchHandler()} className="search-btn">Search</button>
            </div>

            {
                isFetching ?
                    <div className='fetching'></div>
                    :
                    repos.map(repo =>
                        <Repo repo={repo} key={repo.id} />
                    )
            }

            <div className='pages'>
                {
                    pages.map((page, index) =>
                        <span
                            onClick={() => dispatch(setCurrentPage(page))}
                            className={currentPage === page ? 'current-page' : 'page'}
                            key={index}
                        >
                            {page}
                        </span>)
                }
            </div>
        </div>
    )
}

export default Main;