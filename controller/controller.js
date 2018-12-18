import GLOBAL from '../scripts/constants.js';

import {
    NotificationMainController
} from './NotificationMainController.js';
import {
    TemplateMainController
} from './TemplateMainController.js';
/**
 * controllerClasses : all classes in the controler
 */
const controllerClasses = {
    NotificationMainController,
    TemplateMainController
};
/**
 * controllerInstances: the collection of instance of controller class.
 * Format {"name":<controller name>
 *          "Instance":<controller instance>}
 */
var controllerInstances = [];
/**
 * ControllerFactory factory to manage the controllers
 */
class ControllerFactory {
    /**
     * get controller instance by name
     * @param {string} name controller Name
     */
    static getInstance(name) {

        const existInstance = controllerInstances.find(item => {
            return (item.name == name);
        })

        if (existInstance) {

            return existInstance.instance;
        } else {

            const newInstance = new controllerClasses[name];
            controllerInstances.push({
                "name": name,
                instance: newInstance
            });
            return newInstance;
        }



    }
}


export {
    ControllerFactory,
}