// ================================= Mock Server Start =============================
var FAILURE_COEFF = 10;
var MAX_SERVER_LATENCY = 200;

function getRandomBool(n) {
  var maxRandomCoeff = 1000;
  if (n > maxRandomCoeff) n = maxRandomCoeff;
  return Math.floor(Math.random() * maxRandomCoeff) % n === 0;
}

function getSuggestions(text) {


  
  var pre = 'pre';
  var post = 'post';
  var results = [];
  if (getRandomBool(2)) {
    results.push(pre + text);
  }
  if (getRandomBool(2)) {
    results.push(text);
  }
  if (getRandomBool(2)) {
    results.push(text + post);
  }
  if (getRandomBool(2)) {
    results.push(pre + text + post);
  }
  new Promise((resolve, reject) => {
    var randomTimeout = Math.random() * MAX_SERVER_LATENCY;
    console.log(randomTimeout)
    setTimeout(() => {
      if (getRandomBool(FAILURE_COEFF)) {
        reject();
      } else {

        /* console.log("in else")
         console.log(results)*/
        resolve(results);
      }
    }, randomTimeout);
  });


  return results;

}



export default getSuggestions;
// ================================= Mock Server End =============================