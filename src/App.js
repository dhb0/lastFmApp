import React, { useState } from 'react';
import ArtistCardHolder from "./Components/ArtistCardHolder";
import InputField from "./Components/InputField";

function App() {

const [query, setQuery] = useState('');

  const buttonClicked = (query) =>{
      setQuery(query)
  }

  return (
    <div className="App">
      <InputField buttonClicked={buttonClicked} />
      <ArtistCardHolder query={query} />
    </div>
  );
}

export default App;
