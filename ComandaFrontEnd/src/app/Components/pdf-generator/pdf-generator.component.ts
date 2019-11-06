import { Component, OnInit, Input } from '@angular/core';
import * as jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Menu } from '../../Classes/menu';



@Component({
  selector: 'app-pdf-generator',
  templateUrl: './pdf-generator.component.html',
  styleUrls: ['./pdf-generator.component.scss']
})
export class PdfGeneratorComponent implements OnInit {

  @Input() cols: string[];
  @Input() objects: object[];
  @Input() fileName: string;
  private generator: jsPDF;
  constructor() { }

  ngOnInit() {
    this.generator = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4'
    });
  }

  generatePDF() {
    const ROWS = [];
    let temp = [];
    for (const obj of this.objects) {
      temp = [];
      for (const column of this.cols) {
        temp.push(obj[column.toLocaleLowerCase()]);
      }
      ROWS.push(temp);
    }
    this.generator.autoTable(this.cols, ROWS, {startY: 10});
    this.generator.save(`${this.fileName}.pdf`);
  }

}
