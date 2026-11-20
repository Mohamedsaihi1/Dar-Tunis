function DishCard({ dish }) {
  return (
    <div className="dish-card">
      <img src={dish.image} alt="Image foods" />
      <h3>{dish['dish-name']}</h3>
      <p>{dish.category}</p>
      <p>{dish.description}</p>
      <p>{dish.ingredients.join(', ')}</p>
      <p className="price">{dish.price} DT</p>
    </div>
  )
}

export default DishCard