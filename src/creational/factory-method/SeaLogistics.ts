import {Transport} from "./Transport";
import {Logistics} from "./Logistics";
import {Ship} from "./Ship";

export class SeaLogistics extends Logistics {
  public createTransport(): Transport { return new Ship(); }
}
