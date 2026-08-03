const formatName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
formatName('Mohamett Ali', 'Daahir')

const timeOfDay = (time) => {
    if (time === 'Morning') {
        return `Good Morning `

    }
    if (time === 'Afternoon') {

        return `Good Afternoon`
    }
    if (time === 'Evening') {
        return `Good Evening`;
    }
}


const createFormat = (fName, Lname, time) => {
    const greeting = timeOfDay(time)
    const name = formatName(fName, Lname)
    return (`Hello' ${name} , ${greeting}`);
}
console.log(createFormat('Mohamett Ali ', 'Daahir', 'Morning'));
