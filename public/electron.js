const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const path = require('path');
const isDev = require('electron-is-dev');


/* servidor */
const express = require('express')
const server = express();
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./rutas');
const bodyParser = require('body-parser');


// conectar mongo
mongoose.Promise = global.Promise;

mongoose.connect('mongodb://localhost/gym' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

server.use(cors())

// habilitar bodyparser
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));


// Rutas de la app
server.use('/', routes());

// carpeta publica
server.use(express.static('uploads'));

server.listen(5000, () => console.log(`Example app listening on port 5000!`))
/* Fin Servidor */


let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({width: 1200, height: 1000 , webPreferences: {
    nodeIntegration: true
  }});
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`);
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>');
    //mainWindow.webContents.openDevTools();
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});