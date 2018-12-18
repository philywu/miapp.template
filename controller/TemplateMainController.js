import GLOBAL from '../scripts/constants.js';
import {BaseController} from "./BaseController.js";


const NOTIFICATION_SENDER1 = "hitools"
class TemplateMainController extends BaseController {
    constructor(args) {
        super(args);

    }
    //init happend only when bind to page
    init(app) {
        console.log("template main");
        super.init(app);
        this.registerEvent();
    }

   
    registerEvent() {
        //bind this
        //bind this
        document.querySelector("#v_zh").addEventListener("click",evt =>{
           
            let param = {"i18n":{locale: 'zh-CN', defaultCurrency: 'CNY', messageBundleName: "messageBundle_zh"}};
            this.app.reRender(param);
            
        });
        document.querySelector("#v_en").addEventListener("click",evt =>{
            
            this.app.reRender();
            
        })
    }



}
export {TemplateMainController};