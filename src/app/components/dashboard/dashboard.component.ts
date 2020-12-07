import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
})
export class DashboardComponent implements OnInit {
  categories = [
    {
      type: "Electronics",
      imageUrl: "../../../assets/images/jonas-leupe-HawVQHPWCjs-unsplash.jpg",
    },
    {
      type: "Movies",
      imageUrl: "../../../assets/images/denise-jans-Lq6rcifGjOU-unsplash.jpg",
    },
    {
      type: "Clothing",
      imageUrl: "../../../assets/images/mnz-ToLMORRb97Q-unsplash.jpg",
    },
    {
      type: "Garden",
      imageUrl:
        "../../../assets/images/neslihan-gunaydin-BduDcrySLKM-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
    {
      type: "Home",
      imageUrl: "../../../assets/images/nathan-fertig-FBXuXp57eM0-unsplash.jpg",
    },
  ];

  constructor() {}

  ngOnInit() {}
}
