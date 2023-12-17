import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'challenge5';

  personalInformations=new FormGroup({
    Skills:new FormArray([]),
    ProfessionalExperience:new FormArray([]),
    skill:new FormControl(''),
    experience:new FormControl('')
  })
  
  get _skill(){
    return this.personalInformations.get('skill')
  }
  get _experience(){
    return this.personalInformations.get('experience')
  }
  get ProfessionalExperience(){
    return this.personalInformations.get('ProfessionalExperience') as FormArray
  }
  
  get Skills(){
    return this.personalInformations.get('Skills') as FormArray
  }

  addSkill(){
    const control=new FormControl
    this.Skills.push(control)
    control?.setValidators(Validators.required)
    control?.addValidators(Validators.minLength(10))


  }
  deleteSkill(i:number){
    const a =this.Skills.controls[i]
    this.Skills.controls.splice(i,1)
  }

  addExperience(){
    const control2=new FormControl
    this.ProfessionalExperience.push(control2)
    control2?.setValidators(Validators.required)
    control2?.addValidators(Validators.minLength(10))

  }

  deleteExperience(i:number){
    const b =this.ProfessionalExperience.controls[i]
    this.ProfessionalExperience.controls.splice(i,1)
  }
  
  
}
