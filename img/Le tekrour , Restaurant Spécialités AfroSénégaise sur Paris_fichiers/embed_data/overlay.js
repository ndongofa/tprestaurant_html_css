google.maps.__gjsload__('overlay', function(_){var fy=function(a){this.i=a},gy=function(){},hy=function(a){a.Ah=a.Ah||new gy;return a.Ah},iy=function(a){this.Ka=new _.wi(function(){var b=a.Ah;if(a.getPanes()){if(a.getProjection()){if(!b.Gg&&a.onAdd)a.onAdd();b.Gg=!0;a.draw()}}else{if(b.Gg)if(a.onRemove)a.onRemove();else a.remove();b.Gg=!1}},0)},jy=function(a,b){function c(){return _.xi(e.Ka)}var d=hy(a),e=d.lg;e||(e=d.lg=new iy(a));_.A(d.Ia||[],_.L.removeListener);var f=d.Pa=d.Pa||new _.pu,g=b.__gm;f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("center",
g,"projectionCenterQ");f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);f=d.Hj=d.Hj||new fy(f);f.bindTo("zoom",g);f.bindTo("offset",g);f.bindTo("projection",b);f.bindTo("projectionTopLeft",g);a.bindTo("projection",f,"outProjection");a.bindTo("panes",g);d.Ia=[_.L.addListener(a,"panes_changed",c),_.L.addListener(g,"zoom_changed",c),_.L.addListener(g,"offset_changed",c),_.L.addListener(b,"projection_changed",c),_.L.addListener(g,"projectioncenterq_changed",c)];c();b instanceof _.rf&&(_.og(b,
"Ox"),_.Fn("Ox","-p",a))},oy=function(a){if(a){var b=a.getMap();if(ky(a)!==b&&b&&b instanceof _.rf){var c=b.__gm;c.overlayLayer?a.__gmop=new ly(b,a,c.overlayLayer):c.j.then(function(d){d=d.mb;var e=new my(b,d);d.lb(e);c.overlayLayer=e;ny(a);oy(a)})}}},ny=function(a){if(a){var b=a.__gmop;b&&(a.__gmop=null,_.Gn("Ox","-p",b.i),b.i.unbindAll(),b.i.set("panes",null),b.i.set("projection",null),b.o.Zc(b),b.j&&(b.j=!1,b.i.onRemove?b.i.onRemove():b.i.remove()))}},ky=function(a){return(a=a.__gmop)?a.map:null},
ly=function(a,b,c){this.map=a;this.i=b;this.o=c;this.j=!1;_.og(this.map,"Ox");_.Fn("Ox","-p",this.i);c.Sc(this)},py=function(a,b){a.i.get("projection")!=b&&(a.i.bindTo("panes",a.map.__gm),a.i.set("projection",b))},my=function(a,b){this.H=a;this.o=b;this.i=null;this.j=[]};_.z(fy,_.M);
fy.prototype.changed=function(a){"outProjection"!=a&&(a=!!(this.get("offset")&&this.get("projectionTopLeft")&&this.get("projection")&&_.be(this.get("zoom"))),a==!this.get("outProjection")&&this.set("outProjection",a?this.i:null))};var qy={};_.z(iy,_.M);qy.Sc=function(a){if(a){var b=a.getMap();(hy(a).wj||null)!==b&&(b&&jy(a,b),hy(a).wj=b)}};qy.Zc=function(a){var b=hy(a),c=b.Pa;c&&c.unbindAll();(c=b.Hj)&&c.unbindAll();a.unbindAll();a.set("panes",null);a.set("projection",null);b.Ia&&_.A(b.Ia,_.L.removeListener);b.Ia=null;b.lg&&(b.lg.Ka.Lb(),b.lg=null);_.Gn("Ox","-p",a);delete hy(a).wj};var ry={};ly.prototype.draw=function(){this.j||(this.j=!0,this.i.onAdd&&this.i.onAdd());this.i.draw&&this.i.draw()};my.prototype.dispose=function(){};my.prototype.Nb=function(a,b,c,d,e,f,g,h){var k=this.i=this.i||new _.Zo(this.H,this.o,function(){});k.Nb(a,b,c,d,e,f,g,h);a=_.r(this.j);for(b=a.next();!b.done;b=a.next())b=b.value,py(b,k),b.draw()};my.prototype.Sc=function(a){this.j.push(a);this.i&&py(a,this.i);this.o.refresh()};my.prototype.Zc=function(a){_.cb(this.j,a)};ry.Sc=oy;ry.Zc=ny;_.Ye("overlay",{ri:function(a){if(a){(0,qy.Zc)(a);(0,ry.Zc)(a);var b=a.getMap();b&&(b instanceof _.rf?(0,ry.Sc)(a):(0,qy.Sc)(a))}},preventMapHitsFrom:function(a){_.Tp(a,{onClick:function(b){return _.op(b.event)},Eb:function(b){return _.lp(b)},Kd:function(b){return _.mp(b)},Vb:function(b){return _.mp(b)},Jb:function(b){return _.np(b)}}).de(!0)},preventMapHitsAndGesturesFrom:function(a){a.addEventListener("click",_.bf);a.addEventListener("contextmenu",_.bf);a.addEventListener("dblclick",_.bf);a.addEventListener("mousedown",
_.bf);a.addEventListener("mousemove",_.bf);a.addEventListener("MSPointerDown",_.bf);a.addEventListener("pointerdown",_.bf);a.addEventListener("touchstart",_.bf);a.addEventListener("wheel",_.bf)}});});
