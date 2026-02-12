import { Database } from "../src/creational/singleton";




console.log("--- Creational: Singleton ---");
const db1 = Database.getInstance();
const db2 = Database.getInstance();
db1.query("SELECT * FROM users");
console.log("Чи це один і той самий об'єкт?", db1 === db2);









