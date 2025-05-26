import { Component, Renderer2 } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrl: './resume.component.css'
})
export class ResumeComponent {

  isWorkExperienceOpen: boolean = false;
  isSkillsOpen: boolean = false;
  isEducationOpen: boolean = false;

  constructor(private titleService: Title, private renderer:Renderer2){
      this.titleService.setTitle('Michael Gagnon | Resume');
  }

  DownloadFile(){
    const link = this.renderer.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/Gagnon_Resume.pdf')
    link.setAttribute('download', 'Gagnon_Resume.pdf')
    link.click();
    link.remove();
  }
}
