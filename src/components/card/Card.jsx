import React, { useEffect, useState } from 'react';
import './card.less'
import { useParams } from 'react-router-dom';
import {getContrtRepo, getCurrentRepo} from '../actions/repos'


const Card = (props) => {
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner: {}})
    const [contr, setContr] = useState([])

    useEffect(() => {
        getCurrentRepo(username, reponame, setRepo)
        getContrtRepo(username, reponame, setContr)
    }, [])
    return(
        <div>
            <button onClick={() => props.history.goBack()} className="back-btn">
                Back
            </button>
            <div className="card">
                <img src={repo.owner.avatar_url} alt=""/>
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
           {
               contr.map((elem, index) => 
                <div key={elem.id}>
                    {index + 1}. {elem.login}
                </div>
                )
           }
        </div>
        
    )
}

export default Card;