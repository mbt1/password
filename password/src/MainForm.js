import React from "react";
import MainFormOption from "./MainFormOption";

function newPassword(passwordOptions){
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const numberChars = '0123456789';
    const specialChars = '!"#$%&()*+,-./:;<=>?@[]^_`{|}~\'\\';
    const spaceChars = " ";
    const myChars = [
            (passwordOptions.uppercase?uppercaseChars:""),
            (passwordOptions.lowercase?lowercaseChars:""),
            (passwordOptions.number?numberChars:""),
            (passwordOptions.special?specialChars:""),
            (passwordOptions.space?spaceChars:""),
            passwordOptions.includeset
        ].join("").replace(new RegExp(`[${passwordOptions.excludeset}]+`,"g"),"");
    console.log(myChars,passwordOptions.excludeset)
    const myCharsLength = myChars.length;
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
        number:true,
        special:true,
        space:true,
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
                <MainFormOption type="text" name='length' text="Password Length" options={passwordOptions} />
                <MainFormOption type="checkbox" name='lowercase' text="Include Lowercase Letters"  options={passwordOptions} />
                <MainFormOption type="checkbox" name='uppercase' text="Include Uppercase Letters"  options={passwordOptions} />
                <MainFormOption type="checkbox" name='number' text="Include Numbers"  options={passwordOptions} />
                <MainFormOption type="checkbox" name='special' text="Include Special Characters"  options={passwordOptions} />
                <MainFormOption type="checkbox" name='space' text="Include Spaces"  options={passwordOptions} />
                <MainFormOption type="text" name='includeset' text="Include these" options={passwordOptions} />
                <MainFormOption type="text" name='excludeset' text="Exclude these" options={passwordOptions} />
            </section>
        </section>
    );
}


