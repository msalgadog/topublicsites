document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-unidad");
  const container = document.getElementById("resultados-unidades");

  input.addEventListener("input", () => {
    const valor = input.value.trim().toLowerCase();

    const resultados = unidadesDeportivas.filter((unidad) => {
      if (!valor) return true;
      if (/^\d+$/.test(valor)) {
        const municipioDetectado = mapaCPaMunicipio[valor];
        return municipioDetectado && unidad.municipio.toLowerCase() === municipioDetectado.toLowerCase();
      } else {
        return (
          unidad.nombre.toLowerCase().includes(valor) ||
          unidad.municipio.toLowerCase().includes(valor)
        );
      }
    });

    renderizarResultados(resultados);
  });

  function renderizarResultados(lista) {
    container.innerHTML = "";

    if (lista.length === 0) {
      container.innerHTML = "<p>No se encontraron unidades deportivas.</p>";
      return;
    }

    lista.forEach((unidad) => {
      const card = document.createElement("div");
      card.className = "indem-location-card-container";
      card.innerHTML = `
        <div class="indem-location-image-wrapper">
          <img src="${unidad.imagen}" alt="${unidad.nombre}" class="indem-location-image"/>
        </div>
        <section class="indem-location-content">
          <div class="indem-location-info">
            <h2 class="indem-location-title">${unidad.nombre}</h2>
            <div class="indem-location-address-container">
              <div class="indem-location-icon-wrapper">
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 19.167c2.942 0 5.334-2.392 5.334-5.334S18.942 8.5 16 8.5s-5.333 2.392-5.333 5.333 2.391 5.334 5.333 5.334Z" fill="#C79B71"/>
                  <path d="M15.227 29.585a1.334 1.334 0 0 0 1.547 0C17.18 29.3 26.706 22.42 26.667 13.833 26.667 7.952 21.882 3.167 16 3.167S5.333 7.952 5.333 13.827c-.039 8.594 9.488 15.472 9.894 15.758Zm.774-23.752c4.412 0 8 3.588 8 8.007.028 5.917-5.851 11.23-8 12.972-2.148-1.744-8.028-7.058-8-12.979 0-4.412 3.588-8 8-8Z" fill="#C79B71"/>
                </svg>
              </div>
              <p class="indem-location-address">${unidad.direccion}</p>
            </div>
          </div>
          <div class="indem-button-container">
            <a href="${unidad.enlace}">
              <button class="indem-learn-more-button">Conoce más</button>
            </a>
          </div>
        </section>
      `;
      container.appendChild(card);
    });
  }

  renderizarResultados(unidadesDeportivas);
});
