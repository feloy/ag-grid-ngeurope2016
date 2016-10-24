import { Component, OnDestroy } from '@angular/core';
import { CommonModule } from "@angular/common"

import { AgRendererComponent } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';
import { LicenseManager } from 'ag-grid-enterprise/main';

import { ElevationService } from './elevation.service';

// only import this if you are using the ag-Grid-Enterprise
import 'ag-grid-enterprise/main';

@Component({
    selector: 'ag-cell',
    template: `<span [ngStyle]="style">{{params.value}}</span>`
})
class CellRendererComponent implements AgRendererComponent {
    private params: any;
    private style: string;

    // called on init
    agInit(params: any): void {
        this.params = params;
        this.style = params.style;
    }
}

@Component({
    selector: 'ag-elevation',
    templateUrl: 'app/elevation.component.html'
})
export class ElevationComponent {
    private gridOptions: GridOptions;
    private data;

    constructor(private elevationService: ElevationService) {
        LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

        this.gridOptions = <GridOptions>{
            enableSorting: true,
            sortingOrder: ['desc', 'asc', null]
        };
        this.gridOptions.columnDefs = this.createColumnDefs();

    }

    private onGridReady(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    ngOnInit() {
        this.createRowData();
    }

    private createColumnDefs() {
        return [
            { headerName: "IncidntNum", field: "IncidntNum" },
            {
                headerName: "Date", children: [
                    { headerName: "DayOfWeek", field: "DayOfWeek" },
                    { headerName: "Date", field: "Date" },
                    { headerName: "Time", field: "Time" },
                ]
            },
            {
                headerName: "Location", children: [
                    { headerName: "Location", field: "Location" },
                    { headerName: "X", field: "X" },
                    { headerName: "Y", field: "Y" },
                    { headerName: "Elevation", field: "Elevation" }
                ]
            },
            { headerName: "Category", field: "Category" },
            { headerName: "Descript", field: "Descript" },
            { headerName: "PdDistrict", field: "PdDistrict" },
            { headerName: "Resolution", field: "Resolution" },
        ];
    }

    private createRowData() {
        this.elevationService.getElevationData()
            .subscribe(data => {
                this.data = data;
            });
    }
}