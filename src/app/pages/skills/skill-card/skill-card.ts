import {IconDefinition} from "@fortawesome/angular-fontawesome";

export interface SkillCard {
  name: string;
  category: string;
  description: string;
  experienceYears: number;
  icon: IconDefinition;
}
