const lang = "en";
if (lang === "ru") {
    console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота");
} else if (lang === "en") {
    console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
} else if (lang !== "ru" && lang !== "en") {
    console.log("Error");
}

switch (true) {
    case lang === "ru":
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота");
        break
    case lang === "en":
        console.log("Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday");
        break
    case lang !== "ru" && lang !== "en":
        console.log("Error");
        break
}

const namePerson = "Артем"
const rezult =
    namePerson === "Артем"
        ? console.log("Директор")
        : namePerson === "Александр"
            ? console.log("Преподаватель")
            : console.log("Студент")

