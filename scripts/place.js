document.getElementById("currentyear").innerHTML = new Date().getFullYear();
document.getElementById("lastModified").innerHTML = `Last Modified: ${document.lastModified}`;

//Wind Chill Equiation in Celsius
// Wind chill = 13.12 + 0.6215T – 11.37 (V^0.16) + 0.3965T (V^0.16)
const calculateWindChill = (temp, wind) => {
    if (temp <= 10 && wind > 4.8) {
        return Math.round(13.12 + (0.6215 * temp) - 11.37 * Math.pow(wind, 0.16) + (0.3965 * temp * Math.pow(wind, 0.16)));
    }
    else {
        return "N/A";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const temp = parseFloat(document.getElementById("temperature").textContent);
    const wind = parseFloat(document.getElementById("wind").textContent);
    const windChill = calculateWindChill(temp, wind);
    document.getElementById("windChill").textContent = windChill !== "N/A" ? `${windChill} °C` : windChill;
    document.getElementById("windChill").style.color = windChill !== "N/A" ? "black" : "red";
});
