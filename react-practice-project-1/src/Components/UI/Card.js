import classes from './Card.module.css';
const Card = (props) => {
   const styled = `${classes.card} ${props.className} `;
   return <div className={styled}>{props.children}</div>;
};
export default Card;
