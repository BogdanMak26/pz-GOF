import {RoadLogistics} from "./RoadLogistics";
import {SeaLogistics} from "./SeaLogistics";

console.log("\n--- Creational: Factory Method ---");
const road = new RoadLogistics();
console.log(road.planDelivery());
const seal = new SeaLogistics();
console.log(seal.planDelivery());
