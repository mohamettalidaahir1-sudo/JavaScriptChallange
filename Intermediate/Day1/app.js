//DOM ELEMENTS

const colors = document.querySelectorAll('.colors')
const nums = document.querySelectorAll('.hexNum')
const btn_Genarate = document.querySelector('#btn-genarate')

btn_Genarate.addEventListener('click', () => {
    genarate_Colors(6)

})

const color_Array = [];
const genarate_Colors = (length) => {
    const hexaDecimal = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', "A", "B", "C", "D", "E", "F"]
    color_Array.length = 0
    for (let i = 0; i < length; i++) {
        let color = "#"
        for (let x = 0; x < 6; x++) {
            let random = Math.floor(Math.random() * hexaDecimal.length)
            color += hexaDecimal[random]
        }
        color_Array.push(color)
    }

    colors.forEach((color, i) => {
        color.style.background = color_Array[i]
        nums[i].textContent = color_Array[i]
    })
}
console.log(color_Array);

