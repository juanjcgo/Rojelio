(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+p+5":function(t,e,n){"use strict";n.r(e),n.d(e,"OrderModule",(function(){return P}));var o=n("ofXK"),a=n("tyNb"),r=n("5JmO"),c=n("TruH"),i=n("fXoL"),s=n("BN7B"),b=n("tk/3"),l=n("xHqg"),d=n("Dh3D"),u=n("bTqV");function h(t,e){1&t&&i.yc(0,"Sus productos")}function p(t,e){1&t&&(i.Sb(0,"p"),i.yc(1,"No hay productos"),i.Rb())}function g(t,e){if(1&t&&(i.Sb(0,"tr"),i.Sb(1,"td"),i.Nb(2,"img",14),i.Rb(),i.Sb(3,"td"),i.yc(4),i.Rb(),i.Sb(5,"td"),i.yc(6),i.Rb(),i.Sb(7,"td"),i.yc(8),i.Rb(),i.Sb(9,"td"),i.yc(10),i.ec(11,"currency"),i.Rb(),i.Rb()),2&t){const t=e.$implicit;i.Bb(2),i.jc("src",t.img,i.qc),i.Bb(2),i.zc(t.name),i.Bb(2),i.zc(t.quantity),i.Bb(2),i.zc(t.unit),i.Bb(2),i.zc(i.fc(11,5,t.priceTotal))}}function f(t,e){if(1&t){const t=i.Tb();i.Sb(0,"div",3),i.Sb(1,"table",4),i.Zb("matSortChange",(function(e){return i.pc(t),i.dc(2).sortData(e)})),i.Sb(2,"tr",5),i.Sb(3,"th",6),i.yc(4,"Img"),i.Rb(),i.Sb(5,"th",7),i.yc(6,"Nombre"),i.Rb(),i.Sb(7,"th",8),i.yc(8,"Cant"),i.Rb(),i.Sb(9,"th",9),i.yc(10,"Unid"),i.Rb(),i.Sb(11,"th",10),i.yc(12,"Precio T"),i.Rb(),i.Rb(),i.xc(13,g,12,7,"tr",11),i.Sb(14,"tr",12),i.Nb(15,"td"),i.Nb(16,"td"),i.Nb(17,"td"),i.Sb(18,"td"),i.yc(19,"Total"),i.Rb(),i.Sb(20,"td"),i.yc(21),i.ec(22,"currency"),i.Rb(),i.Rb(),i.Rb(),i.Sb(23,"button",13),i.Zb("click",(function(){return i.pc(t),i.dc(2).createPdf()})),i.yc(24,"Generar PDF"),i.Rb(),i.Rb()}if(2&t){const t=i.dc().ngIf,e=i.dc();i.Bb(13),i.jc("ngForOf",t),i.Bb(8),i.zc(i.fc(22,2,e.total))}}function m(t,e){if(1&t&&(i.Sb(0,"div"),i.xc(1,p,2,0,"p",1),i.xc(2,f,25,4,"div",2),i.Rb()),2&t){const t=e.ngIf;i.Bb(1),i.jc("ngIf",0===t.length),i.Bb(1),i.jc("ngIf",0!=t.length)}}function y(t,e){1&t&&i.yc(0,"Datos personales")}function S(t,e){1&t&&i.yc(0,"pago")}r.vfs=c.pdfMake.vfs;const w=[{path:"",component:(()=>{class t{constructor(t,e){this.cartService=t,this.http=e,this.displayedColumns=["img","name","price","quantity"],this.pdfObj=null,this.total=0,this.datalog=null,this.buy$=this.cartService.cart$}ngOnInit(){this.loadLocalAssetToBase64(),this.convertObservableToObjet(),this.calculateTotal()}convertObservableToObjet(){this.buy$.subscribe(t=>{this.acquire=t})}loadLocalAssetToBase64(){this.http.get("./assets/images/logo.png",{responseType:"blob"}).subscribe(t=>{const e=new FileReader;e.onloadend=()=>{this.datalog=e.result},e.readAsDataURL(t)})}calculateTotal(){console.log(this.acquire);for(let t=0;t<this.acquire.length;t++)console.log(this.acquire[t].name),this.total=this.total+this.acquire[t].priceTotal}createPdf(){let t=[],e=new Array("Nombre","Cantidad","Unidad","Precio Uni","Precio Tot");t.push(e);for(let r in this.acquire)if(this.acquire.hasOwnProperty(r)){let e=this.acquire[r],n=new Array;n.push(e.name.toString()),n.push(e.quantity.toString()),n.push(e.unit.toString()),n.push(e.priceUnitVen.toString()),n.push(e.priceTotal.toString()),t.push(n)}let n=new Array;n.push(""),n.push(""),n.push(""),n.push("Total"),n.push(this.total.toString()),t.push(n),console.log("creando pdf"),console.log(t);let o={};this.datalog&&(o={image:this.datalog,width:100,margin:[0,15,20,20]});const a={pageSize:"A5",content:[{columns:[o,{text:(new Date).toDateString(),alignment:"right"}]},{text:"Su compra fue",margin:[0,15,20,20]},{layout:"lightHorizontalLines",table:{headerRows:1,widths:["auto","auto","auto","*","*"],body:t}}],footer:{text:"www.rogelioverduras.org",alignment:"center",fontSize:"9"},styles:{body:{background:"red"},header:{fontSize:10,bold:!0,margin:[0,15,20,0]},subheader:{fontSize:14,bold:!0,margin:[20,15,20,20]},text:{margin:[20,15,20,20]}}};this.pdfObj=r.createPdf(a),console.log(this.pdfObj),this.downloadPdf()}downloadPdf(){this.pdfObj.open()}}return t.\u0275fac=function(e){return new(e||t)(i.Mb(s.a),i.Mb(b.a))},t.\u0275cmp=i.Gb({type:t,selectors:[["app-order"]],decls:13,vars:3,consts:[["matStepLabel",""],[4,"ngIf"],["class","color",4,"ngIf"],[1,"color"],["matSort","",1,"full-width-table",3,"matSortChange"],[1,"header-line"],["mat-sort-header","img"],["mat-sort-header","name"],["mat-sort-header","priceUnitVen"],["mat-sort-header","quantity"],["mat-sort-header","unit"],[4,"ngFor","ngForOf"],[1,"line"],["mat-raised-button","","color","primary",3,"click"],[1,"image",3,"src"]],template:function(t,e){1&t&&(i.Sb(0,"mat-horizontal-stepper"),i.Sb(1,"mat-step"),i.xc(2,h,1,0,"ng-template",0),i.xc(3,m,3,2,"div",1),i.ec(4,"async"),i.Rb(),i.Sb(5,"mat-step"),i.xc(6,y,1,0,"ng-template",0),i.Sb(7,"h1"),i.yc(8,"Contenido"),i.Rb(),i.Rb(),i.Sb(9,"mat-step"),i.xc(10,S,1,0,"ng-template",0),i.Sb(11,"h1"),i.yc(12,"Contenido"),i.Rb(),i.Rb(),i.Rb()),2&t&&(i.Bb(3),i.jc("ngIf",i.fc(4,1,e.buy$)))},directives:[l.a,l.b,l.c,o.l,d.a,d.b,o.k,u.b],pipes:[o.b,o.d],styles:[".image[_ngcontent-%COMP%]{width:60px}.itera-product[_ngcontent-%COMP%]{width:95%;background:red}table[_ngcontent-%COMP%]{width:1;border-collapse:collapse}.color[_ngcontent-%COMP%]{margin-top:10px;border-radius:4px;box-shadow:0 0 8px 0 #4402bd;background:radial-gradient(#f1eeee,#f1eef7)}.color[_ngcontent-%COMP%]   .header-line[_ngcontent-%COMP%]{height:30px;background:rgba(42,105,223,.301)}.color[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]{margin:5px}.color[_ngcontent-%COMP%]   .line[_ngcontent-%COMP%]{box-shadow:0 0 8px 0 #4402bd;background:radial-gradient(#f1eeee,#f1eef7)}"]}),t})()}];let R=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[a.f.forChild(w)],a.f]}),t})();var O=n("hctd"),x=n("PCNd");let P=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[o.c,R,O.a,x.a]]}),t})()}}]);