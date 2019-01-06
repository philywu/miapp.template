 
 import {TemplateMainController} from "../controller/TemplateMainController.js"
 import {NotificationMainController} from "../controller/NotificationMainController.js"
 export default {
    "version":"1.0",
    "pages":{
        "template_main":{
            "name":"template_main",
            "controller":TemplateMainController,
            "header":{
                "title": "Template",
                "isHome":true,
                "isBack":false
                
            },
            "main":{             
            },
            "bottom":{

            }
        },
        "notif_main":{
            "name":"notif_main",
            "controller":NotificationMainController,
            "header":{
                "title": "Notification",
                "isHome":false,
                "isBack":true
                
            },
            "main":{             
            },
            "bottom":{

            }
        }                      

    }
}