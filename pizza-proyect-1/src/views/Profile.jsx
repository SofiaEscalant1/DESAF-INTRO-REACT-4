export function Profile() {
  const userEmail = 'usuario@ejemplo.com'

  const handleLogout = () => {
    console.log('Cerrar sesión')
  }

  return (
    <main className="container py-4">
      <h1>Perfil</h1>
      <p>
        Email del usuario: <strong>{userEmail}</strong>
      </p>
      <button type="button" onClick={handleLogout}>
        Cerrar sesión
      </button>
    </main>
  )
}
