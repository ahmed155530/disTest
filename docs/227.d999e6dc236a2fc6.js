"use strict";(self.webpackChunkbenaa_foundation_BO=self.webpackChunkbenaa_foundation_BO||[]).push([[227],{4227:(Q,g,i)=>{i.r(g),i.d(g,{CompanyUserModule:()=>P});var c=i(6895),v=i(2510),x=i(2722),p=i(8739),j=i(7738),U=i(6630),b=i(7993),f=i(1286),m=i(7354),L=i(37),r=i(4006),l=i(5412),t=i(4650),E=i(445),u=i(9549),y=i(4144),Z=i(7392),h=i(4859),S=i(4850),C=i(4463);let D=(()=>{class a extends f.b{constructor(e,n,s){super(s),this.defaults=e,this.dialogRef=n,this.injector=s}ngOnInit(){this.initForm(),this.setFormData()}initForm(){this.form=this.fb.group({dataEntryId:new r.NI(0),rejectionReason:new r.NI("",r.kI.compose([r.kI.required]))})}Submit(){this.Create({dataEntryId:this.form?.value.dataEntryId,rejectionReason:this.form?.value.rejectionReason})}setFormData(){this.form.patchValue({dataEntryId:this.defaults.id}),this._ref.detectChanges()}Create(e){this.spinnerService.show(),this.httpService.POST(m.V.RejectDataEntry,e).subscribe({next:n=>{n.isSuccess?(this.spinnerService.hide(),this.swalService.alertWithSuccess(n.message??""),this.dialogRef.close(!0)):(this.swalService.alertWithError(n.message??""),this.dialogRef.close(!1)),this.spinnerService.hide()},error:n=>this.spinnerService.hide()})}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(l.WI),t.Y36(l.so),t.Y36(t.zs3))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-reject-data-entry"]],features:[t.qOj],decls:21,vars:14,consts:[[2,"min-width","600px",3,"formGroup","dir"],["fxLayout","row","fxLayoutAlign","end center","mat-dialog-title",""],["mat-dialog-close","","mat-icon-button","","type","button",1,"text-secondary"],[1,"-mx-6","text-border"],["fxLayout","column",2,"margin-top","20px"],[1,"row"],["appearance","outline",1,"col-lg-12","col-md-12","col-sm-12","col-xs-12"],["formControlName","rejectionReason","matInput",""],["align","end"],["mat-button","","mat-dialog-close","","type","button"],["color","primary","mat-button","",3,"disabled","click"]],template:function(e,n){1&e&&(t.TgZ(0,"form",0),t.ALo(1,"async"),t.TgZ(2,"div",1)(3,"button",2)(4,"mat-icon"),t._uU(5,"close"),t.qZA()()(),t._UZ(6,"mat-divider",3),t.TgZ(7,"mat-dialog-content",4)(8,"div",5)(9,"mat-form-field",6)(10,"mat-label"),t._uU(11),t.ALo(12,"translate"),t.qZA(),t._UZ(13,"textarea",7),t.qZA()()(),t.TgZ(14,"mat-dialog-actions",8)(15,"button",9),t._uU(16),t.ALo(17,"translate"),t.qZA(),t.TgZ(18,"button",10),t.NdJ("click",function(){return n.Submit()}),t._uU(19),t.ALo(20,"translate"),t.qZA()()()),2&e&&(t.Q6J("formGroup",n.form)("dir",t.lcZ(1,6,n.translationService.dir$)),t.xp6(11),t.Oqu(t.lcZ(12,8,"data.rejectionReason")),t.xp6(5),t.hij("",t.lcZ(17,10,"buttons.cancel")," "),t.xp6(2),t.Q6J("disabled",n.form.invalid),t.xp6(1),t.hij(" ",t.lcZ(20,12,"buttons.create")," "))},dependencies:[r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u,E.Lv,u.KE,u.hX,y.Nt,Z.Hw,h.lW,S.d,l.ZT,l.uh,l.xY,l.H8,c.Ov,C.X$]}),a})();var A=i(266);function I(a,o){if(1&a&&(t.TgZ(0,"th"),t._uU(1),t.ALo(2,"translate"),t.qZA()),2&a){const e=o.$implicit;t.xp6(1),t.hij(" ",t.lcZ(2,1,e)," ")}}function N(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",17),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,d=t.oxw();return t.KtG(d.submitApprove(s))}),t.ALo(2,"translate"),t.TgZ(3,"span",18),t._uU(4,"check_circle"),t.qZA()()()}2&a&&(t.xp6(1),t.s9C("matTooltip",t.lcZ(2,1,"buttons.approve")))}function F(a,o){if(1&a){const e=t.EpF();t.TgZ(0,"div",16)(1,"button",19),t.NdJ("click",function(){t.CHM(e);const s=t.oxw().$implicit,d=t.oxw();return t.KtG(d.reject(s))}),t.ALo(2,"translate"),t.TgZ(3,"span",18),t._uU(4,"cancel"),t.qZA()()()}2&a&&(t.xp6(1),t.s9C("matTooltip",t.lcZ(2,1,"buttons.reject")))}function G(a,o){if(1&a&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td"),t._uU(4),t.qZA(),t.TgZ(5,"td"),t._uU(6),t.qZA(),t.TgZ(7,"td"),t._uU(8),t.qZA(),t.TgZ(9,"td"),t._uU(10),t.qZA(),t.TgZ(11,"td"),t._uU(12),t.qZA(),t.TgZ(13,"td"),t._uU(14),t.qZA(),t.TgZ(15,"td"),t._uU(16),t.ALo(17,"date"),t.qZA(),t.TgZ(18,"td"),t._uU(19),t.ALo(20,"translate"),t.qZA(),t.TgZ(21,"td",14),t.YNc(22,N,5,3,"div",15),t.YNc(23,F,5,3,"div",15),t.qZA()()),2&a){const e=o.$implicit,n=o.index,s=t.oxw();t.xp6(2),t.hij(" ",n+1," "),t.xp6(2),t.hij(" ",e.name," "),t.xp6(2),t.hij(" ",e.companyName," "),t.xp6(2),t.hij(" ",e.idNumber," "),t.xp6(2),t.hij(" ",e.phoneNumber," "),t.xp6(2),t.hij(" ",e.countryName," "),t.xp6(2),t.hij(" ",e.locationName," "),t.xp6(2),t.hij(" ",t.gM2(17,11,e.registrationDate,"medium","","en-US")," "),t.xp6(3),t.hij(" ",t.lcZ(20,16,s.GetStatusName(e.status))," "),t.xp6(3),t.Q6J("ngIf",0==e.status),t.xp6(1),t.Q6J("ngIf",0==e.status)}}const R=[{path:"data-list",component:(()=>{class a extends f.b{constructor(e){super(e),this.injector=e,this.form=null,this.UserTypes=U.b,this.Genders=j.Y,this.displayedColumns=["data.id","data.name","data.companyName","data.nid","data.phoneNumber","data.country","data.location","data.registrationDate","data.status","data.actions"],this.dataSource=[],this.stations=b.L,this.totalCount=0,this.viewType="Grid"}ngAfterContentInit(){}ngOnInit(){this.GetAllByCompanyId(),this.initForm()}initForm(){}GetCompanyID(){return JSON.parse(localStorage.getItem(L.m.app_user)).CompanyId}GetAllByCompanyId(){this.spinnerService.show(),this.httpService.GET(`${m.V.GetAllByCompanyId}/${this.GetCompanyID()}`).subscribe({next:e=>{e.isSuccess&&(this.dataSource=e.data,this.spinnerService.hide())},error:e=>{this.spinnerService.hide()},complete:()=>{this.spinnerService.hide()}})}approve(e){this.spinnerService.show(),this.httpService.POST(`${m.V.AcceptDataEntry}/${e.id}`).subscribe({next:n=>{n.isSuccess&&(this.dataSource=n.data,this.GetAllByCompanyId(),this.spinnerService.hide())},error:n=>{this.spinnerService.hide()},complete:()=>{this.spinnerService.hide()}})}submitApprove(e){this.swalService.alertApproval(()=>{this.approve(e)})}reject(e){this.dialog.open(D,{data:e}).afterClosed().pipe((0,x.R)(this.ngUnsubscribe)).subscribe(n=>{n&&this.GetAllByCompanyId()})}GetStatusName(e){switch(e){case 0:return this.translateService.instant("status.pending");case 1:return this.translateService.instant("status.accepted");case 2:return this.translateService.instant("status.rejected");case 3:return this.translateService.instant("status.completed");case 4:return this.translateService.instant("status.updated");case 5:return this.translateService.instant("status.deleted")}}handlePaginator(e){console.log(e),this.GetAllByCompanyId()}}return a.\u0275fac=function(e){return new(e||a)(t.Y36(t.zs3))},a.\u0275cmp=t.Xpm({type:a,selectors:[["app-data-entry-list"]],viewQuery:function(e,n){if(1&e&&t.Gf(p.NW,7),2&e){let s;t.iGM(s=t.CRH())&&(n.paginator=s.first)}},features:[t.qOj],decls:18,vars:8,consts:[[1,"main-content"],[1,"container-fluid"],[1,"row"],[1,"col-md-12"],[1,"card"],[1,"card-header","card-header-info","row"],[1,"col-6","card-title"],[1,"card-title"],[1,"card-body"],[1,"table-responsive",2,"text-align","start"],[1,"table"],[1,"text-primary"],[4,"ngFor","ngForOf"],["showFirstLastButtons","","aria-label","Select page",3,"length","pageSize","pageSizeOptions","page"],[1,"actions","row",2,"max-width","110px"],["class","col-6",4,"ngIf"],[1,"col-6"],["mat-mini-fab","","color","primary",3,"matTooltip","click"],[1,"material-symbols-outlined"],["mat-mini-fab","","color","warn",3,"matTooltip","click"]],template:function(e,n){1&e&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2)(3,"div",3)(4,"div",4)(5,"div",5)(6,"div",6)(7,"h4",7),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"div",8)(11,"div",9)(12,"table",10)(13,"thead",11),t.YNc(14,I,3,3,"th",12),t.qZA(),t.TgZ(15,"tbody"),t.YNc(16,G,24,18,"tr",12),t.qZA()(),t.TgZ(17,"mat-paginator",13),t.NdJ("page",function(d){return n.handlePaginator(d)}),t.qZA()()()()()()()()),2&e&&(t.xp6(8),t.hij(" ",t.lcZ(9,6,"sidebar.data")," "),t.xp6(6),t.Q6J("ngForOf",n.displayedColumns),t.xp6(2),t.Q6J("ngForOf",n.dataSource),t.xp6(1),t.Q6J("length",n.totalCount)("pageSize",null==n.MatPaginatorSize?null:n.MatPaginatorSize.pageSize)("pageSizeOptions",null==n.MatPaginatorSize?null:n.MatPaginatorSize.pageSizeOptions))},dependencies:[c.sg,c.O5,p.NW,h.lW,A.gM,c.uU,C.X$]}),a})()}];let O=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[v.Bz.forChild(R),v.Bz]}),a})();var T=i(3238),J=i(9602),M=i(1948),z=i(4385),B=i(455),Y=i(3848),$=i(9654);let P=(()=>{class a{}return a.\u0275fac=function(e){return new(e||a)},a.\u0275mod=t.oAB({type:a}),a.\u0275inj=t.cJS({imports:[c.ez,O,p.TU,r.u5,r.UX,u.lN,y.c,Z.Ps,h.ot,A.AV,B.rP,S.t,l.Is,T.Ng,z.LD,Y.Nh,M.Fk,$.V,T.XK,J.FA]}),a})()}}]);