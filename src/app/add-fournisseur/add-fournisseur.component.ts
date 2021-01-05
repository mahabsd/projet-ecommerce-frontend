import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormGroupDirective , NgForm} from '@angular/forms';
import { FournisseursService } from '../services/fournisseurs.service';

interface Type {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-add-fournisseur',
  templateUrl: './add-fournisseur.component.html',
  styleUrls: ['./add-fournisseur.component.css']
})

export class AddFournisseurComponent implements OnInit {

  formFournisseur=new FormGroup({
    name: new FormControl('',[Validators.required]),
    type:new FormControl('',[Validators.required]),
    address:new FormControl('',[Validators.required]),
    userFournisseur:new FormControl(''),
    favourite:new FormControl(''),
    phone:new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required , Validators.email]),
    }
   );
   types: Type[] = [
    { value: 'fourniture', viewValue: 'Fourniture' },
    { value: 'food', viewValue: 'Food' },
    { value: 'sportswear', viewValue: 'Sports wear' },
  ];    
    fournisseurs = [];
          
    constructor(private fournisseurService: FournisseursService){
    this.fournisseurs = fournisseurService.getFournisseurs(); }
      
    ngOnInit() {}
    hide = true;
    typeValue(value) {
      this.formFournisseur.patchValue({
        type: value,
      })
      console.log(this.formFournisseur);
    }    
    onSubmit(){
      if(!this.formFournisseur.valid) {return;}
      this.fournisseurService.addFournisseur(this.formFournisseur.value);
    }
  }