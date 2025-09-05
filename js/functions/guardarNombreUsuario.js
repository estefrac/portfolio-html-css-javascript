import { saludarUsuario } from './saludarUsuario.js';
export function guardarNombreUsuario(nombre, saludoUsuario){
  const soloNombre = nombre.trim().split(' ')[0];
  const nombreUsuario = soloNombre;
  localStorage.setItem('nombreUsuario', nombreUsuario)
  saludarUsuario(nombreUsuario, saludoUsuario)
}