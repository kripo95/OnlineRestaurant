import React from 'react';
import style from './navigation.module.css';

export default function Navigation({restaurants, onRestaurantClick}) {
    return (
        <div className={style.navigationWrapper}>
            {restaurants.map((restaurant) => {
                return <div className={style.navigationItem} key={restaurant.id}
                            onClick={() => onRestaurantClick(restaurant.id)}>
                    <span>{restaurant.name} </span>
                </div>;

            })}
        </div>
    )
}