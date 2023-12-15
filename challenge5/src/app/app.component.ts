import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge5';
  get ProfessionalExperience(){
    return this.personalInformations.get('ProfessionalExperience') as FormArray
  }
  get Skills(){
    return this.personalInformations.get('Skills') as FormArray
  }

  addSkill(){
    const control=new FormControl
    this.Skills.push(control)
  }
  deleteSkill(i:number){
    const a =this.Skills.controls[i]
    console.log(i + '  '  +a)
    this.Skills.controls.splice(i,1)
  }

  addExperience(){
    const control2=new FormControl
    this.ProfessionalExperience.push(control2)
  }

  deleteExperience(i:number){
    const b =this.ProfessionalExperience.controls[i]
    console.log(i + '  '  +b)
    this.ProfessionalExperience.controls.splice(i,1)
  }
  personalInformations=new FormGroup({
    Skills:new FormArray([]),
    ProfessionalExperience:new FormArray([])
  })
  
}
