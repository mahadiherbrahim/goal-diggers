import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../Header/Header';
import './TeamDetail.css';
import TeamInfo from '../TeamInfo/TeamInfo';
import Footer from '../Footer/Footer';

const TeamDetail = () => {
    const { teamId } = useParams();

    const [team, setTeam] = useState([]);
    useEffect(() => {
        fetch(`https://www.thesportsdb.com/api/v1/json/1/lookupteam.php?id=${teamId}`)
            .then(res => res.json())
            .then(data => setTeam(data.teams[0]))
    }, [team]);

    return (
        <div className="teamDetail-container">
            <Header logo={team.strTeamLogo} />
            <TeamInfo team={team} id={team.idTeam} />
        </div>
    );
};

export default TeamDetail;