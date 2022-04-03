import React from 'react'
import './Style.css'

const MealItem = (getMeal) => {
    console.log(getMeal.data);
    return (
        <div>
            <div className="card">

                <img src={getMeal.data.strMealThumb} alt="" />

                <div className="info">
                    <h2>{getMeal.data.strMeal}</h2>
                    <p>{getMeal.data.strArea} food</p>
                </div>

                <div className="mealbuttons">
                    <a href={getMeal.data.strYoutube} type="button" className="btn btn-primary btn-sm">Recipe</a>
                </div>
            </div>
        </div>
    )
}

export default MealItem