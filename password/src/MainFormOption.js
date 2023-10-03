import React from "react";

export default function MainFormOption({type,name,text,options}) {
    const id = "MainForm--"+name
    const attribs = {
        type:type,
        id:id,
        name:name,
    }
    if(type==="checkbox"){
        attribs.checked = options[name]
    }else{
        attribs.value=options[name]
    }
    return (
        <span>
            <input {...attribs} />
            <label htmlFor={id}>{text}</label>
        </span>
    );
}
