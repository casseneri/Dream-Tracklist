// Canvas
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// Image
const template = new Image();
template.src = "template.png";

// Inputs
const tracksDiv = document.getElementById("tracks");

// Create Track Inputs
for (let i = 1; i <= 12; i++) {

    const label = document.createElement("label");
    label.textContent = "Track " + i;

    const input = document.createElement("input");
    input.className = "track";
    input.id = "track" + i;
    input.placeholder = "Song Title";

    input.addEventListener("input", draw);

    tracksDiv.appendChild(label);
    tracksDiv.appendChild(input);

}

// Name input
document.getElementById("name").addEventListener("input", draw);

// Download
document.getElementById("download").addEventListener("click", () => {

    const link = document.createElement("a");
    link.download = "dream-tracklist.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

});

// Draw everything
template.onload = draw;

function draw() {

    // Draw template
    ctx.clearRect(0,0,canvas.width,canvas.height);

    ctx.drawImage(template,0,0,canvas.width,canvas.height);

    // -------------------
    // NAME
    // -------------------

    let name = document.getElementById("name").value.trim();

    if(name==="")
        name="YOUR";

    ctx.fillStyle="white";
    ctx.font="bold italic 46px Arial";
    ctx.textAlign="center";

    ctx.fillText(
        name.toUpperCase()+"'S",
        540,
        914
    );

    // -------------------
    // SONGS
    // -------------------

    ctx.textAlign="left";
    ctx.font="bold italic 34px Arial";

    // Left column

    let leftX=95;
    let startY=980;
    let spacing=67;

    for(let i=1;i<=6;i++){

        const text=document.getElementById("track"+i).value;

        ctx.fillText(
            text,
            leftX,
            startY+(i-1)*spacing
        );

    }

    // Right column

    let rightX=615;

    for(let i=7;i<=12;i++){

        const text=document.getElementById("track"+i).value;

        ctx.fillText(
            text,
            rightX,
            startY+(i-7)*spacing
        );

    }

}
