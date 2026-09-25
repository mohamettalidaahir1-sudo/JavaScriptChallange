const colors = document.querySelectorAll(".colors");
const nums = document.querySelectorAll(".hexNum");
const btn_Genarate = document.querySelector("#btn-genarate");

const color_Array = [];

const genarate_Colors = (length) => {
    const hexaDecimal = [
        "0", "1", "2", "3", "4", "5", "6", "7",
        "8", "9", "A", "B", "C", "D", "E", "F"
    ];

    color_Array.length = 0;

    // Generate colors
    for (let i = 0; i < length; i++) {
        let color = "#";

        for (let x = 0; x < 6; x++) {
            const random = Math.floor(Math.random() * hexaDecimal.length);
            color += hexaDecimal[random];
        }

        color_Array.push(color);
    }

    // Display colors
    colors.forEach((color, i) => {
        color.style.background = color_Array[i];

        nums[i].innerHTML = `
            ${color_Array[i]}
            <i class="bi bi-copy copy-icon" data-color="${color_Array[i]}"></i>
        `;
    });

    // Copy buttons
    const icons = document.querySelectorAll(".copy-icon");

    icons.forEach(icon => {
        icon.addEventListener("click", () => {
            const color = icon.dataset.color;

            navigator.clipboard.writeText(color);

            icon.classList.remove("bi-copy");
            icon.classList.add("bi-check");

            setTimeout(() => {
                icon.classList.remove("bi-check");
                icon.classList.add("bi-copy");
            }, 1000);
        });
    });
};

btn_Genarate.addEventListener("click", () => {
    genarate_Colors(6);
});