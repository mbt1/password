import React from "react";

function newPassword(passwordOptions){
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz'
    const numberChars = '0123456789'
    const myChars = (
        (passwordOptions.uppercase?uppercaseChars:"")+
        (passwordOptions.lowercase?lowercaseChars:"")+
        (passwordOptions.number?numberChars:"")+
        ""
    );
    const myCharsLength = myChars.length;
    console.log(myCharsLength, myChars)
    let pwd = ""
    for(let i=0;i<passwordOptions.length;i++){
        pwd+=myChars.charAt(Math.floor(Math.random()*myCharsLength))
    }
    return pwd;
}

export default function MainForm(){
    const initialState = {
        length:20,
        lowercase:true,
        uppercase:true,
    }
    let [passwordOptions,recordChange]=React.useState(initialState)
    let [pwd,recordNewPassword]=React.useState(newPassword(passwordOptions))
    React.useEffect(()=>{recordNewPassword(newPassword(passwordOptions))},[passwordOptions]);

    const onChange = (e)=>{
        console.log(e.target.name, e.target.value, e.target.checked)
        recordChange(ppo=>({...ppo,[e.target.name]:(e.target.type==="checkbox")?e.target.checked:e.target.value}))
    }

    return(
        <section className="MainForm"  onChange={onChange}>
            <textarea id="MainForm--PasswordOutput" readOnly="true" value={pwd}/>
            <section className="MainForm--Options">
                <span>
                    <input type="text" id="MainForm--Length" name="length" value={passwordOptions.length} />
                    <label htmlFor="MainForm--Length">Password Length</label>
                </span>
                <span>
                    <input type="checkbox" id="MainForm--lowercase" name="lowercase" checked={passwordOptions.lowercase} />
                    <label htmlFor="MainForm--lowercase">Include Lowercase Letters</label>
                </span>
                <span>
                    <input type="checkbox" id="MainForm--uppercase" name="uppercase" checked={passwordOptions.uppercase}/>
                    <label htmlFor="MainForm--uppercase">Include Uppercase Letters</label>
                </span>
                <span>
                    <input type="checkbox" id="MainForm--number" name="number" checked={passwordOptions.number}/>
                    <label htmlFor="MainForm--number">Include Numbers</label>
                </span>
            </section>
        </section>
    );
}