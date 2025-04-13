// default import
import aboutMe from "./operationM.js";

console.log(aboutMe())

// named import
import { add,subtract } from "./operationM.js";

console.log(add(12,12));
console.log(subtract(122,100));