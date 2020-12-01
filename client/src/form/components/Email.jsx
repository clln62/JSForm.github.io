import React from 'react';

const Email = (props) => {
    return (
        <div className="input_field">
            <input type="text" placeholder="Email" name="email" onChange={props.onChangeField}></input>
        </div>
    )
}

export default Email;