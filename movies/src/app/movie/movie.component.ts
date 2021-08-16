import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {

  id;
  movie = null;
  isLoading = true;

  constructor(private route:ActivatedRoute, private movies:MoviesService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;

    this.movies.getMoviesDetailsById(this.id).subscribe((res:any)=>{
      console.log(res);

      this.movie = res.data.movie;

      this.isLoading = false;
      
    },(e)=>{
      alert("Something went wrong")
    })
  }

}
