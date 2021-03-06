/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-308.js
 * @description Object.defineProperty - 'O' is an Arguments object, 'name' is an index named data property of 'O' but not defined in [[ParameterMap]] of 'O', test TypeError is thrown when updating the [[Configurable]] attribute value of 'name' which is not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        return (function () {
            Object.defineProperty(arguments, "0", {
                value: 0,
                writable: false,
                enumerable: false,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "0", {
                    configurable: true
                });
            } catch (e) {
                return e instanceof TypeError && dataPropertyAttributesAreCorrect(arguments, "0", 0, false, false, false);
            }
            return false;
        }());
    }
runTestCase(testcase);
