import {Observer} from "./Observer";

export class MobileApp implements Observer {
  public update(status: string): void {
    console.log(`[Додаток] Push-сповіщення: Вузол зв'язку зараз у стані "${status}".`);
  }
}
