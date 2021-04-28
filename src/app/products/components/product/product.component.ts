import { Component, OnInit } from '@angular/core';
import { Products } from '../../../models/products.model';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public product: Products;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute   /*  activatedRoute  =   route*/
  ) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.product = this.router.getCurrentNavigation().extras.state.inf;
      }
    });
   }

  ngOnInit(){
    }

  back() {
    this.router.navigate(['/products/cates', this.product.cate]);
  }

}
