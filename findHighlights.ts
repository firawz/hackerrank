/**
 * First attempt
 */
// const len1 = word.length
//     const len2 = alphabet.length
//     let arr = []
//     for(let i = 0; i< len1; i++){
//         let a = false
//         for(let j = 0; j<len2; j++){
//             if(/^[a-zA-Z]+$/.test(word)){
//                 arr.push(h[j])
//                 a = true
//             }
//         }
//     }
//     arr = arr.sort((a,b) => a-b)
//     const b = arr[arr.length-1] * word.length
//     return b
const h = [1, 3, 1, 3, 1, 4, 1, 3, 2, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5]
let word = 'qwer'
const alphabet = 'abcdefghijklmnopqrstuvwxyz'

let arr = []
const arr2 = word.split('')
arr2.forEach((Q, j) => {
    let idx = alphabet.split('').findIndex(i => i == Q)
    const a = h[idx]
    arr.push(a)
})
arr = arr.sort((a, b) => a - b)
const res = arr[arr.length - 1] * word.length
console.log(res)
