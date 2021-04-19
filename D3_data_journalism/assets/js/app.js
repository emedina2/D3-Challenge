// @TODO: YOUR CODE HERE

// svg params
var svgHeight = 800//window.innerHeight;
var svgWidth = 800//window.innerWidth;
// margins
var margin = {
top: 50,
right: 50,
bottom: 50,
left: 50
};
// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

//create svg 
var svgArea = d3.select("body").select("#scatter");

// if (!svgArea.empty()) {
//     svgArea.remove();
// };
//append chart
var chartGroup= svgArea.append("g")
.attr("width", svgWidth)
.attr("height", svgHeight)
.attr("transform", `translate(${margin.left}, ${margin.top})`);



d3.csv("./assets/data/data.csv").then(function(healthData) {
    healthData.forEach(values => {
        values.poverty = +values.poverty
        values.povertyMoe = +values.povertyMoe
        values.age = +values.age
        values.ageMoe = +values.ageMoe
        values.income = +values.income
        values.incomeMoe = +values.incomeMoe
    
    });
    var povertyXScale = d3.scaleLinear()
    .domain(d3.extent(healthData, d =>d.poverty))
    .range([0 , chartWidth]);
    console.log(povertyXScale)

    var ageYScale = d3.scaleLinear()
    .domain([0,d3.max(healthData, d => d.age)])
    .range([chartHeight, 0]);
    console.log(ageYScale)

    var bottomAxis = d3.axisBottom(povertyXScale);
    var leftAxis = d3.axisLeft(ageYScale);

    // Add bottomAxis
    chartGroup.append("g").attr("transform", `translate(0, ${chartHeight})`).call(bottomAxis);
    // Add leftAxis to the left side of the display
    chartGroup.append("g").call(leftAxis);
    // Add rightAxis to the right side of the display
    chartGroup.append("g").attr("transform", `translate(${chartWidth}, 0)`).call(leftAxis);

    
  
    // healthcare,healthcareLow,healthcareHigh
    // obesity,obesityLow,obesityHigh
    // smokes,smokesLow,smokesHigh



});
