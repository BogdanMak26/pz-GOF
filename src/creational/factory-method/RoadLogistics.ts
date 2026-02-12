import {Transport} from "./Transport";
import {Logistics} from "./Logistics";
import {Truck} from "./Truck";

export class RoadLogistics extends Logistics{
  public createTransport(): Transport { return new Truck(); }
}
