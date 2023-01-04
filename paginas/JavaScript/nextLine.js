let scriptArduino = [
    "bool activeHola = false;",
    "void setup(){",
    "\tSerial.Begin(9600);",
    "}",
    "void loop(){",
    "\tSerial.Write(activeHola == true ? 'Hola' : 'Adios');",
    "\tdelay(1000);",
    "\tactiveHola = !activeHola;",
    "}"];
let scriptUnity = [
    "using System.Collections;", "using System.Collections.Generic;", "using UnityEngine;","using System.IO.Ports;", "using System;", 
    "public class ArduinoController : MonoBehaviour{",
    "\tSerialPort serialPort = new SerialPort('COM4', 9600);",
    "\tvoid Start(){",
    "\t\tGameObject.Find('Square').SetActive(false);",
    "\t\tserialPort.Open();",
    "\t\tserialPort.ReadTimeout = 100;","\t}",
    "\tvoid Update(){",
    "\t\tif (serialPort.IsOpen){",
    "\t\t\tif(serialPort.ReadLine() == 'Hola')",
    "\t\t\t\tGameObject.Find('Square').SetActive(true);",
    "\t\t\telse",
    "\t\t\t\tGameObject.Find('Square').SetActive(false);",
    "\t\t}","}"];
let imagenesUnity = [""]
var caja;
var index = 0;
let indexImg = 2;
function nextLineArduino(){
    let txt = "";
    for(let a = 0;  a <= index; a++){
        txt += scriptArduino[a]+"\r\n";
    }
    document.getElementById("caja").value = txt;
    index++;
    if(index >= scriptArduino.length){
        document.getElementById("boton").value = "Siguiente Pagina";
        document.getElementById("boton").onclick = nextPage;
    }
}
function nextLineUnityEscena(){
        document.getElementById("caja").src="../img/PreparandoUnity"+indexImg+".png"
        
        if(indexImg >= 5){
            document.getElementById("boton").value = "Siguiente Pagina";
            document.getElementById("boton").onclick = nextPage;
        }
        indexImg++;
}
function nextLineUnityScript(){
    let txt = "";
    for(let a = 0;  a <= index; a++){
        txt += scriptUnity[a]+"\r\n";
    }
    document.getElementById("caja").value = txt;
    index++;
    if(index >= scriptUnity.length){
        document.getElementById("boton").value = "Siguiente Pagina";
        document.getElementById("boton").onclick = nextPage;
    }
}
function nextPage(){
    location.href = document.getElementById("boton").name;
}