import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styles from './ScoreBoard.module.scss';
const axios = require('axios');
const ScoreBoard = ({ winner }) => {

    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState();
    const [player, setPlayer] = useState(0);
    const [dealer, setDealer] = useState(0);
    const [push, setPush] = useState(0);

    useEffect(() => {
        setIsLoading(true);
        setIsLoaded(false);
        setError(null);
        console.log(isLoaded, error, isLoading);
        console.log("calling axios");
        axios
            .get("/api/score")
            .then(response => {
                setIsLoaded(true);
                setItems(response.data);
                console.log("I", items);
                setPlayer(response.data.player);
                setDealer(response.data.dealer);
                setPush(response.data.push);
                console.log("RD", response.data);
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error);
            }
            );
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);


    return (
        <div className={styles.scoreboard}>
            <h1>ScoreBoard</h1>
            <div className="score-board">
                <div className="score-item">
                    Player: {player}
                </div>
                <div className="score-item">
                    Dealer: {dealer}
                </div>
                <div className="score-item">
                    Push: {push}
                </div>
            </div>
        </div>
    )
}




ScoreBoard.defaultProps = {
    winner: null
}
ScoreBoard.propTypes = {
    player: PropTypes.number,
    dealer: PropTypes.number,
    push: PropTypes.number
}
export default ScoreBoard