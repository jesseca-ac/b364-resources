function ringsPrice(engagementRing, weddingRings) {
    return engagementRing + weddingRings;
}

function excessBudget(totalExpenses,budget){
	return budget - totalExpenses;
};

const rings = ringsPrice(299, 25000);
const budgetRemaining= excessBudget(75000, 80000);

console.log("Total cost of rings: " + rings);
console.log("Remaining budget after the wedding: " + budgetRemaining);

function seatingCapacity(seatsPerTable,totalTables){
	return seatsPerTable*totalTables;
};

function costPerGiveaway(numberOfGiveaway,totalGiveawayCost){
	return totalGiveawayCost/numberOfGiveaway;
};

const totalSeats = seatingCapacity(8,30)
const giveawayCost = costPerGiveaway(400,10000)

console.log("The seating capacity of the reception is: " + totalSeats);
console.log("Cost per giveaway: " + giveawayCost);

function canVenueAccommodate(capacity,totalGuest){
	return totalGuest <= capacity;
};

function convertTempCelsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const isAccommodated = canVenueAccommodate(400,650)
const weddingDayTemp = convertTempCelsiusToFahrenheit(35)

console.log("Can the venue accommodate the guests? " + isAccommodated);
console.log("The temperature for the wedding day is " + weddingDayTemp);

function totalDressCost(baseCost, fabricTypeMultiplier, fabricAmount, laceAmount, beadAmount, complexityFactor) {
    // Cost calculations
    const fabricCost = fabricAmount * fabricTypeMultiplier;
    const laceCost = laceAmount * 300; // php 300 per meter for lace
    const beadCost = beadAmount * 0.50; // php 0.50 per bead

    // Total cost
    const totalCost = (baseCost + fabricCost + laceCost + beadCost) * complexityFactor;
    return totalCost;
}

const weddingDressCost = totalDressCost(25000, 1.5, 3, 2, 150, 1.2)

console.log("The cost of the wedding dress is " + weddingDressCost);