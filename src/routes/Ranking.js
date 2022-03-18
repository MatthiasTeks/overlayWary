const Ranking = ({ min1, top1, min2, top2, result }) => {
    return (
        <div id="holderLeaderboard">
            <div id="holderTitle">
                <h1>TOP {top2} LEADERBOARD</h1>
            </div>
            <div id="holderRanks">
                <div id="holderRank1">
                    <div id="holderBoard">
                        <div className="box rank">
                            <p>RANK</p>
                        </div>
                        <div className="box team">
                            <p>TEAM NAME</p>
                        </div>
                        <div className="box kills">
                            <p>KILLS</p>
                        </div>
                        <div className="box score">
                            <p>SCORES</p>
                        </div>
                    </div>
                    <div id="holderTeam">
                        { result !== undefined &&
                            result.map((team, index) => {
                                if(team.id > min1 && team.id <= top1){
                                    return (
                                        <div key={team.team} className="row" id={`team${team.team}`}>
                                            <div className="block rankTeam">
                                                <p>{team.id}</p>
                                            </div>
                                            <div className="block nameTeam">
                                                <p>{team.team.toUpperCase()}</p>
                                            </div>
                                            <div className="block killTeam">
                                                <p>{team.kills}</p>
                                            </div>
                                            <div className="block scoreTeam">
                                                <p>{team.pts}</p>
                                            </div>
                                        </div>
                                    )
                                } else return null
                            })
                        }
                    </div>
                </div>
                <div id="holderRank2">
                    <div id="holderBoard">
                        <div className="box rank">
                            <p>RANK</p>
                        </div>
                        <div className="box team">
                            <p>TEAM NAME</p>
                        </div>
                        <div className="box kills">
                            <p>KILLS</p>
                        </div>
                        <div className="box score">
                            <p>SCORES</p>
                        </div>
                    </div>
                    <div id="holderTeam">
                        { result !== undefined &&
                            result.map((team, index) => {
                                if(team.id > min2 && team.id <= top2){
                                    return (
                                        <div key={team.team} className="row" id={`team${team.team}`}>
                                            <div className="block rankTeam">
                                                <p>{team.id}</p>
                                            </div>
                                            <div className="block nameTeam">
                                                <p>{team.team.toUpperCase()}</p>
                                            </div>
                                            <div className="block killTeam">
                                                <p>{team.kills}</p>
                                            </div>
                                            <div className="block scoreTeam">
                                                <p>{team.pts}</p>
                                            </div>
                                        </div>
                                    )
                                } else return null
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Ranking