import { Component, OnInit, ViewChild } from '@angular/core';
import { CatesService } from './../../../../core/services/cates/cates.service';
import { Router, NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-cates',
  templateUrl: './cates.component.html',
  styleUrls: ['./cates.component.scss']
})
export class CatesComponent implements  OnInit {

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['img', 'name', 'description', 'actions'];
  public cates: any;


  constructor(
    private catesServices: CatesService,
    private router: Router
    ) { }

  ngOnInit() {
    this.fetchCates();
  }

  async fetchCates() {
    await this.catesServices.getCates().subscribe(async (b) => {
      this.cates = b;
    });
  }


  addProducts(id) {
    console.log('popopp Este es el id de categoria ' + id);
    this.router.navigate(['/create', id]);
  }

  updateCate(cates) {
    console.log('=======================');
    console.log(cates);
    console.log('=======================');
    let navigationExtras: NavigationExtras = {
      state: {
        cate: cates
      }
    };
    this.router.navigate(['admin/edit-cate'], navigationExtras);
  }

  deleteCate(id) {
    console.log('Este es el ID', id);
    this.catesServices.deleteCate(id);
  }
}
