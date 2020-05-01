import { Injectable } from '@angular/core';
import { ipcRenderer, webFrame, remote } from 'electron';
import * as childProcess from 'child_process';
import * as fs from 'fs';


@Injectable({
  providedIn: 'root'
})
export class ElectronService {

  private _ipcRenderer: typeof ipcRenderer;
  private _webFrame: typeof webFrame;
  private _remote: typeof remote;
  private _childProcess: typeof childProcess;
  private _fs: typeof fs;

  constructor() {
    if (this.isElectronApp) {
      this._remote = window.require('electron').remote;
      this._ipcRenderer = window.require('electron').ipcRenderer;
      this._webFrame = window.require('electron').webFrame;
      this._childProcess = window.require('child_process');
      this._fs = window.require('fs');
    }
  }

  public get isElectronApp(): boolean {
    return !!(window && window.process && window.process.type);
  }

  public get isRendererProcess(): boolean {
    return this.isElectronApp && window.process.type === 'renderer';
  }

  public get isMainProcess(): boolean {
    return this.isElectronApp && window.process.type === 'main';
  }

  public get isMacOS(): boolean {
    return this.isElectronApp && window.process.platform === 'darwin';
  }

  public get isWindows(): boolean {
    return this.isElectronApp && window.process.platform === 'win32';
  }

  public get isLinux(): boolean {
    return this.isElectronApp && window.process.platform === 'linux';
  }

  public get isX86(): boolean {
    return this.isElectronApp && window.process.arch === 'ia32';
  }

  public get isX64(): boolean {
    return this.isElectronApp && window.process.arch  === 'x64';
  }

  public get remote(): typeof remote {
    return this.isElectronApp ? this._remote : null;
  }

  public get ipcRenderer(): typeof ipcRenderer {
    return this.isElectronApp ? this._ipcRenderer : null;
  }

  public get childProcess(): typeof childProcess {
    return this.isElectronApp ? this._childProcess : null;
  }

  public get fs(): typeof fs {
    return this.isElectronApp ? this._fs : null;
  }

}
