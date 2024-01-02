const process = require("process"); //nativo de node
const commands = require("./commands/index.js");

function print(output) {
  process.stdout.write(output);
  process.stdout.write("\nprompt > ");
}

function bash() {
  process.stdout.write("prompt > ");
  process.stdin.on("data", (data)=>{
    let args = data.toString().trim().split(" ")//.trim() quita los espacios adelante y atras, y split(" ") por cada espacio del array creanos un elemento
    let cmd = args.shift()//saca el 1er elemento y lo guarda en cmd...por lo tanto args pasa a dejar de tener el primer elemento
    //console.log("---->", args)
    if(commands.hasOwnProperty(cmd)){//si existe la propiedad cmd...entrá y ejecutala con los siguientes argumentos...
      commands[cmd](print, args.join(" "))//el join vuelve a unir los elementos a un string
    }else{
      print(`command not found: ${cmd}`)//si no existe imprimime esto
    }
    //print(args)
  })

}
bash();
module.exports = {
  print,
  bash,
};