
import Race from '../../definitions/race';
import * as Thresholds from '../../constants/skill-thresholds';
import * as Traits from '../traits/_all';

const opts = { stats: { int: 2, dex: 2, wis: 1, sight: 1,
  skillBonus: { shot: Thresholds.Basic },
  traits: [Traits.Infravision(3)]
} };
export default class Elf extends Race {
  constructor() {
    super(opts);
  }
}