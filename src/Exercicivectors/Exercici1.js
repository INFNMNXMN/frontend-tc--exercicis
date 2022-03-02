import { useState } from "react";
export default function Exercici1() {
const numeros= "45,56,58,63";
<h1>Exercici 1 Arrays. Major, Menor i Mitjana</h1>
<p id="parrafo">Introdueix els números sencers separats per coma</p>
<input type="text" id="text"></input>
<input type="button" value="Carregar exemple" onclick="carregarexemple()"></input>
<br><br><input type="button" value="calcular" onclick="calcular()"></input>
<input type="button" value="Reiniciar" onclick="Reiniciar()">
<p id="array"></p>
<p id="resultat"></p>
<script>
function carregarexemple(){
document.getElementById("text").value="45, 56, 58, 63";
}
function Reiniciar(){
location.reload();
}*/
const [document.getElementById=("text")];
const calcular(){
array = document.getElementById("text").value.split(/,/);
let mayor=-Infinity,menor=+Infinity,suma=0,media=0;
//SUMA
for(i=0;i<array.length;i++){
  suma=parseInt(array[i])+suma;
  }
  //Mitjana
  media=suma/array.length;
  //Menor
  for(i=0;i<array.length;i++){
  if(parseInt(array[i])<menor) menor=array[i];
  }
  //Major
  for(i=0;i<array.length;i++){
  if(parseInt(array[i])>mayor) mayor=array[i];
  }
  //Resultat
  document.getElementById("resultado").innerHTML="La suma és:"+suma+"<br>"+
                                                 "La mitjana és:"+media+"<br>"+
                                                 "El major és:"+mayor+"<br>"+
                                                 "El menor és:"+menor+"<br>"
  }
  
;}