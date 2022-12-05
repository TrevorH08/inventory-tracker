import React from "react";
import Header from "./Header";
import TeaList from "./TeaList";

function App(){
  const tea = "Earl Grey";
  const tea2 = "Passion"
  return (
    <React.Fragment>
      <Header />
      <TeaList />
    </React.Fragment>
  );
}

export default App;