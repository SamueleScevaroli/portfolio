import {Component} from '@angular/core';
import {TranslatePipe} from "@ngx-translate/core";
import {FaIconComponent, IconDefinition} from "@fortawesome/angular-fontawesome";
import {faAngular, faDocker, faGit, faJava, faJs} from "@fortawesome/free-brands-svg-icons";
import {faDatabase, faLeaf} from "@fortawesome/free-solid-svg-icons";
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    TranslatePipe,
    FaIconComponent,
    NgClass
  ],
  templateUrl: './skills.component.html'
})
export class SkillsComponent {
  skills: {
    name: string;
    description: string;
    experienceYears: number;
    category: string;
    icon: IconDefinition;
  }[] = [
    {
      name: 'Java',
      description: 'OOP, Spring Boot, REST APIs',
      experienceYears: 5,
      category: 'Backend',
      icon: faJava,
    },
    {
      name: 'Angular',
      description: 'SPA, RxJS, Forms, Material',
      experienceYears: 4,
      category: 'Frontend',
      icon: faAngular,
    },
    {
      name: 'PostgreSQL',
      description: 'Complex queries, optimization, indexes',
      experienceYears: 2,
      category: 'Database',
      icon: faDatabase,
    },
    {
      name: 'Spring',
      description: 'Spring Boot, Security, JPA',
      experienceYears: 4,
      category: 'Backend',
      icon: faLeaf,
    },
    {
      name: 'Docker',
      description: 'Containers, volumes, Docker Compose',
      experienceYears: 3,
      category: 'DevOps',
      icon: faDocker,
    },
    {
      name: 'TypeScript',
      description: 'Strict types, interfaces, Angular',
      experienceYears: 3,
      category: 'Frontend',
      icon: faJs,
    },
    {
      name: 'Git',
      description: 'Branching, merging, PRs',
      experienceYears: 4,
      category: 'Tools',
      icon: faGit,
    }
  ];
}
