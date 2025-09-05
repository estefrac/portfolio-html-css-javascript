import { proyectos } from './db.js';
import { mostrarProyectos } from './functions/mostrarProyectos.js';
import { saludarUsuario } from './functions/saludarUsuario.js';
import { guardarNombreUsuario } from './functions/guardarNombreUsuario.js';
import { mostrarModal } from './functions/mostrarModal.js';
import { cerrarModal } from './functions/cerrarModal.js';

// --> Local Storage
let nombreUsuario = localStorage.getItem('nombreUsuario')

// --> DOM

const projectsContainer = document.getElementById('projects-container')
const projectsDescription = document.getElementById('projects-description')
const sectionProject = document.querySelector('.project')
const sectionProjects = document.querySelector('.projects')
const saludoUsuario = document.getElementById('saludo-usuario')
const formContacto = document.getElementById('contact-form');
const confirmationModal = document.getElementById('confirmation-modal');
const modalTitle = document.getElementById('modal-title');
const modalMessage = document.getElementById('modal-message');
const modalCloseBtn = document.getElementById('modal-close-btn');
const closeModalSpan = document.getElementById('close-modal');

// --> Eventos

// Volver a la seccion Proyectos

document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'back-projects') {
        e.preventDefault()
        sectionProjects.style.display = 'block'
        sectionProject.style.display = 'none'
        document.getElementsByClassName('projects')[0].scrollIntoView({ behavior: 'smooth' });

    }
});

// Modificamos del comportamiento de la Navbar segun el estado de las seccion Proyectos
document.querySelector('a[href="#projects"]').addEventListener('click', function(e) {
  e.preventDefault();
  if (sectionProjects.style.display !== 'none') {
    document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
  } else {
    document.getElementsByClassName('project')[0].scrollIntoView({ behavior: 'smooth' });
  }
});

// Capturamos el nombre del usuario y mostramos el modal de confirmacion
formContacto.addEventListener('submit', function(e) {
  e.preventDefault();
  const nombre = document.getElementById('nombre').value;

  guardarNombreUsuario(nombre, saludoUsuario);

  mostrarModal(nombre , modalTitle, modalMessage, confirmationModal);
  formContacto.reset();
});

// Cerramos el modal de confirmacion
modalCloseBtn.addEventListener('click', () => cerrarModal(confirmationModal));
closeModalSpan.addEventListener('click', () => cerrarModal(confirmationModal));

mostrarProyectos(proyectos, projectsContainer, projectsDescription, sectionProjects, sectionProject)
saludarUsuario(nombreUsuario, saludoUsuario)
