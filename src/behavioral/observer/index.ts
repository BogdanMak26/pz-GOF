import {CommunicationNode} from "./CommunicationNode";
import {ControlCenter} from "./ControlCenter";
import {MobileApp} from "./MobileApp";

console.log("=== ЗАПУСК МОНІТОРИНГУ ТТД ===");

// Створюємо вузол зв'язку (Суб'єкт)
const radioNode = new CommunicationNode();

// Створюємо спостерігачів
const headquarters = new ControlCenter();
const phone = new MobileApp();

// Підписуємо їх на оновлення
radioNode.attach(headquarters);
radioNode.attach(phone);

// Змінюємо стани — спостерігачі реагують автоматично
radioNode.setStatus("Активний");
radioNode.setStatus("Збій антени");
radioNode.setStatus("Офлайн");
