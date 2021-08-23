## Exercise Purpose

The purpose of this exercise is to create a conversation piece for your next interview.

## Exercise Description

The current state of this repo is the desktop version of a single player blackjack app. Your job will be to expand the current functionality to support a player and a dealer. You will also add a scoreboard that tracks wins, losses, and pushes. A mockup of the final version is provider [here](/assets/blackjack_spec.png)

-   Do not spend more than 4 hours, if you do not complete everything, just note it and be prepared to discuss it.
-   There are no intentionally hidden bugs or tricks. Don’t waste time trying to find them.
-   Make it match the provided mockup which includes mobile version.
-   Add UI components to show the dealer's hand. When the hand is initially dealt, the dealer should have one card showing and one card face down. When it is the dealer's turn, all cards should be shown.
-   Add a scoreboard that tracks the wins, losses, and pushes for the player
-   Make API calls to load scoreboard data & save scores
-   **Prioritize pixel pushing / polish last.**

## API Documentation

### Score

To get the current score

#### Request

```
GET /api/score
```

#### Response

```javascript
{
    player: 1,
    dealer: 2,
    push: 0
}
```

### Update Score

To update the score

#### Request

```
POST /api/score
```

Post body

```javascript
{
    result: 'player' | 'dealer' | 'push';
}
```

#### Response

```javascript
{
    player: 1,
    dealer: 2,
    push: 0
}
```

## Blackjack Rules For This Application

Each player is dealt two cards. The dealer will have one card showing and one card face down.
The value of cards two through ten is their pip value (2 through 10). Face cards (Jack, Queen, and King) are all worth ten. Aces can be worth one or eleven. A hand's value is the sum of the card values.

Once the player hand is finished, it's the dealer's turn. The dealer hand will not be completed if the player has busted or received a blackjack. The dealer then reveals the hidden card and must hit until the cards total up to 17 points. At 17 points or higher the dealer must stay. You are betting that you have a better hand than the dealer. The better hand is the hand where the sum of the card values is closer to 21 without exceeding 21. The detailed outcome of the hand follows: (The rules below are already implemented, they are just outline for your reference)

-   If the player is dealt an Ace and a ten-value card (called a "blackjack" or "natural"), and the dealer does not, the player wins
-   If the player exceeds a sum of 21 ("busts"), the player loses
-   If the dealer exceeds 21 ("busts") and the player does not, the player wins.
-   If the player attains a final sum higher than the dealer and does not bust, the player wins.
-   If both dealer and player receive a blackjack or any other hands with the same sum called a "push", no one wins.

## Deliverables

-   Import the exercise repository to your personal Github account using [github's import tool](https://github.com/new/import) import this url: https://github.com/FieldLevel/fieldlevel-frontend-exercise
-   Complete the exercise
-   Invite our github user "fl-codereview" to be a collaborator on the repository
-   Create a pull request from your branch to main
-   Let us(your interview coordinator) know when you are ready to review

## Followup Interview Prep

-   Be prepared to walk us through your Pull Request and explain your decisions as if you were doing a code review.
-   We want to hear you be very verbose about your process and the decisions you made along the way.
-   Additionally, we will dive into your current responsibilities and have you explain what you are looking for in your next position.

## How To Run

Install project dependencies

`yarn`

Start the API server

`yarn server`

Start the web application

`yarn start`

To run the test suite

`yarn test`
