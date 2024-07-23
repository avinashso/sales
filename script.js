function updateThermometer() {
    const temperatureInput = document.getElementById('temperatureInput').value;
    const mercury = document.getElementById('mercury');
    
    if (temperatureInput < 0 || temperatureInput > 100) {
        alert("Please enter a temperature between 0 and 100.");
        return;
    }
    
    const heightPercentage = temperatureInput + "%";
    mercury.style.height = heightPercentage;
}
