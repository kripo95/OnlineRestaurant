import React from 'react';
import Rate from "../../rate";

export default function Review({review}){
     const {user, text, rating} = review

    return (
        <div>
            <p>{user}</p>
            <p>{text}</p>
            <Rate rating={rating}/>
        </div>
    )
}