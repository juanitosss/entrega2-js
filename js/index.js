const tripPrices = [2000, 1200, 1500, 3000];

const trip1 = parseInt(prompt("Nike air ($2000):")) || 0;
const trip2 = parseInt(prompt("Nuke jaguar ($1200):")) || 0;
const trip3 = parseInt(prompt("Nike femenino ($1500):")) || 0;
const trip4 = parseInt(prompt("Nike Jordan Air Pro Super Ultra Mega Promedio  ($3000):")) || 0;

const totalFinal = (trip1 * tripPrices[0]) +
                   (trip2 * tripPrices[1]) +
                   (trip3 * tripPrices[2]) +
                   (trip4 * tripPrices[3]);

alert(Total cost for your dive trips: $${totalFinal});