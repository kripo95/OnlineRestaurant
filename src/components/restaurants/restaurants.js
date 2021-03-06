import React, {useState, useMemo} from 'react';
import Navigation from "../navigation";
import Restaurant from "../restaurant";
import style from './restaurants.module.css'
export default function Restaurants({restaurants}) {
    const [activeId, setActiveId] = useState(0);
    const activeRestaurant = useMemo(()=> restaurants.find(restaurant => restaurant.id === activeId), [activeId, restaurants]);
    return (
        <div className={style.restaurantWrapper}>
            {activeId !== 0 ? <Restaurant restaurant={activeRestaurant} /> : <Navigation restaurants={restaurants} onRestaurantClick={setActiveId}/>}
        </div>
    )
}
