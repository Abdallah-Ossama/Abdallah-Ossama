import "./ServiceCard.css";

const Card = ({title, img}) => {
  return (
    <div className='card'>
      <div className="container">
        <img src={img} alt="web"/>
        <h1>{title}</h1>
        <button>Order Now</button>
      </div>
    </div>
  )
}

export default Card