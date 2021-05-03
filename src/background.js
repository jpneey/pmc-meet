'use strict'

import { app, protocol, BrowserWindow } from 'electron'
import { createProtocol } from 'vue-cli-plugin-electron-builder/lib'
import installExtension, { VUEJS_DEVTOOLS } from 'electron-devtools-installer'
import * as shutdown from 'electron-shutdown-command'

const isDevelopment = process.env.NODE_ENV !== 'production'

const path = require('path')
const { ipcMain } = require('electron')
const child = require('child_process').execFile;
const exec = require('child_process').execSync;

// Scheme must be registered before the app is ready
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { secure: true, standard: true } }
])

async function createWindow() {
  // Create the browser window.
  const win = new BrowserWindow({
    width: 1000,
    height: 700,
    center: true,
    autoHideMenuBar: true,
    fullscreen: true,
    frame: false,
    minimizable: false,
    webPreferences: {
      // Use pluginOptions.nodeIntegration, leave this alone
      // See nklayman.github.io/vue-cli-plugin-electron-builder/guide/security.html#node-integration for more info
      nodeIntegration: process.env.ELECTRON_NODE_INTEGRATION,
      preload: path.join(__dirname, '../src/preload.js')
    }
  })

  win.setFullScreen(false)
  win.maximize()

  if (process.env.WEBPACK_DEV_SERVER_URL) {
    // Load the url of the dev server if in development mode
    await win.loadURL(process.env.WEBPACK_DEV_SERVER_URL)
  } else {
    createProtocol('app')
    win.removeMenu()
    // Load the index.html when not in development
    win.loadURL('app://./index.html')
  }
}

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (BrowserWindow.getAllWindows().length === 0) createWindow()
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', async () => {
  if (isDevelopment && !process.env.IS_TEST) {
    // Install Vue Devtools
    try {
      await installExtension(VUEJS_DEVTOOLS)
    } catch (e) {
      console.error('Vue Devtools failed to install:', e.toString())
    }
  }
  createWindow()
})

// Exit cleanly on request from parent process in development mode.
if (isDevelopment) {
  if (process.platform === 'win32') {
    process.on('message', (data) => {
      if (data === 'graceful-exit') {
        app.quit()
      }
    })
  } else {
    process.on('SIGTERM', () => {
      app.quit()
    })
  }
}


/* ipc funcs */

ipcMain.on('close-app', (event, arg) => {
  if(arg === "Unimex123!") { app.exit(); return; };
})

ipcMain.on('off-app', (event, arg) => {
  shutdown.shutdown();
})

ipcMain.on('reboot-app', (event, arg) => {
  shutdown.reboot();
})

ipcMain.on('open-googlemeet', (event, arg) => {
  child("C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe", ["" + arg], function(err, data) {
    if(err){ event.reply("error", err); }
  });
})

ipcMain.on('open-zoom', (event, arg) => {
  child(arg, function(err, data) {
    if(err){ event.reply("error", err); }
  });
})

ipcMain.on('open-webex', (event, arg) => {
  child(arg, function(err, data) {
    if(err){ event.reply("error", err); }
  });
})

ipcMain.on('open-goto', (event, arg) => {
  child(arg, ["/Action Host", "/Trigger Shortcut", "/Product G2M"], function(err, data) {
    if(err){ event.reply("error", err); }
  });
})

ipcMain.on('open-team', (event, arg) => {
  child(arg, ["--processStart", "Teams.exe"], function(err, data) {
    if(err){ event.reply("error", err); }
  });
})

ipcMain.on('open-skype', (event, arg) => {
  child(arg, function(err, data) {
    if(err){ event.reply("error", err); }
  });
})