export function day04(input: string) {

    const pairs = input.split(/\n/).map((pair) => pair.split(/[,-]+/).map(Number))

    let containedCount: number = 0;
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] <= pairs[i][2] && pairs[i][1] >= pairs[i][3]) {
            containedCount++
        } else if (pairs[i][2] <= pairs[i][0] && pairs[i][3] >= pairs[i][1]) {
            containedCount++
        };
    };
    console.log("PT1", containedCount);


    let overlapCount: number = 0;
    for (let i = 0; i < pairs.length; i++) {
        if (pairs[i][0] <= pairs[i][2] && pairs[i][2] <= pairs[i][1]) {
            overlapCount++;
        } else if (pairs[i][2] <= pairs[i][0] && pairs[i][3] <= pairs[i][1]) {
            overlapCount++;
        };
    };
    console.log("PT2", overlapCount);

    return;

}