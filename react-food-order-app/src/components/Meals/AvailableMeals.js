import { useEffect, useState } from 'react';
import Card from '../UI/Card';
import classes from './AvailableMeals.module.css';
import MealItem from './MealItem/MealItem';

const AvailableMeals = () => {
   const [meals, setMeals] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [hasError, setHasError] = useState(null);
   useEffect(() => {
      setIsLoading(true);

      const fetchMeals = async () => {
         const response = await fetch(
            'https://react-food-app-3433b-default-rtdb.asia-southeast1.firebasedatabase.app/meals.json',
            {
               mode: 'cors',
            }
         );
         if (!response.ok) {
            throw new Error('something went wrong');
         }
         const responseData = await response.json();

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
         setIsLoading(false);
      };

      fetchMeals().catch((err) => {
         setIsLoading(false);
         setHasError(err.message);
      });
   }, []);

   if (isLoading) {
      return (
         <section className={classes['meal-loading']}>
            <p>Loading...</p>
         </section>
      );
   }

   if (hasError) {
      return (
         <section className={classes['meal-loading-error']}>
            <p>{hasError}</p>
         </section>
      );
   }

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
