import React, {useState} from 'react';
import './App.css';
import {Accordion} from "./components/Accordion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {OnOff} from "./components/OnOff/OnOff";


function App() {

    let [on, setOn] = useState(false)
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [collapsed, setCollapsed] = useState<boolean>(true)
    let [collapsed2, setCollapsed2] = useState<boolean>(true)
const onClickCallBack = () => {}


    return (

        <div className="App">
            <OnOff
                on={on}
                setOn={setOn}/>

            <Accordion
                items={[{value:2, title: 'Sasha'}]}
                onClick={onClickCallBack}
                setCollapsed={setCollapsed}
                collapsed={collapsed} title='Menu'/>
            <Accordion
                items={[{value:2, title: 'Sasha'}]}
                onClick={onClickCallBack}
                setCollapsed={setCollapsed2}
                collapsed={collapsed2} title='Users'/>
            <Rating
                onMyClick={setRatingValue}
                value={ratingValue}/>

        </div>
    );
}


export default App;
