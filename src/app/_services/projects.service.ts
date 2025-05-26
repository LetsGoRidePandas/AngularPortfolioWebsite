import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

projects: Project[] = [  
{id: 0, name: 'Portfolio Website',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS],  summary: 'This personal portfolio website', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 1, name: 'PandaVelopment Studios Website',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS],  summary: 'Website for my personal development studio', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 2, name: 'Panda\'s TCG Inventory Converter',pictures: ["/phone1.png","/phone2.png","/phone3.png","/phone4.png"], projectLink: '', tags: [Tag.KOTLIN, Tag.SQL],  summary: 'Android app published on Google Play', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 3, name: 'Mail Sorter',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: '', tags: [Tag.UNITY, Tag.CSHARP],  summary: 'Work In Progress Unity Game', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 4, name: 'BuxTowns',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: 'https://github.com/LetsGoRidePandas/BuxTowns', tags: [Tag.JAVA],  summary: 'Minecraft Server Plugin', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 5, name: 'Razor Pizzaria',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: 'https://github.com/LetsGoRidePandas/RazorPizzaria', tags: [Tag.ASPNET, Tag.HTML, Tag.CSHARP, Tag.CSS, Tag.JAVASCRIPT],  summary: 'Practice Razor Pages Website ', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
];

  constructor() { }

  GetProjects(){
    return this.projects;
  }

  GetProjectById(id: number) : Project{
    let project = this.projects.find(project => project.id === id);
    if (project === undefined) {
      throw new TypeError('There is no projects that matches the id: '+id);
    }
    return project
  }

  GetProjectsByFilter(filterTags: Tag[]){
    let filteredProjects: Project[]  =[];

    this.projects.forEach(function(project){
      let foundAll  = true;
      
      filterTags.forEach(function (filterTag) {
        if (project.tags.includes(filterTag) == false){
          foundAll = false;
        }
      });

      if (foundAll){
        filteredProjects.push(project);
      }
    });

    return filteredProjects;
  }

}
