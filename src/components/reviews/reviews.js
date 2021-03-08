import React from 'react';
import Review from "./review";

export default function Reviews({review}){
    return(
        <div>
            {review.map(review => <Review key={review.id} review={review}/>)}
        </div>
    )
}