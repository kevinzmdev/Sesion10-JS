// Creando la clase Alumno
/*
Crear una clase Alumno con los atributos: código, nombre, nota1, nota2 y nota3; y las operaciones: 
    promedio (), condicion () y obsequio (). Para calcular el promedio considere la siguiente fórmula:
    PROM = nota1(15%) + nota2(20%) + nota3(25%) + nota4(40%)
Para la condición determine si es “Aprobado” o “Desaprobado” (se aprueba con nota mínima 12).
Todo alumno que apruebe con nota mayor a 17 se le obsequiará una “Mochila”.

 */


class Alumno{
    constructor(codigo, nombre, nota1, nota2, nota3, nota4){
        this.codigo = codigo;
        this.nombre = nombre;
        this.nota1 = nota1;
        this.nota2 = nota2;
        this.nota3 = nota3;
        this.nota4 = nota4;
    }

    promedio=()=>{
        let porcen=0;
        let porcen2=0;
        let porcen3=0;
        let porcen4=0;

        let prom =0;

        porcen = this.nota1 * 0.15;
        porcen2 = this.nota2 * 0.20;
        porcen3 = this.nota3 * 0.25;
        porcen4 = this.nota4 * 0.40;

        prom = (porcen+porcen2+porcen3+porcen4)/4;
        return prom*4;
    };


    premio=()=>{
        let resultado = true;
        if(this.promedio()>=12){
            resultado=true;
        }else{
            resultado=false;
        }

        return resultado;
    };


    obsequio=()=>{
        let mochila = "";
        if(this.premio()){
            mochila="Mochila CAT Viajera";
        }else{
            mochila="No recibes premio, ¡sigue esforzándote!";
        }
        return mochila;
    };
}


const btnClick = document.getElementById("mostrarData");
const nombre = document.getElementById("txtNom");
const notaFi = document.getElementById("txtNot1");
const notaTw = document.getElementById("txtNot2");
const notaTh = document.getElementById("txtNot3");
const notaFo = document.getElementById("txtNot4");


const mostrarNo = document.getElementById("muestraNombre");
const mostrarPro = document.getElementById("muestraPromedio");
const mostrarPre = document.getElementById("muestraPremiada");
const mostrarRec = document.getElementById("muestraRecibe");

btnClick.onclick=function(){

    let valNom = nombre.value;
    let valNo1 = notaFi.value;
    let valNo2 = notaTw.value;
    let valNo3 = notaTh.value;
    let valNo4 = notaFo.value;

    const alumno = new Alumno(1,valNom, valNo1, valNo2, valNo3, valNo4);

    mostrarNo.value=alumno.nombre;
    mostrarPro.value=alumno.promedio();
    mostrarPre.value = alumno.premio();
    mostrarRec.value = alumno.obsequio();
    console.log(alumno.promedio());
}
