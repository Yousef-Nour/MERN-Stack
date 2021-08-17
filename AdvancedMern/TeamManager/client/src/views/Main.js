import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteButton from '../components/DeleteButton';

const Main = props => {

    const [players, setPlayers] = useState([]);
    const [playersLoaded, setPlayersLoaded] = useState(false);

    useEffect(() => {
        axios.get("http://localhost:8000/api/players")
        .then(res => {
            setPlayers(res.data);
            setPlayersLoaded(true);
        })
        .catch(err => console.log(err));
    }, []);


    const deleteFromDom = playerId => {
        setPlayers(players.filter(player => player._id !== playerId));
    }

    return (
        <table>
            <thead>
                <tr>
                    <th>Player Name</th>
                    <th>Player Position</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {
                    playersLoaded && players.map((player, key) => 
                        <tr key={key}>
                            <td>{player.name}</td>
                            <td>{player.position}</td>
                            <td> <DeleteButton playerId={player._id} DFD={deleteFromDom}/> </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default Main
