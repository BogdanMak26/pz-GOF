export class LegacyRadioR123 {
  public powerOn(): void {
    console.log("Р-123: Живлення увімкнено.");
  }

  public sendVoice(khz: number, data: string): void {
    console.log(`Р-123: Передача на частоті ${khz} кГц: "${data}"`);
  }
}
