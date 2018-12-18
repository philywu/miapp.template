import GLOBAL from '../scripts/constants.js';
import {BaseController} from "./BaseController.js";
import {
    RemoteUtil
} from "../util/util.js";

const NOTIFICATION_SENDER1 = "hitools"
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