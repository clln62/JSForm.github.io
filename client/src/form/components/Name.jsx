import React from 'react';

const Name = (props) => {
    return (
        <div className="input_field">
            <input type="text" placeholder="Name" name="name" onChange={props.onChangeField}></input>
        </div>
    )
}

export default Name;