/**
 * Repository GitHub
 * https://github.com/Maicol-Hernandez/prueba-tecnica
 */

const tolls = []
const selectTypeAuto = document.querySelector('#type-auto');
const myForm = document.querySelector('#form');
const inputCost = document.getElementById('cost');


const callbackMain = () => {
    paintData(tolls)
    paintTotal(tolls)
}

// b) Una función que a partir del arreglo de valores de peajes imprima en pantalla el valor total de lo que se recaudó por peajes de automóviles, camiones y mulas y el valor total recaudado
// to string
const paintData = (data) => {
    const total_auto = document.getElementById('total_auto');
    const total_cost = document.getElementById('total_cost');
    total_auto.innerHTML = data.length
    const costs = data.map((item) => item.cost)
    total_cost.innerHTML = costs.toString()
}

// c) Una función que a partir del arreglo de valores y el tipo de vehículo, retorne un segundo arreglo con cada uno de los valores de los peajes recaudados para el tipo de vehículo especificado.
const paintTotal = (data) => {
    const total = document.getElementById('total');
    const auto = document.getElementById('total_automovil');
    const camion = document.getElementById('total_camiones');
    const mula = document.getElementById('total_mulas');
    const otro = document.getElementById('total_otros');
    console.log('data :>> ', data);
    const costTotal = data.reduce((suma, { cost }) => suma + cost, 0)
    total.innerHTML = costTotal
    const costByType = byType(data)
    console.log('costByType :>> ', costByType);
    const totalAuto = costByType.automovil.reduce((suma, value) => suma + value, 0)
    const totalCamion = costByType.camion.reduce((suma, value) => suma + value, 0)
    const totalMula = costByType.mula.reduce((suma, value) => suma + value, 0)
    const totalOtro = costByType.otro.reduce((suma, value) => suma + value, 0)
    auto.innerHTML = totalAuto
    camion.innerHTML = totalCamion
    mula.innerHTML = totalMula
    otro.innerHTML = totalOtro
}

// byType
const byType = (data) => {
    const total = {
        automovil: [],
        camion: [],
        mula: [],
        otro: [],
    }

    data.forEach((item, index) => {
        if (item.type_auto === 'automovil') {
            total.automovil.push(item.cost)
        }

        if (item.type_auto === 'camion') {
            total.camion.push(item.cost)

        }

        if (item.type_auto === 'mula') {
            total.mula.push(item.cost)

        }

        if (item.type_auto === 'otro') {
            total.otro.push(item.cost)

        }
    });

    return total;
}


// type cart
const onChangeTypeAuto = () => {
    console.log('selectTypeAuto :>> ', selectTypeAuto.value);
    autoComplete(selectTypeAuto.value)
}

// my form
myForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const form = {
        cost: parseFloat(event.target.elements.cost.value),
        type_auto: event.target.elements.type_auto.value,
    }
    tolls.push(form)
    callbackMain()
});

// Auto complete
const autoComplete = (type) => {
    switch (type) {
        case 'automovil':
            inputCost.value = 15300;
            break;
        case 'camion':
            inputCost.value = 20200;
            break;
        case 'mula':
            inputCost.value = 25500;
            break;

        default:
            inputCost.value = 0;
            break;
    }
}

// events
selectTypeAuto.addEventListener('change', onChangeTypeAuto);
