import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  statusBtn="make call";
  status = "";
  constructor() { }

  ngOnInit(): void {
 

    let watch = this.watchMyPosition().subscribe((streamData)=>{
      console.log(streamData);
      
    },(er)=>{
      console.log(er);
      
    })

    //watch.unsubscribe();
 
  }



  watchMyPosition(){
    
    let watchId;

    let locations = new Observable((observer)=>{
      watchId = navigator.geolocation.watchPosition((position)=>{
        console.log(position);
        
        observer.next(position);
      },(err)=>{
        observer.error(err);
      })

      return {
        unsubscribe(){
          navigator.geolocation.clearWatch(watchId);
        }
      }
    })


    return locations;
  }






  /*

  async makeCall(){
    let first = await this.callFirstStation();
    let second = await this.callSecondStation(first);
    let third = await this.callThirdStation(second);
    
  }


  /*makeCall(){
    this.callFirstStation().then((dataOne)=>{
      
      this.callSecondStation(dataOne).then((dataTwo)=>{

        this.callThirdStation(dataTwo).then((finalRes:string)=>{
           

          this.status = finalRes;
          this.statusBtn = "make call";
          
        }).catch((error)=>{
          console.log(error);
          
        }); 
        

      }).catch((error)=>{
        console.log(error);
        
      }); 
      
    }).catch((error)=>{
      console.log(error);
      
    }); 
  }


  callFirstStation(){
    this.statusBtn="please wait..."
    this.status = ("Calling first center");
    
    var promise = new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve( "first data" )
      },4000);

    })

    return promise;
  }


  callSecondStation(data){
    this.status =("Calling second center");
    var promise = new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve(  data+ " second data"  )
      },3000);

    })

    return promise;
  }


  
  callThirdStation(data){
    this.status ="Calling third center" ;
    var promise = new Promise((resolve,reject)=>{

      setTimeout(()=>{
        resolve(  data+ " third data"  )
      },2000);

    })

    return promise;
  }
*/
  

}
