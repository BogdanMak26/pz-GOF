// Складні підсистеми
class Antenna { init() { console.log("Антена готова"); } }
class Encryptor { encrypt() { console.log("Дані зашифровано"); } }
class Transmitter { send() { console.log("Сигнал відправлено"); } }

// ФАСАД
export class CommsFacade {
  private antenna = new Antenna();
  private encryptor = new Encryptor();
  private transmitter = new Transmitter();

  // Спрощений метод для користувача
  public sendMessage(data: string) {
    console.log(`--- Підготовка до відправки: ${data} ---`);
    this.antenna.init();
    this.encryptor.encrypt();
    this.transmitter.send();
    console.log("--- Готово ---");
  }
}
