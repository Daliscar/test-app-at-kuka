import { Component, OnInit, Input } from "@angular/core";
import { ProductListComponent } from "../product-list/product-list.component";
import { Output, EventEmitter } from "@angular/core";

@Component({
  selector: "app-product-alerts",
  templateUrl: "./product-alerts.component.html",
  styleUrls: ["./product-alerts.component.css"]
})
export class ProductAlertsComponent implements OnInit {
  @Input() product;
  @Output() notify = new EventEmitter();
  constructor() {}
  //refference to product-list controller
  // list = new ProductListComponent();

  ngOnInit() {}
}
