import React from 'react';

const Phone = (props) => {
    return (
        <div className="input_field">
            <input type="text" placeholder="Phone" name="phone" onChange={props.onChangeField}></input>
        </div>
    )
}

export default Phone;