import { formatNumber } from '../utils/formatPrice'

export function Cart() {
  return (
    <main className="container py-4">
      <h1>Carrito</h1>
      <p>Aquí irán los productos añadidos al carrito.</p>
    </main>
  )
}

export function CardPizza({ name, price, ingredients, img }) {
  return (
    <div className="card h-100 shadow-sm">
      <img src={img} className="card-img-top" alt={name} />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{name}</h5>
        <div className="text-center text-muted mb-2">Ingredientes:</div>
        <p className="text-muted small mb-4">🍕 {ingredients.join(', ')}</p>
        <div className="mt-auto">
          <h4 className="fw-bold">Precio: ${formatNumber(price)}</h4>
          <div className="d-flex justify-content-between gap-2 mt-3">
            <button type="button" className="btn btn-outline-secondary flex-grow-1">Ver Más 👀</button>
            <button type="button" className="btn btn-dark flex-grow-1">Añadir 🛒</button>
          </div>
        </div>
      </div>
    </div>
  )
}




