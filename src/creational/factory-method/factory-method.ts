import {RoadLogistics} from "./RoadLogistics";
import {SeaLogistics} from "./SeaLogistics";
import {AirLogistic} from "./AirLogistic";

console.log("\n---  Factory Method ---");
const road = new RoadLogistics();
console.log(road.planDelivery());
const seal = new SeaLogistics();
console.log(seal.planDelivery());
const air = new AirLogistic();
console.log(air.planDelivery());
