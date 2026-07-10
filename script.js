const TRACK_COUNT = 12;

const tracks = document.getElementById("tracks");

for (let i = 1; i <= TRACK_COUNT; i++) {

    const label = document.createElement("label");
    label.textContent = `Track ${i}`;

    const input = document.createElement("input");
    input.className = "trackInput";
    input.maxLength = 40;

    tracks.appendChild(label);
    tracks.appendChild(input);

}
