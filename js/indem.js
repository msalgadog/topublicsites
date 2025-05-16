document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-unidad");
  const container = document.getElementById("resultados-unidades"); // Ajústalo si usas otro ID

  input.addEventListener("input", () => {
    const valor = input.value.trim().toLowerCase();

    const resultados = unidadesDeportivas.filter((unidad) => {
      if (!valor) return true;

      if (/^\d+$/.test(valor)) {
        return unidad.cp.includes(valor); // Código Postal
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
                <svg>...</svg>
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

  // Render inicial
  renderizarResultados(unidadesDeportivas);
});
