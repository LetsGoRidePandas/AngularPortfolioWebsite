import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ProjectsService } from '../_services/projects.service';
import { Project } from '../_models/Project';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit{

  aboutMe = "It all started for me in high school – that's when I first connected with programming and realized the incredible potential it holds. That initial spark has fueled my path ever since.\n\nWith four years of combined professional experience, I've grown tremendously, tackling various projects and honing my skills through hands-on work. What truly drives me is the constant opportunity to learn and implement new ideas, always aiming to make technology more efficient and user-friendly.\n\nWhen I step away from the keyboard, my go-to activities include spending time with my family, participating in collaborative storytelling games, and winemaking."
  featuredProject = {} as Project;
  constructor(private titleService: Title, private projectService: ProjectsService){
      this.titleService.setTitle('Michael Gagnon | Home');
  }
  ngOnInit(): void {
    this.featuredProject = this.projectService.GetProjectById(2);
  }

}
