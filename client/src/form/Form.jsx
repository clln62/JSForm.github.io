import React from 'react';
import Name from './components/Name.jsx';
import BirthDate from './components/BirthDate.jsx';
import Email from './components/Email.jsx';
import Phone from './components/Phone.jsx';


const Form = (props) => {
    return (
        <div id="form">
            <form>
                <Name onChangeField={props.onChangeField}/>
                <BirthDate onChangeField={props.onChangeField} />
                <Email onChangeField={props.onChangeField} />
                <Phone onChangeField={props.onChangeField} />
            </form>
        </div>
    )
}

export default Form;