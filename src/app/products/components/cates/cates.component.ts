import { Component, OnInit } from '@angular/core';
import { CatesService } from './../../../core/services/cates/cates.service';
import { Cates } from './../../../models/cates.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cates',
  templateUrl: './cates.component.html',
  styleUrls: ['./cates.component.scss']
})
export class CatesComponent implements OnInit {

  public cates: Cates[];

  constructor(
    private catesService: CatesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.catesService.getCates()
    .subscribe(data => {
      this.cates = data;
      console.log(this.cates);
    });
  }

  sendProduts(cate) {
    this.router.navigate(['/products/cates', cate]);
  }
}
