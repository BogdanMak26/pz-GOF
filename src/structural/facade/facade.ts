import {Antenna} from './Antenna'
import {Encryptor} from './Encryptor'
import {Transmitter} from './Transmitter'

class CommsFacade {
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
 console.log("\n--- Structural: Facade ---");
 const commun = new CommsFacade();
 commun.sendMessage("Ми перемогли !!!!!!!!!");


