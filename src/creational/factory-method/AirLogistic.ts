import {Transport} from "./Transport";
import {Logistics} from "./Logistics";

import {Plane} from "./Plane";

export class AirLogistic extends Logistics{
  public createTransport(): Transport { return new Plane(); }
}
