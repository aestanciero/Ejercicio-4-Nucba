const pizzas =[
{
    id : 1,
    nombre: "Napolitana",
    ingredientes: ["muzzarela", "aceitunas", "tomate"],
    precio: 750,
    imagen:"https://saboresmendoza.com/wp-content/uploads/2019/09/pizza-napo.jpg",
},
{
    id : 2,
    nombre: "Especial",
    ingredientes: ["queso", "aceitunas", "jamon"],
    precio: 700,
    imagen:"https://media-cdn.tripadvisor.com/media/photo-s/0e/6f/33/94/pizza-especial-de-jamon.jpg",

},
{
    id : 3,
    nombre: "4 Quesos",
    ingredientes: ["muzzarela", "roquefort", "aceitunas"],
    precio: 850,
    imagen:"https://unareceta.com/wp-content/uploads/2014/05/pizza-4-quesos.jpg",
},
{ id : 4,
    nombre: "Calabresa",
    ingredientes: ["muzzarela", "cantimpalo", "aceitunas negras"],
    precio: 900,
    imagen:"https://ep01.epimg.net/elcomidista/imagenes/2013/09/05/receta/1378357200_137835_1378357200_noticia_normal.jpg",
},
{
    id : 5,
    nombre: "Margarita",
    ingredientes: ["muzzarela", "tomate", "albahaca"],
    precio: 900,
    imagen:"https://www.elespectador.com/resizer/Ny-8ZVbpvafu_INBbXmaPBbyKRk=/525x350/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/D2KL4RRCRJA7RJC5TNULFZEKR4.jpg",
},
{
    id :6,
    nombre: "Jamon y Palmito",
    ingredientes: ["muzzarela", "jamon", "palmitos"],
    precio: 1000,
    imagen:"https://d320djwtwnl5uo.cloudfront.net/recetas/cover/pizza_B4D8SNMKe1EYcAWXblfjCsuZO59Q2h.png",
},
]
const parsePizzas=localStorage.setItem(`pizzas`, JSON.stringify(pizzas));

const container =document.getElementById ("container");
const card = document.getElementById ("card");
const imgPizza = document.getElementById("img-pizza");
const nombrePizza = document.getElementById("nombre-pizza");
const ingredientesPizza = document.getElementById("ingredientes-pizza");
const precioPizza = document.getElementById ("precio-pizza");
const input = document.querySelector("input");
const boton = document.querySelector("button");

boton.addEventListener(`click`, (e)=>{
    const inputValue= input.value;
    pizzaFind = pizzas.find((pizza)=> pizza.id==inputValue);
    if (!pizzaFind){
        alert("El valor ingresado es incorrecto, intente de nuevo");
    }
    else{
        const imagen = document.createElement("img");
        imagen.setAttribute(`src`,pizzaFind.imagen);
        imgPizza.appendChild(imagen);
        imgPizza.removeChild(imgPizza.firstChild);
        nombrePizza.innerText =(`Pizza ${pizzaFind.nombre}`);
        ingredientesPizza.innerText = (`Ingredientes: ${pizzaFind.ingredientes}`);
        precioPizza.innerText=(`Precio: $ ${pizzaFind.precio}`);
        input.value =``;

    }
    

})