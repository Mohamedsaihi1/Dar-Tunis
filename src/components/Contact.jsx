import carteImage from '../assets/maps.jpg'

function Contact() {
  return (
    <div className="contact-container">
      <h2>Contactez-nous</h2>
      <p><strong>Adresse :</strong> 20 rue Baytem Tounsi, Bardo</p>
      <p><strong>Téléphone :</strong> +216 12 345 678</p>
      <img src={carteImage} alt="Carte Bardo" />
    </div>
  )
}

export default Contact