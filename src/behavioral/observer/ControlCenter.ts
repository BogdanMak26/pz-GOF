import {Observer} from "./Observer";

export class ControlCenter implements Observer {
  public update(status: string): void {
    console.log(`[Штаб] Отримано ТТД: Статус змінено на "${status}". Оновлюємо карту.`);
  }
}
