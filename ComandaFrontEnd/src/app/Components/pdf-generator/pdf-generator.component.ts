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
  @Input() menu: Menu[];
  constructor() { }

  ngOnInit() {
  }

  generatePDF() {
    const ROWS = [];
    const pdfGenerator = new jsPDF({
      orientation: 'p',
      unit: 'mm',
      format: 'a4'
    });
    console.log(pdfGenerator);
    this.menu.forEach((alimento) => {
      ROWS.push([alimento.id.toString(), alimento.nombre, alimento.tipo, alimento.precio.toString()]);
    });
    pdfGenerator.autoTable(this.cols, ROWS, {startY: 10});
    pdfGenerator.save('menu.pdf');
  }

}
