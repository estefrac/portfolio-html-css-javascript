export function saludarUsuario(nombreUsuario, saludoUsuario){
  if (nombreUsuario){
    saludoUsuario.textContent = `Hola ${nombreUsuario}! 👋`
    saludoUsuario.classList.add('mostrar')
  }
}