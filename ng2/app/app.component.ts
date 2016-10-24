import { Component ViewChild } from '@angular/core';

import { PivotComponent } from './pivot.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    @ViewChild('pivot') pivot;

    selVertical: string[] = [];
    selHorizontal: string[] = [];

    setSelected(ev) {

        this.pivot.setVertical(ev.vertical);
        this.pivot.setHorizontal(ev.horizontal);
        this.pivot.setAggFunc(ev.aggFunc);
    }
}
