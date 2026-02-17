import {Observer} from "./Observer";

export class Hymera implements Observer {
  public update(status: string): void {
    console.log(`[Hymera] Push-сповіщення: Вузол зв'язку зараз у стані "${status}".`);
  }
}
