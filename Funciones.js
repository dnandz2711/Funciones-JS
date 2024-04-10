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

const notificar_usuari = function (usuari) {
    console.log((usuari),"recibio su mensaje");
}
notificar_usuari("Dfergo")

const sesio = function (usuari,contraseñ) {
    console.log("Hola",(usuari),"su contraseña es",(contraseñ));
}
sesio("Dfergo","df27go93") 

const info_usuari = function (usuari, emai, nombr) {
    console.log("La informacion es",(nombr), (usuari), (emai));
}
info_usuari("Daniel","Dfergo","dafergo@gmail.com")

const inventari = function (nombr, seri, marc, cantida){
    console.log("el item",(nombr),"con serie", (seri),"de marca", (marc),"en inventario", (cantida));
}
inventari("Turbina", "GE225", "GE", "6")

let = Bodeg = function (nombr, marc, seria, cantida, ubicacio) {
    console.log("el item",(nombr),"de serie", (seria),"de marca", (marc),"tiene", (cantida),"en estante", (ubicacio));
}
Bodeg("Turbina", "GE", "GE225", "6", "54F")

let In_ou = function (nombr, carg, eda, gener, Hingr, Hsal ){
    console.log("la persona",(nombr),"de cargo", (carg),"de", (eda),"años","genero", (gener),"ingreso", (Hingr),"salio", (Hsal));
}
In_ou("Daniel", "CEO", "30", "Masculino", "07:00", "17:00")  

let mercad = function (frut,pa,ques,lacte,carn,poll,mecat){
    console.log("se debe comprar",(frut), (pa), (ques), (lacte), (carn), (poll), (mecat));
}
mercad("pera", "bimbo", "campesino", "yogut", "tabla", "muslo", "papas")

let invitado = function (nomre1,nomre2,nomre3,nomre4,nomre5,nomre6,nomre7,nomre8){
    console.log("los invitados son",(nomre1),(nomre2),(nomre3),(nomre4),(nomre5),(nomre6),(nomre7),(nomre8));
}
invitado("mama", "papa", "hermana", "abuelos", "novia", "primos", "tias", "amigos")

let ciudade = function (nomre1,nomre2,nomre3,nomre4,nomre5,nomre6,nomre7,nomre8,nomre9){
    console.log("las ciudades elegidas son",(nomre1),(nomre2),(nomre3),(nomre4),(nomre5),(nomre6),(nomre7),(nomre8),(nomre9));
}
ciudade("medellin", "pereira", "orlando", "new york", "madrid", "toronto", "roma", "berlin", "londres")

let formulari = function (Nombr, Apellid, Eda, Emai, Telefon, Direccio, barri, zi, tipodo, numdo){
    console.log((Nombr),(Apellid),(Eda),(Emai),(Telefon),(Direccio),(barri),(zi),(tipodo),(numdo));
}
formulari("Daniel", "Fernandez", "30", "dan@g.c", "3159065", "cr1 2-3", "aqui", "000000", "C.C", "111111000")

// de flecha

const suma = (a,b) => (a+b)
console.log("el resultado es",suma(2,3));

const multiplicar = (a,b,c) => (a*b*c)
console.log("el resultado es",multiplicar(2,3,4)); 

const divir = (a,b,c,d) => (a/b/c/d)
console.log("el resultado es",divir(2,3,4,8));

const restar = (a,b,c,d,e) => (a-b-c-d-e)
console.log("el resultado es",restar(2,3,4,8,5)); 

const div_mul = (a,b,c,d,e,f) => (a/(b*c)*(d*e)/f)
console.log("el resultado es",div_mul(2,3,4,8,5,7));

const mul_sum = (a,b,c,d,e,f,g) => ((a+b*c)+d+(e*f+g))
console.log("el resultado es",mul_sum(2,3,4,8,5,7,1)); 

const div_sum = (a,b,c,d,e,f,g,h) => ((a+b+c/d)+e/(f+g+h))
console.log("el resultado es",div_sum(2,3,4,8,5,7,1,6));

const mul_res = (a,b,c,d,e,f,g,h,i) => ((a-b*c)-d*((e*f)-g-h)*i)
console.log("el resultado es",mul_res(2,3,4,8,5,7,1,6,9));

const div_res = (a,b,c,d,e,f,g,h,i,j) => (a-b/c-d/e-f/g-h-i/j)
console.log("el resultado es",div_res(2,3,4,8,5,7,1,6,9,12));

const mu_div_sum = (a,b,c,d,e,f,g,h,i,j,k) => (a+b*c/d+e*f/g+h*i/j+k)
console.log("el resultado es",mu_div_sum(2,3,4,8,5,7,1,6,9,12,10));

