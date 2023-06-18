# twenty-game
This is a simple TCP server game where two players take turns to add a number between 1 and 3 to a total. The player who reaches or exceeds 20 first loses the game.

## How to Play
1. Two players connect to the server.
2. Players take turns to send a number between 1 and 3 to the server.
3. The server adds the number to a total and sends the updated total to the players.
4. The player who reaches or exceeds 20 first loses the game.

## Installation
1. Clone this repository.
2. Run node server.js to start the server.

## Connecting to the Server
You can use any TCP client to connect to the server. For example, you can use telnet:
`telnet localhost 12345`
