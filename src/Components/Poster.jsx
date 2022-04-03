import React, { useState, useEffect } from 'react'
import './Style.css'

const url = 'https://www.themealdb.com/api/json/v1/1/random.php'


const Poster = () => {
    const [meals, setMeals] = useState([])

    const fetchMeal = async () => {
        const response = await fetch(url)
        const data = await response.json()
        console.log(data);
        setMeals(data.meals)
    }

    useEffect(() => {
        fetchMeal();
    }, []);

    function truncate(str, n) {
        return str?.length > n ? str.substr(0, n - 1) + "........" : str;
    }


    return (
        <header className="meals__poster">
            {meals.map((f) => {
                const { idMeal, strMeal, strInstructions, strMealThumb,strYoutube } = f
                return (
                    <div className="meals__poster" key={idMeal}
                        style={{
                            backgroundSize: "cover",
                            backgroundImage: `url(${strMealThumb})`,
                            backgroundPosition: "center center"
                        }}>
                        <div className="poster_content">
                            <h1 className='poster_title'>{strMeal}</h1>
                            <h1 className='poster_insta'>           
                            {truncate(strInstructions, 150)}
                            </h1>
                            <div className="buttons">
                                <a  href= {strYoutube} className="poster_button" >Recipe</a>
                            </div>
                        </div>
                    </div>
                )
            })}
        </header>
    )
}

export default Poster