import React from 'react';
import './check.css';
import {useState} from "react";

const Check = () => {
    const vr = (password) =>{
        var rxp = new RegExp (/[A-Z]/);
        return(rxp.test(password));
    }

    const nms = (password) =>{
        var rxp = new RegExp (/[0-9]/);
        return(rxp.test(password));
    }

    const nr = (password) =>{
        var rxp = new RegExp (/[a-z]/);
        return(rxp.test(password));
    }

    const validate = (password) =>{
        let arr = password.split('')
        if(arr.length >= 6 && nr(password) && nms(password) && vr(password))
            return true;
        else
            return false;
    }
    const[val,setVal] = useState('')

    const setClass = (id,stylee) =>{
        const htag = document.getElementById(id)
        htag.className=stylee
    }
    const setGlobalClass = (stylee) =>{
        const ht1 = document.getElementById('t1')
        const ht2 = document.getElementById('t2')
        const ht3 = document.getElementById('t3')
        ht1.className=stylee
        ht2.className=stylee
        ht3.className=stylee
    }

    const classLogic = () =>{
        const htag1 = document.getElementById('t1')
        htag1.className = nms(val) ? "h1act" : "h1"
        const htag2 = document.getElementById('t2')
        htag2.className = vr(val) ? "h1act" : "h1"
        const htag3 = document.getElementById('t3')
        htag3.className = nr(val) ? "h1act" : "h1"
    }

    const onChecked = (e) =>{
        if(document.getElementById('ch1').checked === true)
        {
            document.getElementById('psw').setAttribute('type','text')
        }
        else
        {
            document.getElementById('psw').setAttribute('type','password')
        }
    }
    return (
        <div>
            <h1 className={nms(val) ? "h1act" : "h1"} id='t1'>Содержит цифры</h1>
            <h1 className={vr(val) ? "h1act" : "h1"} id='t2'>Содержит символы верхнего регистра</h1>
            <h1 className={nr(val) ? "h1act" : "h1"} id='t3'>Содержит символы нижнего регистра</h1>
            <input
                type="password"
                id="psw"
                onChange={e => setVal(e.target.value)}
                onBlurCapture={e => setGlobalClass('h1')}
                onFocus={e => classLogic()}
            />
            <input
                type="checkbox"
                name="check"
                id="ch1"
                onChange={onChecked}
            />
            <label htmlFor="check">Скрыть/показать пароль</label>
            <button disabled={validate(val) ? false : true}>Зарегестрироваться</button>
        </div>
    );
};

export default Check;