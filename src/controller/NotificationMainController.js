import GLOBAL from '../scripts/constants.js';
import {BaseController} from "./BaseController.js";

class NotificationMainController extends BaseController {
    constructor(args) {
        super(args);

    }
    //init happend only when bind to page
    init(app) {
        console.log("notification");
        super.init(app);
        this.registerEvent();
    }

   
    registerEvent() {
        //bind this
        
    }



}
export {NotificationMainController};