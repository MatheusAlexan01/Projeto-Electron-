const {app, BrowserWindow,ipcMain,nativeTheme,Menu,shell} = require("electron")

let mainWindow = null 

app.on('ready',()=>{
    console.log('Iniciando Electron')
    nativeTheme.themeSource = 'dark' // moda o cor do menu 
    mainWindow = new BrowserWindow({
        width: 2000,
        height:700,
        //autoHideMenuBar:true, // esconde o menu
        resizable: false, // tira o icnone de minizar na janela de ações
       icon: 'css/entrega.png',
        webPreferences:{
            preload: `${__dirname}/preload.js`
        }




    })
    Menu.setApplicationMenu(Menu.buildFromTemplate(template))
    mainWindow.loadFile('app/index.html')
    
})

app.on('window-all-closed',()=>{
    app.quit();

})


let sobreWindow = null ;
ipcMain.on('abrir-link-sobre',()=>{
    if(sobreWindow == null){
        sobreWindow = new BrowserWindow({
            width: 900,
            height: 500,
            alwaysOnTop: true,
            frame: false,
            webPreferences:{
                preload: `${__dirname}/preload.js`

            }
        });

        sobreWindow.on('close',()=>{
            sobreWindow = null;
    
        })

       


    }

    sobreWindow.loadFile('app/inicial2.html')
})

ipcMain.on('fechar-janela-sobre', ()=>{
    sobreWindow.close();


})

const template =[
    {
        label: 'Aquivo',
        submenu:[
            {
                label: 'Sair',
                click: ()=> app.quit(), // evento de click
                accelerator: 'Alt+F4'
            }
        ]
    },
    {
        label: 'Exibir',
        submenu: [
            {
                label: 'Recarregar',
                role: 'reload'
            },
            {
                label: 'Ferramenta do Desenvolvedor',
                role: 'toggleDevTools',
            },
            {
                type: 'separator' // separa submenus com uma linha 
            },
            {
                label: 'Aplica zoom',
                role: 'zoomIn'
            },
            {
                label: 'Redizir o zoom',
                role: 'zoomOut'
            },
            {
                label: 'Restaurar zoom',
                role: 'ResetZoom'
            }
        ]
    },
    {
        label: 'Ajuda',
        submenu: [
            {
                label: 'Documentação',
                click: () => shell.openExternal('https://drive.google.com/file/d/1p62_agZjdd_GV8m9F5yX6OiZ630XgXSp/view?usp=sharing')
            },
            {
                type: 'separator'
            },
            {
                label: 'Sobre',
                click: () => paginaSobre()
            }
    
    
        ]
    }
    
    
    
    ]
    
    const paginaSobre = ()=>{
        const sobre = new  BrowserWindow({
            width: 1000,
            height: 500,
            resizable:false,
            autoHideMenuBar:true,
    
    
        })
        sobre.loadFile('app/sobre.html')
    
    }
    