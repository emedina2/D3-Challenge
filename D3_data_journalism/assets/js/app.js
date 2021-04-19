// @TODO: YOUR CODE HERE!

//create svg 
var svgArea = d3.select("body").select("svg");
if (!svgArea.empty()) {
svgArea.remove();
}
// svg params
var svgHeight = window.innerHeight;
var svgWidth = window.innerWidth;
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




d3.csv("../data/data.csv").then(function(healthData) {
    var poverty = healthData.poverty
    var povertyMoe = healthData.povertyMoe
    var age = healthData.age
    var ageMoe = healthData.ageMoe
    var income = healthData.income
    var incomeMoe = healthData.incomeMoe
    console.log(poverty)
    console.log(povertyMoe)
    console.log(age)
    console.log(ageMoe)
    console.log(income)
    console.log(incomeMoe)
    // healthcare,healthcareLow,healthcareHigh
    // obesity,obesityLow,obesityHigh
    // smokes,smokesLow,smokesHigh



});
