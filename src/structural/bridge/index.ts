import { MobileBackend } from "./MobileBackend";
import { WebBackend } from "./WebBackend";
import { Android } from "./Android";
import { IPhone } from "./Iphone";
import { WebUI } from "./WebUI";
import {AdvancedUI} from "./AdvancedUI";

// Створюємо бекенди
const mobileBackend = new MobileBackend();
const webBackend = new WebBackend();

// Тест 1: Мобільний бекенд на різних пристроях
const androidUI = new Android(mobileBackend);
androidUI.render();

const iphoneUI = new IPhone(mobileBackend);
iphoneUI.render();

// Тест 2: Веб бекенд на веб інтерфейсі
const webUI = new WebUI(webBackend);
try {
  webUI.render();
} catch (error) {
  console.log("!!! Увага: WebUI не зміг завантажитись. Перемикаємось на резервний канал...");
  webUI.setBackend(mobileBackend); // Гаряча заміна на локальні дані
  webUI.render();
}

// Тест 3: "Міст" у дії — Android використовує Web бекенд
const androidBrowserUI = new Android(webBackend);
androidBrowserUI.render();


const proUI = new AdvancedUI(mobileBackend);
proUI.render();
proUI.showDetailedStats();

// 2. Демонструємо "гарячу зміну" двигуна
console.log("\n--- Перемикання на Web в реальному часі ---");
proUI.setBackend(webBackend);
proUI.render();
