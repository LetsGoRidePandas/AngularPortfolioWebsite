import { Injectable } from '@angular/core';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {

projects: Project[] = [  
{id: 0, name: 'Portfolio Website',pictures: ["/port1.PNG", "/port2.PNG", "/port3.PNG"], projectLink: 'https://github.com/LetsGoRidePandas/AngularPortfolioWebsite', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS],  summary: 'This personal portfolio website', description: 'This website  is an Angular web app showcasing my skills and experience. It was made with HTML, CSS, and TypeScript using the Angular framework'},
//{id: 1, name: 'PandaVelopment Studios Website',pictures: ["/img1.png", "/img2.png", "/img3.png"], projectLink: '', tags: [Tag.ANGULAR, Tag.TYPESCRIPT, Tag.HTML, Tag.CSS],  summary: 'Website for my personal development studio', description: 'yfdytvgdywtudfvdywtvytduvhsgsfswqjhstvstsvshsjgfs'},
{id: 2, name: 'Panda\'s TCG Inventory Converter',pictures: ["/phone1.png","/phone2.png","/phone3.png","/phone4.png"], projectLink: 'https://play.google.com/store/apps/details?id=com.pandavelopmentstudios.tcginventoryconversionassistant&hl=en_US', tags: [Tag.KOTLIN, Tag.SQL],  summary: 'Android app published on Google Play', description: 'This native Android app was my first commercial project. It allows users to convert inventory data from almost any TCG scanner app to usable, formatted data that case easily be imported into a TCGPlayer marketplace inventory. It was made using Kotlin and Room Database (SQLite) using Jetpack Compose as the UI framework'},
{id: 3, name: 'Mail Sorter',pictures: ["/mail1.PNG", "/mail2.PNG", "/mail3.PNG"], projectLink: 'https://unity.com/', tags: [Tag.UNITY, Tag.CSHARP],  summary: 'Work In Progress Unity Game', description: 'This project is an endless arcade style game being built in the Unity game engine with C#. It will be released on Android Q4 of 2025. '},
{id: 4, name: 'BuxTowns',pictures: ["/buxtowns1.PNG", "/buxtowns2.PNG"], projectLink: 'https://github.com/LetsGoRidePandas/BuxTowns', tags: [Tag.JAVA],  summary: 'Minecraft Server Plugin', description: 'This Minecraft server plugin, made with Java, allows for the creation of non-land-claim based towns on Minecraft servers (1.17.2). It features a fully functional GUI with a ranking system, taxes, mayors, deputies, residents, and voting.'},
{id: 5, name: 'Razor Pizzaria',pictures: ["/razor1.PNG", "/razor2.PNG", "/razor3.PNG"], projectLink: 'https://github.com/LetsGoRidePandas/RazorPizzaria', tags: [Tag.ASPNET, Tag.HTML, Tag.CSHARP, Tag.CSS, Tag.JAVASCRIPT],  summary: 'Practice Razor Pages Website ', description: 'This Razor Pages website was a practice website to learn about the usage and functionalities  of Razor Pages. It uses standard web development languages vuilt on the ASP.Net framework.'},
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
