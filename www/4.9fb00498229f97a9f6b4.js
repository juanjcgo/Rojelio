(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{jkDv:function(t,e,i){"use strict";i.r(e),i.d(e,"AdminModule",(function(){return ae}));var c=i("ofXK"),r=i("tyNb"),o=i("0MNC"),a=i("lJxs"),n=i("UXun"),s=i("fXoL"),b=i("RL7/"),d=i("XhcP"),l=i("/t3+"),u=i("MutI"),m=i("bTqV"),p=i("NFeN");function f(t,e){if(1&t){const t=s.Tb();s.Sb(0,"button",11),s.Zb("click",(function(){return s.pc(t),s.dc(),s.nc(2).toggle()})),s.Sb(1,"mat-icon",12),s.yc(2,"menu"),s.Rb(),s.Rb()}}let g=(()=>{class t{constructor(t,e,i){this.breakpointObserver=t,this.authService=e,this.router=i,this.isHandset$=this.breakpointObserver.observe(o.b.Handset).pipe(Object(a.a)(t=>t.matches),Object(n.a)())}logout(){this.authService.logout().then(()=>{this.router.navigate(["./home"])})}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(o.a),s.Mb(b.a),s.Mb(r.c))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-nav"]],decls:27,vars:12,consts:[[1,"sidenav-container"],["fixedInViewport","",1,"sidenav",3,"mode","opened"],["drawer",""],["mat-list-item","","routerLink","create-product"],["mat-list-item","","routerLink","products"],["mat-list-item","","routerLink","/"],["mat-list-item","","routerLink","cates"],["mat-list-item","","routerLink","create-cate"],["color","primary",1,"between-xs"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click",4,"ngIf"],["src","assets\\icons\\logout-2.png",1,"icons",3,"click"],["type","button","aria-label","Toggle sidenav","mat-icon-button","",3,"click"],["aria-label","Side nav toggle icon"]],template:function(t,e){1&t&&(s.Sb(0,"mat-sidenav-container",0),s.Sb(1,"mat-sidenav",1,2),s.ec(3,"async"),s.ec(4,"async"),s.ec(5,"async"),s.Sb(6,"mat-toolbar"),s.yc(7,"Menu"),s.Rb(),s.Sb(8,"mat-nav-list"),s.Sb(9,"a",3),s.yc(10,"Crear productos"),s.Rb(),s.Sb(11,"a",4),s.yc(12,"Listar productos"),s.Rb(),s.Sb(13,"a",5),s.yc(14,"dashboard"),s.Rb(),s.Sb(15,"a",6),s.yc(16,"Ver categorias"),s.Rb(),s.Sb(17,"a",7),s.yc(18,"Crear categorias"),s.Rb(),s.Rb(),s.Rb(),s.Sb(19,"mat-sidenav-content"),s.Sb(20,"mat-toolbar",8),s.xc(21,f,3,0,"button",9),s.ec(22,"async"),s.Sb(23,"span"),s.yc(24,"Rojelio"),s.Rb(),s.Sb(25,"img",10),s.Zb("click",(function(){return e.logout()})),s.Rb(),s.Rb(),s.Nb(26,"router-outlet"),s.Rb(),s.Rb()),2&t&&(s.Bb(1),s.jc("mode",s.fc(4,6,e.isHandset$)?"over":"side")("opened",!1===s.fc(5,8,e.isHandset$)),s.Cb("role",s.fc(3,4,e.isHandset$)?"dialog":"navigation"),s.Bb(20),s.jc("ngIf",s.fc(22,10,e.isHandset$)))},directives:[d.b,d.a,l.a,u.c,u.a,r.e,d.c,c.l,r.g,m.b,p.a],pipes:[c.b],styles:[".sidenav-container[_ngcontent-%COMP%]{height:100%}.sidenav[_ngcontent-%COMP%]{width:200px}.sidenav[_ngcontent-%COMP%]   .mat-toolbar[_ngcontent-%COMP%]{background:inherit}.example-spacer[_ngcontent-%COMP%]{flex:1 1 auto}.mat-toolbar.mat-primary[_ngcontent-%COMP%]{position:sticky;top:0;z-index:1}"]}),t})();var h=i("zkoq"),S=i("Wp6s"),v=i("STbY");function R(t,e){if(1&t&&(s.Sb(0,"mat-grid-tile",4),s.Sb(1,"mat-card",5),s.Sb(2,"mat-card-header"),s.Sb(3,"mat-card-title"),s.yc(4),s.Sb(5,"button",6),s.Sb(6,"mat-icon"),s.yc(7,"more_vert"),s.Rb(),s.Rb(),s.Sb(8,"mat-menu",7,8),s.Sb(10,"button",9),s.yc(11,"Expand"),s.Rb(),s.Sb(12,"button",9),s.yc(13,"Remove"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(14,"mat-card-content",10),s.Sb(15,"div"),s.yc(16,"Card Content Here"),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t){const t=e.$implicit,i=s.nc(9);s.jc("colspan",t.cols)("rowspan",t.rows),s.Bb(4),s.Ac(" ",t.title," "),s.Bb(1),s.jc("matMenuTriggerFor",i)}}let y=(()=>{class t{constructor(t){this.breakpointObserver=t,this.cards=this.breakpointObserver.observe(o.b.Handset).pipe(Object(a.a)(({matches:t})=>t?[{title:"Card 1",cols:1,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:1},{title:"Card 4",cols:1,rows:1}]:[{title:"Card 1",cols:2,rows:1},{title:"Card 2",cols:1,rows:1},{title:"Card 3",cols:1,rows:2},{title:"Card 4",cols:1,rows:1}]))}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(o.a))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-dashboard"]],decls:6,vars:3,consts:[[1,"grid-container"],[1,"mat-h1"],["cols","2","rowHeight","350px"],[3,"colspan","rowspan",4,"ngFor","ngForOf"],[3,"colspan","rowspan"],[1,"dashboard-card"],["mat-icon-button","","aria-label","Toggle menu",1,"more-button",3,"matMenuTriggerFor"],["xPosition","before"],["menu","matMenu"],["mat-menu-item",""],[1,"dashboard-card-content"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"h1",1),s.yc(2,"Dashboard"),s.Rb(),s.Sb(3,"mat-grid-list",2),s.xc(4,R,17,4,"mat-grid-tile",3),s.ec(5,"async"),s.Rb(),s.Rb()),2&t&&(s.Bb(4),s.jc("ngForOf",s.fc(5,1,e.cards)))},directives:[h.a,c.k,h.c,S.a,S.d,S.g,m.b,v.c,p.a,v.d,v.a,S.c],pipes:[c.b],styles:[".grid-container[_ngcontent-%COMP%]{margin:20px}.dashboard-card[_ngcontent-%COMP%]{position:absolute;top:15px;left:15px;right:15px;bottom:15px}.more-button[_ngcontent-%COMP%]{position:absolute;top:5px;right:10px}.dashboard-card-content[_ngcontent-%COMP%]{text-align:center}"]}),t})();var F=i("mrSG"),C=i("1t5U"),x=i("+0xr"),j=i("M9IT");function w(t,e){1&t&&(s.Sb(0,"th",13),s.yc(1," NAME "),s.Rb())}function q(t,e){if(1&t&&(s.Sb(0,"td",14),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.Ac(" ",t.name," ")}}function I(t,e){1&t&&(s.Sb(0,"th",13),s.yc(1," DESCRIPTION "),s.Rb())}function B(t,e){if(1&t&&(s.Sb(0,"td",14),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.zc(t.description)}}function M(t,e){1&t&&(s.Sb(0,"th",13),s.yc(1," IMG "),s.Rb())}function N(t,e){if(1&t&&(s.Sb(0,"td",14),s.Nb(1,"img",15),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.jc("src",t.img,s.qc)}}function P(t,e){1&t&&(s.Sb(0,"th",13),s.yc(1," ACTIONS "),s.Rb())}function O(t,e){if(1&t){const t=s.Tb();s.Sb(0,"td",14),s.Sb(1,"img",16),s.Zb("click",(function(){s.pc(t);const i=e.$implicit;return s.dc().updateCate(i)})),s.Rb(),s.Sb(2,"img",17),s.Zb("click",(function(){s.pc(t);const i=e.$implicit;return s.dc().deleteCate(i.id)})),s.Rb(),s.Rb()}}function E(t,e){1&t&&s.Nb(0,"tr",18)}function U(t,e){1&t&&s.Nb(0,"tr",19)}const k=function(){return[5,10,25,100]};let D=(()=>{class t{constructor(t,e){this.catesServices=t,this.router=e,this.displayedColumns=["img","name","description","actions"]}ngOnInit(){this.fetchCates()}fetchCates(){return Object(F.b)(this,void 0,void 0,(function*(){yield this.catesServices.getCates().subscribe(t=>Object(F.b)(this,void 0,void 0,(function*(){this.cates=t})))}))}addProducts(t){console.log("popopp Este es el id de categoria "+t),this.router.navigate(["/create",t])}updateCate(t){console.log("======================="),console.log(t),console.log("======================="),this.router.navigate(["admin/edit-cate"],{state:{cate:t}})}deleteCate(t){console.log("Este es el ID",t),this.catesServices.deleteCate(t)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(C.a),s.Mb(r.c))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-cates"]],decls:20,vars:7,consts:[[1,"contend"],["mat-button","","routerLink","../create-cate"],[1,"mat-elevation-z8","cates-table"],["mat-table","",1,"full-width-table",3,"dataSource"],["matColumnDef","name"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","description"],["matColumnDef","img"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["mat-header-cell",""],["mat-cell",""],[3,"src"],["src","./assets/icons/edit.png",1,"cates-del",3,"click"],["src","./assets/icons/del.png",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"button",1),s.yc(2,"Crear categoria"),s.Rb(),s.Sb(3,"div",2),s.Sb(4,"table",3),s.Qb(5,4),s.xc(6,w,2,0,"th",5),s.xc(7,q,2,1,"td",6),s.Pb(),s.Qb(8,7),s.xc(9,I,2,0,"th",5),s.xc(10,B,2,1,"td",6),s.Pb(),s.Qb(11,8),s.xc(12,M,2,0,"th",5),s.xc(13,N,2,1,"td",6),s.Pb(),s.Qb(14,9),s.xc(15,P,2,0,"th",5),s.xc(16,O,3,0,"td",6),s.Pb(),s.xc(17,E,1,0,"tr",10),s.xc(18,U,1,0,"tr",11),s.Rb(),s.Nb(19,"mat-paginator",12),s.Rb(),s.Rb()),2&t&&(s.Bb(4),s.jc("dataSource",e.cates),s.Bb(13),s.jc("matHeaderRowDef",e.displayedColumns),s.Bb(1),s.jc("matRowDefColumns",e.displayedColumns),s.Bb(1),s.jc("length",100)("pageSize",10)("pageSizeOptions",s.lc(6,k)))},directives:[m.b,r.d,x.j,x.c,x.e,x.b,x.g,x.i,j.a,x.d,x.a,x.f,x.h],styles:[".full-width-table[_ngcontent-%COMP%]{width:100%}.cates-table[_ngcontent-%COMP%]{width:98%;margin:2px auto 0}img[_ngcontent-%COMP%]{width:30px}img[_ngcontent-%COMP%]   .cates-del[_ngcontent-%COMP%]{margin-left:3px}"]}),t})();var $=i("3Pt+"),V=i("nYR2"),_=i("Vaw3");let z=(()=>{class t{constructor(t){this.storage=t}uploadFiles(t,e){const i=t.target.files[0];console.log(i.name);const c="images/"+e+"/"+i.name;return console.log(c),{fileRef:this.storage.ref(c),task:this.storage.upload(c,i)}}}return t.\u0275fac=function(e){return new(e||t)(s.Wb(_.a))},t.\u0275prov=s.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var G=i("kmnG"),L=i("qFsG");function H(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Z(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,H,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.nameField.hasError("required"))}}function T(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function A(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,T,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.descriptionField.hasError("required"))}}function Q(t,e){1&t&&s.Nb(0,"img",12),2&t&&s.jc("src",e.ngIf,s.qc)}function K(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function J(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,K,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.catesForm.hasError("required"))}}let X=(()=>{class t{constructor(t,e,i,c,r){this.catesServices=t,this.router=e,this.formBuilder=i,this.storage=c,this.imgsService=r,this.buildForm()}ngOnInit(){}buildForm(){this.catesForm=this.formBuilder.group({name:["",[$.l.required]],description:["",[$.l.required]],img:[""]})}addCate(t){t.preventDefault(),this.catesForm.valid&&(this.catesServices.addCate({name:this.catesForm.value.name,description:this.catesForm.value.description,img:this.catesForm.value.img}),this.router.navigate(["/admin/cates"]))}uploadFile(t){const e=this.imgsService.uploadFiles(t,"cates");e.task.snapshotChanges().pipe(Object(V.a)(()=>{this.image$=e.fileRef.getDownloadURL(),this.image$.subscribe(t=>{console.log(t),this.catesForm.get("img").setValue(t)})})).subscribe()}get nameField(){return this.catesForm.get("name")}get descriptionField(){return this.catesForm.get("description")}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(C.a),s.Mb(r.c),s.Mb($.b),s.Mb(_.a),s.Mb(z))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-form-cates"]],decls:32,vars:8,consts:[[1,"mat-elevation-z8","cates-form"],[3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col-xs"],[1,"full-width"],["type","text","formControlName","name","matInput","","placeholder","Escribe el nombre","value","Joe Doe"],[4,"ngIf"],["formControlName","description","matInput","","placeholder","Escribe la descripcion"],["alt","",3,"src",4,"ngIf"],["type","file",3,"change"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["alt","",3,"src"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"form",1),s.Zb("ngSubmit",(function(t){return e.addCate(t)})),s.Sb(2,"mat-card",2),s.Sb(3,"mat-card-header"),s.Sb(4,"mat-card-title"),s.yc(5,"Crear nueva categoria"),s.Rb(),s.Rb(),s.Sb(6,"mat-card-content"),s.Sb(7,"div",3),s.Sb(8,"div",4),s.Sb(9,"mat-form-field",5),s.Sb(10,"mat-label"),s.yc(11,"Nombre"),s.Rb(),s.Nb(12,"input",6),s.Rb(),s.xc(13,Z,2,1,"div",7),s.Rb(),s.Rb(),s.Sb(14,"div",3),s.Sb(15,"div",4),s.Sb(16,"mat-form-field",5),s.Sb(17,"mat-label"),s.yc(18,"Descripci\xf3n"),s.Rb(),s.Nb(19,"textarea",8),s.Rb(),s.xc(20,A,2,1,"div",7),s.Rb(),s.Rb(),s.Sb(21,"div",3),s.Sb(22,"div",4),s.Sb(23,"h1"),s.yc(24,"Images"),s.Rb(),s.xc(25,Q,1,1,"img",9),s.ec(26,"async"),s.Sb(27,"input",10),s.Zb("change",(function(t){return e.uploadFile(t)})),s.Rb(),s.xc(28,J,2,1,"div",7),s.Rb(),s.Rb(),s.Rb(),s.Sb(29,"mat-card-actions"),s.Sb(30,"button",11),s.yc(31,"Agregar"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(1),s.jc("formGroup",e.catesForm),s.Bb(12),s.jc("ngIf",e.nameField.errors&&e.nameField.dirty),s.Bb(7),s.jc("ngIf",e.descriptionField.errors&&e.descriptionField.dirty),s.Bb(5),s.jc("ngIf",s.fc(26,6,e.image$)),s.Bb(3),s.jc("ngIf",e.catesForm.errors),s.Bb(2),s.jc("disabled",e.catesForm.invalid))},directives:[$.m,$.h,$.d,S.a,S.d,S.g,S.c,G.b,G.e,$.a,L.a,$.g,$.c,c.l,S.b,m.b],pipes:[c.b],styles:[".cates-form[_ngcontent-%COMP%]{width:98%;margin:10px auto 0}.full-width[_ngcontent-%COMP%]{width:100%}"]}),t})();var W=i("f+7+"),Y=i("d3UM"),tt=i("FKr1");function et(t,e){if(1&t&&(s.Sb(0,"mat-option",25),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.jc("value",t.name),s.Bb(1),s.zc(t.name)}}function it(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function ct(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,it,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.catesField.hasError("required"))}}function rt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function ot(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,rt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.nameField.hasError("required"))}}function at(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function nt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,at,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.priceField.hasError("required"))}}function st(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function bt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,st,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.quantityField.hasError("required"))}}function dt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function lt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,dt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.unitField.hasError("required"))}}function ut(t,e){1&t&&s.Nb(0,"img",26),2&t&&s.jc("src",e.ngIf,s.qc)}let mt=(()=>{class t{constructor(t,e,i,c,r){this.formBuilder=t,this.productsService=e,this.catesService=i,this.router=c,this.imgsService=r,this.buildForm()}ngOnInit(){this.catesService.getCates().subscribe(t=>{this.cates=t,console.log(t)})}buildForm(){this.productForm=this.formBuilder.group({cates:["",[$.l.required]],name:["",[$.l.required]],price:["",[$.l.required]],priceUnitCom:[""],priceUnitVen:[""],quantity:["",[$.l.required]],unit:["",[$.l.required]],description:[""],img:[""]})}addProduct(t){console.log("activa agragar product"),t.preventDefault(),this.productForm.valid&&(this.productsService.addCate({cate:this.productForm.value.cates,name:this.productForm.value.name,price:this.productForm.value.price,priceUnitCom:this.productForm.value.price/this.productForm.value.quantity,priceUnitVen:this.productForm.value.priceUnitVen,quantity:this.productForm.value.quantity,unit:this.productForm.value.unit,description:this.productForm.value.description,img:this.productForm.value.img}),this.router.navigate(["/admin/products"]))}uploadFile(t){const e=this.imgsService.uploadFiles(t,"products");e.task.snapshotChanges().pipe(Object(V.a)(()=>{this.image$=e.fileRef.getDownloadURL(),this.image$.subscribe(t=>{console.log(t),this.productForm.get("img").setValue(t)})})).subscribe()}get catesField(){return this.productForm.get("cates")}get nameField(){return this.productForm.get("name")}get priceField(){return this.productForm.get("price")}get priceUnitComField(){return this.productForm.get("priceUnitCom")}get priceUnitVenField(){return this.productForm.get("priceUnitVen")}get quantityField(){return this.productForm.get("quantity")}get unitField(){return this.productForm.get("unit")}get descriptionField(){return this.productForm.get("description")}get imgField(){return this.productForm.get("img")}}return t.\u0275fac=function(e){return new(e||t)(s.Mb($.b),s.Mb(W.a),s.Mb(C.a),s.Mb(r.c),s.Mb(z))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-form-product"]],decls:81,vars:13,consts:[[1,"mat-elevation-z8"],[3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col-xs"],["appearance","fill full-width"],["type","text","formControlName","cates"],[3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"full-width"],["type","text","formControlName","name","matInput","","placeholder","Escribe el nombre"],["type","number","formControlName","price","matInput","","placeholder","Escribe el precio"],["cellspacing","0",1,"example-full-width"],["type","number","formControlName","quantity","matInput","","placeholder","Cantidad dependiendo de la unidad"],[1,"full-width","div"],["type","text","formControlName","unit"],["value","Kilo"],["value","Libra"],["value","Unidad"],["type","text","formControlName","description","matInput","","placeholder","Escribe la descripcion"],["type","number","value","productForm.value.price","formControlName","priceUnitCom","matInput","",3,"disabled","value"],["type","number","formControlName","priceUnitVen","matInput","","placeholder","Escribe el precio unidad de venta"],["alt","",3,"src",4,"ngIf"],["type","file",3,"change"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],[3,"value"],["alt","",3,"src"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"form",1),s.Zb("ngSubmit",(function(t){return e.addProduct(t)})),s.Sb(2,"mat-card",2),s.Sb(3,"mat-card-header"),s.Sb(4,"mat-card-title"),s.yc(5,"Crear nuevo producto"),s.Rb(),s.Rb(),s.Sb(6,"mat-card-content"),s.Sb(7,"div",3),s.Sb(8,"div",4),s.Sb(9,"mat-form-field",5),s.Sb(10,"mat-label"),s.yc(11,"Categoria"),s.Rb(),s.Sb(12,"mat-select",6),s.xc(13,et,2,2,"mat-option",7),s.Rb(),s.Rb(),s.xc(14,ct,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(15,"div",3),s.Sb(16,"div",4),s.Sb(17,"mat-form-field",9),s.Sb(18,"mat-label"),s.yc(19,"Nombre"),s.Rb(),s.Nb(20,"input",10),s.Rb(),s.xc(21,ot,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(22,"div",3),s.Sb(23,"div",4),s.Sb(24,"mat-form-field",9),s.Sb(25,"mat-label"),s.yc(26,"Precio"),s.Rb(),s.Nb(27,"input",11),s.Rb(),s.xc(28,nt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(29,"div",3),s.Sb(30,"div",4),s.Sb(31,"table",12),s.Sb(32,"tr"),s.Sb(33,"td"),s.Sb(34,"mat-form-field",9),s.Sb(35,"mat-label"),s.yc(36,"Cantidad"),s.Rb(),s.Nb(37,"input",13),s.xc(38,bt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(39,"td"),s.Sb(40,"mat-form-field",14),s.Sb(41,"mat-label"),s.yc(42,"Unidad"),s.Rb(),s.Sb(43,"mat-select",15),s.Sb(44,"mat-option"),s.yc(45,"Selecciona una"),s.Rb(),s.Sb(46,"mat-option",16),s.yc(47,"Kilos"),s.Rb(),s.Sb(48,"mat-option",17),s.yc(49,"Libras"),s.Rb(),s.Sb(50,"mat-option",18),s.yc(51,"Unidades"),s.Rb(),s.Rb(),s.xc(52,lt,2,1,"div",8),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(53,"div",3),s.Sb(54,"div",4),s.Sb(55,"mat-form-field",9),s.Sb(56,"mat-label"),s.yc(57,"Descripci\xf3n"),s.Rb(),s.Nb(58,"textarea",19),s.Rb(),s.Rb(),s.Rb(),s.Sb(59,"div",3),s.Sb(60,"div",4),s.Sb(61,"mat-form-field",9),s.Sb(62,"mat-label"),s.yc(63,"Precio Unidad Compra"),s.Rb(),s.Nb(64,"input",20),s.Rb(),s.Rb(),s.Rb(),s.Sb(65,"div",3),s.Sb(66,"div",4),s.Sb(67,"mat-form-field",9),s.Sb(68,"mat-label"),s.yc(69,"Precio Unidad Venta"),s.Rb(),s.Nb(70,"input",21),s.Rb(),s.Rb(),s.Rb(),s.Sb(71,"div",3),s.Sb(72,"div",4),s.Sb(73,"mat-label"),s.yc(74,"Imagen"),s.Rb(),s.xc(75,ut,1,1,"img",22),s.ec(76,"async"),s.Sb(77,"input",23),s.Zb("change",(function(t){return e.uploadFile(t)})),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(78,"mat-card-actions"),s.Sb(79,"button",24),s.yc(80,"Agregar"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(1),s.jc("formGroup",e.productForm),s.Bb(12),s.jc("ngForOf",e.cates),s.Bb(1),s.jc("ngIf",e.catesField.errors&&e.catesField.dirty),s.Bb(7),s.jc("ngIf",e.nameField.errors&&e.nameField.dirty),s.Bb(7),s.jc("ngIf",e.priceField.errors&&e.priceField.dirty),s.Bb(10),s.jc("ngIf",e.quantityField.errors&&e.quantityField.dirty),s.Bb(14),s.jc("ngIf",e.unitField.errors&&e.unitField.dirty),s.Bb(12),s.jc("disabled",!0)("value",e.productForm.value.price/e.productForm.value.quantity),s.Bb(11),s.jc("ngIf",s.fc(76,11,e.image$)),s.Bb(4),s.jc("disabled",e.productForm.invalid))},directives:[$.m,$.h,$.d,S.a,S.d,S.g,S.c,G.b,G.e,Y.a,$.g,$.c,c.k,c.l,$.a,L.a,$.j,tt.j,S.b,m.b],pipes:[c.b],styles:[".product-form[_ngcontent-%COMP%]{width:98%;margin:10px auto 0}.full-width[_ngcontent-%COMP%]{width:100%}.div[_ngcontent-%COMP%]{width:50%}"]}),t})();function pt(t,e){if(1&t){const t=s.Tb();s.Sb(0,"mat-option",21),s.Zb("click",(function(){s.pc(t);const i=e.$implicit;return s.dc().findProductByCate(i.name)})),s.yc(1),s.Rb()}if(2&t){const t=e.$implicit;s.Bb(1),s.zc(t.name)}}function ft(t,e){1&t&&(s.Sb(0,"th",22),s.yc(1," Img "),s.Rb())}function gt(t,e){if(1&t&&(s.Sb(0,"td",23),s.Nb(1,"img",24),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.jc("src",t.img,s.qc)}}function ht(t,e){1&t&&(s.Sb(0,"th",22),s.yc(1," Name "),s.Rb())}function St(t,e){if(1&t&&(s.Sb(0,"td",23),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.Ac(" ",t.name," ")}}function vt(t,e){1&t&&(s.Sb(0,"th",22),s.yc(1," Precio U Venta"),s.Rb())}function Rt(t,e){if(1&t&&(s.Sb(0,"td",23),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.Ac(" ",t.priceUnitVen," ")}}function yt(t,e){1&t&&(s.Sb(0,"th",22),s.yc(1,"Cantidad"),s.Rb())}function Ft(t,e){if(1&t&&(s.Sb(0,"td",23),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.Bb(1),s.Bc(" ",t.quantity," - ",t.unit," ")}}function Ct(t,e){1&t&&(s.Sb(0,"th",22),s.yc(1," Actions "),s.Rb())}function xt(t,e){if(1&t){const t=s.Tb();s.Sb(0,"td",23),s.Sb(1,"img",25),s.Zb("click",(function(){s.pc(t);const i=e.$implicit;return s.dc().updateProduct(i)})),s.Rb(),s.Sb(2,"img",26),s.Zb("click",(function(){s.pc(t);const i=e.$implicit;return s.dc().deleteProduct(i)})),s.Rb(),s.Rb()}}function jt(t,e){1&t&&s.Nb(0,"tr",27)}function wt(t,e){1&t&&s.Nb(0,"tr",28)}const qt=function(){return[5,10,25,100]};function It(t,e){if(1&t&&(s.Sb(0,"mat-option",27),s.yc(1),s.Rb()),2&t){const t=e.$implicit;s.jc("value",t.name),s.Bb(1),s.zc(t.name)}}function Bt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Mt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Bt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.catesField.hasError("required"))}}function Nt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Pt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Nt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.nameField.hasError("required"))}}function Ot(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Et(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Ot,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.priceField.hasError("required"))}}function Ut(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function kt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Ut,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.quantityField.hasError("required"))}}function Dt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function $t(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Dt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.unitField.hasError("required"))}}function Vt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function _t(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Vt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.descriptionField.hasError("required"))}}function zt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Gt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,zt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.priceUnitComField.hasError("required"))}}function Lt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Ht(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Lt,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.priceUnitVenField.hasError("required"))}}function Zt(t,e){if(1&t&&s.Nb(0,"img",28),2&t){const t=s.dc();s.jc("src",t.product.img,s.qc)}}function Tt(t,e){1&t&&s.Nb(0,"img",29),2&t&&s.jc("src",e.ngIf,s.qc)}function At(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Qt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,At,2,0,"p",8),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.productForm.hasError("required"))}}function Kt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Jt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Kt,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.nameField.hasError("required"))}}function Xt(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function Wt(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,Xt,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.descriptionField.hasError("required"))}}function Yt(t,e){if(1&t&&s.Nb(0,"img",13),2&t){const t=s.dc();s.jc("src",t.cate.img,s.qc)}}function te(t,e){1&t&&s.Nb(0,"img",14),2&t&&s.jc("src",e.ngIf,s.qc)}function ee(t,e){1&t&&(s.Sb(0,"p"),s.yc(1,"Este campo es requerido"),s.Rb())}function ie(t,e){if(1&t&&(s.Sb(0,"div"),s.xc(1,ee,2,0,"p",7),s.Rb()),2&t){const t=s.dc();s.Bb(1),s.jc("ngIf",t.catesForm.hasError("required"))}}const ce=[{path:"",component:g,children:[{path:"",component:y},{path:"products",component:(()=>{class t{constructor(t,e,i,c){this.productsService=t,this.catesService=e,this.formBuilder=i,this.router=c,this.displayedColumns=["img","name","priceUnitVen","quantity","actions"],this.buildForm()}ngOnInit(){this.catesService.getCates().subscribe(t=>{this.cates=t})}findProductByCate(t){this.productsService.getProducts(t).subscribe(t=>{this.products=t,console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,"),console.log(this.products),console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,")})}buildForm(){this.cateForm=this.formBuilder.group({cates:["",[$.l.required]]})}updateProduct(t){console.log("======================="),console.log(t),console.log("======================="),this.product={cate:t.cate,id:t.id,name:t.name,price:t.price,priceUnitCom:t.priceUnitCom,priceUnitVen:t.priceUnitVen,quantity:t.quantity,unit:t.unit,description:t.description,img:t.img},console.log("Este es el id de la view "+t.id),this.router.navigate(["admin/edit-product"],{state:{prod:this.product}})}deleteProduct(t){const e={cate_id:t.cate,prod_id:t.id};console.log("Estos son las claves",e),this.productsService.deleteProduct(e)}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(W.a),s.Mb(C.a),s.Mb($.b),s.Mb(r.c))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-view-product"]],decls:36,vars:9,consts:[[1,"mat-elevation-z8"],["mat-button","","routerLink","../create-product"],[3,"formGroup"],[1,"shipping-card"],[1,"row"],[1,"col-xs"],["appearance","fill",1,"full-width"],["type","text","formControlName","cates"],["value","cate.name",3,"click",4,"ngFor","ngForOf"],[1,"mat-elevation-z8","product-table"],["mat-table","",1,"full-width-table",3,"dataSource"],["matColumnDef","img"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","priceUnitVen"],["matColumnDef","quantity"],["matColumnDef","actions"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],[3,"length","pageSize","pageSizeOptions"],["value","cate.name",3,"click"],["mat-header-cell",""],["mat-cell",""],[3,"src"],["src","./assets/icons/edit.png",3,"click"],["src","./assets/icons/del.png",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"button",1),s.yc(2,"Crear Producto"),s.Rb(),s.Sb(3,"form",2),s.Sb(4,"mat-card",3),s.Sb(5,"mat-card-header"),s.Sb(6,"mat-card-title"),s.yc(7,"Lista de productos"),s.Rb(),s.Rb(),s.Sb(8,"mat-card-content"),s.Sb(9,"div",4),s.Sb(10,"div",5),s.Sb(11,"mat-form-field",6),s.Sb(12,"mat-label"),s.yc(13,"Categoria"),s.Rb(),s.Sb(14,"mat-select",7),s.xc(15,pt,2,1,"mat-option",8),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(16,"div",9),s.Sb(17,"table",10),s.Qb(18,11),s.xc(19,ft,2,0,"th",12),s.xc(20,gt,2,1,"td",13),s.Pb(),s.Qb(21,14),s.xc(22,ht,2,0,"th",12),s.xc(23,St,2,1,"td",13),s.Pb(),s.Qb(24,15),s.xc(25,vt,2,0,"th",12),s.xc(26,Rt,2,1,"td",13),s.Pb(),s.Qb(27,16),s.xc(28,yt,2,0,"th",12),s.xc(29,Ft,2,2,"td",13),s.Pb(),s.Qb(30,17),s.xc(31,Ct,2,0,"th",12),s.xc(32,xt,3,0,"td",13),s.Pb(),s.xc(33,jt,1,0,"tr",18),s.xc(34,wt,1,0,"tr",19),s.Rb(),s.Nb(35,"mat-paginator",20),s.Rb(),s.Rb()),2&t&&(s.Bb(3),s.jc("formGroup",e.cateForm),s.Bb(12),s.jc("ngForOf",e.cates),s.Bb(2),s.jc("dataSource",e.products),s.Bb(16),s.jc("matHeaderRowDef",e.displayedColumns),s.Bb(1),s.jc("matRowDefColumns",e.displayedColumns),s.Bb(1),s.jc("length",100)("pageSize",10)("pageSizeOptions",s.lc(8,qt)))},directives:[m.b,r.d,$.m,$.h,$.d,S.a,S.d,S.g,S.c,G.b,G.e,Y.a,$.g,$.c,c.k,x.j,x.c,x.e,x.b,x.g,x.i,j.a,tt.j,x.d,x.a,x.f,x.h],styles:[".product-table[_ngcontent-%COMP%]{width:98%;margin:2px auto 0}img[_ngcontent-%COMP%]{width:30px}img[_ngcontent-%COMP%]   .cates-del[_ngcontent-%COMP%]{margin-left:3px}"]}),t})()},{path:"create-product",component:mt},{path:"edit-product",component:(()=>{class t{constructor(t,e,i,c,r,o){this.formBuilder=t,this.productsService=e,this.catesService=i,this.router=c,this.activatedRoute=r,this.imgsService=o,this.activatedRoute.queryParams.subscribe(t=>{this.router.getCurrentNavigation().extras.state&&(this.product=this.router.getCurrentNavigation().extras.state.prod,console.log("constructor"),console.log(this.product))}),this.buildForm()}ngOnInit(){this.product&&(this.productForm.patchValue(this.product),this.loadCates())}loadCates(){this.catesService.getCates().subscribe(t=>{this.cates=t,console.log(t)})}buildForm(){this.productForm=this.formBuilder.group({cate:["",[$.l.required]],name:["",[$.l.required]],price:["",[$.l.required]],priceUnitCom:["",[$.l.required]],priceUnitVen:["",[$.l.required]],quantity:["",[$.l.required]],unit:["",[$.l.required]],description:["",[$.l.required]],img:["",[$.l.required]]})}updateProduct(t){t.preventDefault(),this.productForm.valid&&(this.productsService.updateProduct({cate:this.productForm.value.cate,name:this.productForm.value.name,price:this.productForm.value.price,priceUnitCom:this.productForm.value.price/this.productForm.value.quantity,priceUnitVen:this.productForm.value.priceUnitVen,quantity:this.productForm.value.quantity,unit:this.productForm.value.unit,description:this.productForm.value.description,img:this.productForm.value.img},{cate_id:this.product.cate,prod_id:this.product.id}),this.router.navigate(["/admin/products"]))}uploadFile(t){const e=this.imgsService.uploadFiles(t,"products");e.task.snapshotChanges().pipe(Object(V.a)(()=>{this.image$=e.fileRef.getDownloadURL(),this.image$.subscribe(t=>{console.log(t),this.productForm.get("img").setValue(t)})})).subscribe()}get catesField(){return this.productForm.get("cate")}get nameField(){return this.productForm.get("name")}get priceField(){return this.productForm.get("price")}get priceUnitComField(){return this.productForm.get("priceUnitCom")}get priceUnitVenField(){return this.productForm.get("priceUnitVen")}get quantityField(){return this.productForm.get("quantity")}get unitField(){return this.productForm.get("unit")}get descriptionField(){return this.productForm.get("description")}get imgField(){return this.productForm.get("img")}}return t.\u0275fac=function(e){return new(e||t)(s.Mb($.b),s.Mb(W.a),s.Mb(C.a),s.Mb(r.c),s.Mb(r.a),s.Mb(z))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-edit-product"]],decls:85,vars:19,consts:[[1,"mat-elevation-z8"],[3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col-xs"],["appearance","fill full-width"],["type","text","formControlName","cate"],["disabled","",3,"value",4,"ngFor","ngForOf"],[4,"ngIf"],[1,"full-width"],["type","text","formControlName","name","matInput","","placeholder","Escribe el nombre"],["type","number","formControlName","price","matInput","","placeholder","Escribe el precio"],["cellspacing","0",1,"example-full-width"],["type","number","formControlName","quantity","matInput","","placeholder","Cantidad dependiendo de la unidad"],[1,"full-width","div"],["type","text","formControlName","unit"],["value","Kilo"],["value","Libra"],["value","Unidad"],["type","text","formControlName","description","matInput","","placeholder","Escribe la descripcion"],[1,"row","resalt"],["type","number","value","productForm.value.price","disabled","","formControlName","priceUnitCom","matInput","",3,"value"],["type","number","formControlName","priceUnitVen","matInput","","placeholder","Escribe el precio unidad de venta"],["class","img-view",3,"src",4,"ngIf"],["alt","","class","img-view",3,"src",4,"ngIf"],["type","file",3,"change"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],["disabled","",3,"value"],[1,"img-view",3,"src"],["alt","",1,"img-view",3,"src"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"form",1),s.Zb("ngSubmit",(function(t){return e.updateProduct(t)})),s.Sb(2,"mat-card",2),s.Sb(3,"mat-card-header"),s.Sb(4,"mat-card-title"),s.yc(5,"Crear nuevo producto"),s.Rb(),s.Rb(),s.Sb(6,"mat-card-content"),s.Sb(7,"div",3),s.Sb(8,"div",4),s.Sb(9,"mat-form-field",5),s.Sb(10,"mat-label"),s.yc(11,"Categoria"),s.Rb(),s.Sb(12,"mat-select",6),s.xc(13,It,2,2,"mat-option",7),s.Rb(),s.Rb(),s.xc(14,Mt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(15,"div",3),s.Sb(16,"div",4),s.Sb(17,"mat-form-field",9),s.Sb(18,"mat-label"),s.yc(19,"Nombre"),s.Rb(),s.Nb(20,"input",10),s.Rb(),s.xc(21,Pt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(22,"div",3),s.Sb(23,"div",4),s.Sb(24,"mat-form-field",9),s.Sb(25,"mat-label"),s.yc(26,"Precio"),s.Rb(),s.Nb(27,"input",11),s.Rb(),s.xc(28,Et,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(29,"div",3),s.Sb(30,"div",4),s.Sb(31,"table",12),s.Sb(32,"tr"),s.Sb(33,"td"),s.Sb(34,"mat-form-field",9),s.Sb(35,"mat-label"),s.yc(36,"Cantidad"),s.Rb(),s.Nb(37,"input",13),s.xc(38,kt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(39,"td"),s.Sb(40,"mat-form-field",14),s.Sb(41,"mat-label"),s.yc(42,"Unidad"),s.Rb(),s.Sb(43,"mat-select",15),s.Sb(44,"mat-option"),s.yc(45,"Selecciona una"),s.Rb(),s.Sb(46,"mat-option",16),s.yc(47,"Kilos"),s.Rb(),s.Sb(48,"mat-option",17),s.yc(49,"Libras"),s.Rb(),s.Sb(50,"mat-option",18),s.yc(51,"Unidades"),s.Rb(),s.Rb(),s.xc(52,$t,2,1,"div",8),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Sb(53,"div",3),s.Sb(54,"div",4),s.Sb(55,"mat-form-field",9),s.Sb(56,"mat-label"),s.yc(57,"Descripci\xf3n"),s.Rb(),s.Nb(58,"textarea",19),s.Rb(),s.xc(59,_t,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(60,"div",20),s.Sb(61,"div",4),s.Sb(62,"mat-form-field",9),s.Sb(63,"mat-label"),s.yc(64,"Precio Unidad Compra"),s.Rb(),s.Nb(65,"input",21),s.Rb(),s.xc(66,Gt,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(67,"div",20),s.Sb(68,"div",4),s.Sb(69,"mat-form-field",9),s.Sb(70,"mat-label"),s.yc(71,"Precio Unidad Venta"),s.Rb(),s.Nb(72,"input",22),s.Rb(),s.xc(73,Ht,2,1,"div",8),s.Rb(),s.Rb(),s.Sb(74,"div",3),s.Sb(75,"div",4),s.xc(76,Zt,1,1,"img",23),s.ec(77,"async"),s.xc(78,Tt,1,1,"img",24),s.ec(79,"async"),s.Sb(80,"input",25),s.Zb("change",(function(t){return e.uploadFile(t)})),s.Rb(),s.xc(81,Qt,2,1,"div",8),s.Rb(),s.Rb(),s.Rb(),s.Sb(82,"mat-card-actions"),s.Sb(83,"button",26),s.yc(84,"Actualizar"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(1),s.jc("formGroup",e.productForm),s.Bb(12),s.jc("ngForOf",e.cates),s.Bb(1),s.jc("ngIf",e.catesField.errors&&e.catesField.dirty),s.Bb(7),s.jc("ngIf",e.nameField.errors&&e.nameField.dirty),s.Bb(7),s.jc("ngIf",e.priceField.errors&&e.priceField.dirty),s.Bb(10),s.jc("ngIf",e.quantityField.errors&&e.quantityField.dirty),s.Bb(14),s.jc("ngIf",e.unitField.errors&&e.unitField.dirty),s.Bb(7),s.jc("ngIf",e.descriptionField.errors&&e.descriptionField.dirty),s.Bb(6),s.jc("value",e.productForm.value.price/e.productForm.value.quantity),s.Bb(1),s.jc("ngIf",e.priceUnitComField.errors&&e.priceUnitComField.dirty),s.Bb(7),s.jc("ngIf",e.priceUnitVenField.errors&&e.priceUnitVenField.dirty),s.Bb(3),s.jc("ngIf",!s.fc(77,15,e.image$)&&e.product),s.Bb(2),s.jc("ngIf",s.fc(79,17,e.image$)),s.Bb(3),s.jc("ngIf",e.productForm.errors),s.Bb(2),s.jc("disabled",e.productForm.invalid))},directives:[$.m,$.h,$.d,S.a,S.d,S.g,S.c,G.b,G.e,Y.a,$.g,$.c,c.k,c.l,$.a,L.a,$.j,tt.j,S.b,m.b],pipes:[c.b],styles:[".product-form[_ngcontent-%COMP%]{width:98%;margin:10px auto 0}.full-width[_ngcontent-%COMP%]{width:100%}.resalt[_ngcontent-%COMP%]{background:rgba(234,238,238,.404);border-radius:4px}"]}),t})()},{path:"cates",component:D},{path:"create-cate",component:X},{path:"edit-cate",component:(()=>{class t{constructor(t,e,i,c,r){this.activatedRoute=t,this.router=e,this.formBuilder=i,this.catesService=c,this.imgsService=r,this.activatedRoute.queryParams.subscribe(t=>{this.router.getCurrentNavigation().extras.state&&(this.cate=this.router.getCurrentNavigation().extras.state.cate,console.log("constructor"),console.log(this.cate))}),this.buildForm()}ngOnInit(){this.cate&&this.catesForm.patchValue(this.cate)}buildForm(){this.catesForm=this.formBuilder.group({name:["",[$.l.required]],description:["",[$.l.required]],img:[""]})}updateCate(t){if(t.preventDefault(),this.catesForm.valid){const t={name:this.catesForm.value.name,description:this.catesForm.value.description,img:this.catesForm.value.img};console.log(t),this.catesService.updateCate(t,this.cate.id),this.router.navigate(["/admin/cates"])}}uploadFile(t){const e=this.imgsService.uploadFiles(t,"cates");e.task.snapshotChanges().pipe(Object(V.a)(()=>{this.image$=e.fileRef.getDownloadURL(),this.image$.subscribe(t=>{console.log(t),this.catesForm.get("img").setValue(t)})})).subscribe()}get nameField(){return this.catesForm.get("name")}get descriptionField(){return this.catesForm.get("description")}}return t.\u0275fac=function(e){return new(e||t)(s.Mb(r.a),s.Mb(r.c),s.Mb($.b),s.Mb(C.a),s.Mb(z))},t.\u0275cmp=s.Gb({type:t,selectors:[["app-edit-cates"]],decls:34,vars:11,consts:[[1,"mat-elevation-z8","cates-form"],[3,"formGroup","ngSubmit"],[1,"shipping-card"],[1,"row"],[1,"col-xs"],[1,"full-width"],["type","text","formControlName","name","matInput","","placeholder","Escribe el nombre","value","Joe Doe"],[4,"ngIf"],["formControlName","description","matInput","","placeholder","Escribe la descripcion"],["class","img-view",3,"src",4,"ngIf"],["alt","","class","img-view",3,"src",4,"ngIf"],["type","file",3,"change"],["mat-raised-button","","color","accent","type","submit",3,"disabled"],[1,"img-view",3,"src"],["alt","",1,"img-view",3,"src"]],template:function(t,e){1&t&&(s.Sb(0,"div",0),s.Sb(1,"form",1),s.Zb("ngSubmit",(function(t){return e.updateCate(t)})),s.Sb(2,"mat-card",2),s.Sb(3,"mat-card-header"),s.Sb(4,"mat-card-title"),s.yc(5,"Actualizar categoria"),s.Rb(),s.Rb(),s.Sb(6,"mat-card-content"),s.Sb(7,"div",3),s.Sb(8,"div",4),s.Sb(9,"mat-form-field",5),s.Sb(10,"mat-label"),s.yc(11,"Nombre"),s.Rb(),s.Nb(12,"input",6),s.Rb(),s.xc(13,Jt,2,1,"div",7),s.Rb(),s.Rb(),s.Sb(14,"div",3),s.Sb(15,"div",4),s.Sb(16,"mat-form-field",5),s.Sb(17,"mat-label"),s.yc(18,"Descripci\xf3n"),s.Rb(),s.Nb(19,"textarea",8),s.Rb(),s.xc(20,Wt,2,1,"div",7),s.Rb(),s.Rb(),s.Sb(21,"div",3),s.Sb(22,"div",4),s.Sb(23,"h1"),s.yc(24,"Images"),s.Rb(),s.xc(25,Yt,1,1,"img",9),s.ec(26,"async"),s.xc(27,te,1,1,"img",10),s.ec(28,"async"),s.Sb(29,"input",11),s.Zb("change",(function(t){return e.uploadFile(t)})),s.Rb(),s.xc(30,ie,2,1,"div",7),s.Rb(),s.Rb(),s.Rb(),s.Sb(31,"mat-card-actions"),s.Sb(32,"button",12),s.yc(33,"Actualizar"),s.Rb(),s.Rb(),s.Rb(),s.Rb(),s.Rb()),2&t&&(s.Bb(1),s.jc("formGroup",e.catesForm),s.Bb(12),s.jc("ngIf",e.nameField.errors&&e.nameField.dirty),s.Bb(7),s.jc("ngIf",e.descriptionField.errors&&e.descriptionField.dirty),s.Bb(5),s.jc("ngIf",!s.fc(26,7,e.image$)&&e.cate),s.Bb(2),s.jc("ngIf",s.fc(28,9,e.image$)),s.Bb(3),s.jc("ngIf",e.catesForm.errors),s.Bb(2),s.jc("disabled",e.catesForm.invalid))},directives:[$.m,$.h,$.d,S.a,S.d,S.g,S.c,G.b,G.e,$.a,L.a,$.g,$.c,c.l,S.b,m.b],pipes:[c.b],styles:[""]}),t})()}]}];let re=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[r.f.forChild(ce)],r.f]}),t})();var oe=i("hctd");let ae=(()=>{class t{}return t.\u0275mod=s.Kb({type:t}),t.\u0275inj=s.Jb({factory:function(e){return new(e||t)},imports:[[c.c,re,$.k,oe.a,o.c]]}),t})()}}]);