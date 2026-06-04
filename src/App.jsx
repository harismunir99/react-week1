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

import { useState } from "react";

function ProfileCard({ name, role, city})

{
    return (
        <div style={{ border: "1px solid gray", padding: "16px", borderRadius: "8px", marginBottom: "10px"}}>
            <h2>{name}</h2>
            <p>{role}</p>
            <p>{city}</p>
        
        </div>
    );
}

function Counter ()
{
    const [count, setCount] = useState(0);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>
      <button onClick={() => setCount(count - 1)}>-1</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
}

function App()
{

    return (
        <div style={{padding: "20px"}}>
            <h1>My first React App!</h1>
            <ProfileCard name= "Ali" role= "Developer" city= "karachi"/>
            <ProfileCard name= "Khan" role= "Tester" city= "multan"/>
            <Counter />
        </div>
    );
}

export default App;
