//index.js:
 (globalThis || window || global)['__farm_default_namespace__'] = {__FARM_TARGET_ENV__: 'browser'};(function (modules, entryModule) {
            var cache = {};

            function dynamicRequire(id) {
              return Promise.resolve(require(id));
            }
          
            function require(id) {
              if (cache[id]) return cache[id].exports;
          
              var module = {
                id: id,
                exports: {}
              };
          
              modules[id](module, module.exports, require, dynamicRequire);
              cache[id] = module;
              return module.exports;
            }
          
            require(entryModule);
          })({"ec853507": function(module, exports, farmRequire, farmDynamicRequire) {
console.log("runtime/index.js")(globalThis || window || global)["__farm_default_namespace__"].__farm_module_system__.setPlugins([]);

},}, "ec853507");(function (modules) {
            for (var key in modules) {
              modules[key].__farm_resource_pot__ = 'index_ecb7.js';
                (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.register(key, modules[key]);
            }
        })({"569704c1": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveValue", {
    enumerable: true,
    get: function() {
        return resolveValue;
    }
});
function parse() {
    const mode = 1;
    const typeMap = pathStateMachine[mode];
    return typeMap;
}
const pathStateMachine = [];
pathStateMachine[0 /* States.BEFORE_PATH */ ] = {
    ["w" /* PathCharTypes.WORKSPACE */ ]: [
        0 /* States.BEFORE_PATH */ 
    ],
    ["i" /* PathCharTypes.IDENT */ ]: [
        3 /* States.IN_IDENT */ ,
        0 /* Actions.APPEND */ 
    ],
    ["[" /* PathCharTypes.LEFT_BRACKET */ ]: [
        4 /* States.IN_SUB_PATH */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: [
        7 /* States.AFTER_PATH */ 
    ]
};
pathStateMachine[1 /* States.IN_PATH */ ] = {
    ["w" /* PathCharTypes.WORKSPACE */ ]: [
        1 /* States.IN_PATH */ 
    ],
    ["." /* PathCharTypes.DOT */ ]: [
        2 /* States.BEFORE_IDENT */ 
    ],
    ["[" /* PathCharTypes.LEFT_BRACKET */ ]: [
        4 /* States.IN_SUB_PATH */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: [
        7 /* States.AFTER_PATH */ 
    ]
};
pathStateMachine[2 /* States.BEFORE_IDENT */ ] = {
    ["w" /* PathCharTypes.WORKSPACE */ ]: [
        2 /* States.BEFORE_IDENT */ 
    ],
    ["i" /* PathCharTypes.IDENT */ ]: [
        3 /* States.IN_IDENT */ ,
        0 /* Actions.APPEND */ 
    ],
    ["0" /* PathCharTypes.ZERO */ ]: [
        3 /* States.IN_IDENT */ ,
        0 /* Actions.APPEND */ 
    ]
};
pathStateMachine[3 /* States.IN_IDENT */ ] = {
    ["i" /* PathCharTypes.IDENT */ ]: [
        3 /* States.IN_IDENT */ ,
        0 /* Actions.APPEND */ 
    ],
    ["0" /* PathCharTypes.ZERO */ ]: [
        3 /* States.IN_IDENT */ ,
        0 /* Actions.APPEND */ 
    ],
    ["w" /* PathCharTypes.WORKSPACE */ ]: [
        1 /* States.IN_PATH */ ,
        1 /* Actions.PUSH */ 
    ],
    ["." /* PathCharTypes.DOT */ ]: [
        2 /* States.BEFORE_IDENT */ ,
        1 /* Actions.PUSH */ 
    ],
    ["[" /* PathCharTypes.LEFT_BRACKET */ ]: [
        4 /* States.IN_SUB_PATH */ ,
        1 /* Actions.PUSH */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: [
        7 /* States.AFTER_PATH */ ,
        1 /* Actions.PUSH */ 
    ]
};
pathStateMachine[4 /* States.IN_SUB_PATH */ ] = {
    ["'" /* PathCharTypes.SINGLE_QUOTE */ ]: [
        5 /* States.IN_SINGLE_QUOTE */ ,
        0 /* Actions.APPEND */ 
    ],
    ['"' /* PathCharTypes.DOUBLE_QUOTE */ ]: [
        6 /* States.IN_DOUBLE_QUOTE */ ,
        0 /* Actions.APPEND */ 
    ],
    ["[" /* PathCharTypes.LEFT_BRACKET */ ]: [
        4 /* States.IN_SUB_PATH */ ,
        2 /* Actions.INC_SUB_PATH_DEPTH */ 
    ],
    ["]" /* PathCharTypes.RIGHT_BRACKET */ ]: [
        1 /* States.IN_PATH */ ,
        3 /* Actions.PUSH_SUB_PATH */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: 8 /* States.ERROR */ ,
    ["l" /* PathCharTypes.ELSE */ ]: [
        4 /* States.IN_SUB_PATH */ ,
        0 /* Actions.APPEND */ 
    ]
};
pathStateMachine[5 /* States.IN_SINGLE_QUOTE */ ] = {
    ["'" /* PathCharTypes.SINGLE_QUOTE */ ]: [
        4 /* States.IN_SUB_PATH */ ,
        0 /* Actions.APPEND */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: 8 /* States.ERROR */ ,
    ["l" /* PathCharTypes.ELSE */ ]: [
        5 /* States.IN_SINGLE_QUOTE */ ,
        0 /* Actions.APPEND */ 
    ]
};
pathStateMachine[6 /* States.IN_DOUBLE_QUOTE */ ] = {
    ['"' /* PathCharTypes.DOUBLE_QUOTE */ ]: [
        4 /* States.IN_SUB_PATH */ ,
        0 /* Actions.APPEND */ 
    ],
    ["o" /* PathCharTypes.END_OF_FAIL */ ]: 8 /* States.ERROR */ ,
    ["l" /* PathCharTypes.ELSE */ ]: [
        6 /* States.IN_DOUBLE_QUOTE */ ,
        0 /* Actions.APPEND */ 
    ]
};
function resolveValue() {
    parse();
}

},
"b5d64806": function(module, exports, farmRequire, farmDynamicRequire) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
var _a = farmRequire("569704c1");
console.log(_a.resolveValue);

},});(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setInitialLoadedResources([]);(globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__.setDynamicModuleResourcesMap({  });var farmModuleSystem = (globalThis || window || global)['__farm_default_namespace__'].__farm_module_system__;farmModuleSystem.bootstrap();var entry = farmModuleSystem.require("b5d64806");