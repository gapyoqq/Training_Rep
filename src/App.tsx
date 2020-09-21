import React, {useState} from 'react';
import './App.css';
import Accordion from "./components/Accardion/Accordion";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import OnOff from "./components/OnOff/OnOff";



function App() {

    let [on, setOn]=useState(false)
    let [ratingValue,setRatingValue] = useState<RatingValueType>(3)
    let [collapsed, setCollapsed]=useState<boolean>(true)
    let [collapsed2, setCollapsed2]=useState<boolean>(true)

    return (

        <div className="App">
            <OnOff
                on={on}
                setOn ={setOn} />

            <Accordion
                setCollapsed={setCollapsed}
                collapsed={collapsed} title='Menu' />
            <Accordion setCollapsed={setCollapsed2}
                       collapsed={collapsed2} title='Users' />
            <Rating
                onMyClick={setRatingValue}
                value={ratingValue} />

        </div>
    );
}


export default App;
