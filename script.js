const num = 1235
const str = num.toString()
let rezult = 1
for (let i = 0; i < str.length; i++) {
    rezult = rezult * Number(str[i])
}
console.log(rezult)
let powNum = rezult ** 3
console.log(powNum)
let strPowNum = powNum.toString()
let twoNum = strPowNum.slice(0, 2)
console.log(twoNum)