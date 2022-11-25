import { IMCStatus } from './types/imc-status.enum';

class IMC {
  public static calculate(weight: number, height: number): IMCStatus {
    const ratio = weight / (height * height);

    if (ratio <= 18.5) return IMCStatus.LOW_WEIGHT;
    if (ratio > 18.5 && ratio <= 24.9) return IMCStatus.NORMAL_WEIGHT;
    if (ratio > 25 && ratio <= 29.9) return IMCStatus.PRE_OBESITY;
    if (ratio > 30 && ratio <= 34.9) return IMCStatus.OBESITY_LEVEL_1;
    if (ratio > 35 && ratio <= 39.9) return IMCStatus.OBESITY_LEVEL_2;

    return IMCStatus.OBESITY_LEVEL_3;
  }
}

export default IMC;
