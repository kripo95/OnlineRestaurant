import React, {useState, useMemo} from "react";
import Menu from "../menu";
import Reviews from "../reviews";
import Rate from "../rate";

export default function Restaurant({restaurant}) {
    const {name, menu, reviews} = restaurant;
    const [activePage, setActivePage] = useState('menu');
    const averageRating = useMemo(()=> {
        const total = reviews.reduce((sum, { rating }) => sum + rating, 0);
        return Math.floor(total / reviews.length);
    })
    return (
        <div>
            <h1>{name}</h1>
            <Rate rating={averageRating}/>
            <div>
                <button onClick={() => setActivePage('menu')}>menu</button>
                <button onClick={() => setActivePage('reviews')}>reviews</button>
            </div>
            {activePage === 'menu' ? <Menu menu={menu}/> :
                <Reviews review={reviews}/>}
        </div>
    )

}