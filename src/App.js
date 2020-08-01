import React, {useState} from 'react';
import GetData from './Components/GetData';
import InputField from './Components/InputField';


function App() {
  const [searchKey, setSearchKey] = useState('')
  const buttonClicked = (data) => {
    setSearchKey(data);
  }

  return (
    <div className="App">
      <InputField buttonClicked={buttonClicked} />
      <GetData searchKey={searchKey}/>
    </div>
  );
}

export default App;
