const {contextBridge,ipcRenderer} = require('electron');

contextBridge.exposeInMainWorld('api',{
    send: (channel, data) =>{
    let canaisValidos =  ['abrir-link-sobre','fechar-janela-sobre'];
    if(canaisValidos.includes(channel)){
        ipcRenderer.send(channel, data)
        
    }


    }


})