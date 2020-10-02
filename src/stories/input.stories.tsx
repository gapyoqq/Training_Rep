import React, {ChangeEvent, useRef, useState} from 'react';
import {action} from "@storybook/addon-actions";


export default {
    title: 'Input',
    /* component: Input,*/
}

export const UncotrolledInput = () => <input/>
export const TrackValueUncotrolledInput = () => {
    const OnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    const [value, setValue] = useState('')

    return <><input onChange={OnChange}/> -{value} </>
}

export const GetValueByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
    }

    return <><input ref={inputRef}/>
        <button onClick={save}>save
        </button>
        -actual value: {value}</>
}


export const CotrolledInput = () =>{
    const [parentValue,setParentValue] = useState('')

    return  <input
        value={parentValue}
        onChange={(e)=>{setParentValue(
        e.currentTarget.value)}
        }/>
}


export const CotrolledCheckbox = () => <input value={'privet kak dela?'}/>

export const CotrolledSelect = () => <input value={'privet kak dela?'}/>
