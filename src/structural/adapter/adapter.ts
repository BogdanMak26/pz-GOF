import {LegacyRadioR123} from  "./LegacyRadioR123";
import {ModernTransceiver} from "./ModernTransceiver";

export class RadioAdapter implements ModernTransceiver {
  private legacyRadio: LegacyRadioR123;

  constructor(radio: LegacyRadioR123) {
    this.legacyRadio = radio;
  }

  public transmit(mhz: number, message: string): void {
    // Логіка адаптації:
    // 1. Виконуємо необхідну підготовку (увімкнення)
    this.legacyRadio.powerOn();

    // 2. Конвертуємо дані (МГц у кГц, як того вимагає старе залізо)
    const khz = mhz * 1000;

    // 3. Викликаємо специфічний метод старого пристрою
    this.legacyRadio.sendVoice(khz, message);
  }
}
console.log("\n--- Structural: Adapter ---");
console.log("=== РОБОТА ЧЕРЕЗ АДАПТЕР ===");

// Маємо старе залізо
const oldR123 = new LegacyRadioR123();

// Створюємо адаптер, щоб система могла з ним працювати
const adapter = new RadioAdapter(oldR123);

// Наша сучасна система викликає стандартний метод transmit
// Вона навіть не знає, що всередині працює стара Р-123
adapter.transmit(44.5, "Прийом, як чути?");


