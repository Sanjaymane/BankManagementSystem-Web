import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../Service/registration.service';
import { User } from '../user';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user : User = new User();
  // message:any;  

  dataFromChild:string;
  constructor(private service:RegistrationService,private router:Router) { }

  ngOnInit() {
  }

  passData(pageName:String):void{
    this.router.navigate([`${pageName}`]);
    this.service.sendData(this.user);
    console.log(this.user);
  }

  // public registerNow(){
  //   let resp = this.service.post('registration',this.user). subscribe (data => {
  //   console.log(data);
  //   this.message = data;
    
  //   if(this.message.statusCode == "201"){
  //     this.toastr.success('confirm', 'Registration');
  //     }else if(this.message.statusCode == "204"){
  //       this.toastr.error('Fail to confirm', 'Registration');
  //       }else{
  //         this.toastr.success('could not connect', 'backend issue');
  //   }
  //   console.log(this.message);
  //  })
  // }

}
