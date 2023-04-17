import e from "express";
import { start } from "repl";

export function day02(input: string) {

    const results = input;


    const rounds = results.split(/\n/);
    const roundResults = rounds.map((round) => round.split(' '))
    let score = 0

    function incrementFromChoice(choice: string) {
        switch (choice) {
            case 'X': score++;
                break;
            case 'Y': score += 2;
                break;
            case 'Z': score += 3;
                break;
            default: console.log("not valid")
        }
    }

    function incrementFromResult(playerChoice: string, oppChoice: string) {
        if (playerChoice == 'X' && oppChoice == 'A') {
            score += 3;
        }
        else if (playerChoice == 'X' && oppChoice == 'C') {
            score += 6;
        }
        else if (playerChoice == 'Y' && oppChoice == 'B') {
            score += 3;
        }
        else if (playerChoice === 'Y' && oppChoice === 'A') {
            score += 6;
        }
        else if (playerChoice == 'Z' && oppChoice == 'C') {
            score += 3;
        }
        else if (playerChoice == 'Z' && oppChoice == 'B') {
            score += 6
        } else return
    }


    // to calculate part 1 of the challenge: 
    // for (let i=0; i<roundResults.length; i++) {
    //     incrementFromChoice(roundResults[i][1]);
    //     incrementFromResult(roundResults[i][1], roundResults[i][0])
    // }



    let correctRoundResults: any[] = [];
    for (let i = 0; i < roundResults.length; i++) {
        let newRound: string[] = [];
        newRound = newRound.concat(roundResults[i]);
        if (newRound[1] === 'Y') {   // adds draw choice 

            if (newRound[0] == 'A') {
                newRound.push('X');
            } else if (newRound[0] == 'B') {
                newRound.push('Y');
            } else if (newRound[0] == 'C') {
                newRound.push('Z')
            }

        }
        else if (newRound[1] == 'X') {  // adds loss choice
            if (newRound[0] == 'A') {
                newRound.push('Z')
            } else if (newRound[0] == 'B') {
                newRound.push('X');
            } else if (newRound[0] == 'C') {
                newRound.push('Y')
            }
        }
        else if (newRound[1] == 'Z') {  // adds win choice
            if (newRound[0] == 'A') {
                newRound.push('Y')
            } else if (newRound[0] == 'B') {
                newRound.push('Z');
            } else if (newRound[0] == 'C') {
                newRound.push('X')
            }
        }
        correctRoundResults.push(newRound)
    }

    // to calculate part 2 of the challenge: 
    for (let i = 0; i < correctRoundResults.length; i++) {
        incrementFromChoice(correctRoundResults[i][2]);
        incrementFromResult(correctRoundResults[i][2], correctRoundResults[i][0])
    }

    console.log(score);

    console.log(correctRoundResults)

    return;

}





