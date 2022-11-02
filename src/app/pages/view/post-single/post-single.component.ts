import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dados } from '../../../data/dataFake'

@Component({
  selector: 'app-post-single',
  templateUrl: './post-single.component.html',
  styleUrls: ['./post-single.component.css']
})
export class PostSingleComponent implements OnInit {
  photoCover:string = "";
  title:string = "";
  description:string = "";
  private id:string | null = "0";

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value => 
      this.id = value.get("id")
    )

    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id:string | null) {
      const result = dados.filter(article => article.id.toString() == id)[0]

      this.title = result.title;
      this.description = result.description;
      this.photoCover = result.photoCover;
      console.log(result)
      
    }
}
