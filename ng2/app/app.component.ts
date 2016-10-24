import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {
    selVertical: string[] = [];
    selHorizontal: string[] = [];

    setSelected(ev) {
/*        if (ev) {
            this.selVertical = ev.vertical.splice(0);
            this.selHorizontal = ev.horizontal.splice(0);
        }*/
    }
}
