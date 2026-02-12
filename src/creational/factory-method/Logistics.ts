import {Transport} from "./Transport";

export abstract class Logistics {
  public abstract createTransport(): Transport;
  public planDelivery(): string {
    const transport = this.createTransport();
    return `Логістика: ${transport.deliver()}`;
  }
}
