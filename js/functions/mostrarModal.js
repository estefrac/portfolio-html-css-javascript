export function mostrarModal(nombre, modalTitle, modalMessage, confirmationModal) {
  const soloNombre = nombre.trim().split(' ')[0];
  modalTitle.textContent = "¡Gracias por tu mensaje!";
  modalMessage.textContent = `Hola ${soloNombre}, hemos recibido tu mensaje correctamente. En breve nos estaremos comunicando contigo.`;
  confirmationModal.style.display = 'flex';
}