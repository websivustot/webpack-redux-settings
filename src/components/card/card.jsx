import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";
import { getContributors, getCurrentRepos } from '../actions/repos';
import { useDispatch, useSelector } from 'react-redux'; 
import './card.less'

const Card = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const {username, reponame} = useParams();
    const [repo, setRepo] = useState({owner:{}});
    const [contributors, setContributors] = useState([]);
    const isFetching = useSelector(state => state.repos.isFetching)

    console.log(isFetching)

    useEffect(()=>{
        dispatch(getCurrentRepos(username, reponame, setRepo))
        getContributors(username, reponame, setContributors)
    }, [])

    return ( <div>
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
        {isFetching === false
            ?
            <div>
                <div className="card">
                <img src={repo.owner.avatar_url} alt={repo.name} />
                <div className="name">{repo.name}</div>
                <div className="stars">{repo.stargazers_count}</div>
            </div>
            <div>{contributors.map((c, index) => <div key={index}>{index +1}. {c.login}</div>)}</div>
            </div>
            : 
            <div className='fetching'>

            </div>}
        
    </div> );
}
 
export default Card;