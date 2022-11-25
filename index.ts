import { IMCStatus } from './src/imc/types/imc-status.enum';
import { MacronutrientsStrategy } from './src/macronutrients/types/macronutrients-strategy.enum';
import { PhysicalActivityLevel } from './src/macronutrients/types/physical-activity-level.enum';
import { Gender } from './src/macronutrients/types/gender.enum';

import IMC from './src/imc/imc';
import Macronutrients from './src/macronutrients/macronutrients';

const types = {
  Gender,
  IMCStatus,
  MacronutrientsStrategy,
  PhysicalActivityLevel,
};

const classes = {
  IMC,
  Macronutrients,
};

export default {
  ...classes,
  ...types,
};
