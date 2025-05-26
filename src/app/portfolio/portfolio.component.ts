import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Project } from '../_models/Project';
import { Tag } from '../_models/Tag';
import { ProjectsService } from '../_services/projects.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent implements OnInit{
  projects = {} as Project[];

  isCollapsed: boolean  = true;
  filtering: boolean  = false;

  typescript: boolean = false;
  kotlin: boolean = false;
  csharp: boolean = false;
  java: boolean = false;
  sql: boolean = false;
  css: boolean = false;
  javascript: boolean = false;
  html: boolean = false;

  angular: boolean = false;
  aspnet: boolean = false;
  unity: boolean = false;

constructor(private titleService: Title, private projectService: ProjectsService){
      this.titleService.setTitle('Michael Gagnon | Portfolio');
  }
  ngOnInit(): void {
    this.projects = this.projectService.GetProjects();
  }

  Filter(){
    let filterTags: Tag[] = [];
    
    if(this.typescript){
      filterTags.push(Tag.TYPESCRIPT);
    }
    if(this.kotlin){
      filterTags.push(Tag.KOTLIN);
    }
    if(this.csharp){
      filterTags.push(Tag.CSHARP);
    }
    if(this.java){
      filterTags.push(Tag.JAVA);
    }
    if(this.sql){
      filterTags.push(Tag.SQL);
    }
  if(this.css){
      filterTags.push(Tag.CSS);
    }
    if(this.javascript){
      filterTags.push(Tag.JAVASCRIPT);
    }
    if(this.html){
      filterTags.push(Tag.HTML);
    }



    if(this.angular){
      filterTags.push(Tag.ANGULAR);
    }
    if(this.unity){
      filterTags.push(Tag.UNITY);
    }
    if(this.aspnet){
      filterTags.push(Tag.ASPNET);
    }

    if (filterTags.length > 0){
      this.filtering = true;
    } else {
      this.filtering = false;
    }


    this.projects = this.projectService.GetProjectsByFilter(filterTags);
  }

  ResetFilters(){
    this.typescript = false;
    this.kotlin = false;
    this.csharp = false;
    this.java = false;
    this.sql = false;
    this.css = false;
    this.javascript = false;
    this.html = false;
    this.angular = false;
    this.aspnet = false;
    this.unity = false;

    this.filtering = false;
    this.projects = this.projectService.GetProjects();
  }


}
