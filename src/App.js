
function App(){
  let fact = x => {
    if (x % 1 !== 0) {
        x = parseInt(x);
    }
    if (x === 0) return 1;
    if (x === 1) return 1;
    return x * fact(x - 1);
}

// function for find the prime number.
let prime=()=>{
const prime_number = []
for(var i=1;i<=100;i++){
  for(var j=2;j<i;j++ ){

    if(i%j === 0){ 													
      break															
    }																
  }																	
  if(i === j){ 
    prime_number.push(i)
  }
  
}
return prime_number;
}

// array storing names of cities
var cities=['bangaluru','mangaluru','ballery','vijaypura','bellagavi','chikamagaluru','kalaburagi','mysuru','hosapete','shivamogga','hubbali','tumakuru'];
//sorting the city in assending order
var arr=cities.sort((a,b)=>
a.localeCompare(b));



// here i am searching the name of city whose first letter is "b"
var arr1=cities.filter((city)=>city.startsWith("b"));
console.log(arr1);

 return(
    <div className="App">
      <b>Task 1<br/><h2>Q1. In index.js create an arrow function for calculating a factorial, then pass an integer and display its factorial as root element inside heading tag.</h2></b>
      <p>factorial of 5 is :{fact(5)}</p>
      <hr></hr>
      <b>Task 2<br/><h2>Q2. In index.js make an arrow function Prime() that prints all prime nos. from 1 to 100.</h2></b>
      <p>prime numbers are: {prime().map((item) => <li>{item}</li>)}</p>
      <hr></hr>
      <b>Task3<br/><h2>Q3. Make an array storing names of cities, then print them as unordered list in ascending order using arrow function and map</h2></b>
      <p>{<ul><li>{arr.map((item)=><li>{item}</li>)}</li></ul>}</p>
      <hr />
      <b>Task 4<br/>Q4. In the above task find all the cities whose name start with 'B'</b>
      <p>{<ul><li>{arr1.map((item)=><li>{item}</li>)}</li></ul>}</p> 
   </div>
  );

} 
export default App;

 