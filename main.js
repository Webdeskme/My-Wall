const { app, BrowserWindow } = require('electron')
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
        //preload: path.join(__dirname, './preload.js'),
        nodeIntegration: true,
        //enableRemoteModule: false,
         contextIsolation: false
        // nativeWindowOpen: true,
        // sandbox: true,
      }
  })

  win.loadFile('index.html')
}
//app.whenReady().then(() => {
  //createWindow()
//})
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})
app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})
