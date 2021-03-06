/// Copyright (c) 2012 Ecma International.  All rights reserved. 
/**
 * @path ch15/15.2/15.2.3/15.2.3.6/15.2.3.6-4-311.js
 * @description Object.defineProperty - 'O' is an Arguments object, 'name' is an index named accessor property of 'O' but not defined in [[ParameterMap]] of 'O', test TypeError is thrown when updating the [[Enumerable]] attribute value of 'name' which is not configurable (10.6 [[DefineOwnProperty]] step 4)
 */


function testcase() {
        return (function () {
            function getFunc() {
                return 0;
            }
            Object.defineProperty(arguments, "0", {
                get: getFunc,
                enumerable: true,
                configurable: false
            });
            try {
                Object.defineProperty(arguments, "0", {
                    enumerable: false
                });
            } catch (e) {
                return e instanceof TypeError && accessorPropertyAttributesAreCorrect(arguments, "0", getFunc, undefined, undefined, true, false);
            }
            return false;
        }());
    }
runTestCase(testcase);
