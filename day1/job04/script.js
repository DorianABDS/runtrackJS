function bisextile(year) {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

bisextile();

console.log(bisextile(2024));
console.log(bisextile(2021));
console.log(bisextile(2016));