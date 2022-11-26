import { getStrategyMultipliers } from './macronutrients.strategies';
import { Gender } from './types/gender.enum';
import { MacronutrientsResult } from './types/macronutrients-result.model';
import { MacronutrientsStrategy } from './types/macronutrients-strategy.enum';
import { PhysicalActivityLevel } from './types/physical-activity-level.enum';

const MIN_WEIGHT = 35;

class Macronutrients {
  public static calculate(
    weight: number,
    gender: Gender,
    goal: MacronutrientsStrategy,
    activityLevel: PhysicalActivityLevel
  ): MacronutrientsResult {
    this.validateParams(weight);

    const genderMultiplier = gender === Gender.FEMALE ? 0.8 : 1;
    const { fatMultiplier, proteinMultiplier, carbohydratesMultiplier } =
      getStrategyMultipliers(goal, activityLevel);

    return {
      fat: weight * fatMultiplier * genderMultiplier,
      protein: weight * proteinMultiplier * genderMultiplier,
      carbohydrates: weight * carbohydratesMultiplier * genderMultiplier,
    };
  }

  private static validateParams(weight: number) {
    if (weight < MIN_WEIGHT)
      throw new Error('The weigth must be higher than 35Kg.');
  }
}

export default Macronutrients;
