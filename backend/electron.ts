import { app, BrowserWindow, ipcMain, dialog,webContents } from 'electron';
/* import * as PouchDB from 'pouchdb'; */
import * as path from 'path';
import * as url from 'url';
const args = process.argv.slice(1)
const serve = args.some(val => val === '--serve');

export class MainProcess {
    private static logpath:string ='../log';
    private static debug:boolean = false;
    private static initWinTitle:string = 'MainWindow';
    private static mainWindowId:number;
    private Dblocation:string

    constructor() {
        app.requestSingleInstanceLock();
        if (!app.hasSingleInstanceLock()) {
            console.log(' ............................................');
            console.log(' A Instance of The Application is running ...');
            console.log(' ............................................');
            app.quit();
        }
        // app.setAppLogsPath(MainProcess.logpath);
        this.Dblocation = 'D:/node/angular/PouchDB';
    }

    createWindow(winTitle:string):void  {
        let window = new BrowserWindow({
                title: 'Main_Window',
                width: 1050,
                height: 700,
                minWidth: 600,
                minHeight: 400,
                frame: false,
                parent: null,
                useContentSize: true,
                show: false,
                icon: path.join(__dirname,'app_taskbar_icon.png'),
                webPreferences: {
                    nodeIntegration: true,
                    nodeIntegrationInWorker: true
                }
        });
        if ( window == null ){
            console.log(' Window is Null');
            throw new Error('Window is Null');
        }
        if (serve) {
            /* require('electron-reload')(__dirname, {
              electron: require(`${__dirname}/node_modules/electron`)
            }); */
            window.loadURL('http://localhost:4200');
        } else {
            window.loadURL(url.format({
                pathname: path.join(__dirname, `index.html`),
                protocol: 'file:',
                slashes: true
                })
            );
        }

        if (MainProcess.debug)
            window.webContents.openDevTools();
        MainProcess.mainWindowId=window.id;

        window.once('ready-to-show', () => {
                if (window.getTitle() !== 'Confirm-Window')
                    window.show();
        });

        window.on('closed', () => {
            console.log(' closed event catched');
            window = null;
        });

        window.webContents.on('did-fail-load', (event, errorCode ,errorDescription ,validatedURL ) => {
            console.log('Your Ember app (or other code) in the main window has crashed.');
            console.log('This is a serious issue that needs to be handled and/or debugged.');
            console.log(`errorCode :${errorCode} ,errorDescription :${errorDescription},validatedURL :${validatedURL}`);
            throw new Error('Window Loading Fail');
        });

        window.webContents.on('crashed', () => {
            console.log('Your Ember app (or other code) in the main window has crashed.');
            console.log('This is a serious issue that needs to be handled and/or debugged.');
            throw new Error('Window Loading Fail');
        });

        window.on('unresponsive', () => {
            console.log('Your Ember app (or other code) has made the window unresponsive.');
        });

        window.on('responsive', () => {
            console.log('The main window has become responsive again.');
        });
    }

    run() {
        if (MainProcess.debug) {
             app.disableHardwareAcceleration();
        }

        app.on('ready', () => {
            this.createWindow(MainProcess.initWinTitle)
        });

        ipcMain.on('window.close', (event, id) => {
            let currentWindow = BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.close()
        });

        ipcMain.on('window.exist', (event, id) => {
            let currentWindow = BrowserWindow.fromId(id);
            if (currentWindow != null)
                event.returnValue = true;
            else
                event.returnValue = false;
        });

        ipcMain.on('window.hide', (event, id) => {
            let currentWindow = BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.hide();
        });

        ipcMain.on('window.show', (event, id) => {
            let currentWindow = BrowserWindow.fromId(id);
            if (currentWindow != null)
                currentWindow.show();
        });

        ipcMain.on('dialog.Show', (event, { windowTitle, features, requestId, eventName }) => {
            let currentWindow = BrowserWindow.fromId(MainProcess.mainWindowId);
            if (currentWindow != null) {
                dialog.showOpenDialog(currentWindow,features).then(result => {
                    event.reply('window.addEventListener.' + eventName,{ requestId, result });
                }).catch(err => {
                    event.reply('window.addEventListener.' + eventName,{ requestId });
                });
            }
        });

        ipcMain.on('document-insert',(event:any,item:any)=>{
            console.log(item)
            /* let schema= path.join(this.Dblocation,item.schema);
            let database = new PouchDB(schema,{ auto_compaction: true});
            database.put(item.document).then( result=> {
                    console.log(result);
                    event.reply('insert-sucess', result);
            }).catch(   error=>{
                event.reply('insert-fail', error);
                console.log(error)
            }).finally(
                ()=>database.close()
            ) */
        });

        ipcMain.on('document-retrive',(event:any,item:any)=>{
            console.log(item)
            /* let schema= path.join(this.Dblocation,item.schema);
            let database = new PouchDB(schema,{ auto_compaction: true});
            database.get(item.id)
            .then( result=> {
                event.reply('retrival-sucess', result)
            }).catch((error)=>{
                event.reply('retrival-fail', error)
                console.log(error)
            }).finally(
                ()=>database.close()
            ) */
        });

        ipcMain.on('document-delete',(event:any,item:any)=>{
            console.log(item)
            /* let schema= path.join(this.Dblocation,item.schema);
            let database = new PouchDB(schema,{ auto_compaction: true});
            database.remove(item.document)
            .then( result=> {
                event.reply('delete-sucess', result)
            }).catch((error)=>{
                event.reply('delete-fail', error)
                console.log(error)
            })
            database.close(); */
        });

        app.on('quit', (event, exitCode) => {
            console.log(` Application is going to be Exit with code ${exitCode}`);
        });

        app.on('gpu-process-crashed', (event, killed) => {
            if (!killed) {
                console.log(` GPU Process Crashed is going to be close the Application`);
                app.quit();
            }
        });

        app.on('renderer-process-crashed', (event, webcontent:webContents, killed:boolean ) => {
            if (!killed) {
                console.log(` GPU Process Crashed is going to be close the Application`);
                app.quit();
            }
        });

        app.on('window-all-closed', () => {
            console.log(` window-all-closed event catched`);
            app.quit()
        })
    }
}


const mainProcess = new MainProcess();
mainProcess.run();
