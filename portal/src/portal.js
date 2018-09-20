import 'zone.js';
import * as singleSpa from 'single-spa';

const hashPrefix = (prefix) => {
    return function (location) {
        return location.hash.startsWith(`#${prefix}`);
    }
}

// Name of our single-spa application
// Our loading function
// Our activity function
singleSpa.registerApplication('app1', () => SystemJS.import('/app1/singleSpaEntry.js'), hashPrefix('/chat'));
singleSpa.registerApplication('app2', () => SystemJS.import('/app2/singleSpaEntry.js'), hashPrefix('/chat'));
singleSpa.registerApplication('app3', () => SystemJS.import('/app3/singleSpaEntry.js'), hashPrefix('/chat'));

singleSpa.start();

