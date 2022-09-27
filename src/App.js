// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
function App(){
  let fact = x => {
    if (x % 1 !== 0) {
        x = parseInt(x);
    }
    if (x === 0) return 1;
    if (x === 1) return 1;
    return x * fact(x - 1);
}

// const arr = []
let prime=()=>{
const prime_number = []
for(var i=2;i<=100;i++){
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


  return(
    <div className="App">
      <b>Task 1<br/><h2>Q1. In index.js create an arrow function for calculating a factorial, then pass an integer and display its factorial as root element inside heading tag.</h2></b>
      <p>factorial of 5 is :{fact(5)}</p>
      <hr></hr>
      <b>Task 2<br/><h2>Q2. In index.js make an arrow function Prime() that prints all prime nos. from 1 to 100.</h2></b>
      <p>prime numbers are: {prime().map((item) => <li>{item}</li>)}</p>
      <hr></hr>
    </div>
  );

  }
export default App;

