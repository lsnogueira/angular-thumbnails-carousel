import { Component, OnInit, ViewChild } from "@angular/core";
import {
  NgxGalleryOptions,
  NgxGalleryImage,
  NgxGalleryComponent
} from "ngx-gallery";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"]
})
export class CarouselComponent implements OnInit {
  @ViewChild("carousel", { static: true })
  carousel: NgxGalleryComponent;

  options: NgxGalleryOptions[];
  images: NgxGalleryImage[];

  constructor() {}

  ngOnInit() {
    this.options = [
      {
        image: true,
        imageArrows: false,
        thumbnailsArrows: true,
        thumbnailsColumns: 4
      }
    ];
    this.images = [
      {
        small: "assets/img1.jpg",
        medium: "assets/img1.jpg",
        big: "assets/img1.jpg"
      },
      {
        small: "assets/img2.jpg",
        medium: "assets/img2.jpg",
        big: "assets/img2.jpg"
      },
      {
        small: "assets/img3.jpg",
        medium: "assets/img3.jpg",
        big: "assets/img3.jpg"
      },
      {
        small: "assets/img4.jpg",
        medium: "assets/img4.jpg",
        big: "assets/img4.jpg"
      },
      {
        small: "assets/img5.jpg",
        medium: "assets/img5.jpg",
        big: "assets/img5.jpg"
      },
      {
        small: "assets/img6.jpg",
        medium: "assets/img6.jpg",
        big: "assets/img6.jpg"
      },
      {
        small: "assets/img7.jpg",
        medium: "assets/img7.jpg",
        big: "assets/img7.jpg"
      },
      {
        small: "assets/img8.png",
        medium: "assets/img8.png",
        big: "assets/img8.jpg"
      },
      {
        small: "assets/img9.jpg",
        medium: "assets/img9.jpg",
        big: "assets/img9.jpg"
      }
    ];
  }

  showNext(): void {
    console.log(this.carousel);
    this.carousel.moveThumbnailsRight();
  }

  showPrev(): void {
    console.log(this.carousel);
    this.carousel.moveThumbnailsLeft();
  }

  canShowPrev(): boolean {
    console.log(this.carousel);
    return this.carousel.canMoveThumbnailsLeft() ? true : false;
  }

  canShowNext(): boolean {
    console.log(this.carousel);
    return this.carousel.canMoveThumbnailsRight() ? true : false;
  }

  
}
