import React, {useState} from 'react';
import {Rating, RatingValueType} from "./Rating";


export default {
    title: 'Rating stories',
    component: Rating,
}


export const EmptyStars = () => <Rating value={0} onMyClick={x => x}/>
export const Rating1 = () => <Rating value={1} onMyClick={x => x}/>
export const Rating2 = () => <Rating value={2} onMyClick={x => x}/>
export const Rating3 = () => <Rating value={3} onMyClick={x => x}/>
export const Rating4 = () => <Rating value={4} onMyClick={x => x}/>
export const Rating5 = () => <Rating value={5} onMyClick={x => x}/>
export const RatingChanging = () => {
    const [rating, setRating]=useState<RatingValueType>(0)
        return  <Rating value={rating} onMyClick={setRating}/>
}
