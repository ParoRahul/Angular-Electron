import {ToolbarItem} from './toolbar.item.model'

interface AppSettingsTemplate{
    theme:string;
    homePage:boolean;
    toolbar:ToolbarItem [];
}

interface LangSettingsTemplate{
    language:string;
}

interface DbSettingsTemplate{
    path:string;
}

interface SettingsTemplate{
    appSettings:AppSettingsTemplate;
    langSettings:LangSettingsTemplate;
    dbSettings:DbSettingsTemplate
}

export class Settings implements SettingsTemplate{
    appSettings:AppSettingsTemplate;
    langSettings:LangSettingsTemplate;
    dbSettings:DbSettingsTemplate;

    constructor(){
        
    }

}