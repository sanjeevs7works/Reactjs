import ProductItem from './ProductItem';
import classes from './Products.module.css';

const dummyData = [
   {
      id: 'm1',
      title: 'Test',
      price: 6,
      description: 'This is a first product - amazing!',
   },
   {
      id: 'm2',
      title: 'new test',
      price: 5,
      description: 'my new product added',
   },
];
const Products = (props) => {
   return (
      <section className={classes.products}>
         <h2>Buy your favorite products</h2>
         <ul>
            {dummyData.map((item) => (
               <ProductItem
                  id={item.id}
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  description={item.description}
               />
            ))}
         </ul>
      </section>
   );
};

export default Products;
