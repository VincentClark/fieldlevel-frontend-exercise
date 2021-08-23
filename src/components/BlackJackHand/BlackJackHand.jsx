import React, { useReducer } from 'react';

import { PlayingCard } from '../PlayingCard/PlayingCard';
import { WinnerBanner } from '../WinnerBanner/WinnerBanner';
import { Button } from '../shared/Button/Button';

import { Deck, PlayerHand, BlackJack } from '../../game/game';
import { NEW_GAME, HIT, STAY, newGame, hit, stay } from '../../actions/actions';

import styles from './BlackJackHand.module.scss';

function init() {
    const deck = new Deck();
    const playerCards = [];
    const dealerCards = [];

    playerCards.push(deck.dealCard());
    console.log(`Player card: ${playerCards[0]}`);

    console.log(`Deck: ${deck}`);
    console.log(`Player: ${playerCards.length}`);
    const dealerFirstCard = deck.dealCard();
    console.log(`Dealer is showing ${dealerFirstCard}`);
    dealerCards.push(dealerFirstCard);
    
    //set 2 second timer

    playerCards.push(deck.dealCard());
    dealerCards.push(deck.dealCard());
    
    console.log(`Dealer card: ${dealerCards[1]}`);
    const player = new PlayerHand(false, playerCards);
    const dealer = new PlayerHand(true, dealerCards);
    console.log("dealercards", dealerCards[1]);
    const initialState = {
        deck: deck,
        player: player,
        dealer: dealer,
        winner: null
    };

    calculateWinner(initialState);
    return initialState;
}

function calculateWinner(state) {
    if (state.player.isFinished) {
        if (!state.player.isBust) {
            while (!state.dealer.isFinished) {
                console.log(`Dealer card: ${state.dealer.cards[1].code}`);
                document.getElementById(state.dealer.cards[1].code).src=`https://deckofcardsapi.com/static/img/${state.dealer.cards[1].code}.png`
                state.dealer.addCard(state.deck.dealCard());
            }
            console.log(`Dealer score: ${state.dealer.score}`);
        }else {
            document.getElementById(state.dealer.cards[1].code).src=`https://deckofcardsapi.com/static/img/${state.dealer.cards[1].code}.png`
        }
        document.getElementById(state.dealer.cards[1].code).src=`https://deckofcardsapi.com/static/img/${state.dealer.cards[1].code}.png`

        state.winner = BlackJack.calculateWinner(state.player, state.dealer);
    }
}

function reducer(state, action) {
    switch (action.type) {
        case NEW_GAME:
            return init();
        case HIT:
            state.player.addCard(state.deck.dealCard());
            calculateWinner(state);
            console.log("state", state);
            return { ...state };
        case STAY:
            console.log("dealercards[1]", state.dealer.cards[1]);
            state.player.stay();
            calculateWinner(state);
            return { ...state };
        default:
            console.log('noop');
    }
}

const BlackJackHand = () => {
    const [state, dispatch] = useReducer(reducer, {}, init);
    const isFaceUp = (ind) => {
        if(ind === 1) {
            return false;
        }
        else{
            return true;
        }
    };
//main game portion
    return (
        <div className={styles.Container}>
            <div className={styles.ScoreContainer}>
            <h2>Dealer</h2>
                
                <div className={styles.Score}>
                
                    <div>{state.dealer.score}</div>
                    <div></div>
                </div>
            </div>
            <div className={styles.Cards}>
                
                {state.dealer.cards.map((card, index) => (
                                      
                
                    <div key={card.code} className={styles.Card}>
                        {console.log("index",index)}
                       
                        
                        <PlayingCard card={card} faceUp={isFaceUp(index)} />
                    </div>
                ))}
            </div> 
            
            {state.winner && (
                <div className={styles.WinnerBannerContainer}>
                    <WinnerBanner winner={state.winner} onNewHandClick={() => dispatch(newGame())}></WinnerBanner>
                </div>
            )}
            
            <div>
            <div className={styles.ScoreContainer}>
            <h2>Player</h2>
                <div className={styles.Score}>
                    <div>{state.player.score}</div>
                    <div></div>
                </div>
            </div>
            <div className={styles.Cards}>
                {state.player.cards.map((card, index) => (
                    <div key={card.code} className={styles.Card}>
                        <PlayingCard card={card} />
                    </div>
                ))}
            </div>
            </div>
            <div className={styles.MenuContainer}>
                <div>
                    <Button
                        onClick={() => dispatch(hit())}
                        disabled={state.player.isFinished}
                        classes={styles.HitButton}
                    >
                        Hit
                    </Button>
                    <div className={styles.Spacer}></div>
                    <Button
                        onClick={() => dispatch(stay())}
                        disabled={state.player.isFinished}
                        classes={styles.StayButton}
                    >
                        Stay
                    </Button>
                </div>
            </div>
        </div>
    );
};

export { BlackJackHand };
