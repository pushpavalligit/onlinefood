import { Component, OnInit } from '@angular/core';
import { FoodService } from 'src/app/services/food.service';
import { Tag } from 'src/app/shared/models/Tag';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css']
})
export class TagsComponent implements OnInit {

  tags?:Tag[];
  constructor(foodService:FoodService){
   this.tags = foodService.getAllTags();
   //console.log(this.tags)


  }
  ngOnInit(): void {
   // throw new Error('Method not implemented.');
  }


}
