const {app, BrowserWindow} = require('electron')
const path = require('path')
const url = require('url')

// require('electron-reload')(__dirname)

let win

function createWindow () {
    win = new BrowserWindow({
        width: 800,
        minWidth: 650,
        minHeight: 600,
        icon: __dirname + 'build/icon.ico',
        show: false
    })
    win.loadURL(url.format({
        pathname: path.join(__dirname, 'index.html'),
        protocol: 'file:',
        slashes: true
    }))
    // win.webContents.openDevTools()
    win.once('ready-to-show', () => {
        win.show()
    })
    win.on('closed', () => {
        win = null
    })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit()
    }
})

app.on('activate', () => {
    if (win === null) {
        createWindow()
    }
})