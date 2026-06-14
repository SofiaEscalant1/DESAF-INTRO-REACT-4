import img1 from '../assets/img1.avif'
import './Header.css'

export function Header() {
  return (
    <section className="home-header">
      <div className="header-bg" style={{ backgroundImage: `url(${img1})` }}>
        <div className="header-overlay d-flex align-items-center justify-content-center text-center text-white px-3">
          <div>
            <h1 className="display-5 fw-bold">Pizzería Mamma Mia!</h1>
            <p className="lead mb-0">
              ¡Tenemos las mejores pizzas que podrás encontrar, con sabor artesanal y un toque de tradición!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
