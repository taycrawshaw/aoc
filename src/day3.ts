import e from "express";
import { start } from "repl";

export function day03(input: string) {

    const bags = input


    const scoreData: Record<string, number> = {
        "a": 1,
        "b": 2,
        "c": 3,
        "d": 4,
        "e": 5,
        "f": 6,
        "g": 7,
        "h": 8,
        "i": 9,
        "j": 10,
        "k": 11,
        "l": 12,
        "m": 13,
        "n": 14,
        "o": 15,
        "p": 16,
        "q": 17,
        "r": 18,
        "s": 19,
        "t": 20,
        "u": 21,
        "v": 22,
        "w": 23,
        "x": 24,
        "y": 25,
        "z": 26,
        "A": 27,
        "B": 28,
        "C": 29,
        "D": 30,
        "E": 31,
        "F": 32,
        "G": 33,
        "H": 34,
        "I": 35,
        "J": 36,
        "K": 37,
        "L": 38,
        "M": 39,
        "N": 40,
        "O": 41,
        "P": 42,
        "Q": 43,
        "R": 44,
        "S": 45,
        "T": 46,
        "U": 47,
        "V": 48,
        "W": 49,
        "X": 50,
        "Y": 51,
        "Z": 52,
    }

    let score = 0;

    const bagsArray = bags.split(/\n/).map((string) => string.replace(/\s+|\s/, '')).map((bag) => {
        const first = bag.slice(0, bag.length / 2);
        const second = bag.slice(bag.length / 2, bag.length);
        const newBag: string[] = [first, second];
        return newBag
    });


    const duplicates: string[] = [];

    bagsArray.forEach((bag) => {
        let newDuplicate: string = '';
        const newSearch = bag[0].split('');
        newSearch.forEach((item: string) => {
            if (bag[1].includes(item)) {
                newDuplicate = item;
            }
        })
        duplicates.push(newDuplicate)
    })

    duplicates.forEach((item) => {
        const roundScore = scoreData[item];
        if (roundScore) {
            score += roundScore
        }
    })


    const fullBagsArray = bags.split(/\n/).map((string) => string.replace(/\s+|\s/, ''));


    const groupsArray: any[] = [];
    for (let i = 0; i < fullBagsArray.length; i++) {
        if (i % 3 == 0) {
            const newGroup: any[] = [];
            newGroup.push(fullBagsArray[i], fullBagsArray[i + 1], fullBagsArray[i + 2]);
            groupsArray.push(newGroup)
        }
    }

    const groupTypes: string[] = [];


    groupsArray.forEach((group) => {
        let foundChar: string;
        group[0].split('').forEach((char: any) => {

            if (group[1].includes(char)) {
                if (group[2].includes(char)) {
                    foundChar = char;

                }
            }
        })
        groupTypes.push(foundChar);
    })



    let groupScore = 0;

    groupTypes.forEach((item) => {
        const roundScore = scoreData[item];
        if (roundScore) {
            groupScore += roundScore
        }
    })
    console.log(groupScore);



    return;






}