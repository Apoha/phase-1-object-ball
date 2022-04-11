
//console.log("running")
function gameObject() {
   // debugger
    const gamePlayers = {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                },

                "Reggie Evans": {
                    number: 30,
                    shoe: 14,
                    points: 12,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 12,
                    slamDunks: 1
                },


                "Brook Lopez": {
                    number: 11,
                    shoe: 17,
                    points: 17,
                    rebounds: 19,
                    assists: 10,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 15
                },


                "Mason Plumlee": {
                    number: 1,
                    shoe: 19,
                    points: 26,
                    rebounds: 12,
                    assists: 6,
                    steals: 3,
                    blocks: 8,
                    slamDunks: 5
                },


                "Jason Terry": {
                    number: 31,
                    shoe: 15,
                    points: 19,
                    rebounds: 2,
                    assists: 2,
                    steals: 4,
                    blocks: 11,
                    slamDunks: 1
                },

            }
        },


        away: {
            teamName: "Charlotte Hornets",

            colors: ["Turquoise", "Purple"],

            players: {
                "Jeff Adrien": {
                    number: 4,
                    shoe: 18,
                    points: 10,
                    rebounds: 1,
                    assists: 1,
                    steals: 2,
                    blocks: 7,
                    slamDunks: 2
                },


                "Bismak Biyombo": {
                    number: 0,
                    shoe: 16,
                    points: 12,
                    rebounds: 4,
                    assists: 7,
                    steals: 7,
                    blocks: 15,
                    slamDunks: 10
                },



                "DeSagna Diop": {
                    number: 2,
                    shoe: 14,
                    points: 24,
                    rebounds: 12,
                    assists: 12,
                    steals: 4,
                    blocks: 5,
                    slamDunks: 5,
                },



                "Ben Gordon": {
                    number: 8,
                    shoe: 15,
                    points: 33,
                    rebounds: 3,
                    assists: 2,
                    steals: 1,
                    blocks: 1,
                    slamDunks: 0,
                },



                "Brendan Haywood": {
                    number: 33,
                    shoe: 15,
                    points: 6,
                    rebounds: 12,
                    assists: 12,
                    steals: 12,
                    blocks: 22,
                    slamDunks: 12,
                },


            }
        }

    }

    //debugger
    return gamePlayers
}


// Build a function, numPointsScored that takes in an argument of a player's name 
// and returns the number of points scored for that player.


function numPointsScored(thatPlayerName){
const game = gameObject()
//debugger
// let awayPlayers = game.away.players
//let homePlayers = game.home.players
let bothTeamPlayers = {...game.away.players, ...game.home.players}

//const player = bothTeamPlayers["players"]

for (let name in bothTeamPlayers ){
//debugger
if (name === thatPlayerName){
   return bothTeamPlayers[name]["points"]
}
}

}

console.log(numPointsScored("Jason Terry"))






function shoeSize(playerShoeSize){

    const game = gameObject()
    //debugger
    let bothTeamPlayers = {...game.away.players, ...game.home.players}
    
    for (let name in bothTeamPlayers ){
    //debugger
    if (name === playerShoeSize){
       return bothTeamPlayers[name]["shoe"]
    }
    }    
}
console.log(shoeSize("Jason Terry"))




/*function teamColors(teamName){

    const game = gameObject()
    let bothTeamColors = [[...game.home.colors], [...game.away.colors]]
    
    for(let gameKey of game){
   // debugger

        if(gameKey === teamName){
        
            return bothTeamColors[co]
            
        }
    }

}

console.log(teamColors("home"))*/







    function teamNames(){
        const game = gameObject()
        const teamNameList = []
        for (const gameKey in game){
             teamNameList.push(game[gameKey].teamNames)
        }
        return teamNameList
    }

    console.log(teamNames())







// Build a function, playerNumbers, that takes in an argument of a team
//  name and returns an array of the jersey number's for that team.


function playerNumbers(teamName){
const game = gameObject()

const gameListNumber = []

for(const gameKey in game ){
    //debugger
    if (game[gameKey].teamName === teamName){

         for(const player in game[gameKey].players){
             
            gameListNumber.push(game[gameKey].players[player].number)
    }
  return gameListNumber
}
}
}
console.log(playerNumbers("Charlotte Hornets"))







function playerStats(name){
    const game = gameObject()
    for (const gameKey in game){
        for (const playerName in game[gameKey].players){
            if (playerName === name){
                return game[gameKey].players[playerName]
            }
        }
    }
}

console.log(playerStats("Alan Anderson"))

// Build a function, bigShoeRebounds, that will return 
// the number of rebounds associated with the player
//  that has the largest shoe size. Break this one down into steps:
// First, find the player with the largest shoe size
// Then, return that player's number of rebounds
// Remember to think about return values here. 
// Use debugger to drop into your function and
//  understand what it is returning and why.






function bigShoeRebounds(){
   const game = gameObject()
   const ShoeSizeBatch = []

for (const gameKey in game) 
 //( const player in game[gameKey].players)
 {
for (const player in game[gameKey].players){

    ShoeSizeBatch.push(game[gameKey].players[player].shoe)
}  
 }
return ShoeSizeBatch
const foundBiggestShoeSize = ShoeSizeBatch.fin

}
console.log(bigShoeRebounds())  
