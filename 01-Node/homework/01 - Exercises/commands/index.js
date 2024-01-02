const fs = require("fs");
const utils = require("../utils/request");
// utils -> {request : fn(url, cb)}
const process = require("process");

function pwd(print) {
  print(process.cwd());//le pasamos a print el comando cwd que trae la ruta donde estamos

}

function date(print) {
  print(Date());//le pasamos a print el comando date que trae la fecha y la hora

}

function echo(print, args) {
  print(args);//le pasamos a print el comando args que trae lo que sigue del primer comando
}

function ls(print) {
  fs.readdir(".", function(error, files){
    if(error) throw new Error(error);
    print(files.join(" "))
  })
}

function cat(print, args) {
  fs.readFile(args, 'utf-8', (error,data)=>{
    if(error) throw new Error(error);
    print(data)

  })

}

function head(print, args) {
  fs.readFile(args, 'utf-8', (error,data)=>{
    if(error) throw new Error(error);
    const lines = data.split("\n") // lo paso a lineas 
    print(lines[0].trim())//me devuelve el primero y eliiminolos espacios con el trim

  });
}

function tail(print, args) {
  fs.readFile(args, 'utf-8', (error,data)=>{
    if(error) throw new Error(error);
    const lines = data.split("\n") // lo paso a lineas y eliiminolos espacios
    print(lines[lines.length-1].trim())

  })

}

function curl(print, args) {
  utils.request(args, (error, response) => {
    if(error) throw new Error(error);
    print(response)
    //pront(response.data)//para acceder especificamente a la informacion de una pagina 
  })
}

module.exports = { pwd, date, echo, ls, cat, head, tail, curl };
