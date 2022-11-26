import { MacronutrientsStrategy } from './types/macronutrients-strategy.enum';
import { PhysicalActivityLevel } from './types/physical-activity-level.enum';

const buildStrategy = (
  fatMultiplier: number,
  proteinMultiplier: number,
  carbohydratesMultiplier: number
) => ({
  fatMultiplier,
  proteinMultiplier,
  carbohydratesMultiplier,
});

const strategies = {
  bulking: buildStrategy(2, 2, 4),
  cutting: buildStrategy(1, 2, 2),
  maintain: buildStrategy(1, 2, 5),
  bulkingActive: buildStrategy(2, 2, 7),
};

const strategyMap = {
  [MacronutrientsStrategy.BULKING]: strategies.bulking,
  [MacronutrientsStrategy.CUTTING]: strategies.cutting,
  [MacronutrientsStrategy.MAINTAIN]: strategies.maintain,
  ['BULKING_ACTIVE']: strategies.bulkingActive,
};

const activeLevels = [
  PhysicalActivityLevel.SOMEWHAT_ACTIVE,
  PhysicalActivityLevel.HIGHLY_ACTIVE,
  PhysicalActivityLevel.EXTREMELY_ACTIVE,
];

export function getStrategyMultipliers(
  strategy: MacronutrientsStrategy,
  activityLevel: PhysicalActivityLevel
) {
  if (
    strategy === MacronutrientsStrategy.BULKING &&
    activeLevels.includes(activityLevel)
  )
    return strategyMap['BULKING_ACTIVE'];

  return strategyMap[strategy];
}
