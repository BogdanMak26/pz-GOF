// 1. Цільовий інтерфейс (Target)
// Це те, що очікує твоя сучасна "Система ТТД"
interface ModernTransceiver {
  transmit(frequency: number, message: string): void;
}

// 2. Адаптований клас (Adaptee)
// Стара радіостанція з несумісними методами та іншим форматом частот (наприклад, у кГц замість МГц)
export class LegacyRadioR123 {
  public powerOn(): void {
    console.log("Р-123: Живлення увімкнено.");
  }

  public sendVoice(khz: number, data: string): void {
    console.log(`Р-123: Передача на частоті ${khz} кГц: "${data}"`);
  }
}

// 3. Адаптер (Adapter)
// Він "загортає" стару рацію і змушує її працювати за сучасним стандартом
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



