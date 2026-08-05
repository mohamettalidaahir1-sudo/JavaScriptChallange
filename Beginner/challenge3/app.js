const cleanText = (name) => {
    return name.trim()
}
console.log(cleanText('        Mohamett'));


const reslName = []
const capitalizeFullName = (name) => {
    const textLower = name.toLowerCase().trim()
    const words = textLower.split(' ')
    for (const word of words) {
        reslName.push(word[0].toUpperCase() + word.slice(1).toLowerCase())
    }

    return reslName.join(' ')
}
console.log(capitalizeFullName('moHamEtt aLi dahIR'));
