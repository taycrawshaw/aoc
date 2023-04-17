import e from "express";
import { start } from "repl";

export function day01(input: string) {


    const elves = input;



    const elvesArray = elves.split(/\n\s*\n/);

    let elvesProcessed: any[] = [];

    elvesArray.forEach(function (section) {
        var result = section.split("\n")
        let newArr: number[] = []

        result.forEach((newstring) => {
            let removedSpaces = parseInt(newstring.replace(/^\s+|\s+$/gm, ''));
            newArr.push(removedSpaces);
        })
        elvesProcessed.push(newArr);
    });


    let elvesSummed: number[] = [];
    elvesProcessed.forEach((elf) => {
        let totalCarried = 0;
        elf.forEach((item: number) => {
            totalCarried += item;
        })
        elvesSummed.push(totalCarried)
    })



    elvesSummed.sort((a, b) => b - a);
    console.log(elvesSummed[0]);

    let topThreeSummed = 0

    for (let i = 0; i < 3; i++) {
        topThreeSummed += elvesSummed[i]
    }
    console.log(topThreeSummed);



    return;






}