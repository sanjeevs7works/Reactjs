import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
   const [meals, setMeals] = useState([]);
   useEffect(() => {
      const fetchMeals = async () => {
         const data = await fetch(
            'https://react-food-app-3433b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json'
         );
         const responseData = await data.json();

         let loadedData = [];
         for (let key in responseData) {
            loadedData.push({
               id: key,
               name: responseData[key].name,
               description: responseData[key].description,
               price: responseData[key].price,
            });
         }
         setMeals(loadedData);
      };
      fetchMeals();
   }, []);

   const mealList = meals.map((meal) => (
      <MealItem
         key={meal.id}
         id={meal.id}
         name={meal.name}
         description={meal.description}
         price={meal.price}
      />
   ));
   return (
      <section className={classes.meals}>
         <Card>
            <ul>{mealList}</ul>
         </Card>
      </section>
   );
};
export default AvailableMeals;
