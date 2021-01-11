  import { Component, OnInit } from '@angular/core';
  import { FormControl, FormGroup, Validators, FormGroupDirective , NgForm} from '@angular/forms';
  import { FournisseursService } from '../services/fournisseurs.service';
  import { ActivatedRoute, Router } from '@angular/router';

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
         fournisseurs
         x:number;
         types: Type[] = [
          { value: 'fourniture', viewValue: 'Fourniture' },
          { value: 'food', viewValue: 'Food' },
          { value: 'sportswear', viewValue: 'Sports wear' },
        ]; 
         constructor(private fournisseurService: FournisseursService, private route: ActivatedRoute, private router: Router){}
      
          ngOnInit(){
            this.fournisseurService.getAllFournisseurs()
            .subscribe(
              (res) => {
                this.fournisseurs = res;
                console.log("POST call successful value returned in body",
                  this.fournisseurs);
                this.route.paramMap.subscribe(param => {
                  let i = +param.get('i'); console.log(i);
                  this.formFournisseur.patchValue({
                    name: this.fournisseurs[i].name,
                    email: this.fournisseurs[i].email,
                    address: this.fournisseurs[i].address,
                    type: this.fournisseurs[i].type,
                    favourite: this.fournisseurs[i].favourite,
                    phone: this.fournisseurs[i].phone
                  });
        
                  this.x = i;
                });
        
              },
              response => {
                console.log("POST call in error", response);
              },
              () => {
                console.log("The POST observable is now completed.");
              });
            console.log(this.fournisseurs);
            this.formFournisseur.patchValue({
              userFournisseur: JSON.parse(localStorage.getItem("loggeduser"))._id,
            })
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
          this.fournisseurService.updateFournisseur(this.fournisseurs[this.x]._id, this.formFournisseur.value).subscribe(
            (val) => {
              console.log("POST call successful value returned in body",
                val);
            },
            response => {
              console.log("POST call in error", response);
            },
            () => {
              console.log("The POST observable is now completed.");
            });
            this.router.navigateByUrl('/list-fournisseur');
          }

  } 