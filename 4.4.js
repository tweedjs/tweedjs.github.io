webpackJsonp([4],{343:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(1),s=n(344),l=i(s),r=function(){function e(t,n){a(this,e),this._router=t,this._manifest=n,this._sectionMenu=this._sectionMenu.bind(this),this._setAside=this._setAside.bind(this)}return o(e,[{key:"render",value:function(e,t,n){return null==n&&(n=t,t=null),(0,u.Node)("section",{className:l.default.wrapper},(0,u.Node)("header",{className:l.default.header},(0,u.Node)("h2",{className:l.default.title},e),t?(0,u.Node)("p",{className:l.default.description},t):null),(0,u.Node)("div",{className:l.default.columns},(0,u.Node)("aside",{"hook-update":this._setAside,className:l.default.aside},this._menu()),(0,u.Node)("main",{className:l.default.main},n),(0,u.Node)("div",{className:l.default.filler})))}},{key:"_setAside",value:function(e,t){this._aside=t.elm}},{key:"_menu",value:function(){var e=this._aside&&this._aside.getBoundingClientRect().top<50?l.default.menuSticky:l.default.menu;return(0,u.Node)("ul",{className:e},this._manifest.sections.map(this._sectionMenu))}},{key:"_sectionMenu",value:function(e){var t=e.slug,n=e.name,i=e.subsections,a="/docs/"+t,o=0===this._router.currentPath.indexOf(a),s=o?l.default.menuItemSectionActive:l.default.menuItemSection;return(0,u.Node)("li",{className:s},this._router.link(a,n),o?(0,u.Node)("ul",{className:l.default.subMenu},i.map(this._subsectionItem.bind(this,t))):null)}},{key:"_subsectionItem",value:function(e,t){var n=t.slug,i=t.headers.title,a="/docs/"+e+"/"+n,o=this._router.isActive(a)?l.default.menuItemSubsectionActive:l.default.menuItemSubsection;return(0,u.Node)("li",{className:o},this._router.link(a,i))}}]),e}();t.default=r},344:function(e,t,n){var i=n(345);"string"==typeof i&&(i=[[e.id,i,""]]);n(320)(i,{});i.locals&&(e.exports=i.locals)},345:function(e,t,n){t=e.exports=n(318)(),t.push([e.id,".DDb6_{padding-top:calc(1.5em + 5vw);padding-bottom:calc(.5em + 1vw);text-align:center}._1emDc{padding:0 4vw;margin:0 auto 5vw;max-width:65em}._1-k5f{display:flex;flex-direction:column}._3Qobu{font-weight:400;font-size:1.3em;margin-bottom:.6em}.ymNy_{margin:0 auto;max-width:41em;margin-bottom:.2em;line-height:1.5;color:#555}._72WqG{list-style:none;margin:0;padding:0}.uxMEn{margin:1.05em 0}.uxMEn a{text-decoration:none;line-height:1;display:inline-block;padding:.3em 0 .1em;margin-bottom:.3em;color:#000;font-weight:600}.BjTBA{margin-left:1em}._2yyyp>a,._3zkN7>a{display:inline-block;border-bottom:.14em solid transparent}._2ldgy>a,._3cLpj>a{border-bottom-color:#ddd}@media (min-width:40em){._3Qobu{font-weight:300;font-size:3vw}}@media (max-width:59.99999999em){._2p_hO{align-self:center}}@media (min-width:60em){._1-k5f{flex-direction:row-reverse}._2p_hO{margin-left:2em;flex:0 0 18em}._2Ui1D{flex:1 1 auto}._97P8u{position:fixed;top:50px}}@media (min-width:80em){._2UKWQ{margin-right:2em;flex:0 0 18em}._1emDc{max-width:85em}}",""]),t.locals={header:"DDb6_",wrapper:"_1emDc",columns:"_1-k5f",title:"_3Qobu",description:"ymNy_",menulike:"_72WqG",menu:"uxMEn _72WqG",menuSticky:"_97P8u uxMEn _72WqG",subMenu:"BjTBA _72WqG",menuItemSection:"_3zkN7",menuItemSectionActive:"_2ldgy _3zkN7",menuItemSubsection:"_2yyyp",menuItemSubsectionActive:"_3cLpj _2yyyp",aside:"_2p_hO",main:"_2Ui1D",filler:"_2UKWQ"}},348:function(e,t,n){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),u=n(1),s=n(343),l=i(s),r=n(349),d=i(r),c=function(){function e(t,n,i){a(this,e),this._router=t,this._section=n,this._layout=i}return o(e,null,[{key:"load",value:function(t,n,i){return new e(t,n,new l.default(t,i))}}]),o(e,[{key:"render",value:function(){var e=this._section,t=e.name,n=e.description,i=e.subsections,a=e.slug;return this._layout.render(t,n,(0,u.Node)("div",{className:d.default.wrapper},this._router.link("/docs/"+a+"/"+i[0].slug,"Start Series",{className:d.default.link})))}}]),e}();t.default=c},349:function(e,t,n){var i=n(350);"string"==typeof i&&(i=[[e.id,i,""]]);n(320)(i,{});i.locals&&(e.exports=i.locals)},350:function(e,t,n){t=e.exports=n(318)(),t.push([e.id,"._200Fg{text-decoration:none;color:#000;font-weight:600;position:relative;padding:1em 2em;display:inline-block;background:#f9f9f9;border-radius:3px}._1_Nby{margin-top:2em;text-align:center}",""]),t.locals={link:"_200Fg",wrapper:"_1_Nby"}}});