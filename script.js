function generateRgbColour() {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    registerColour = `rgb(${red}, ${green}, ${blue})`;
    return registerColour;
}

const input = document.querySelector(".input");
input.addEventListener("click", () => {
    input.style.backgroundColor = generateRgbColour();
    input.value = `Click button: ${registerColour}`;
})

const body = document.querySelector("body");
body.addEventListener("click", () => {
    body.style.backgroundColor = generateRgbColour();
    const bodyColour = document.getElementById("pBody");
    bodyColour.textContent = `Click body: ${registerColour}`;
})

const h1 = document.querySelector("h1");
h1.addEventListener("click", () => {
    h1.style.backgroundColor = generateRgbColour();
    h1.textContent = `You will see different colours: ${registerColour}`;
})
