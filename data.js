var table1 = document.getElementById('table1');
let table1Data = []

let bable1Content = table1.children.item(2).children

for (let item of bable1Content) {
    let row = item.children
    let cellContent = [];
    for (let cell of row) {
        // if (cell.tagName === "TD" && cell.innerText !== ':') {
        cellContent.push(cell.innerText)


        // }
    }
    table1Data.push(cellContent)
}


let data1 = [
    {'country': 'Belgium', 'year': '2002', 'val': '10078,8'},
    {'country': 'Belgium', 'year': '2003', 'val': '012,8'},

    {'country': 'Bulgaria', 'year': '2002', 'val': '1469,8'},
    {'country': 'Bulgaria', 'year': '2003', 'val': '1439,8'}
];

var svg = dimple.newSvg("#ala", 590, 400);
var myChart = new dimple.chart(svg, data1);
myChart.setBounds(70, 30, 420, 330)
var x = myChart.addTimeAxis("x", "year", "%Y", "%Y");
x.showGridlines = true;
x.addOrderRule("year");
var y = myChart.addCategoryAxis("y", "val");
var s = myChart.addSeries("country", dimple.plot.bubble);
s.lineWeight = 4;
s.lineMarkers = true;
var myLegend = myChart.addLegend(530, 100, 60, 300, "Right");
myChart.draw();


console.log(table1Data)

var table2 = document.getElementById('table2');
let table2Data = []

let bable2Content = table2.children.item(2).children
for (let item of bable2Content) {
    let row = item.children
    let cellContent = [];
    for (let cell of row) {
        // if (cell.tagName === "TD" && cell.innerText !== ':') {
        cellContent.push(cell.innerText)
        // }
    }
    table2Data.push(cellContent)
}

console.log(table2Data)

let table2Graph = [
    {'country': 'Latvia', 'date': '2007–09', 'value': '312'},
    {'country': 'Latvia', 'date': '2010–12', 'value': '312'},
    {'country': 'Lithuania', 'date': '2007–09', 'value': '247'},
    {'country': 'Lithuania', 'date': '2010–12', 'value': '307'}

];

var svg = dimple.newSvg("#table2Graph", 590, 400);
var myChart = new dimple.chart(svg, table2Graph);
myChart.setBounds(60, 30, 510, 305)
var x = myChart.addCategoryAxis("x", "country");
x.addOrderRule("country");
myChart.addMeasureAxis("y", "value");
myChart.addSeries('date', dimple.plot.bar);
myChart.addLegend(60, 10, 510, 20, "right");
myChart.draw();