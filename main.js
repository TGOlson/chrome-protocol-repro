'use strict';

var electron = require('electron');
var app = electron.app;
var BrowserWindow = electron.BrowserWindow;
var mainWindow;

function createWindow () {
  mainWindow = new BrowserWindow({width: 1000, height: 800});
  mainWindow.loadURL('file://' + __dirname + '/index.html');

  mainWindow.webContents.openDevTools();

  mainWindow.on('closed', function() {
    mainWindow = null;
  });
}

app.on('open-url', function(e, url) {
  e.preventDefault();

  if (mainWindow) {
    mainWindow.webContents.send('open-url-event', url);

    if (mainWindow.isMinimized()) {
      mainWindow.restore();
    } else {
      mainWindow.focus();
    }
  }
});

app.on('ready', createWindow);

app.on('activate', function () {
  if (mainWindow === null) {
    createWindow();
  }
});

app.on('window-all-closed', function() {
  app.quit();
});
