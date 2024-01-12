function convertidores() {
const gradosKelvinHTML = document.getElementById('kelvin');
const gradosFarenheitHTML = document.getElementById('farenheit');
const gradosCelciusInput = document.getElementById('gradosCelsius');
const gradosCelcius = parseFloat(gradosCelciusInput.value);


// Formulas
function convertirKelvin(grados){
    let gradosKelvin = grados += 273.15
    return gradosKelvin
}
function convertirFarenheit(grados){
    let gradosFarenheit = (grados * 9/5) + 32
    return gradosFarenheit
}


    gradosKelvinHTML.innerHTML = convertirKelvin(gradosCelcius)
    gradosFarenheitHTML.innerHTML = convertirFarenheit(gradosCelcius)
};
