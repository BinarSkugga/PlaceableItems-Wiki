(function(e){function t(t){for(var n,a,s=t[0],l=t[1],c=t[2],h=0,f=[];h<s.length;h++)a=s[h],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&f.push(i[a][0]),i[a]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);d&&d(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,s=1;s<r.length;s++){var l=r[s];0!==i[l]&&(n=!1)}n&&(o.splice(t--,1),e=a(a.s=r[0]))}return e}var n={},i={app:0},o=[];function a(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=n,a.d=function(e,t,r){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(a.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)a.d(r,n,function(t){return e[t]}.bind(null,n));return r},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/PlaceableItems-Wiki/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"1a8e":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("2b0e"),i=(r("d3b7"),r("bc3a")),o=r.n(i),a={},s=o.a.create(a);s.interceptors.request.use((function(e){return e}),(function(e){return Promise.reject(e)})),s.interceptors.response.use((function(e){return e}),(function(e){return Promise.reject(e)})),Plugin.install=function(e,t){e.axios=s,window.axios=s,Object.defineProperties(e.prototype,{axios:{get:function(){return s}},$axios:{get:function(){return s}}})},n["a"].use(Plugin);Plugin;var l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-sheet",{staticClass:"d-flex flex-column align-center justify-center"},[n("v-parallax",{staticClass:"parallax",attrs:{src:r("6b2a")}},[n("v-img",{staticClass:"logo",attrs:{src:r("cf05"),contain:""}})],1),n("v-sheet",{staticClass:"pa-7 white",attrs:{width:"100%","max-width":"1300px"}},e._l(e.meta,(function(e){return n("item",{key:e.itemName,attrs:{item:e}})})),1)],1)],1)},c=[],d=(r("4e827"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",[r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",[e._v(e._s(e.item.itemName))]),r("v-list-item-subtitle",{staticStyle:{"white-space":"pre-line"}},[e._v(e._s(e.item.description))])],1),r("v-list-item-icon",[r("model",{attrs:{item:e.item}})],1)],1),r("v-divider")],1)}),h=[],f=(r("4160"),r("c975"),r("d81d"),r("b0c0"),r("b64b"),r("ac1f"),r("1276"),r("159b"),r("5a89"));r("6397");function m(e){var t,r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null;if(this.container=e,this.element=document.createElement("div"),this.element.setAttribute("style","width: auto; height: auto; overflow: hidden;"),this.container.appendChild(this.element),this.dimension=r,null==r)var o=this.element.getBoundingClientRect();else o=r;this.camera=new f.PerspectiveCamera(60,o.width/o.height,1,1e3),null==n?(this.camera.position.x=16,this.camera.position.y=16,this.camera.position.z=32):(this.camera.position.x=n.x,this.camera.position.y=n.y,this.camera.position.z=n.z),this.scene=new f.Scene,t=new f.AmbientLight(16777215,.97),this.scene.add(t),t=new f.DirectionalLight(16777215,.1),t.position.set(4,10,6),this.scene.add(t),this.renderer=new f.WebGLRenderer({antialias:!0,alpha:!0}),this.renderer.setSize(o.width,o.height),this.controls=new f.OrbitControls(this.camera,this.renderer.domElement),this.controls.dampingFactor=.2,this.controls.zoomSpeed=1.4,this.controls.rotateSpeed=.6,this.controls.enableKeys=!1,this.controls.enableZoom=!1,this.controls.enablePan=!1,null!=i&&(this.controls.target.x=i.x,this.controls.target.y=i.y,this.controls.target.z=i.z),this.element.appendChild(this.renderer.domElement);var a=this;this.draw=function(){a.renderer.render(a.scene,a.camera)},this.animate=function(){window.requestAnimationFrame(a.animate),a.controls.update(),a.draw()},this.resize=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;if(null==a.dimension)var t=a.element.getBoundingClientRect();else if(null!=e)t=a.dimension=e;else t=a.dimension;a.camera.aspect=t.width/t.height,a.camera.updateProjectionMatrix(),a.renderer.setSize(t.width,t.height)},this.models={};a=this;this.load=function(e){var t=e.modelName;if(Object.keys(a.models).indexOf(t)>=0)throw new Error('Model "'+t+'" is already loaded.');return a.scene.add(e),a.models[t]=e,a},this.get=function(e){if(!(Object.keys(a.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');return a.models[e]},this.getAll=function(){return Object.keys(a.models).map((function(e){return a.models[e]}))},this.remove=function(e){if(!(Object.keys(a.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');delete a.models[e];for(var t=0;t<a.scene.children.length;t++){var r=a.scene.children[t];if(r instanceof u&&r.modelName==e){r.animationLoop=!1,a.scene.remove(r);break}}return a},this.removeAll=function(){for(var e=a.scene.children.length-1;e>=0;e--){var t=a.scene.children[e];t instanceof u&&(t.animationLoop=!1,a.scene.remove(t))}return a.models={},a},this.hide=function(e){if(!(Object.keys(a.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');a.models[e].visible=!1,a.draw()},this.hideAll=function(){return Object.keys(a.models).forEach((function(e){a.models[e].visible=!1})),a},this.show=function(e){if(!(Object.keys(a.models).indexOf(e)>=0))throw new Error('Model "'+e+'" is not loaded.');a.models[e].visible=!0,a.draw()},this.showAll=function(){return Object.keys(a.models).forEach((function(e){a.models[e].visible=!0})),a},this.reset=function(){a.controls.reset()},this.lookAt=function(e){var t=a.get(e);a.controls.target=t.getCenter()};for(var s=new f.Geometry,l=new f.LineBasicMaterial({color:11513775}),c=-8;c<=8;c++)s.vertices.push(new f.Vector3(-8,-8,c)),s.vertices.push(new f.Vector3(8,-8,c)),s.vertices.push(new f.Vector3(c,-8,-8)),s.vertices.push(new f.Vector3(c,-8,8));s.vertices.push(new f.Vector3(-1,-8,9)),s.vertices.push(new f.Vector3(1,-8,9)),s.vertices.push(new f.Vector3(1,-8,9)),s.vertices.push(new f.Vector3(0,-8,10)),s.vertices.push(new f.Vector3(0,-8,10)),s.vertices.push(new f.Vector3(-1,-8,9));var d=new f.LineSegments(s,l);d.visible=!0,this.scene.add(d),this.grid=d;a=this;this.showGrid=function(){a.grid.visible=!0},this.hideGrid=function(){a.grid.visible=!1},this.setGridColor=function(e){a.grid.material.color=new f.Color(e)},this.animate()}function u(e,t,r,n){void 0===n&&(n=!0),f.Object3D.call(this),this.modelName=e,this.animationLoop=!0;try{var i=JSON.parse(t)}catch(O){throw new Error("Couldn't parse json model. "+O.message+".")}var o={},a=[],s=[],l=[];if(!i.hasOwnProperty("textures"))throw new Error('Couldn\'t find "textures" property.');Object.keys(i.textures).forEach((function(e,t){for(var n,c=i.textures[e].split("/"),d=c[c.length-1],h=0;h<r.length;h++)if(n=r[h],n.name==d)break;if(n.name!=d)throw new Error("Couldn't find matching texture for texture reference \""+d+'".');if(a.push(e),n.hasOwnProperty("mcmeta")){try{var f=JSON.parse(n.mcmeta)}catch(O){throw new Error("Couldn't parse mcmeta for texture \""+d+'". '+O.message+".")}if(!f.hasOwnProperty("animation"))throw new Error('Couldn\'t find the "animation" property in mcmeta for texture "'+d+'"');var m=new Image;m.crossOrigin="Anonymous",m.src=n.texture,m.addEventListener("load",(function(t){var r=m.width,n=m.height;if(n%r!=0)throw new Error('Image dimensions are invalid for texture "'+d+'".');var i=[];if(f.animation.hasOwnProperty("frames"))i=f.animation.frames;else for(var c=0;c<n/r;c++)i.push(c);for(var h=f.animation.frametime||1,u=[],p=0;p<i.length;p++){var v=i[p];if("number"==typeof v)u.push({index:v,time:h});else{if(!v.hasOwnProperty("index"))throw new Error('Invalid animation frame at index "'+p+'" in mcmeta for texture "'+d+'".');u.push({index:v.index,time:v.time||h})}}var w=n/r;l.push({height:w,frames:u,currentFrame:0}),s.push(a.length-1);var y=[];for(p=0;p<n/r;p++){var g=document.createElement("canvas");g.width=r,g.height=r;var x=g.getContext("2d");x.drawImage(m,0,-p*r),y.push(g.toDataURL("image/png"))}o[e]=y}))}else o[e]=n.texture}));var c=this,d=[];a.forEach((function(e,t){var r=o[e]instanceof Array?o[e][0]:o[e],n=new f.TextureLoader,i=n.load(r);i.magFilter=f.NearestFilter,i.minFilter=f.LinearFilter;var a=new f.MeshLambertMaterial({map:i,transparent:!0,alphaTest:.5});if(d.push(a),o[e]instanceof Array){var h=o[e],m=l[s.indexOf(t)];(function(e,t,r){var n=function n(){var i=r.frames[r.currentFrame];try{e.map.image.src=t[i.index],r.currentFrame=r.currentFrame<r.frames.length-1?r.currentFrame+1:0}catch(O){console.log(O.message)}window.setTimeout((function(){c.animationLoop&&window.requestAnimationFrame(n)}),50*i.time)};window.requestAnimationFrame(n)})(a,h,m)}}));var h=new f.MeshBasicMaterial({transparent:!0,opacity:0,alphaTest:.5});d.push(h);var m,u=d;if(!i.hasOwnProperty("elements"))throw new Error('Couldn\'t find "elements" property');m=i.elements;var p=new f.Group;m.forEach((function(e,t){if(!e.hasOwnProperty("from"))throw new Error('Couldn\'t find "from" property for element "'+t+'".');if(3!=e["from"].length)throw new Error('"from" property for element "'+t+'" is invalid.');if(!e.hasOwnProperty("to"))throw new Error('Couldn\'t find "to" property for element "'+t+'".');if(3!=e["to"].length)throw new Error('"to" property for element "'+t+'" is invalid.');for(var r=0;r<3;r++){var i=e["from"][r],o=e["to"][r];if("number"!=typeof i||i<-16)throw new Error('"from" property for element "'+t+'" is invalid (got "'+i+'" for coordinate "'+["x","y","z"][r]+'").');if("number"!=typeof o||o>32)throw new Error('"to" property for element "'+t+'" is invalid (got "'+o+'" for coordinate "'+["x","y","z"][r]+'").');if(o-i<0)throw new Error('"from" property is bigger than "to" property for coordinate "'+["x","y","z"][r]+'" in element "'+t+'".')}var s=e["to"][0]-e["from"][0],l=e["to"][1]-e["from"][1],c=e["to"][2]-e["from"][2],d={x:(e["to"][0]+e["from"][0])/2-8,y:(e["to"][1]+e["from"][1])/2-8,z:(e["to"][2]+e["from"][2])/2-8},h=.001,m=new f.BoxGeometry(s+h,l+h,c+h);if(m.faceVertexUvs[0]=[],e.hasOwnProperty("faces")){var v=["east","west","up","down","south","north"];for(r=0;r<6;r++){var w=v[r];if(e.faces.hasOwnProperty(w)){if(!e.faces[w].hasOwnProperty("texture"))throw new Error('Couldn\'t find "texture" property for "'+w+'" face in element "'+t+'".');if(!e.faces[w].hasOwnProperty("uv"))throw new Error('Couldn\'t find "uv" property for "'+w+'" face in element "'+t+'".');if(4!=e.faces[w].uv.length)throw new Error('The "uv" property for "'+w+'" face in element "'+t+'" is invalid (got "'+e.faces[w].uv+'").');var y=e.faces[w].texture,g=a.indexOf("#"==y[0]?y.substring(1):y);if(g<0)throw new Error('The "texture" property for "'+w+'" face in element "'+t+'" is invalid (got "'+y+'").');m.faces[2*r].materialIndex=g,m.faces[2*r+1].materialIndex=g;var x=e.faces[w].uv;n?(x.forEach((function(e,r){if("number"!=typeof e)throw new Error('The "uv" property for "'+w+'" face in element "'+t+'" is invalid (got "'+e+'" at index "'+r+'").')})),x.map((function(e){return e+1e-5<0?0:e-1e-5>16?16:e}))):x.forEach((function(e,r){if("number"!=typeof e||e+1e-5<0||e-1e-5>16)throw new Error('The "uv" property for "'+w+'" face in element "'+t+'" is invalid (got "'+e+'" at index "'+r+'").')})),x=x.map((function(e){return e/16})),x[0]+=5e-4,x[1]+=5e-4,x[2]-=5e-4,x[3]-=5e-4;var b=[new f.Vector2(x[0],1-x[1]),new f.Vector2(x[0],1-x[3]),new f.Vector2(x[2],1-x[3]),new f.Vector2(x[2],1-x[1])];if(e.faces[w].hasOwnProperty("rotation")){var O=e.faces[w].rotation;if(!([0,90,180,270].indexOf(O)>=0))throw new Error('The "rotation" property for "'+w+'" face in element "'+t+'" is invalid (got "'+O+'").');for(var E=0;E<O/90;E++)b=[b[1],b[2],b[3],b[0]]}m.faceVertexUvs[0][2*r]=[b[0],b[1],b[3]],m.faceVertexUvs[0][2*r+1]=[b[1],b[2],b[3]]}else{m.faces[2*r].materialIndex=a.length,m.faces[2*r+1].materialIndex=a.length;b=[new f.Vector2(0,0),new f.Vector2(1,0),new f.Vector2(1,1),new f.Vector2(0,1)];m.faceVertexUvs[0][2*r]=[b[0],b[1],b[3]],m.faceVertexUvs[0][2*r+1]=[b[1],b[2],b[3]]}}}var z=new f.Mesh(m,u);if(z.position.x=d.x,z.position.y=d.y,z.position.z=d.z,e.hasOwnProperty("rotation")){if(!e.rotation.hasOwnProperty("origin"))throw new Error('Couldn\'t find "origin" property in "rotation" for element "'+t+'".');if(3!=e.rotation.origin.length)throw new Error('"origin" property in "rotation" for element "'+t+'" is invalid.');if(!e.rotation.hasOwnProperty("axis"))throw new Error('Couldn\'t find "axis" property in "rotation" for element "'+t+'".');if(!(["x","y","z"].indexOf(e.rotation.axis)>=0))throw new Error('"axis" property in "rotation" for element "'+t+'" is invalid.');if(!e.rotation.hasOwnProperty("angle"))throw new Error('Couldn\'t find "angle" property in "rotation" for element "'+t+'".');if(!([45,22.5,0,-22.5,-45].indexOf(e.rotation.angle)>=0))throw new Error('"angle" property in "rotation" for element "'+t+'" is invalid.');var P={x:e.rotation.origin[0]-8,y:e.rotation.origin[1]-8,z:e.rotation.origin[2]-8},V=e.rotation.axis,C=e.rotation.angle,j=new f.Group;j.position.x=P.x,j.position.y=P.y,j.position.z=P.z,j.add(z),z.position.x-=P.x,z.position.y-=P.y,z.position.z-=P.z,"x"==V?j.rotateX(C*Math.PI/180):"y"==V?j.rotateY(C*Math.PI/180):"z"==V&&j.rotateZ(C*Math.PI/180),p.add(j)}else{j=new f.Group;j.add(z),p.add(j)}})),this.add(p);var v=["thirdperson_righthand","thirdperson_lefthand","firstperson_righthand","firstperson_lefthand","gui","head","ground","fixed"];this.displayOptions={};for(var w=0;w<v.length;w++)this.displayOptions[v[w]]={rotation:[0,0,0],translation:[0,0,0],scale:[1,1,1]};if(this.displayOptions.firstperson=this.displayOptions.firstperson_righthand,this.displayOptions.thirdperson=this.displayOptions.thirdperson_righthand,i.hasOwnProperty("display")){var y=i.display;for(var g in y)if(this.displayOptions.hasOwnProperty(g)){var x=y[g];for(var e in x)if(this.displayOptions[g].hasOwnProperty(e)){var b=x[e];if(3!=b.length||"number"!=typeof b[0]||"number"!=typeof b[1]||"number"!=typeof b[2])throw new Error('"'+e+'" property is invalid for display option "'+g+'".');this.displayOptions[g][e]=b}}}c=this;this.getCenter=function(){for(var e=c.children[0],t={minx:0,miny:0,minz:0,maxx:0,maxy:0,maxz:0},r=0;r<e.children.length;r++)for(var n=e.children[r],i=n.children[0],o=0;o<i.geometry.vertices.length;o++){var a=i.geometry.vertices[o].clone(),s=i.localToWorld(a);s.x<t.minx&&(t.minx=s.x),s.y<t.miny&&(t.miny=s.y),s.z<t.minz&&(t.minz=s.z),s.x>t.maxx&&(t.maxx=s.x),s.y>t.maxy&&(t.maxy=s.y),s.z>t.maxz&&(t.maxz=s.z)}return new f.Vector3((t.minx+t.maxx)/2,(t.miny+t.maxy)/2,(t.minz+t.maxz)/2)},this.applyDisplay=function(e){var t=c.children[0];if("block"==e)t.rotation.set(0,0,0),t.position.set(0,0,0),t.scale.set(1,1,1);else{if(!c.displayOptions.hasOwnProperty(e))throw new Error("Display option is invalid.");var r=c.displayOptions[e],n=r.rotation,i=r.translation,o=r.scale;t.rotation.set(n[0]*Math.PI/180,n[1]*Math.PI/180,n[2]*Math.PI/180),t.position.set(i[0],i[1],i[2]),t.scale.set(0==o[0]?1e-5:o[0],0==o[1]?1e-5:o[1],0==o[2]?1e-5:o[2])}}}u.prototype=Object.create(f.Object3D.prototype),u.prototype.constructor=u;var p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-sheet",[r("v-btn",{attrs:{text:"",icon:""},on:{click:function(t){return t.stopPropagation(),e.open()}}},[r("v-icon",[e._v("mdi-eye")])],1),r("v-dialog",{attrs:{"max-width":"500px",width:"100%"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[r("v-lazy",[r("v-card",{attrs:{width:"100%"}},[r("v-card-title",[e._v(e._s(e.item.itemName))]),r("v-card-text",{staticClass:"px-0 pb-6"},[r("div",{ref:"viewer",staticClass:"viewer"})])],1)],1)],1)],1)},v=[],w=(r("3ca3"),r("ddb0"),{name:"model",props:{item:Object},data:function(){return{dialog:null,mv:null,resizeCB:null,viewer:null,baseURL:"https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/Forge/src/main/resources/assets/placeableitems/"}},methods:{open:function(){var e=this;this.dialog=!0,setTimeout((function(t){e.viewer=e.$refs.viewer;var r=e.viewer.parentElement.clientWidth;e.mv=new m(e.viewer,{width:r,height:r},{x:9,y:9,z:18},{x:0,y:-4,z:0}),e.resizeCB=window.addEventListener("resize",e.onResize);var n=[e.axios.get(e.baseURL+e.item.modelPath)];Promise.all(n.map((function(e){return e.catch((function(e){return e}))}))).then((function(t){var r=e.item.textures.map((function(t){return{name:t.name,texture:e.baseURL+t.texture}}));e.mv.load(new u(e.item.itemName,JSON.stringify(t[0].data),r))}))}),100)},onResize:function(){if(this.viewer){var e=this.viewer.parentElement.clientWidth;this.mv.resize({width:e,height:e})}}},watch:{dialog:function(e,t){e||(this.$refs.viewer.innerHTML="",window.removeEventListener("resize",this.onResize))}}}),y=w,g=(r("91b2"),r("2877")),x=r("6544"),b=r.n(x),O=r("8336"),E=r("b0af"),z=r("99d9"),P=r("169a"),V=r("132d"),C=r("b687"),j=r("8dd9"),L=Object(g["a"])(y,p,v,!1,null,"0562e48b",null),_=L.exports;b()(L,{VBtn:O["a"],VCard:E["a"],VCardText:z["a"],VCardTitle:z["b"],VDialog:P["a"],VIcon:V["a"],VLazy:C["a"],VSheet:j["a"]});var I={name:"item",components:{model:_},props:{item:Object}},M=I,k=r("ce7e"),S=r("da13"),T=r("5d23"),F=r("34c3"),A=Object(g["a"])(M,d,h,!1,null,"4c8ddd27",null),N=A.exports;b()(A,{VDivider:k["a"],VListItem:S["a"],VListItemContent:T["a"],VListItemIcon:F["a"],VListItemSubtitle:T["b"],VListItemTitle:T["c"],VSheet:j["a"]});var R={name:"App",components:{item:N},data:function(){return{metaURL:"https://raw.githubusercontent.com/Ferdzz/PlaceableItems/1.14.3/wiki/data.json",meta:null}},mounted:function(){var e=this;this.getMetadata().then((function(t){e.meta=t.data.sort((function(e,t){return e.itemName.localeCompare(t.itemName)}))}))},methods:{getMetadata:function(){return this.axios.get(this.metaURL)}}},U=R,G=(r("97a1"),r("7496")),B=r("adda"),D=r("8b9c"),$=Object(g["a"])(U,l,c,!1,null,"8f070a8c",null),J=$.exports;b()($,{VApp:G["a"],VImg:B["a"],VParallax:D["a"],VSheet:j["a"]});var W=r("2f62");n["a"].use(W["a"]);var q=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}}),Z=r("f309");n["a"].use(Z["a"]);var H=new Z["a"]({});n["a"].config.productionTip=!1,new n["a"]({store:q,vuetify:H,render:function(e){return e(J)}}).$mount("#app")},"6b2a":function(e,t,r){e.exports=r.p+"img/header.4d55175e.jpg"},"75ec":function(e,t,r){},"91b2":function(e,t,r){"use strict";var n=r("75ec"),i=r.n(n);i.a},"97a1":function(e,t,r){"use strict";var n=r("1a8e"),i=r.n(n);i.a},cf05:function(e,t,r){e.exports=r.p+"img/logo.fc9d58f1.png"}});
//# sourceMappingURL=app.fc8669f1.js.map