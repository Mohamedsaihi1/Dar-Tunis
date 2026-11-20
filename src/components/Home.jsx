import imageSite from '../assets/site.jpg'

function Home() {
  return (
    <div className="home-container">
      <div className="home-card">
        <img src={imageSite} alt="Dar Tounsi" />
        <h1>Welcome to Dar Tounsi</h1>
        <p>Discover the authentic taste of Tunisia.</p>
      </div>
    </div>
  )
}

export default Home