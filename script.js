const baseUrl = 'http://192.168.1.52';  // Sustituye con la IP de tu ESP32

document.getElementById("relayOn").addEventListener("click", () => {
    fetch(baseUrl + '/relay/on')
        .then(response => response.text())
        .then(data => alert(data));
});

document.getElementById("relayOff").addEventListener("click", () => {
    fetch(baseUrl + '/relay/off')
        .then(response => response.text())
        .then(data => alert(data));
});

document.getElementById("ledOn").addEventListener("click", () => {
    fetch(baseUrl + '/led/on')
        .then(response => response.text())
        .then(data => alert(data));
});

document.getElementById("ledOff").addEventListener("click", () => {
    fetch(baseUrl + '/led/off')
        .then(response => response.text())
        .then(data => alert(data));
});

document.getElementById("checkMotion").addEventListener("click", () => {
    fetch(baseUrl + '/motion')
        .then(response => response.text())
        .then(data => {
            document.getElementById("motionStatus").innerText = data;
        });
});
