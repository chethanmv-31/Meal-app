import MealItem from './MealItem'
import './Style.css'
import { useState } from 'react'

const Meals=()=> {
    const [search, setSearch] = useState("");
    const [Mymeal, setMeal] = useState();
    const searchMeal = (evt) => {
        if (evt.key === "Enter") {

            fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
                .then(res => res.json())
                .then(data => {
                    setMeal(data.meals)
                    // console.log(data)
                })
        }
    }
    return (
        <div className="main">
            <div className="heading">
            <h1>Meal App</h1>
                <h4> Search your favorite Recipes here </h4>
            </div>
            <div className="searchBox">
                <input type="search" name="Search" id="search" className='search-bar' placeholder='Enter food name' onChange={(e) => setSearch(e.target.value)} value={search} onKeyPress={searchMeal} />
            </div>
            <div className="container">
                {
                    (Mymeal == null) ? <p>Not Found</p> : Mymeal.map((res) => {
                        return (
                            <MealItem  data={res}/>

                        )
                    })
                }
            </div>
        </div>
    )
}

export default Meals