"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ComplexTypes = require("./complex-types");
var ConditionalTypes = require("./conditional-types");
var KeyOf = require("./keyof");
var ReturnTypes = require("./return-types");
var UtilityTypes = require("./utility-types");
//So we can keep our imports when we comment code
if (ReturnTypes || UtilityTypes || ConditionalTypes || KeyOf || ComplexTypes) { }
// ReturnTypes.exampleVoid();
// ReturnTypes.exampleUndefined();
// ReturnTypes.exampleNever();
// UtilityTypes.exampleOmit();
// UtilityTypes.examplePick();
UtilityTypes.examplePartial();
// UtilityTypes.exampleReal();
// ConditionalTypes.exampleExtends();
// ConditionalTypes.exampleUnion();
// ConditionalTypes.exampleConditional();
// ConditionalTypes.exampleFlatten();
// KeyOf.exampleKeyof();
// KeyOf.exampleForEach();
// KeyOf.exampleProperty();
// KeyOf.exampleTransform();
// KeyOf.exampleConditionalTransform();
// ComplexTypes.examplePartial();
// ComplexTypes.exampleDeepPartial();
// ComplexTypes.exampleUnion();
console.log('The demo is ready to go!');
