import { useState } from 'react'

function AdminAddDish() {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [price, setPrice] = useState('')
  const [image, setImage] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    alert(
      'Plat ajouté :\n' + 
      'Nom : ' + name + '\n' +
      'Description : ' + description + '\n' +
      'Prix : ' + price + ' DT\n' +
      'Image : ' + image
    )
    setName('')
    setDescription('')
    setPrice('')
    setImage('')
  }

  return (
    <div className="form-container">
      <h2>Ajouter un plat</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nom du plat"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <input
          type="number"
          step="0.1"
          placeholder="Prix (DT)"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          required
        />
        <input
          type="url"
          placeholder="Lien de l'image (URL)"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <button type="submit">Ajouter le plat</button>
      </form>
    </div>
  )
}

export default AdminAddDish