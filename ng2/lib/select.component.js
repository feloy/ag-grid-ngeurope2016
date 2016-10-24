"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var SelectComponent = (function () {
    function SelectComponent() {
        this.values = new core_1.EventEmitter();
        this.selectedVertical = [];
        this.selectedHorizontal = [];
        this.aggFunc = '';
    }
    SelectComponent.prototype.ngOnInit = function () {
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
        this.aggFuncs = ['sum', 'min', 'max', 'first', 'last'];
    };
    SelectComponent.prototype.addSelectedVertical = function (col) {
        if (this.selectedVertical.indexOf(col) == -1) {
            this.selectedVertical.push(col);
        }
        this.update();
    };
    /*
      addSelectedHorizontal(col) {
        if (this.selectedHorizontal.indexOf(col) == -1) {
          this.selectedHorizontal.push(col);
        }
        this.update();
      }
    */
    SelectComponent.prototype.deleteVertical = function (col) {
        this.selectedVertical = this.selectedVertical.filter(function (c) { return c !== col; });
        this.update();
    };
    /*
      deleteHorizontal(col) {
        this.selectedHorizontal = this.selectedHorizontal.filter(c => c !== col);
        this.update();
      }
    */
    SelectComponent.prototype.changeHoriz = function (ev) {
        this.selectedHorizontal = [ev];
        this.update();
    };
    SelectComponent.prototype.changeAgg = function (ev) {
        this.aggFunc = ev;
        this.update();
    };
    SelectComponent.prototype.update = function () {
        this.values.next({
            vertical: this.selectedVertical,
            horizontal: this.selectedHorizontal,
            aggFunc: this.aggFunc
        });
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], SelectComponent.prototype, "values", void 0);
    SelectComponent = __decorate([
        core_1.Component({
            selector: 'my-select',
            templateUrl: 'app/select.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SelectComponent);
    return SelectComponent;
}());
exports.SelectComponent = SelectComponent;
//# sourceMappingURL=select.component.js.map