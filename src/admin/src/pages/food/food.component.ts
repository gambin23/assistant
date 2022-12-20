import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
    selector: 'admin-food',
    standalone: true,
    templateUrl: './food.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [
        CommonModule
    ]
})
export default class FoodComponent implements OnInit {


    constructor() { }

    ngOnInit() {
    }
}
