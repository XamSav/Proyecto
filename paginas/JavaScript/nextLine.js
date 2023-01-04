let scriptArduino = ["void setup(){", "Serial.Begin(9600);","}","void loop(){","Serial.Write('Hola');","}"];
let scriptUnity = ["using System.Collections;", "using System.Collections.Generic;", "using UnityEngine;",
"using System.IO.Ports;", "using System;", "public class ArduinoController : MonoBehaviour{",
"SerialPort serialPort = new SerialPort('COM4', 9600);", "void Start(){", "serialPort.Open();",
"serialPort.ReadTimeout = 100;","}","void Update(){","if (serialPort.IsOpen)","Debug.Log(serialPort.ReadLine());"];
var caja;
var index = 0;

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

}
function nextLineUnityScript(){

}
function nextPage(){
    location.href = document.getElementById("boton").name;
}