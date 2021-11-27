import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { errorHandler } from '../../../helper/apiHelper';
import AdminLayout from '../../../layouts/AdminLayout'
import AddGameModal from './AddGameModal'
import GameTable from './GameTable';

export default function GameControl() {

    const [games, setGames] = useState([]);

    useEffect(() => {
        axios.get('/api/games')
            .then(res => {
                console.log(res);
                setGames(res.data.games);
            })
            .catch(errorHandler);
    }, []);

    return (
        <AdminLayout page="Game Control" content={<>

            <AddGameModal />

            <div data-bs-toggle="collapse" data-bs-target="#live-games" className="card" style={{ cursor: "pointer" }}>
                <div className="card-header">

                    <span style={{
                        display: "inline-block",
                        width: "20px",
                        height: "20px",
                        background: "red",
                        borderRadius: "50%"
                    }}></span>


                    <h4 className="d-inline ml-3">
                        Live Games
                    </h4>
                </div>
            </div>
            <div id="live-games" className="collapse show">
                {
                    games && games.filter(game => game.status == 1).map((game, idx) => {
                        return <GameTable game={game} key={idx} />
                    })
                }
            </div>

        </>} />
    )
}
