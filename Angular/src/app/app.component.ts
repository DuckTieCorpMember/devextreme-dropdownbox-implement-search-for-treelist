import { Component, ViewChild } from '@angular/core';
import { DxDropDownBoxComponent, type DxDropDownBoxTypes } from 'devextreme-angular/ui/drop-down-box';
import { DxTreeListComponent, type DxTreeListTypes } from 'devextreme-angular/ui/tree-list';
import { Service, type Task, type Employee, type Priority } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [Service]
})
export class AppComponent {
  @ViewChild(DxDropDownBoxComponent) dropDownBox!: DxDropDownBoxComponent<Task, number>;
  @ViewChild(DxTreeListComponent) treeList!: DxTreeListComponent<Task, number>;

  title = 'DropDownBox';
  focusedRowIndex: number = -1;
  tasks: Task[];
  employees: Employee[];
  priorities: Priority[];
  statuses: string[];
  searchPanelText = '';
  value: number[] | null = null;
  isOpened = false;

  constructor(private service: Service) {
    this.tasks = service.getTasks();
    this.employees = service.getEmployees();
    this.priorities = service.getPriorities();

    this.statuses = [
      'Not Started',
      'Need Assistance',
      'In Progress',
      'Deferred',
      'Completed'
    ];
  }

  displayExpr = (item: Task | string): string => {
    return typeof item === 'object' ? item.Task_Subject : item;
  };

  onInput(e: DxDropDownBoxTypes.InputEvent): void {
    if (!this.isOpened) {
      this.isOpened = true;
    }
    if (typeof this.value === 'object') {
      if (this.treeList) {
        this.searchPanelText = e.component.option('text') as string;
      }
    }
  }

  onOpened(): void {
    setTimeout(() => {
      this.dropDownBox.instance.focus();
    });
  }

  onValueChanged(e: DxDropDownBoxTypes.ValueChangedEvent<Task, number>): void {
    if (!this.value) {
      if (this.treeList) {
        this.treeList.instance.deselectAll();
      }
      return;
    }
    if (Array.isArray(e.previousValue) && e.previousValue.length > 0 && typeof this.value === 'string') {
      this.value = e.previousValue;
      if (this.treeList && e.previousValue.length > 0) {
        this.treeList.instance.deselectRows([e.previousValue.pop()]);
      }
    }
  }

  onKeyDown(e: DxDropDownBoxTypes.KeyDownEvent): void {
    if (e.event?.keyCode !== 40) return;

    if (!this.dropDownBox.instance.option('opened')) {
      this.dropDownBox.instance.open();
    } else {
      const treeListInstance = this.treeList.instance;
      const visibleRows = treeListInstance.getVisibleRows().length - 1;
      if (this.focusedRowIndex === -1 || visibleRows < this.focusedRowIndex) {
        this.focusedRowIndex = 0;
      }
      const rowElement = treeListInstance.getRowElement(this.focusedRowIndex);
      if (rowElement) {
        treeListInstance.focus(rowElement);
      }
    }
  }

  customizeText = (cellInfo: { valueText: string }): string => {
    return cellInfo.valueText + '%';
  };

  onSelectionChanged(e: DxTreeListTypes.SelectionChangedEvent<Task, number>): void {
    const keys = e.selectedRowKeys;
    const hasSelection = keys.length > 0;
    this.value = hasSelection ? keys : null;
  }
}
