import { Database } from "../src/creational/singleton";
import { RoadLogistics, SeaLogistics } from "../src/creational/factory-method";
import { RadioAdapter, LegacyRadioR123 } from "../src/structural/adapter";
import { CommsFacade } from "../src/structural/facade";
import {
  SecureRouteStrategy} from '../src/behavioral/SecureRouteStrategy' ;
import {FastRouteStrategy} from '../src/behavioral/FastRouteStrategy';
import {EnergySavingStrategy} from '../src/behavioral/EnergySavingStrategy';
import {DataTransmissionSystem} from '../src/behavioral/strategy';

console.log("--- Creational: Singleton ---");
const db1 = Database.getInstance();
const db2 = Database.getInstance();
db1.query("SELECT * FROM users");
console.log("Чи це один і той самий об'єкт?", db1 === db2);


console.log("\n--- Creational: Factory Method ---");
const road = new RoadLogistics();
console.log(road.planDelivery());


console.log("\n--- Structural: Adapter ---");
console.log("=== РОБОТА ЧЕРЕЗ АДАПТЕР ===");

// Маємо старе залізо
const oldR123 = new LegacyRadioR123();

// Створюємо адаптер, щоб система могла з ним працювати
const adapter = new RadioAdapter(oldR123);

// Наша сучасна система викликає стандартний метод transmit
// Вона навіть не знає, що всередині працює стара Р-123
adapter.transmit(44.5, "Прийом, як чути?");


console.log("\n--- Structural: Facade ---");
const commun = new CommsFacade();
commun.sendMessage("Ми перемогли !!!!!!!!!");


console.log("\n--- Behavioral: Strategy ---");
console.log("=== ЗАПУСК СИСТЕМИ ТТД ===");

// Починаємо з режиму економії енергії
const ttdSystem = new DataTransmissionSystem(new EnergySavingStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");

// Ситуація змінилася, потрібна максимальна безпека
ttdSystem.setStrategy(new SecureRouteStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");

// Потрібна термінова передача (наприклад, тривога)
ttdSystem.setStrategy(new FastRouteStrategy());
ttdSystem.sendData("Штаб", "Блокпост-1");
