var portscanner = require('portscanner')

const electron = require('electron')
const app = electron.app
const BrowserWindow = electron.BrowserWindow

const path = require('path')
const isDev = require('electron-is-dev')

let mainWindow



function createWindow() {

  // Checks the status of a single port
  portscanner.checkPortStatus(5984, '127.0.0.1', function (error, status) {
    // Status is 'open' if currently in use or 'closed' if available
    if (status === "open") {
      console.log("port is in use " + status)
    } else {
      console.log("port is in use " + status)

      // const exec = require('child_process').exec
      // exec("pouchdb-server -d ./db")
    }

  })
  mainWindow = new BrowserWindow({ width: 900, height: 680 })
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `file://${path.join(__dirname, '../build/index.html')}`)
  if (isDev) {
    // Open the DevTools.
    //BrowserWindow.addDevToolsExtension('<location to your react chrome extension>')
    mainWindow.webContents.openDevTools()
  }
  mainWindow.on('closed', () => mainWindow = null)
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})