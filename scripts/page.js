import CONFIG from "../config/config.js"

//var CONFIG = "../config/config.js";
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

    }
    /**
     * get page configuration by pageName.
     * set controllerInstance 
     * @param {string} pageName 
     */
    getPageConfig(pageName) {
       
          
            let pageConfig = CONFIG.pages[pageName];
            if (pageConfig){
                //set controler 
                pageConfig.controllerInstance = new pageConfig.controller;
                //set view name as same as key name
                pageConfig.viewName = pageName ; 
                this.currentPageConfig = pageConfig ; 
                return pageConfig;
            }
      
    }
    /**
     * get home page name by searching header->isHome field in config file
     */
    getHomePageName() {
       
            const pages = CONFIG.pages;
            let homePage = Object.values(pages).find(el => {                
                return (el.header.isHome)
                });
                    
            return homePage.name;
        
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
     load(pageName) {             
       
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

   
}

export {Page}
