//DOM
const btn_genarate = document.getElementById('genarate-btn')
const colors = document.querySelectorAll('.color')
const hex_Num = document.querySelectorAll('.hex-value')
const icons = document.querySelectorAll('.bi-copy')
btn_genarate.addEventListener('click', () => {
    const hexDecimals = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"]
    const hex_colors = [];

    for (let i = 0; i < 6; i++) {
        let color = "#"
        for (let y = 0; y < 6; y++) {
            let random = Math.floor(Math.random() * hexDecimals.length)
            color += hexDecimals[random]
        }
        hex_colors.push(color)

    }
    console.log(hex_colors);

    colors.forEach((color, i) => {
        color.style.background = hex_colors[i]
    })
    hex_Num.forEach((hex, i) => {
        hex.textContent = hex_colors[i]
    })

    icons.forEach((icon, i) => {
        icon.addEventListener("click", () => {
            navigator.clipboard.writeText(hex_colors[i]);

            icon.classList.add("fade");

            setTimeout(() => {
                icon.classList.remove("bi-copy");
                icon.classList.add("bi-check2");
                icon.classList.remove("fade");
            }, 200);

            setTimeout(() => {
                icon.classList.add("fade");

                setTimeout(() => {
                    icon.classList.remove("bi-check2");
                    icon.classList.add("bi-copy");
                    icon.classList.remove("fade");
                }, 100);

            }, 1000);
        });
    });
})