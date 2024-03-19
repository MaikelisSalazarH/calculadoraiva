function calcularTotal() {
    let base = parseFloat(document.getElementById('base').value.replace(/\./g, ''));
    let iva = parseFloat(document.getElementById('iva').value.replace(/\./g, ''));

    //validacion 
    if (isNaN(base) || isNaN(iva)) {
        alert('Por favor ingrese valores numéricos válidos.');
        return;
    }

    var total = base + (base * (iva / 100));
    document.getElementById('total').value = total.toLocaleString('es-ES');
    
    var valorIVA = base * (iva / 100);
    document.getElementById('ivaTotal').value = valorIVA.toLocaleString('es-ES');

}

//segunda forma 

/* const inputBase = document.querySelector('#base');
let inputIva    = document.querySelector('#iva');
let inputTotal  = document.querySelector('#total');
const valorIva  = 19;
function calcularTotal(){
    const base = Number(inputBase.value);
    const iva  = base * valorIva;
    inputIva.value = iva;
    const total = base + iva / 100;
    inputTotal.value = total;
}  */