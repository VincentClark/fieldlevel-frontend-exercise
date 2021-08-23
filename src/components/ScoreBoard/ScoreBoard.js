import React from 'react'
import { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
import styles from './ScoreBoard.module.scss';
const axios = require('axios');
//{ player, dealer, push } unsure if this should be used. 
const ScoreBoard = ({ player, dealer, push }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [items, setItems] = useState([]);
    // axios
    // .get('http://localhost:3031/api/scoreboard')
    // .then(response => {
    //     setIsLoaded(true);
    //     setItems(response.data);
    // })
    // .catch(error => {console.log(error);}); 
    useEffect(() => {
        setIsLoading(true);
        setIsLoaded(false);
        setError(null);
        console.log("calling axios");
        axios
            .get('http://localhost:3001/api/scoreboard')
            .then(response => {
                setIsLoaded(true);
                setItems(response.data);
            })
            .then(() => {
                console.log("ITEMS", items);
            })
            .catch(error => {
                setIsLoaded(false);
                setError(error);
            }
            );
    }, [])

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
    player: 0,
    dealer: 0,
    push: 0
}
ScoreBoard.propTypes = {
    player: PropTypes.number,
    dealer: PropTypes.number,
    push: PropTypes.number
}
export default ScoreBoard