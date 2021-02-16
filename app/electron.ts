import { app, BrowserWindow } from 'electron';

function createWindow () {
  // Create the browser window.
  let win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: true,
      nodeIntegrationInWorker: true
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
}

app.on('ready', createWindow);