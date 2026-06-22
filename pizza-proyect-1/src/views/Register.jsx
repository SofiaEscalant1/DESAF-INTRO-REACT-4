export function Register() {
  return (
    <main className="container py-4">
      <h1>Registro</h1>
      <p>Completa el formulario para registrarte.</p>
      <form className="d-flex flex-column gap-3 mt-4" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name">Nombre</label>
          <input id="name" name="name" type="text" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="usuario@ejemplo.com" />
        </div>
        <div>
          <label htmlFor="password">Contraseña</label>
          <input id="password" name="password" type="password" placeholder="********" />
        </div>
        <button type="submit">Registrar</button>
      </form>
    </main>
  )
}