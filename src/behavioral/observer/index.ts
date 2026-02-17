import {CommunicationNode} from "./CommunicationNode";
import {ControlCenter} from "./ControlCenter";
import {MobileApp} from "./MobileApp";
import {Hymera} from "./Hymera";

console.log("=== ЗАПУСК МОНІТОРИНГУ ТТД ===");

// Створюємо вузол зв'язку (Суб'єкт)
const radioNode = new CommunicationNode();

// Створюємо спостерігачів
const headquarters = new ControlCenter();
const phone = new MobileApp();
const hymera = new Hymera();

// Підписуємо їх на оновлення
radioNode.attach(headquarters);
radioNode.attach(phone);
radioNode.attach(hymera);

// Змінюємо стани — спостерігачі реагують автоматично
radioNode.setStatus("Активний");
radioNode.setStatus("Збій антени");
radioNode.setStatus("Офлайн");
