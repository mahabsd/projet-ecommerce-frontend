  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators, FormGroupDirective , NgForm} from '@angular/forms';
  import { FournisseursService } from '../services/fournisseurs.service';
  import { ActivatedRoute } from '@angular/router';

  interface Type {
    value: string;
    viewValue: string;
  }
@Component({
  selector: 'app-edit-fournisseur',
  templateUrl: './edit-fournisseur.component.html',
  styleUrls: ['./edit-fournisseur.component.css']
})
export class EditFournisseurComponent implements OnInit {
   
         formFournisseur=new FormGroup({
         name: new FormControl('',[Validators.required]),
         type:new FormControl('',[Validators.required]),
         address:new FormControl('',[Validators.required]),
         userFournisseur:new FormControl(''),
         favourite:new FormControl('',[Validators.required]),
         phone:new FormControl('',[Validators.required]),
         email: new FormControl('',[Validators.required , Validators.email]),
         password: new FormControl('',[ Validators.pattern( /^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#=$%&*])[\w!@#=$%^&*]{8,}$/ )]),
         }
        );
         fournisseurs = [];
         x:number;
         types: Type[] = [
          { value: 'fourniture', viewValue: 'Fourniture' },
          { value: 'food', viewValue: 'Food' },
          { value: 'sportswear', viewValue: 'Sports wear' },
        ]; 
         constructor(private fournisseurService: FournisseursService, private route: ActivatedRoute){}
      
          ngOnInit(){
            this.fournisseurs=this.fournisseurService.getFournisseurs();
            this.route.paramMap.subscribe(param => {
            let i = +param.get('i');
            this.formFournisseur.controls['name'].setValue(this.fournisseurs[i].name);
            this.formFournisseur.controls['type'].setValue(this.fournisseurs[i].type);
            this.formFournisseur.controls['address'].setValue(this.fournisseurs[i].address);
            this.formFournisseur.controls['userFournisseur'].setValue(this.fournisseurs[i].userFournisseur);
            this.formFournisseur.controls['favourite'].setValue(this.fournisseurs[i].favourite);
            this.formFournisseur.controls['phone'].setValue(this.fournisseurs[i].phone);
            this.formFournisseur.controls['email'].setValue(this.fournisseurs[i].email);
            this.formFournisseur.controls['password'].setValue(this.fournisseurs[i].password);
            this.x=i;
             });
        }
        
        hide = true;
        typeValue(value) {
          this.formFournisseur.patchValue({
            type: value,
          })
          console.log(this.formFournisseur);
        }
        somethingClick(checkbox){
          console.log(checkbox.checked);
          if(checkbox.checked == false){
            this.formFournisseur.patchValue({
              favourite: "yes",
            }) 
          }else{
            this.formFournisseur.patchValue({
              favourite: "no",
            })
          }

        }
        edit(){
        this.fournisseurs[this.x]=this.formFournisseur.value;
        }
  }