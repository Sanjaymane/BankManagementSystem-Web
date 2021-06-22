import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user : User = new User();
  message:any;  

  constructor(private service:RegistrationService,private toastr:ToastrService) { }

  ngOnInit() {

  }

  public loginUser(){
    let resp = this.service.post('login',this.user). subscribe (data => {
    console.log("Sanjay ----------"+JSON.stringify(data));
    this.message = data;
    
    if(this.message.statusCode == "201"){
      this.toastr.success('Welcome'+this.message.userName, 'Login');
      }else{
        this.toastr.error('Username and Password not match', 'Login');
        }
   })
  }

}
