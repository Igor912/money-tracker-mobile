import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { RouterExtensions } from "nativescript-angular/router";

import { Cost } from "./cost";
import { CostService } from "./cost.service";

@Component({
    selector: "details",
    moduleId: module.id,
    templateUrl: "./cost-detail.component.html",
    styleUrls: ["./cost-detail.component.css"]
})
export class CostDetailComponent implements OnInit {
    cost: Cost;

    constructor(
        private costService: CostService,
        private route: ActivatedRoute,
        private routerExtensions: RouterExtensions
    ) { }

    ngOnInit(): void {
        const id = +this.route.snapshot.params["id"];
        this.cost = this.costService.getCost(id);
    }

    onEdit(){
        console.log('edit');
    }

    onDelete(){
        this.costService.deleteCost(this.cost);
        this.routerExtensions.back();
    }
}
