import React from 'react';
import PropTypes from 'prop-types';

import styles from './PlayingCard.module.scss';

let secondDealerCard = 0;
const PlayingCard = ({ card, faceUp }) => {
    secondDealerCard ++;
    const code = faceUp ? card.code : 'XX';
    console.log(secondDealerCard);
    
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
