export function saludarUsuario(nombreUsuario, saludoUsuario){
  if (nombreUsuario){
  saludoUsuario.innerHTML = `
    Hola ${nombreUsuario}! <span id="lottie-hand" style="width:25px; height:25px; display:inline-block; vertical-align:top; margin-top:-2px;"></span>
  `;
    saludoUsuario.classList.add('mostrar');
    if (window.lottie) {
      lottie.loadAnimation({
        container: document.getElementById('lottie-hand'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'assets/4Z9SNfrWd7.json'
      });
    }
  }
}