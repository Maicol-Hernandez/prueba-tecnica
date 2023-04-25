export class Toll {
    data = []
    constructor(data) {
        this.data = data
    }

    // b) Una función que a partir del arreglo de valores de peajes imprima en pantalla el valor total de lo que se recaudó por peajes de automóviles, camiones y mulas y el valor total recaudado
    // to string

    get object() {
        return this.data
    }

    get toString() {
        let cadena = "to string"
        console.log('this.data :>> ', this.data);
        return cadena
    }


}
