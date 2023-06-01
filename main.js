function mensajedeBienvenida() {
    alert("Bienvenidos al Almacen de nico")
    let nombreCliente = prompt("Ingrese su nombre")
    let apellidoCliente = prompt("Ingrese su apellido")
    alert("Bienvenido/a" + " " + nombreCliente + " " + apellidoCliente)
    
}
mensajedeBienvenida()

const products = [
    { nombre: "Hamburguesa simple", precio: 800},
    { nombre: "Pancho", precio: 300},
    {nombre: "Pizza muzza", precio: 1200},
    {nombre: "Pizza napo", precio: 1500},
    {nombre: "Hamburguesa doble", precio: 1500},
    {nombre: "Hamburguesa doble completa", precio: 1900},
    {nombre: "Empanadas media docena", precio: 800},
    {nombre: "Empanadas docena", precio: 1500},
    {nombre: "Sandwich de milanesa simple", precio: 1000},
    {nombre: "Sandwich de milanesa completo", precio: 1500},
    {nombre: "Coca cola 500mL", precio: 250},
    {nombre: "Coca cola 2.25L", precio: 600},
    {nombre: "Sprite 500mL", precio:250},
    {nombre: "Fanta 500mL", precio: 250},
    {nombre: "Cerveza Brahma 500mL", precio: 500},
    {nombre: "Cerveza Brahma 1L", precio: 900},
    {nombre: "Cerveza Patagonia 475mL", precio: 900},
    {nombre: "Agua 500mL", precio: 200},
    {nombre: "Agua 2.25L", precio: 450},
]
console.log (products);
let carrito = []

let selection = prompt ("¿Desea comprar algun producto de nuestra almacen? SI O NO responder.")

while (selection != "si" && selection != "no") {
    alert ("POR FAVOR INGRESE RESPUESTA")
    selection = prompt ("¿desea realizar la orden?")

}

if (selection == "si") {
    alert ("Nuestros productos")
    let listofproducts = products.map (
    (products) => products.nombre + " " + products.precio + "$" 
    );
    alert (listofproducts.join ("-"))
    if (selection == "no") {
        alert ("¡hasta luego!")
        console.log ("¡hasta luego!")
    }

}




