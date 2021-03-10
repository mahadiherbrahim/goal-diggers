import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Team from '../Team/Team';
import './Home.css'


const Home = () => {

    const [teams, setTeams] = useState([]);

    useEffect(() => {
        fetch('https://www.thesportsdb.com/api/v1/json/1/search_all_teams.php?l=English%20Premier%20League')
            .then(res => res.json())
            .then(data => {
                const selectT = data.teams.slice(0, 15);
                setTeams(selectT)
            })
    }, [])

    return (
        <div className="team-container">
            <Header/>
            <div className="container">
                <div className="row">
                    {
                        teams.map(team => <Team team={team} />)
                    }
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Home;