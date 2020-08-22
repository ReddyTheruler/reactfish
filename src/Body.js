import React, {useState, useEffect} from 'react';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Body(props) {
  const[items, setitems] = useState([])

	useEffect(() => {
		fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood')
		.then(response => response.json())
		.then(data =>{setitems(data.meals)})
	},[])

	const itemslist = items.map(item => {
		return <div className="col-md-4">
		<p> {item.strMeal} </p>
		<img src={item.strMealThumb}/>
		<p> {item.idMeal} </p>
		</div>
	})

	return (
		<div>
		<div className="row mt-5">

			{itemslist}

		</div>
		</div>
	)
}





export default Body;