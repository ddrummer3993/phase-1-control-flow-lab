function scuberGreetingForFeet(depth) {
  let charge;
  if (depth <= 400) {
    charge = 'This one is on me!';
  } else if (depth > 2000 && depth <= 2500) {
      charge = 'I will gladly take your thirty bucks.';
  } else if (depth > 2500) {
      charge = 'No can do.';
  };
  return charge;
};

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
};

function switchOnCharmFromTip(amount){
  let response;
  switch (amount) {
    case 'generous':
      response = 'Thank you so much.';
      break;
    case 'not as generous':
      response = 'Thank you.';
      break;
    default:
      response = 'Bye.';
    };
  return response;
};