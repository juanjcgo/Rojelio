import { Component, OnInit } from '@angular/core';
import { CatesService } from './../../../core/services/cates/cates.service';
import { Cates } from './../../../models/cates.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

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