"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var electron_1 = require("electron");
var path = require("path");
var url = require("url");
var MainProcess = /** @class */ (function () {
    function MainProcess() {
        electron_1.app.requestSingleInstanceLock();
        if (!electron_1.app.hasSingleInstanceLock()) {
            console.log(" ............................................");
            console.log(" A Instance of The Application is running ...");
            console.log(" ............................................");
            electron_1.app.quit();
        }
        //app.setAppLogsPath(MainProcess.logpath);
    }
    MainProcess.prototype.createWindow = function (winTitle) {
        var window = new electron_1.BrowserWindow({
            "title": "Main_Window",
            "width": 1050,
            "height": 700,
            "minWidth": 600,
            "minHeight": 400,
            "frame": false,
            "parent": null,
            "useContentSize": true,
            "show": false,
            "webPreferences": {
                "nodeIntegration": true,
                "nodeIntegrationInWorker": true
            }
        });
        if (window == null) {
            console.log(" Window is Null");
            throw new Error('Window is Null');
        }
        window.loadURL(url.format({
            pathname: path.join(__dirname, "/../../dist/Angular-Electron/index.html"),
            protocol: "file:",
            slashes: true
        }));
        if (MainProcess.debug)
            window.webContents.openDevTools();
        MainProcess.mainWindowId = window.id;
        window.once('ready-to-show', function () {
            if (window.getTitle() !== 'Confirm-Window')
                window.show();
        });
        window.on('closed', function () {
            console.log(" closed event catched");
            window = null;
        });
        window.webContents.on('did-fail-load', function (event, errorCode, errorDescription, validatedURL) {
            console.log('Your Ember app (or other code) in the main window has crashed.');
            console.log('This is a serious issue that needs to be handled and/or debugged.');
            console.log("errorCode :" + errorCode + " ,errorDescription :" + errorDescription + ",validatedURL :" + validatedURL);
            throw new Error('Window Loading Fail');
        });
        window.webContents.on('crashed', function () {
            console.log('Your Ember app (or other code) in the main window has crashed.');
            console.log('This is a serious issue that needs to be handled and/or debugged.');
            throw new Error('Window Loading Fail');
        });
        window.on('unresponsive', function () {
            console.log('Your Ember app (or other code) has made the window unresponsive.');
        });
        window.on('responsive', function () {
            console.log('The main window has become responsive again.');
        });
    };
    MainProcess.prototype.run = function () {
        var _this = this;
        if (MainProcess.debug) {
            electron_1.app.disableHardwareAcceleration();
        }
        electron_1.app.on('ready', function () {
            _this.createWindow(MainProcess.initWinTitle);
        });
        electron_1.ipcMain.on('window.close', function (event, id) {
            var currentWindow = electron_1.BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.close();
        });
        electron_1.ipcMain.on('window.exist', function (event, id) {
            var currentWindow = electron_1.BrowserWindow.fromId(id);
            if (currentWindow != null)
                event.returnValue = true;
            else
                event.returnValue = false;
        });
        electron_1.ipcMain.on('window.hide', function (event, id) {
            var currentWindow = electron_1.BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.hide();
        });
        electron_1.ipcMain.on('window.show', function (event, id) {
            var currentWindow = electron_1.BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.show();
        });
        electron_1.ipcMain.on('dialog.Show', function (event, _a) {
            var windowTitle = _a.windowTitle, features = _a.features, requestId = _a.requestId, eventName = _a.eventName;
            var currentWindow = electron_1.BrowserWindow.fromId(MainProcess.mainWindowId);
            if (currentWindow != null) {
                electron_1.dialog.showOpenDialog(currentWindow, features).then(function (result) {
                    event.reply("window.addEventListener." + eventName, { requestId: requestId, result: result });
                }).catch(function (err) {
                    event.reply("window.addEventListener." + eventName, { requestId: requestId });
                });
            }
        });
        electron_1.app.on('quit', function (event, exitCode) {
            console.log(" Application is going to be Exit with code " + exitCode);
        });
        electron_1.app.on('gpu-process-crashed', function (event, killed) {
            if (!killed) {
                console.log(" GPU Process Crashed is going to be close the Application");
                electron_1.app.quit();
            }
        });
        electron_1.app.on('renderer-process-crashed', function (event, webcontent, killed) {
            if (!killed) {
                console.log(" GPU Process Crashed is going to be close the Application");
                electron_1.app.quit();
            }
        });
        electron_1.app.on('window-all-closed', function () {
            console.log(" window-all-closed event catched");
            electron_1.app.quit();
        });
    };
    MainProcess.logpath = '../log';
    MainProcess.debug = true;
    MainProcess.initWinTitle = 'MainWindow';
    return MainProcess;
}());
exports.MainProcess = MainProcess;
var mainProcess = new MainProcess();
mainProcess.run();
//# sourceMappingURL=main.js.map