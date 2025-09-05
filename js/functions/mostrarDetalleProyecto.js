export function mostrarDetalleProyecto(idProyecto, proyectos, projectsDescription, sectionProjects, sectionProject){
    const proyecto = proyectos.find(p => p.id === idProyecto)
    if (proyecto){
        projectsDescription.innerHTML = `
        <div class="description">
            <div class="text-center text-md-start mb-3">
                <a href="#" class="btn btn-primary button" id="back-projects" style="margin-bottom: 20px;">&lt;-- proyectos</a>
            </div>
            <h1 class="text-center text-lg-start">${proyecto.titulo}</h1>
            <p class="text-center text-lg-start">${proyecto.descripcionLarga}</p>
        </div>
        <div class="mockup">
            <img
              src="${proyecto.img[1]}"
              alt="${proyecto.img[2]}"
            />
        </div>
        `
    }
    sectionProjects.style.display = 'none'
    sectionProject.style.display = 'block'
    document.getElementsByClassName('project')[0].scrollIntoView({ behavior: 'smooth' });
}