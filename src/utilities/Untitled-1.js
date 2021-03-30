import getSuggestions from "./API"

var  a = '';
for(var i=9,a='';++i<36;)
{
  if(i < 35){
    a+=i.toString(36)+"-"
  }
  else{
    a+=i.toString(36)
  }
  
  var alphas = a.split('-')
}

//let result = getSuggestions("p")

var numbers = new Array(1, 4, 9);
let result = alphas.map((key,value) => {
  
 let data = getSuggestions(key)
  data.map((item) => {
    var length = numbers.push(item); 
    })
 

});

let result1 = numbers;
const input = (value) =>{
  result = getSuggestions(value)
  

}


console.log(result1)
let output = result1.map((title) => (
   {title}
 ))
 console.log(output)


  export default output
  export { input , output }