import React, {useState} from 'react';
import {ReactComponent as Stars} from '../../icon/star.svg'
import style from './rate.module.css'

export default function Rate({rating}) {
    const [intoRating, setRating] = useState(rating);
    return (
        <div className={style.rateWrapper}>
            {[...Array(5)].map((_, index) => {
                const ratingValue = index + 1;
                return (
                    <label key={index}>
                        <input
                            className={style.input}
                            type="radio"
                            value={ratingValue}
                            onClick={() =>rating ? {} : setRating(ratingValue)}/>
                        <Stars className={ratingValue <= intoRating ? style.starActive : style.starDisable}/>
                    </label>
                )
            })}
        </div>
    )
}