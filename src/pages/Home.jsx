import React, { useState } from 'react'
import ItemsCard from "../Components/ItemCard/itemCard"
import { useItemsState } from '../Providers/Providers'
function Home() {
    const items = useItemsState()
    const [searchboxintelligence, setsearchboxintelligence] = useState('')
    return (
        <div className="home">
            <input type="text"
                placeholder="Search..."
                onChange={event => {
                    setsearchboxintelligence(event.target.value)
                }} />
            <div className="BoxCard">
                {items && items.filter((val) => {
                    const filterValueOne = val.title != null ? val.title : val.name;
                    const filterValueTwo = val.category != null ? val.category : val.email;

                    if (searchboxintelligence === "") {
                        return val
                    }
                    else if (filterValueOne.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    else if (filterValueTwo.toLowerCase().includes(searchboxintelligence.toLowerCase())) {
                        return val
                    }
                    return null
                }).map((item, index) => (
                    <ItemsCard itemData={item} key={index} />

                ))}
            </div>
        </div>
    )


}

export default Home
