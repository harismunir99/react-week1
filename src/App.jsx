// function App(){
//   return (
//     <div>
//       <h1>First React App</h1>
//     </div>
//   );
// }

// export default App;

// 2nd example
// function ProfileCard({name, role, city}) {
//   return (
//     <div style={{border: "1px solid gray", padding: "16px", borderRadius:"8px", marginBottom:"10px"}}>
//       <h2>{name}</h2>
//       <p>{role}</p>
//       <p>{city}</p>
//     </div>
//   );

// }

// function App() {
//   return (
//     <div style={{ padding: "20px"}}>
//       <ProfileCard name="Alice Johnson" role="Software Engineer" city="New York" />
//       <ProfileCard name="Bob Smith" role="Product Manager" city="San Francisco" />
//       <ProfileCard name="Charlie Brown" role="UX Designer" city="Chicago" />
//     </div>
//   );
// }

// export default App;

// 3rd example

// import { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Count: {count}</h1>
//       <button onclick={() =>setCount(count + 1)}>+1</button>
//       <button onclick={() =>setCount(count - 1)}>-1</button>
//       <button onclick={() =>setCount(0)}>Reset</button>
//     </div>
//   );
// }

// function App() {
//   return <Counter />;
// }
// export default App; 

// final complete

// import { useState } from "react";

// function ProfileCard({ name, role, city})

// {
//     return (
//         <div style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px", marginBottom: "10px"}}>
//             <h2>{name}</h2>
//             <p>{role}</p>
//             <p>{city}</p>
        
//         </div>
//     );
// }

// function Counter ()
// {
//     const [count, setCount] = useState(0);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h2>Count: {count}</h2>
//       <button onClick={() => setCount(count + 1)}>+1</button>
//       <button onClick={() => setCount(count - 1)}>-1</button>
//       <button onClick={() => setCount(0)}>Reset</button>
//     </div>
//   );
// }

// function App()
// {

//     return (
//         <div style={{padding: "20px"}}>
//             <h1>My first React App!</h1>
//             <ProfileCard name= "Ali" role= "Developer" city= "karachi"/>
//             <ProfileCard name= "Khan" role= "Tester" city= "multan"/>
//             <Counter />
//         </div>
//     );
// }

// export default App;

// day 2

// import { useEffect } from "react";

// function App()
// {
//     useEffect(() => {
//         console.log ("App loading...!");
//     }, []
// );

// return (
//     <div>
//         <h1>learing useeffect</h1>
//     </div>
// );

// }

// export default App;


// weather App with API

// import { useState, useEffect } from "react";

// function App()
// {
//     const [weather, setWeather] = useState(null);
//     const [loading, setLoading] = useState(true);

//     useEffect(() => {
//         fetch(
//              `https://api.openweathermap.org/data/2.5/weather?q=Karachi&appid=1e59e6183e4c6ebf98582bcb6a642d3b&units=metric`
//         )
//         .then((res) => res.json())
//         .then ((data) => {
//             setWeather(data);
//             setLoading(false);
//         });
//     }, []
// );

// if (loading) return <h2>Loading.....</h2>;

// return (
//     <div style={{padding: "20px"}}>
//         <h1> Weather in {weather.name}</h1>
//         <h2> {weather.main.temp}°C</h2>
//         <p>{weather.weather[0].description}</p>
//     </div>
// );

// }

// export default App;

// weather app practice
// import { useState, useEffect } from "react";

// function App() {
//   const [city, setCity] = useState("Karachi");
//   const [search, setSearch] = useState("Karachi");
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     setLoading(true);
//     fetch(
//       `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1e59e6183e4c6ebf98582bcb6a642d3b&units=metric`
//     )
//       .then((res) => res.json())
//       .then((data) => {
//         setWeather(data);
//         setLoading(false);
//       });
//   }, [search]);

//   return (
//     <div style={{ padding: "20px" }}>
//       <h1>Weather App 🌤️</h1>
//       <input
//         type="text"
//         placeholder="City likho..."
//         value={city}
//         onChange={(e) => setCity(e.target.value)}
//         style={{ padding: "8px", fontSize: "16px" }}
//       />
//       <button
//         onClick={() => setSearch(city)}
//         style={{ padding: "8px 16px", marginLeft: "8px", fontSize: "16px" }}
//       >
//         Search 🔍
//       </button>
//       {loading ? (
//         <h2>Loading...</h2>
//       ) : (
//         <div>
//           <h2>{weather.name}</h2>
//           <h1>{weather.main.temp}°C</h1>
//           <p>{weather.weather[0].description}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;

// final app weather

import { useState } from "react";
import useFetch from "./useFetch";

function App() {
  const [city, setCity] = useState("Karachi");
  const [search, setSearch] = useState("Karachi");

  const { data: weather, loading } = useFetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=1e59e6183e4c6ebf98582bcb6a642d3b&units=metric`
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Weather App 🌤️</h1>
      <input
        type="text"
        placeholder="City likho..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
        style={{ padding: "8px", fontSize: "16px" }}
      />
      <button
        onClick={() => setSearch(city)}
        style={{ padding: "8px 16px", marginLeft: "8px", fontSize: "16px" }}
      >
        Search 🔍
      </button>
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        <div>
          <h2>{weather.name}</h2>
          <h1>{weather.main.temp}°C</h1>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;