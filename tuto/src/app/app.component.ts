import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  title = 'My first angular <strong>app</strong>';
  /*year = 2021;

  heros = [ 
    { name:"chourabi taher", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:false },
    { name:"chourabi taher 1", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:false },
    { name:"chourabi taher 2", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:true },
    { name:"chourabi taher 3", phone:"93863732", email:"tchourabi@gmail.com" , newEmployee:true }
    
    
  ];


  canClick = false;
  countDown = 4;
  btnTXT="Wait...";*/



  /**forms */

  /*userform = new FormGroup(
    {

      address: new FormGroup({
        city: new FormControl('', Validators.required),
        zipCode: new FormControl('', Validators.required),
        state: new FormControl('', Validators.required),

      }),

      personalInfo: new FormGroup({
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.email, Validators.required]),
        password: new FormControl('', Validators.required),
      })

    }
  );*/

  /*
    users = [];*/




 

  /*saveUser(){
    const user = this.userform.value;

    user.id = this.users.length;

    this.users.push(user);


    console.log(this.users);
    


    this.userform.reset();
    
    
    
  }


  deleteUser(id){
    console.log("deleting user number "+id);

    this.users.splice(id,1);
    
  }*/


/*
  formOne = new FormGroup({
    username : new FormControl()
  })

  
  formTwo = new FormGroup({
    address : new FormControl(),
    phone : new FormControl()
    
  })


  formThree= new FormGroup({
    email : new FormControl(),
    password : new FormControl()
    
  })

  steps = 0;*/





  date = new Date();
  welcomeMes ="hello world";

  contacts = [
    { title:'chourabi taher', email:'tchourabi@gmail', phone:"12121212" },
    { title:'nather zhioua', email:'nather@gmail.com', phone:"12121212"  },
    { title:'omar chakroun', email:'omar@gmail.com', phone:"12121212"  },
    
    
  ]
  


  constructor() {

    /*const i = setInterval(()=>{
      //this.countDown = this.countDown - 1;
      //this.countDown -=1;
      this.countDown--;
      
    },1000)

    setTimeout(()=>{
      this.canClick = true;
      this.btnTXT="click me";
      clearInterval(i)

    },4000);*/



    //console.log(this.userform);


  }


  /*

  next(){
    this.steps++;
  }


  validate(){
    const val = {
      one:this.formOne.value,
      two:this.formTwo.value,
      three:this.formThree.value
    }

    console.log(val);
    
  }*/

  
 

}
