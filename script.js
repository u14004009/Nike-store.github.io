// Calculate carbon footprint based on distance
function calculateFootprint() {
    const distance = document.getElementById("distance").value;
    const result = document.getElementById("result");

    if (distance) {
        const footprint = (distance * 0.21).toFixed(2); // Example: 0.21 kg CO2 per km
        result.textContent = `Your carbon footprint is approximately ${footprint} kg of CO2.`;
    } else {
        result.textContent = "Please enter a valid distance.";
    }
}
