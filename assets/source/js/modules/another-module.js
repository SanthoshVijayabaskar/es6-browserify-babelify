// Imports another module
import theModule from './a-module';

export default {
    init: () => {
        // Returns a property of an imported module
        return theModule.theProperty;
    }
}