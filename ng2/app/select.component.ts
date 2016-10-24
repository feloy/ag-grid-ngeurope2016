import { Component, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'my-select',
  templateUrl: 'app/select.component.html'
})
export class SelectComponent implements OnInit {
  @Output() values = new EventEmitter();

  public columns: string[];
  public selectedVertical = [];
  public selectedHorizontal = [];

  ngOnInit() {
    this.columns = [
      "IncidntNum",
      "Category",
      "Descript",
      "DayOfWeek",
      "Date",
      "Time",
      "PdDistrict",
      "Resolution",
      "Location",
      "X",
      "Y",
      "Elevation"
    ];
  }

  addSelectedVertical(col) {
    if (this.selectedVertical.indexOf(col) == -1) {
      this.selectedVertical.push(col);
    }
    this.update();
  }

  addSelectedHorizontal(col) {
    if (this.selectedHorizontal.indexOf(col) == -1) {
      this.selectedHorizontal.push(col);
    }
    this.update();
  }

  deleteVertical(col) {
    this.selectedVertical = this.selectedVertical.filter(c => c !== col);
    this.update();
  }

  deleteHorizontal(col) {
    this.selectedHorizontal = this.selectedHorizontal.filter(c => c !== col);
    this.update();
  }

  private update() {
    this.values.next({
      vertical: this.selectedVertical,
      horizontal: this.selectedHorizontal
    })
  }
}

