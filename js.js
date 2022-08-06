const bebidas = [
    { nombre: "cerveza heineken", precio: 150},
    { nombre: "cerveza budweiser", precio: 250},
    { nombre: "cerveza corona", precio: 250},
    { nombre: "cerveza patagonia", precio: 200},
    { nombre: "cerveza schneider", precio: 100},
    { nombre: "cerveza guinness", precio: 250},
    { nombre: "cerveza china white", precio: 250},
    { nombre: "cerveza modelo", precio: 200},
    { nombre: "cerveza lite", precio: 200},
];


/ Funcion para calcular precio /
const cuotas = (a, b) => a / b;

let carrito = []

let seleccion = prompt("Aloha, ¿Desea comprar algo si o no?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor ingresa si o no")
    seleccion = prompt("Aloha, ¿Desea comprar algo si o no?")
}

if (seleccion=="si"){
    let todaslasBebidas = bebidas.map((bebida) => bebida.nombre + " " + bebida.precio + "$")
    alert("A continuación nuestra lista de bebidas")

    alert(todaslasBebidas.join(" - "))
} else if (seleccion == "no"){
    alert("Gracias por mirar, hasta pronto!")
}

while(seleccion != "no"){
    let bebida = prompt("Agrega productos a tu carrito")
    let precio = 0; //Esta variable creemos que está al re pedo

    if(bebida/*  == "cerveza heineken" || bebida == "cerveza budweiser" || bebida == "cerveza corona" || bebida == "cerveza patagonia" || bebida == "cerveza schneider" || bebida == "cerveza guinness"  || bebida == "cerveza china white" || bebida == "cerveza modelo" || bebida == "cerveza lite" */){
        switch(bebida) {
            case bebidas.includes(bebida):
            precio = 150; //por que no nos toma este valor de referencia en la linea 194 y a partir de ahi se empieza a romper el código
            break;
        }
        let unidades = parseInt(prompt("¿Cuántas unidades deseas?"))

        carrito.push({bebida, unidades, precio});

        console.log(carrito)
    }else{
        alert("No tenemos esa bebida")
    }
    seleccion = prompt("¿Querés un poco mas?")
    while(seleccion === "no"){
        alert("Gracias por la compra")
        carrito.forEach((carritoFinal) => {
            console.log(` bebida: ${carritoFinal.bebida}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`);})
            break;
    }
}