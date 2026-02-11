import { UI } from "./UI";

export class AdvancedUI extends UI {
  // Нова функція, якої немає в базовому UI
  public showDetailedStats() {
    console.log("--- Розширена статистика пристрою ---");
    const data = this.backend.getData();
    console.log(`Аналіз даних: ${data.toUpperCase()} (Довжина: ${data.length})`);
  }

  public render() {
    console.log("AdvancedUI: Рендеринг з покращеним графом...");
    console.log(`Дані: ${this.backend.getData()}`);
  }
}
