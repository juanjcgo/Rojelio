import { Component, OnInit } from '@angular/core';
import { Buy, Products } from './../../../models/products.model';
import { CartService } from './../../../core/services/cart/cart.service';
import { Observable } from 'rxjs';

import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from 'pdfmake/build/vfs_fonts';
(<any>pdfMake).vfs = pdfFonts.pdfMake.vfs;
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  public buy$: Observable<Buy[]>;
  public displayedColumns: string[] = ['img', 'name', 'price', 'quantity'];
  private pdfObj = null;
  private total = 0;
  private acquire: any;
  private datalog = null;

  constructor(
    private cartService: CartService,
    private http: HttpClient
  ) {
    this.buy$ = this.cartService.cart$;
  }

  ngOnInit(): void {
    this.loadLocalAssetToBase64();
    this.convertObservableToObjet();
    this.calculateTotal();
  }

  convertObservableToObjet() {
    this.buy$.subscribe(inf => {
      this.acquire = inf;
    });
  }

  loadLocalAssetToBase64() {
    this.http.get('./assets/images/logo.png', { responseType: 'blob'}).subscribe(res => {
          const reader = new  FileReader();
          reader.onloadend = () => {
          this.datalog = reader.result;
        };
          reader.readAsDataURL(res);
        });
    }

  calculateTotal() {
    console.log(this.acquire)
    for (let i = 0; i < this.acquire.length; i++) {
      console.log(this.acquire[i].name);
      this.total = this.total + this.acquire[i].priceTotal;
    }
  }

  createPdf(){
    let body = [];
    let title = new Array( 'Nombre', 'Cantidad', 'Unidad', 'Precio Uni', 'Precio Tot'  );
    body.push( title );
    for (let key in this.acquire)
      {
          if (this.acquire.hasOwnProperty(key))
          {
            let comp = this.acquire[key];
            let fila = new Array();
            fila.push( comp.name.toString() );
            fila.push( comp.quantity.toString()  );
            fila.push( comp.unit.toString()  );
            fila.push( comp.priceUnitVen.toString() );
            fila.push( comp.priceTotal.toString() );
            body.push(fila);
          }
      }
    let fila1 = new Array();
    fila1.push( '' );
    fila1.push( '' );
    fila1.push( '' );
    fila1.push( 'Total' );
    fila1.push( this.total.toString() );
    body.push(fila1);

    console.log('creando pdf');
    console.log(body);
    let logo = {};
    if (this.datalog) {
        logo = { image: this.datalog, width: 100, margin: [0, 15, 20, 20] };
      }
    const docDefinition = {
      pageSize: 'A5',
        /* background: function(currentPage, pageSize) {
          return `Pag Act ${currentPage} CON TAMAÑO ${ pageSize.width } x ${ pageSize.height }`;
        }, */
        content:
        [
          {
            columns: [
              logo,
              {
                text: new Date().toDateString(),
                alignment: 'right'
              }
            ]
          },
          { text: 'Su compra fue', margin: [0, 15, 20, 20] },
          {
            layout: 'lightHorizontalLines',
            table: {
              headerRows: 1,
              widths: [ 'auto', 'auto', 'auto', '*', '*' ],
              body
            }
          }

        ],
        footer: {
          text: 'www.rogelioverduras.org',
          alignment: 'center',
          fontSize: '9'
        },
        styles: {
          body: {
            background: 'red',
          },
          header: {
            fontSize: 10,
            bold: true,
            margin: [0, 15, 20, 0],
          },
          subheader: {
            fontSize: 14,
            bold: true,
            margin: [20, 15, 20, 20]
          },
          text: {
            margin: [20, 15, 20, 20]
          }
        }
    }
    this.pdfObj = pdfMake.createPdf(docDefinition);
    console.log(this.pdfObj);
    this.downloadPdf();
    }


    downloadPdf(){
        this.pdfObj.open();
    }

}
