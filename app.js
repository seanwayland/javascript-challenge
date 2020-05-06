// from data.js
var tableData = data;
var tbody = d3.select("tbody");
// YOUR CODE HERE!
var currentTable = data

data.forEach((sighting) => {
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
});

dateValue = "1/9/2020"
let res = data.filter(ob => ob.datetime === dateValue)
//res.forEach(element => console.log(element));

let uniqueDates = d3.map(data, function(d){return d.datetime;}).keys()
//uniqueDates.forEach(element => console.log(element));

let uniqueCities = d3.map(data, function(d){return d.city;}).keys()
//uniqueCities.forEach(element => console.log(element));

let uniqueStates = d3.map(data, function(d){return d.state;}).keys()
//uniqueCities.forEach(element => console.log(element));

let uniqueCountries = d3.map(data, function(d){return d.country;}).keys()
//uniqueCities.forEach(element => console.log(element));

let uniqueShapes = d3.map(data, function(d){return d.shape;}).keys()
//uniqueCities.forEach(element => console.log(element));

d3.select("#selectButton")
    .selectAll('myOptions')
    .data(uniqueDates)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectCity")
    .selectAll('myOptions')
    .data(uniqueCities)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectState")
    .selectAll('myOptions')
    .data(uniqueStates)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectCountry")
    .selectAll('myOptions')
    .data(uniqueCountries)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button

d3.select("#selectShape")
    .selectAll('myOptions')
    .data(uniqueShapes)
    .enter()
    .append('option')
    .text(function (d) { return d; }) // text showed in the menu
    .attr("value", function (d) { return d; }) // corresponding value returned by the button


// A function that update the chart
function update(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.datetime === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()


    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter


}

function updateCity(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.city === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}

function updateState(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
   // console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.state === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}


function updateCountry(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.country === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}


function updateShape(selected) {

    // Create new data with the selection?
    // var dataFilter = data.map(function(d){return {time: d.time, value:d[selectedGroup]} })
  //  console.log(selected)
    var dataFilter = currentTable.filter(ob => ob.shape === selected)
    tbody.selectAll("tr").remove()
    //tbody.selectAll("table").remove()

    dataFilter.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });

    });
    dataFilter.forEach(element => console.log(element));
    currentTable = dataFilter

}




// When the button is changed, run the updateChart function
    d3.select("#selectButton").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
     //   console.log(selectedOption)
        update(selectedOption)
    })

    d3.select("#selectCity").on("change", function (d) {
    // recover the option that has been chosen
    var selectedOption = d3.select(this).property("value")
    // run the updateChart function with this selected option
   // console.log(selectedOption)
    updateCity(selectedOption)
})

    d3.select("#selectState").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
      //  console.log(selectedOption)
        updateState(selectedOption)
    })

    d3.select("#selectCountry").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
       // console.log(selectedOption)
        updateCountry(selectedOption)
    })

    d3.select("#selectShape").on("change", function (d) {
        // recover the option that has been chosen
        var selectedOption = d3.select(this).property("value")
        // run the updateChart function with this selected option
       // console.log(selectedOption)
        updateShape(selectedOption)
    })


var button = d3.select("#reset");

button.on("click", function() {
   // console.log("Hi, a button was clicked!");
   // console.log(d3.event.target);
    tbody.selectAll("tr").remove()
    data.forEach((sighting) => {
        var row = tbody.append("tr");
        Object.entries(sighting).forEach(([key, value]) => {
            var cell = row.append("td");
            cell.text(value);
        });
    });
    currentTable = data
});



