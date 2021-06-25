// import React, { Component } from "react";

// export default class App extends Component {
//   state = {
//     name: "skill hub",
//   };
//   render() {
//     return (
//       <div>
//         <h1>welcome to {this.state.name}</h1>
//       </div>
//     );
//   }
// }

import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("skill Hub");
  return (
    <div>
      <h1>welcome to {name}</h1>
    </div>
  );
};

export default App;
