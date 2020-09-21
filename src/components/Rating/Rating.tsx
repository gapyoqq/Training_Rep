import React, {useState} from "react";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';


export type RatingValueType = 0| 1| 2| 3| 4| 5;

type RatingType = {
    value: RatingValueType
    onMyClick: (value:RatingValueType ) => void
}



export function Rating(props: RatingType) {

    return <div>
        <Star value={1} onMyClick={props.onMyClick} selected={props.value>0}/>
        <Star value={2} onMyClick={props.onMyClick} selected={props.value>1}/>
        <Star value={3} onMyClick={props.onMyClick} selected={props.value>2}/>
        <Star value={4} onMyClick={props.onMyClick} selected={props.value>3}/>
        <Star value={5} onMyClick={props.onMyClick} selected={props.value>4}/>

    </div>
}


type StarType = {
    selected: boolean
    onMyClick: (value:RatingValueType ) => void
    value: RatingValueType
}

function Star(props: StarType) {
    const onMyClickHandler = ()=> {
        props.onMyClick(props.value)
    }
    return <span onClick={onMyClickHandler}>
        {props.selected ? <StarIcon/> : <StarBorderIcon/>}
    </span>
}


