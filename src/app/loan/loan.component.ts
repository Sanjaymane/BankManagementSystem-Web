import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';
import { ToastrService } from 'ngx-toastr';
import { Loan } from '../userLoan';

@Component({
  selector: 'app-loan',
  templateUrl: './loan.component.html',
  styleUrls: ['./loan.component.css']
})
export class LoanComponent implements OnInit {

  loan : Loan = new Loan();
  accNo : any;
  message:any; 
  users:any;
  allLoan :any;

  constructor(private service:RegistrationService,private toastr:ToastrService) { }

  ngOnInit() {
      this.getAllAppliedLoan();
      this.getLoandata();
  }

  public applyLoan(){
    let resp = this.service.post('applyLoan',this.loan).subscribe (data => {
    console.log("Apply Loan ----------"+JSON.stringify(data));
    this.message = data;
    
    if(this.message.statusCode == "201"){
      this.toastr.success('Creat Success', 'Loan');
      }else{
        this.toastr.error('Username and Password not match', 'Loan');
        }
   })
  }


  public getLoandata(){
    let resp = this.service.getUsers('getAllLoan').subscribe (data => {
    this.allLoan = data["result"];
    console.log("get All loan ----------"+JSON.stringify(this.allLoan));

   })
  }
  
  getAllAppliedLoan(){
    let resp = this.service.getUsers('getAllAppliedLoan').subscribe (data => {
      console.log("Loan ----------"+JSON.stringify(data));
      this.users = data["result"];
      console.log("Loan ----------"+JSON.stringify(this.users));
     })
  }

  public delteUser(accountNumber:string){
    let resp = this.service.deleteUser('removeRecord/'+accountNumber).subscribe (data => {
      console.log("Loan ----------"+JSON.stringify(data));
      this.message = data;

      if(this.message.statusCode == "201"){
        this.toastr.success('Creat Success', 'Loan');
        }else{
          this.toastr.error('Username and Password not match', 'Loan');
          }
     })
   }
}
