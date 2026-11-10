document.getElementById('btnConvertir').addEventListener('click', function() {
    const inputTemp = document.getElementById('temperatura').value.trim();
    const tipoConversion = document.getElementById('tipoConversion').value;
    const campoResultado = document.getElementById('resultado');

    // Validacion de campo vacio
    if (inputTemp === '') {
        alert('Por favor, ingresa una temperatura.');
        return;
    }

    const valorTemp = parseFloat(inputTemp);
    let resultado = 0;
    let textoResultado = '';

    // Operacion segun opcion seleccionada
    if (tipoConversion === 'cToF') {
        // Fahrenheit = (Celsius x 9 / 5) + 32
        resultado = (valorTemp * 9 / 5) + 32;
        textoResultado = `Temperatura ingresada: ${valorTemp} °C.<br>Tipo de conversion: Celsius a Fahrenheit.<br>Resultado: ${resultado} °F.`;
    } else if (tipoConversion === 'fToC') {
        // Celsius = (Fahrenheit - 32) × 5 / 9
        resultado = (valorTemp - 32) * 5 / 9;
        textoResultado = `Temperatura ingresada: ${valorTemp} °F.<br>Tipo de conversion: Fahrenheit a Celsius.<br>Resultado: ${resultado} °C.`;
    }

    // Mostrar el resultado en el sitio web
    campoResultado.innerHTML = textoResultado;
});