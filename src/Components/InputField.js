import React, { useState } from 'react';

const InputField = (props) => {

    const { buttonClicked } = props;
    const [searchKey, setSearchKey] = useState('');
    function inputChangeHandler(e){
        setSearchKey(e.target.value);
    }
    const inputEnter = (e) => {
        if(e.key === 'Enter'){
            buttonClicked(searchKey);
        }else{
            return
        }
    }

    return(
        <div className="ui input" id="search-field">
            <input required
                    value={searchKey}
                    type="text"
                    onChange={inputChangeHandler}
                    onKeyPress={inputEnter} />
            <button className="ui button" type="submit" onClick={()=>buttonClicked(searchKey)}>Search</button>
            <br />
            <h1>{searchKey}</h1>
        </div>
    )
}

export default InputField;