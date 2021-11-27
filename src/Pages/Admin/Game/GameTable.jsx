import React from 'react'

export default function GameTable({ game }) {
    return (
        <>
            <div style={{
                background: "#203F61",
                width: "100%",
                textAlign: "left",
                marginTop: "4px"
            }}
                className="btn btn-success" >


                <img style={{
                    width: "40px",
                    height: "40px",
                    marginRight: "10px"
                }} src={game.game_type.img} />

                <span data-bs-toggle="collapse" data-bs-target={"#g-" + game.id}>
                    <b> {game.team1}</b>
                    <span className="text-warning"> vs </span>
                    <b>{game.team2}</b>

                    | Live scrore: {game.live_score} |

                    <b>Description: {game.short_description}</b> |

                    <span>Starts: {game.starting_time}</span> |

                    <b>End: {game.ending_time}</b> |
                </span>

                <button className="btn btn-info btn-sm" style={{ fontSize: "16px" }}>
                    edit
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    add question
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    change status
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    hide
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    close
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    pause all
                </button>
                <button className="btn btn-info btn-sm ml-1" style={{ fontSize: "16px" }}>
                    area hide
                </button>

            </div>

            <div id={'g-' + game.id} className={game.area_hidden ? 'collapse hide' : 'collapse show'}>
                {
                    game?.questions?.map((question, idx) => {
                        return <div key={idx} style={{ background: "#DECDC9" }}
                            data-bs-toggle="collapse" data-bs-target={"#q-" + question.id}>
                            <div className="card" style={{ background: "transparent" }}>
                                <div className="card-header">
                                    <span style={{
                                        fontWeight: 600,
                                        cursor: "pointer"
                                    }}>
                                        {question.question}
                                    </span>
                                </div>
                                {
                                    question?.answers?.length > 0
                                        ? <div className={`card-body py-0 collapse ${question.area_hidden ? 'hide' : 'show'}`} id={"q-" + question.id}>
                                            <table className="table">
                                                <thead>
                                                    <tr>
                                                        <td className="py-0">#</td>
                                                        <td className="py-0">Answer</td>
                                                        <td className="py-0">Rate</td>
                                                        <td className="py-0">Bets</td>
                                                        <td className="py-0">Actions</td>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {
                                                        question.answers.map((answer, idx) => {
                                                            return <tr key={idx} className="py-0">
                                                                <td className="py-0">{answer.id}</td>
                                                                <td className="py-0">{answer.answer}</td>
                                                                <td className="py-0">{answer.rate}</td>
                                                            </tr>
                                                        })
                                                    }
                                                </tbody>
                                            </table>
                                        </div> : <span className="text-danger">No answers found</span>
                                }
                            </div>
                        </div>
                    })
                }

            </div>
        </>
    )
}
