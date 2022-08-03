import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImgurApiService } from '../imgur-api.service';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  constructor(private actRoute: ActivatedRoute, private imgurApiService: ImgurApiService) { }
  galleries;
  discountSelected: number = 0;
  typeSelected: string = '';

  types = [
    { id: null, label: "please select value---" },
    { id: 1, label: "wallet" },
    { id: 2, label: "desk" },
    { id: 3, label: "poster" }
  ]

  discount = [
    { id: null, label: "please select value---" },
    { id: 1, label: "0%" , value: 0},
    { id: 2, label: "10%" , value: 10},
    { id: 3, label: "25%" , value: 25}
  ]

  selectChangeType($event) {
    this.typeSelected = this.types[$event].label;
    
  }

  selectChangeDiscount($event) {
    
    this.discountSelected = this.discount[$event].value;
  }

  ngOnInit(): void {
    const myArray = this.actRoute.snapshot.queryParamMap.get('myArray');
    this.galleries = JSON.parse(myArray);
    console.log(JSON.stringify(this.galleries));

  }

  getPrice(item: any, $event: any) {
    $event.stopPropagation();

    this.imgurApiService.getPrice(this.typeSelected, this.discountSelected).subscribe((resp: any) => {
      // this.albums = resp;
      
      alert('Total price:'+resp.message);
    });
  }

}
