import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './Team.css'
import { useHistory } from 'react-router';

const Team = (props) => {

    const { idTeam, strTeam, strTeamLogo, strSport } = props.team;
    const history = useHistory()
    
    return (
        <div className="col-md-4">
            <div className="card text-center team">
                <img src={strTeamLogo} className="card-img-top" alt={strTeam}></img>
                <div className="card-body">
                    <h3 className="card-title">{strTeam}</h3>
                    <p className="card-text text-muted">Sports Type : {strSport}</p>
                    <button
                        className="btn btn-primary"
                        onClick={() => (history.push(`team/${idTeam}`))}
                    >
                        Explore <FontAwesomeIcon icon={faArrowAltCircleRight} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Team;