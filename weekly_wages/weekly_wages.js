const weeklyWage = (band, weeklyHours) => {
    // hourly rates 
    const rates = {
        "A" : 23,
        "B" : 37,
        "C" : 51
    }

    // a list of valid bands
    const bands = ["A", "B", "C"];

    // check if the given band is valid:
    // return 0 if it's not valid
    if(!bands.includes(band.toUpperCase())) return 0;

    // convert the string for days to a sub array and then trim out for any spaces
    const days = weeklyHours.split(",").map(day => day.trim());
    
    // check if there are enough days
    // if the days given are less than 7 then return missing days
    console.log(days.length, weeklyHours)
    if(days.length < 7) return "missing day";

    // calculate the weekely wages based on hours worked and hourly rate
    const wages = days.map(Number) // convert the strings to numbers so that I can use them for calculations
    .map(hour => hour*rates[band.toUpperCase()]) // multiply the hours by the given hourly rate
    .reduce((sum, value) => sum + value) // use reduce to add up the pay for each day

    // return the weekely wage
    return wages;
};
