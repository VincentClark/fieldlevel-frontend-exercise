import React from 'react';
import PropTypes from 'prop-types';
import PlayerHand from './PlayerHand';
import styles from './PlayingCard.module.scss';

const PlayingCard = ({ card, faceUp }) => {
    const code = faceUp ? card.code : 'XX';
    PlayerHand.getDealerSecondCard() === true?console.log("its a start"):console.log("false");

    return (
        <div>
            <img
                alt={card.toString()}
                src={`https://deckofcardsapi.com/static/img/${code}.png`}
                className={styles.CardImage}
            />
        </div>
    );
};

PlayingCard.defaultProps = {
    faceUp: true
};

PlayingCard.propTypes = {
    card: PropTypes.object.isRequired,
    faceUp: PropTypes.bool
};

export { PlayingCard };
