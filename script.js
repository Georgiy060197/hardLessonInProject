function stringType(x) {
    if (typeof x === "string") {
        console.log(stringControl(x))
    } else {
        console.log("It is not string")
    }
}
function stringControl(x) {
    const str = x.trim()
    if (str.length > 30) {
        console.log(str.substr(0, 30) + "...")
    } else {
        console.log("You string have <= 30 symbol")
    }
}
stringType("Если строка более 30 знаков - то после 30-го символа часть текста скрывается и вместо них появляются три точки")