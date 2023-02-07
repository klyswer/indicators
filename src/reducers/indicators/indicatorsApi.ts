export function fetchIndicators() {
    return fetch('https://mindicador.cl/api')
    .then((response) => response.json())
    .then((data) => (data))
    .catch((err) => console.log('Solicitud fallida', err));
  }


