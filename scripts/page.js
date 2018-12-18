import {ControllerFactory} from "../controller/controller.js";

var _CONFIG_FILE_PATH = "../config/config.json";
var _FRAGMENT_FILE_EXT = ".fragment.html";
var _PRINT_FILE_EXT = ".print.html";
var _VIEW_FILE_PATH = "../view/";

const _FETCH_ARGS = {
    mode: 'cors',
    headers: {
      'Access-Control-Allow-Origin':'*'
    }
  }
/**
 * page control class
 */
class Page {
    constructor () {       
        this.currentPageConfig = {};
        this.historyPageConfigStack = [];

        this.config = null;
        
    }
    /**
     * get page configuration by pageName.
     * set controllerInstance 
     * @param {string} pageName 
     */
    getPageConfig(pageName) {
        if (this.config){
            const pages = this.config.pages;
            let pageConfig = pages.filter(el => {                
                return (el.name == pageName)
                });
        
            pageConfig[0].controllerInstance = ControllerFactory.getInstance(pageConfig[0].controller);
            this.currentPageConfig = pageConfig[0] ; 
            return pageConfig[0];
        } 
    }
    /**
     * get home page name by searching header->isHome field in config file
     */
    getHomePageName() {
        if (this.config){
            const pages = this.config.pages;
            let homePage = pages.filter(el => {                
                return (el.header.isHome)
                });
                    
            return homePage[0].name;
        } 
    }
    
    /**
     * push pageconfig in history stack
     * @param {config} pageConfig 
     */
    historyPush(pageConfig){
        this.historyPageConfigStack.push(pageConfig);
    }
    /**
     * pop pageconfig in history stack
     */
    historyPop(){
        if (this.historyPageConfigStack.length>0){
            return this.historyPageConfigStack.pop();
        } else {
            return this.currentPageConfig;
        }
    }
    /**
     * load page 
     * @param {string} pageName 
     */
    async load(pageName) {             
        if (!this.config){
            this.config = await this.getConfigFromJson();
        }
        if (!pageName) {
           pageName = this.getHomePageName();
        } 
        return this.getPageConfig(pageName);
    }
    /**
     * get view file content
     * @param {string} viewName 
     */
    async getFragmentFile(viewName){
        const fileName = _VIEW_FILE_PATH+viewName+_FRAGMENT_FILE_EXT; 
       
        try {
            let res = await fetch(fileName,_FETCH_ARGS);
            return res.text();
        } catch(err) {
            return null; 
        }
    }
    async getPrintFile(viewName){
        const fileName = _VIEW_FILE_PATH+viewName+_PRINT_FILE_EXT; 
       
        try {
            let res = await fetch(fileName,_FETCH_ARGS);
            return res.text();
        } catch(err) {
            return null; 
        }
    }
    /**
     * get config from Json
     */
    async getConfigFromJson() {
        if (!this.config) {
            try {
                let res = await fetch(_CONFIG_FILE_PATH,_FETCH_ARGS);
                return res.json();
            } catch(err) {
                console.log(err);
                return null; 
            }
        } else {
            return this.config;
        }
        
    }
   
}

export {Page}