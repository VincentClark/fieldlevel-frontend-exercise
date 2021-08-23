import React from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Button } from '../shared/Button/Button';
import { Alert } from '../shared/Alert/Alert';
import { PLAYER_ONE, DEALER, PUSH } from '../../game/game';

import styles from './WinnerBanner.module.scss';


const WinnerBanner = ({ winner, onNewHandClick }) => {
    const submitResults = (win) => {
        const json = {'result': win};
        console.log("json", json);
        axios.post('http://localhost:3001/api/score', json)
    }


    function getDetails(winner) {
        switch (winner) {
            case DEALER:
                submitResults('dealer');
                return { type: 'critical', text: 'Dealer Wins' };
            case PLAYER_ONE:
                submitResults('player');
                return { type: 'success', text: 'Player Wins' };
            case PUSH:
                submitResults('push');                
                return { type: 'default', text: 'Push', buttonClass: styles.PushButton };
            default:
                return { type: 'default', text: '' };
        }
    }

    const details = getDetails(winner);

    return (
        <div className={styles.Container}>
            <Alert type={details.type}>
                <div className={styles.Header}>{details.text}</div>
                <div className={styles.ButtonContainer}>
                    <Button onClick={onNewHandClick} classes={details.buttonClass}>
                        New Hand
                    </Button>
                </div>
            </Alert>
        </div>
    );
};

WinnerBanner.propTypes = {
    winner: PropTypes.string.isRequired,
    onNewHandClick: PropTypes.func.isRequired
};

export { WinnerBanner };
