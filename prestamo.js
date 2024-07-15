// Función para calcular el monto del préstamo
function calcularPrestamo() {
    let calcularOtroPrestamo;
    do {
        // Solicitar los valores al usuario
        let monto = parseFloat(prompt("Ingrese el monto del préstamo:"));
        let cuotas = parseInt(prompt("Ingrese el número de cuotas:"));
        let interesAnual = parseFloat(prompt("Ingrese la tasa de interés anual (%):"));

        // Validar que los valores sean validos
        let valoresValidos = true;
        if (isNaN(monto) || isNaN(cuotas) || isNaN(interesAnual) || monto <= 0 || cuotas <= 0 || interesAnual < 0) {
            alert("Por favor, ingrese valores válidos.");
            valoresValidos = false;
        }

        if (valoresValidos) {
            // Convertir la tasa de interés anual a mensual
            let interesMensual = interesAnual / 12 / 100;

            // Calcular el monto total de interés simple
            let interesTotalPagado = monto * interesMensual * cuotas;

            // Calcular el monto total a pagar
            let totalPagado = monto + interesTotalPagado;

            // Calcular el monto de la cuota mensual
            let cuota = totalPagado / cuotas;

            // Mostrar el resultado
            alert(`
                Cuota Mensual: $${cuota.toFixed(2)}
                Interés Total Pagado: $${interesTotalPagado.toFixed(2)}
                Total Pagado: $${totalPagado.toFixed(2)}
            `);
        }

        // Preguntar si desea calcular otro préstamo
        calcularOtroPrestamo = prompt("¿Desea calcular otro préstamo? (si/no)").toLowerCase();
    } while (calcularOtroPrestamo === "si");
}

// Llamar a la función
calcularPrestamo();


