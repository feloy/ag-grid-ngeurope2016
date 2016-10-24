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
var main_1 = require('ag-grid-enterprise/main');
require('ag-grid-enterprise/main');
var elevation_service_1 = require('./elevation.service');
var PivotComponent = (function () {
    function PivotComponent(elevationService) {
        this.elevationService = elevationService;
        main_1.LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");
        this.gridOptions = {
            pivotMode: true
        };
    }
    PivotComponent.prototype.setVertical = function (v) {
        this.vertical = v;
        this.createColumnDefs();
    };
    PivotComponent.prototype.setHorizontal = function (h) {
        this.horizontal = h;
        this.createColumnDefs();
    };
    PivotComponent.prototype.setAggFunc = function (agg) {
        this.aggFunc = agg;
        this.createColumnDefs();
    };
    PivotComponent.prototype.onGridReady = function (event) {
        this.gridOptions.api.sizeColumnsToFit();
    };
    PivotComponent.prototype.ngOnInit = function () {
        this.createColumnDefs();
        this.createRowData();
    };
    PivotComponent.prototype.createColumnDefs = function () {
        var _this = this;
        var defs = [
            { headerName: "IncidntNum", field: "IncidntNum" },
            { headerName: "Category", field: "Category" },
            { headerName: "Descript", field: "Descript" },
            { headerName: "DayOfWeek", field: "DayOfWeek" },
            { headerName: "Date", field: "Date" },
            { headerName: "Time", field: "Time" },
            { headerName: "PdDistrict", field: "PdDistrict" },
            { headerName: "Resolution", field: "Resolution" },
            { headerName: "Location", field: "Location" },
            { headerName: "X", field: "X" },
            { headerName: "Y", field: "Y" },
            { headerName: "Elevation", field: "Elevation" }
        ];
        if (this.vertical) {
            var groupIndex_1 = 1;
            defs = defs.map(function (col) {
                if (_this.vertical.indexOf(col.field) > -1) {
                    col['rowGroupIndex'] = groupIndex_1++;
                }
                return col;
            });
        }
        if (this.horizontal) {
            defs = defs.map(function (col) {
                if (_this.horizontal.indexOf(col.field) > -1) {
                    col['aggFunc'] = 'count';
                    col['pivotIndex'] = 1;
                }
                return col;
            });
        }
        this.columnDefs = defs;
    };
    PivotComponent.prototype.createRowData = function () {
        var _this = this;
        this.elevationService.getElevationData()
            .subscribe(function (data) {
            _this.data = data;
        });
    };
    PivotComponent = __decorate([
        core_1.Component({
            selector: 'my-pivot',
            templateUrl: 'app/pivot.component.html'
        }), 
        __metadata('design:paramtypes', [elevation_service_1.ElevationService])
    ], PivotComponent);
    return PivotComponent;
}());
exports.PivotComponent = PivotComponent;
//# sourceMappingURL=pivot.component.js.map