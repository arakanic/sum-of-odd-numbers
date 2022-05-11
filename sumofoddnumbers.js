/*
// A drawn out solution...
function rowSumOddNumbers(n) {
    let oddNum = 1
    const oddNumbers = [[oddNum]]
      for (let row = 1; row < n; row++) {
      let rowNumbers = []
      for (let num = 0; num <= row; num++) {
        oddNum += 2
        rowNumbers.push(oddNum)
      }
      oddNumbers.push(rowNumbers)
    }
    const nthRow = oddNumbers.pop()
    return nthRow.reduce((sum, odd) => sum + odd)
}
*/

// ...and the basic solution
const rowSumOddNumbers = (n) => Math.pow(n, 3)