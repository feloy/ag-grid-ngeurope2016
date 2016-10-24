import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { AgRendererComponent } from 'ag-grid-ng2/main';
import { GridOptions } from 'ag-grid/main';
import { LicenseManager } from 'ag-grid-enterprise/main';

import 'ag-grid-enterprise/main';

import { ElevationService } from './elevation.service';

@Component({
    selector: 'my-pivot',
    templateUrl: 'app/pivot.component.html'
})
export class PivotComponent implements OnInit, OnChanges {
    @Input() vertical: string[];
    @Input() horizontal: string;
    @Input() aggFunc: string;

    private gridOptions: GridOptions;
    private data;
    private columnDefs;

    constructor(private elevationService: ElevationService) {
        LicenseManager.setLicenseKey("Ag-Grid_ag-Grid_Devs_21_November_2016__MTQ3OTY4NjQwMDAwMA==e1c9c3094696b86e3e1e067cd8cbe3e2");

        this.gridOptions = <GridOptions>{
            pivotMode: true
        };

    }

    private onGridReady(event) {
        this.gridOptions.api.sizeColumnsToFit();
    }

    ngOnInit() {
        this.createColumnDefs();
        this.createRowData();
    }

    ngOnChanges(changes: SimpleChanges) {
        if ('vertical' in changes || 'horizontal' in changes || 'aggFunc' in changes) {
            this.createColumnDefs();
        }
    }

    private createColumnDefs() {
        this.columnDefs = [];
        let defs = [
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
            let groupIndex = 1;
            defs = defs.map(col => {
                if (this.vertical.indexOf(col.field) > -1) {
                    col['rowGroupIndex'] = groupIndex++;
                }
                return col;
            });
        }
        if (this.horizontal) {
            defs = defs.map(col => {
                if (this.horizontal == col.field) {
                    col['aggFunc'] = this.aggFunc || 'count';
                    if (!this.aggFunc) {
                        col['pivotIndex'] = 1;
                    }
                }
                return col;
            });
        }
        this.columnDefs = defs;
    }

    private createRowData() {
        this.elevationService.getElevationData()
            .subscribe(data => this.data = data);
    }

}
