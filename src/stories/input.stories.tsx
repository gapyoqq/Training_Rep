import React, {ChangeEvent, useRef, useState} from 'react';


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


export const CotrolledInput = () => <input value={'privet kak dela?'}/>
