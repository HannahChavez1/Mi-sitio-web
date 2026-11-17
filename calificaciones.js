function procesarCalificaciones() {
    // 1. Obtener los valores de los campos
    const nombre = document.getElementById("nombre").value.trim();
    const val1 = document.getElementById("calif1").value;
    const val2 = document.getElementById("calif2").value;
    const val3 = document.getElementById("calif3").value;

    // 2. Validación de información
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    if (val1 === "" || val2 === "" || val3 === "") {
        alert("Por favor, ingresa las tres calificaciones.");
        return;
    }

    const c1 = parseFloat(val1);
    const c2 = parseFloat(val2);
    const c3 = parseFloat(val3);

    if (isNaN(c1) || isNaN(c2) || isNaN(c3)) {
        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    if (c1 < 0 || c1 > 10 || c2 < 0 || c2 > 10 || c3 < 0 || c3 > 10) {
        alert("Ninguna calificación puede ser menor que 0 ni mayor que 10.");
        return;
    }

    // 3. Calcular promedio
    const promedio = (c1 + c2 + c3) / 3;
    const promedioRedondeado = parseFloat(promedio.toFixed(1));

    // 4. Determinar resultado: APROBADO o REPROBADO
    let estado = "";
    let claseEstado = "";

    if (promedioRedondeado >= 6 && promedioRedondeado <= 10) {
        estado = "APROBADO";
        claseEstado = "aprobado";
    } else {
        estado = "REPROBADO";
        claseEstado = "reprobado";
    }

    // 5. Mostrar una observación según el promedio
    let observacion = "";

    if (promedioRedondeado >= 9 && promedioRedondeado <= 10) {
        observacion = "Excelente desempeño";
    } else if (promedioRedondeado >= 8 && promedioRedondeado < 9) {
        observacion = "Muy buen desempeño";
    } else if (promedioRedondeado >= 7 && promedioRedondeado < 8) {
        observacion = "Buen desempeño";
    } else if (promedioRedondeado >= 6 && promedioRedondeado < 7) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // 6. Presentar los resultados en la página web
    const contenedorResultados = document.getElementById("resultados");
    contenedorResultados.style.display = "block";
    
    contenedorResultados.innerHTML = `
        <h3>Resultados de la evaluación</h3>
        <p><strong>Estudiante:</strong> ${nombre}</p>
        <p><strong>Calificaciones:</strong> ${c1}, ${c2}, ${c3}</p>
        <p><strong>Promedio obtenido:</strong> ${promedio.toFixed(2)}</p>
        <p><strong>Estado:</strong> <span class="${claseEstado}">${estado}</span></p>
        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}