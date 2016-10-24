import { Component } from '@angular/core';

import { PivotComponent } from './pivot.component';
@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

    selected = {
        vertical: [],
        horizontal: null
    }
}
