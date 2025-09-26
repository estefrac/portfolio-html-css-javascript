import { mostrarProyectos } from './functions/mostrarProyectos.js';
import { saludarUsuario } from './functions/saludarUsuario.js';
import { guardarNombreUsuario } from './functions/guardarNombreUsuario.js';
import { initEmailJS, sendContactEmail } from './functions/emailService.js';

let nombreUsuario = localStorage.getItem('nombreUsuario');

const projectsContainer = document.getElementById('projects-container');
const projectsDescription = document.getElementById('projects-description');
const sectionProject = document.querySelector('.project');
const sectionProjects = document.querySelector('.projects');
const saludoUsuario = document.getElementById('saludo-usuario');

mostrarProyectos(projectsContainer, projectsDescription, sectionProjects, sectionProject);
saludarUsuario(nombreUsuario, saludoUsuario);

// --> Eventos

// Volver a la seccion Proyectos

document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'back-projects') {
        e.preventDefault();
        sectionProjects.style.display = 'block';
        sectionProject.style.display = 'none';
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

// --> EmailJS

document.addEventListener('DOMContentLoaded', function() {
    initEmailJS();

    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nombreInput = document.getElementById('nombre');
        const emailInput = document.getElementById('email');
        const mensajeInput = document.getElementById('mensaje');
        const nombre = nombreInput ? nombreInput.value : '';
        const email = emailInput ? emailInput.value : '';
        const mensaje = mensajeInput ? mensajeInput.value : '';

        guardarNombreUsuario(nombre, saludoUsuario);

        Swal.fire({
            title: 'Enviando mensaje...',
            text: 'Por favor espera un momento',
            allowOutsideClick: false,
            didOpen: () => {
                Swal.showLoading();
            },
            customClass: {
                confirmButton: 'boton-personalizado'
            }
        });
        
        sendContactEmail(nombre, email, mensaje)
            .then(() => {
                Swal.fire({
                    title: `¡Gracias, ${nombre.trim()}!`,
                    text: `Recibimos tu mensaje correctamente.`,
                    icon: "success",
                    background: '#000000',
                    color: 'greenyellow',
                    buttonsStyling: false,
                    confirmButtonText: 'Entendido',
                    customClass: {
                        confirmButton: 'button'
                    }
                });
                contactForm.reset();
            })
            .catch(() => {
                Swal.fire({
                    title: "Error",
                    text: "No pudimos enviar tu mensaje. Intenta nuevamente.",
                    icon: "error",
                    background: '#000000',
                    color: 'greenyellow',
                    buttonsStyling: false,
                    confirmButtonText: 'Reintentar',
                    customClass: {
                        confirmButton: 'button'
                    }
                });
            });
    });
});