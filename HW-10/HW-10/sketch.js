//setting up variable to access json
var data;
//preload function so it runs
function preload() {
 data = loadJSON("data.json")


}

function setup() {
  createCanvas(1280, 720);
  //here we are accessing the json and using the information
  var strategies = data.strategies[0].fy2012.amount
  //this was going to be a for loop to access the various arrays in the data but the data is written weird 
  //in where i could not access it the way i wanted to
    //var strategies = data.strategies;

  //for (var i = 0; i < strategies.length; i++) {
  //createP(strategies[i].strategiesId);
  //var amount = strategies[i].amount;
  //years text
  textSize(25)
  fill(255, 0, 0)
  text("2012-",20,50)
  text("2013-", 20, 90)
  text("2014-",20, 130)
  text("2015-", 20, 170)
  text("2016-", 20, 210)
  
  //text of the amounts
  fill(0)
  textSize(20)
  text(strategies, 10, 70);
  var strategies2 = data.strategies[0].fy2013.amount
  textSize(20)
  text(strategies2, 10,110)

  var strategies3 = data.strategies[0].fy2014.amount
  text(strategies3,10, 150)
  var strategies4 = data.strategies[0].fy2015.amount
  text(strategies4, 10, 190)
  var strategies5 = data.strategies[0].fy2016.amount
  text(strategies5, 10, 230)
  //title text

  textSize(32)
  fill(0)
  text("Amount per Year of Savings from the Department of Agriculture", 10, 30);
}



