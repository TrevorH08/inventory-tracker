import React from "react";

function App(){
  const tea = "Earl Grey";
  const tea2 = "Passion"
  return (
    <React.Fragment>
      <h1>Jade Dragon Tea</h1>
      <h3>{tea}</h3>
      <h3>$30/lbs</h3>
      <p><em>A nice, strong tea that has hints of lavender in it.</em></p>
      <h3>{tea2}</h3>
      <h3>$30/lbs</h3>
      <p><em>insert something about passion tea</em></p>
      <hr/>
    </React.Fragment>
  );
}

export default App;