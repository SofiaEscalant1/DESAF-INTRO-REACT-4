import { Header } from '../Components/Header'
import { Cart } from './Cart'

const pizzas = [
  {
    name: 'Pizza Napolitana',
    price: 5950,
    ingredients: ['mozzarella', 'tomates', 'jamón', 'orégano'],
    img: 'https://images.unsplash.com/photo-1513104890138-7c749659a591'
  },
  {
    name: 'Pizza Española',
    price: 6950,
    ingredients: ['mozzarella', 'gorgonzola', 'parmesano', 'provolone'],
    img: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38'
  },
  {
    name: 'Pizza Pepperoni',
    price: 6950,
    ingredients: ['mozzarella', 'pepperoni', 'orégano'],
    img: 'https://images.unsplash.com/photo-1628840042765-356cda07504e'
  }
]

export function Home() {
  return (
    <section className="home-page">
      <Header />
      <div className="container py-4">
        <div className="row g-4">
          {pizzas.map((pizza) => (
            <div className="col-12 col-md-6 col-lg-4" key={pizza.name}>
              <Cart {...pizza} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
