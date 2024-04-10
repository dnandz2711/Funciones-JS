// Declarativas
function notificar_usuario(usuario) {
    console.log((usuario),"recibio su mensaje");
}
notificar_usuario("Dfergo")

function sesion(usuario,contraseña) {
    console.log("Hola",(usuario),"su contraseña es",(contraseña));
}
sesion("Dfergo","df27go93") 

function info_usuario(usuario, email, nombre) {
    console.log("La informacion es",(nombre), (usuario), (email));
}
info_usuario("Daniel","Dfergo","dafergo@gmail.com")

function inventario(nombre, serie, marca, cantidad){
    console.log("el item",(nombre),"con serie", (serie),"de marca", (marca),"en inventario", (cantidad));
}
inventario("Turbina", "GE225", "GE", "6")

function Bodega(nombre, marca, serial, cantidad, ubicacion) {
    console.log("el item",(nombre),"de serie", (serial),"de marca", (marca),"tiene", (cantidad),"en estante", (ubicacion));
}
Bodega("Turbina", "GE", "GE225", "6", "54F")

function In_out(nombre, cargo, edad, genero, Hingre, Hsali ){
    console.log("la persona",(nombre),"de cargo", (cargo),"de", (edad),"años","genero", (genero),"ingreso", (Hingre),"salio", (Hsali));
}
In_out("Daniel", "CEO", "30", "Masculino", "07:00", "17:00")  

function mercado(fruta,pan,queso,lacteo,carne,pollo,mecato){
    console.log("se debe comprar",(fruta), (pan), (queso), (lacteo), (carne), (pollo), (mecato));
}
mercado("pera", "bimbo", "campesino", "yogut", "tabla", "muslo", "papas")

function invitados(nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8){
    console.log("los invitados son",(nombre1),(nombre2),(nombre3),(nombre4),(nombre5),(nombre6),(nombre7),(nombre8));
}
invitados("mama", "papa", "hermana", "abuelos", "novia", "primos", "tias", "amigos")

function ciudades(nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8,nombre9){
    console.log("las ciudades elegidas son",(nombre1),(nombre2),(nombre3),(nombre4),(nombre5),(nombre6),(nombre7),(nombre8),(nombre9));
}
ciudades("medellin", "pereira", "orlando", "new york", "madrid", "toronto", "roma", "berlin", "londres")

function formulario(Nombre, Apellido, Edad, Email, Telefono, Direccion, barrio, zip, tipodoc, numdoc){
    console.log((Nombre),(Apellido),(Edad),(Email),(Telefono),(Direccion),(Barrio),(zip),(Tipodoc),(numdoc));
}
ciudades("Daniel", "Fernandez", "30", "dan@g.c", "3159065", "cr1 2-3", "aqui", "000000", "C.C", "111111000")

// anonimas

const notificar_usuario = function (usuario) {
    console.log((usuario),"recibio su mensaje");
}
notificar_usuario("Dfergo")

const sesion = function (usuario,contraseña) {
    console.log("Hola",(usuario),"su contraseña es",(contraseña));
}
sesion("Dfergo","df27go93") 

const info_usuario = function info_usuario(usuario, email, nombre) {
    console.log("La informacion es",(nombre), (usuario), (email));
}
info_usuario("Daniel","Dfergo","dafergo@gmail.com")

const inventario = function inventario(nombre, serie, marca, cantidad){
    console.log("el item",(nombre),"con serie", (serie),"de marca", (marca),"en inventario", (cantidad));
}
inventario("Turbina", "GE225", "GE", "6")

let = Bodega = function Bodega(nombre, marca, serial, cantidad, ubicacion) {
    console.log("el item",(nombre),"de serie", (serial),"de marca", (marca),"tiene", (cantidad),"en estante", (ubicacion));
}
Bodega("Turbina", "GE", "GE225", "6", "54F")

let In_out = function (nombre, cargo, edad, genero, Hingre, Hsali ){
    console.log("la persona",(nombre),"de cargo", (cargo),"de", (edad),"años","genero", (genero),"ingreso", (Hingre),"salio", (Hsali));
}
In_out("Daniel", "CEO", "30", "Masculino", "07:00", "17:00")  

let mercado = function (fruta,pan,queso,lacteo,carne,pollo,mecato){
    console.log("se debe comprar",(fruta), (pan), (queso), (lacteo), (carne), (pollo), (mecato));
}
mercado("pera", "bimbo", "campesino", "yogut", "tabla", "muslo", "papas")

let invitados = function (nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8){
    console.log("los invitados son",(nombre1),(nombre2),(nombre3),(nombre4),(nombre5),(nombre6),(nombre7),(nombre8));
}
invitados("mama", "papa", "hermana", "abuelos", "novia", "primos", "tias", "amigos")

let ciudades = function (nombre1,nombre2,nombre3,nombre4,nombre5,nombre6,nombre7,nombre8,nombre9){
    console.log("las ciudades elegidas son",(nombre1),(nombre2),(nombre3),(nombre4),(nombre5),(nombre6),(nombre7),(nombre8),(nombre9));
}
ciudades("medellin", "pereira", "orlando", "new york", "madrid", "toronto", "roma", "berlin", "londres")

let formulario = function (Nombre, Apellido, Edad, Email, Telefono, Direccion, barrio, zip, tipodoc, numdoc){
    console.log((Nombre),(Apellido),(Edad),(Email),(Telefono),(Direccion),(Barrio),(zip),(Tipodoc),(numdoc));
}
ciudades("Daniel", "Fernandez", "30", "dan@g.c", "3159065", "cr1 2-3", "aqui", "000000", "C.C", "111111000")

// de flecha

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

function{
    console.log((nombre), (serie), (marca), (cantidad));
}

