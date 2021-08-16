import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  movies = [];

  searchForm = new FormGroup({
    q: new FormControl('')
  })

  constructor(private moviesService:MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMoviesList().subscribe((res:any)=>{
      console.log(res);
      this.movies = res.data.movies;
      
    },(error)=>{
      alert("Something went wrong");
    })
  }



  search(){
    const q = this.searchForm.value.q;

    console.log(q);

    this.moviesService.searchByKeys(q).subscribe((res:any)=>{
      if (res.data.movies != null) {
        this.movies = res.data.movies;
      }
    })


    
  }


}
