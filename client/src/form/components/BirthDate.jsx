import React from 'react';

const BirthDate = (props) => {
    return (
        <div className="input_field">
            <input type="text" placeholder="Birth Date" name="birth" onChange={props.onChangeField}></input>
        </div>
    )
}

export default BirthDate;