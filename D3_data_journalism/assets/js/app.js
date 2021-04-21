// @TODO: YOUR CODE HERE

// svg params
var svgHeight = 600;
var svgWidth = 800;
// margins
var margin = {
top: 50,
right: 50,
bottom: 100,
left: 75
};
// chart area minus margins
var chartHeight = svgHeight - margin.top - margin.bottom;
var chartWidth = svgWidth - margin.left - margin.right;

//create svg 
var svgArea = d3.select("#scatter").append("svg")
.attr("height", svgHeight)
.attr("width", svgWidth)

// if (!svgArea.empty()) {
//     svgArea.remove();
// };
//append chart
var chartGroup= svgArea.append("g")
.attr("width", chartWidth)
.attr("height", chartHeight)
.attr("transform", `translate(${margin.left}, ${margin.top})`);



d3.csv("./assets/data/data.csv").then(function(healthData) {
    healthData.forEach(values => {
        values.poverty = +values.poverty
        values.povertyMoe = +values.povertyMoe
        values.age = +values.age
        values.ageMoe = +values.ageMoe
        values.income = +values.income
        values.incomeMoe = +values.incomeMoe
         // healthcare,healthcareLow,healthcareHigh
        // obesity,obesityLow,obesityHigh
        // smokes,smokesLow,smokesHigh
    
    });
    var povertyXScale = d3.scaleLinear()
    .domain(d3.extent(healthData, d =>d.poverty))
    .range([0 , chartWidth]);
    
    var incomeXScale = d3.scaleLinear()
    .domain(d3.extent(healthData, d =>d.income))
    .range([0 , chartWidth]);
    

    var ageYScale = d3.scaleLinear()
    .domain([0,d3.max(healthData, d => d.age)])
    .range([chartHeight, 0]);

    console.log(d3.max(healthData, d=> d.poverty))
    console.log(d3.extent(healthData, d=> d.age))

    var bottomAxis = d3.axisBottom(povertyXScale);
    var leftAxis = d3.axisLeft(ageYScale);

    console.log(chartHeight)
    console.log(chartWidth)

    // Add bottomAxis
    chartGroup.append("g").attr("transform", `translate(0, ${chartHeight})`).call(bottomAxis);
    // Add leftAxis to the left side of the display
    chartGroup.append("g").call(leftAxis);
   
    //add Axis titles

    //x Axis
    chartGroup.append("text")
    .attr("transform", `translate(${chartWidth / 2}, ${chartHeight + 50})`)
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "blue")
    .text("Poverty %");
    // y axis
    chartGroup.append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", -50)
    .attr("x", -(chartHeight / 2))
    .attr("dy", "1em")
    .attr("text-anchor", "middle")
    .attr("font-size", "16px")
    .attr("fill", "red")
    .text("Age");

    var povertyXageY = chartGroup.selectAll("circle")
        .data(healthData)
        .enter()
        .append("circle")
        .attr("cx", d=> povertyXScale(d.poverty))
        .attr("cy", d=> ageYScale(d.age))
        .attr("r", 10)
        .attr("fill", "pink")


});
