const TRACK_COUNT = 12;

const tracksDiv = document.getElementById("tracks");
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const nameInput = document.getElementById("name");

// Load template image
const template = new Image();
template.src = "template.png";

// Store all the song input boxes
const trackInputs = [];

// Create the inputs
for (let i = 1; i <= TRACK_COUNT; i++) {

    const label = document.createElement("label");
    label.textContent = `Track ${i}`;

    const input = document.createElement("input");
    input.className = "trackInput";
    input.maxLength = 40;

    tracksDiv.appendChild(label);
    tracksDiv.appendChild(input);

    trackInputs.push(input);

    input.addEventListener("input", drawCanvas);
}

nameInput.addEventListener("input", drawCanvas);

// Draw everything
template.onload = drawCanvas;

function drawCanvas() {

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(template, 0, 0, canvas.width, canvas.height);

    // ------------------------
    // Draw Name
    // ------------------------

    let name = nameInput.value.trim().toUpperCase();

    if (name !== "") {
        name += "'S";
    }

    ctx.fillStyle = "#ffffff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";

    ctx.font = "bold 48px Arial";

    ctx.fillText(
        name + " DREAM TRACKLIST",
        540,
        560
    );

    // ------------------------
    // Draw Songs
    // ------------------------

    ctx.font = "34px Arial";
    ctx.fillStyle = "#ffffff";

    const startY = 795;
    const spacing = 58;

    trackInputs.forEach((input, index) => {

        ctx.fillText(
            input.value.toUpperCase(),
            540,
            startY + spacing * index
        );

    });

}
