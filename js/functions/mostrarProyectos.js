import { mostrarDetalleProyecto } from "./mostrarDetalleProyecto.js";

export function mostrarProyectos(projectsContainer, projectsDescription, sectionProjects, sectionProject) {
    axios.get("js/db.json")
        .then(response => {
            const proyectos = response.data.proyectos;
            projectsContainer.innerHTML = '';
            proyectos.forEach((proyecto) => {
                const elemProyecto = document.createElement('div');
                elemProyecto.className = 'card';
                elemProyecto.innerHTML = `
                    <img
                      src="${proyecto.img[0]}"
                      class="card-img-top"
                      alt="${proyecto.img[2]}"
                    />
                    <div class="card-body">
                      <h5 class="card-title">${proyecto.titulo}</h5>
                      <p class="card-text">${proyecto.descripcion}</p>
                      <a href="#" class="btn btn-primary button" idProyecto = "${proyecto.id}">ver proyecto</a>
                    </div>
                `;
                projectsContainer.appendChild(elemProyecto);
            });
            document.querySelectorAll('.btn').forEach((btn) => {
                btn.addEventListener('click', function (event) {
                    event.preventDefault();
                    const idProyecto = parseInt(this.getAttribute('idProyecto'));
                    mostrarDetalleProyecto(idProyecto, proyectos, projectsDescription, sectionProjects, sectionProject);
                });
            });
        })
        .catch(error => {
            console.error("Error al cargar los proyectos:", error);
            projectsContainer.innerHTML = '<p>Error al cargar proyectos, intente más tarde.</p>';
        });
}