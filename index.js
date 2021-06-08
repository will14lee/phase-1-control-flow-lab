//const feet=300
function scuberGreetingForFeet(feet){
  if (feet<=400) {
    console.log(`The distance is ${feet} feet!`);
    return "This one is on me!";
  }
  else if (feet>=2500) {
    console.log( `The distance is ${feet} feet! Leave, and never return, Simba`);
    return "No can do.";
  }
  else if (feet>=2000) {
    console.log(`The distance is ${feet} feet! PAY UP!`);
    return "I will gladly take your thirty bucks.";
  }
}
scuberGreetingForFeet(2501);
 
function ternaryCheckCity(city){
    console.log(`You going to ${city}?! Lol.`);
    let response;
    city=== "NYC"? (response="Ok, sounds good.") : (response='No go.');
    return response
}
ternaryCheckCity("NYC");

function switchOnCharmFromTip(tip){
  let response;
  switch(tip) {
  case "generous":
    response= "Thank you so much.";
    console.log(response);
    break;
  case "not generous":
    response= "Thank you.";
    console.log(response);
    break;
  default:
    response= "Bye.";
    console.log(response);
    break;
  }
  return response;
}

switchOnCharmFromTip("not generous");