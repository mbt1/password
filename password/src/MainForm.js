import React from "react";

export default function MainForm(){
    const initialState = {
        length:20,
        lowercase:true,
        uppercase:true,
    }
    let [values,recordChange]=React.useState(initialState)
    const onChange = (e)=>{
        recordChange(pv=>({...pv,lowercase:!pv.lowercase}))
    }

    return(
        <section className="MainForm">
            <textarea id="MainForm--PasswordOutput" readOnly="true"/>
            <span>
                <input type="text" id="MainForm--Length" name="length" value="20" />
                <label htmlFor="MainForm--Length">Password Length</label>
            </span>
            <span>
                <input type="checkbox" id="MainForm--lowercase" name="lowercase" checked={values.lowercase} />
                <label htmlFor="MainForm--lowercase">Include Lowercase Letters</label>
            </span>
            <span>
                <input type="checkbox" id="MainForm--uppercase" name="uppercase" checked={true} onChange={onChange}/>
                <label htmlFor="MainForm--uppercase">Include Uppercase Letters</label>
            </span>
        </section>
    );
}