<<<<<<< HEAD
var katzDeli = [];

takeANumber(katzDeli, "Ada");
takeANumber(katzDeli, "Grace");
takeANumber(katzDeli, "Kent");
currentLine(katzDeli);
nowServing(katzDeli);
takeANumber(katzDeli, "Matz"); 
currentLine(katzDeli); 
nowServing(katzDeli);
currentLine(katzDeli);
=======
<<<<<<< HEAD

function takeANumber(katzDeliLine) {
   var katzDeli = [];
=======
function takeANumber(katzDeliLine, katzDeli) {
 
>>>>>>> 89bbcd2e6886214654cf61c7c8efdd26a225ac3b
  var nextGuest = ['Ada', 'Grace', 'Kent'];
  for (var i = 1; i < katzDeli.length; i++);
  katzDeli.push(nextGuest[i]);
  return ('Welcome, ' + nextGuest[i] + '. You are number ' + i + ' in line.');
>>>>>>> 85ba8c8bed10ae36239476876e3b2e6e8d015339

function currentLine(katzDeliLine){
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  }
  var currentlyServing = [];
  
  for(var i=0; i<katzDeliLine.length; i++) {
    currentlyServing.push(i+1 + ". "+ katzDeliLine[i]);
  }
  return "The line is currently: " + currentlyServing.join(', ');
}

function nowServing(katzDeliLine) {
  if(katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    return "Currently serving " + katzDeliLine.shift() + '.';
  }
}

function takeANumber(katzDeliLine, name){
  katzDeliLine.push(name);
  
  return "Welcome, " + name + ". You are number " + katzDeliLine.length + " in line.";
}