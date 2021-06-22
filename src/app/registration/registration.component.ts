import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';
import { ToastrService } from 'ngx-toastr';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User = new User();
  message:any;  

  constructor(private service:RegistrationService,private router:Router,private toastr:ToastrService) { }

  ngOnInit() {
  }

  public registerNow(){
    let resp = this.service.post('registration',this.user). subscribe (data => {
    console.log("Sanjay ----------"+JSON.stringify(data));
    this.message = data;
    
    if(this.message.statusCode == "201"){
      this.toastr.success('Successful', 'Registration');
      }else{
        this.toastr.error('Fail to confirm', 'Registration');
        }
   })
  }

}


