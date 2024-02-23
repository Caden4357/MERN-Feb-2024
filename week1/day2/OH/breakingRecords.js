// Maria plays college basketball and wants to go pro. Each season she maintains a record of her play. She tabulates the number of times she breaks her season record for most points and least points in a game. Points scored in the first game establish her record for the season, and she begins counting from there.

// scores = [12,24,10,24]
// Game  Score  Minimum  Maximum   Min Max
// 0      12     12       12       0   0
// 1      24     12       24       0   1
// 2      10     10       24       1   1
// 3      24     10       24       1   1


const breakingRecords = (scores) => {
    let min = scores[0]
    let max = scores[0]
    //         high,low
    let result = [0,0]
    for(let i = 1; i < scores.length; i++){
        if(scores[i] < min){
            min = scores[i]
            result[1]++
        }
        else if(scores[i] > max){
            max = scores[i]
            result[0]++
        }
    }
    return result
}
console.log(breakingRecords([12,24,10,24])); // [1,1]
console.log(breakingRecords([10, 5, 20, 20, 4, 5, 2, 25, 1])); // [2,4]
