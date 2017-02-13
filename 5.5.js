webpackJsonp([5],{187:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(73),a=o(n),l=i(74),s=o(l),d=i(1),r=i(188),c=o(r),u=function(){function e(t,i){(0,a.default)(this,e),this._router=t,this._manifest=i,this._sectionMenu=this._sectionMenu.bind(this),this._setAside=this._setAside.bind(this)}return(0,s.default)(e,[{key:"render",value:function(e,t,i){return null==i&&(i=t,t=null),(0,d.Node)("section",{className:c.default.wrapper},(0,d.Node)("header",{className:c.default.header},(0,d.Node)("h2",{className:c.default.title},e),t?(0,d.Node)("p",{className:c.default.description},t):null),(0,d.Node)("div",{className:c.default.columns},(0,d.Node)("aside",{"hook-update":this._setAside,className:c.default.aside},this._menu()),(0,d.Node)("main",{className:c.default.main},i),(0,d.Node)("div",{className:c.default.filler})))}},{key:"_setAside",value:function(e,t){this._aside=t.elm}},{key:"_menu",value:function(){var e=this._aside&&this._aside.getBoundingClientRect().top<50?c.default.menuSticky:c.default.menu;return(0,d.Node)("ul",{className:e},this._manifest.sections.map(this._sectionMenu))}},{key:"_sectionMenu",value:function(e){var t=e.slug,i=e.name,o=e.subsections,n="/docs/"+t,a=0===this._router.currentPath.indexOf(n),l=a?c.default.menuItemSectionActive:c.default.menuItemSection;return(0,d.Node)("li",{className:l},this._router.link(n,i),a?(0,d.Node)("ul",{className:c.default.subMenu},o.map(this._subsectionItem.bind(this,t))):null)}},{key:"_subsectionItem",value:function(e,t){var i=t.slug,o=t.headers.title,n="/docs/"+e+"/"+i,a=this._router.isActive(n)?c.default.menuItemSubsectionActive:c.default.menuItemSubsection;return(0,d.Node)("li",{className:a},this._router.link(n,o))}}]),e}();t.default=u},188:function(e,t,i){var o=i(189);"string"==typeof o&&(o=[[e.id,o,""]]);i(117)(o,{});o.locals&&(e.exports=o.locals)},189:function(e,t,i){t=e.exports=i(115)(),t.push([e.id,".DDb6_{padding-top:calc(1.5em + 5vw);padding-bottom:calc(.5em + 1vw);text-align:center}._1emDc{padding:0 4vw;margin:0 auto 5vw;max-width:65em}._1-k5f{display:flex;flex-direction:column}._3Qobu{font-weight:400;font-size:1.3em;margin-bottom:.6em}.ymNy_{margin:0 auto;max-width:41em;margin-bottom:.2em;line-height:1.5;color:#555}._72WqG{list-style:none;margin:0;padding:0}.uxMEn{margin:1.05em 0}.uxMEn a{text-decoration:none;line-height:1;display:inline-block;padding:.3em 0 .1em;margin-bottom:.3em;color:#000;font-weight:600}.BjTBA{margin-left:1em}._2yyyp>a,._3zkN7>a{display:inline-block;border-bottom:.14em solid transparent}._2ldgy>a,._3cLpj>a{border-bottom-color:#ddd}@media (min-width:40em){._3Qobu{font-weight:300;font-size:3vw}}@media (max-width:59.99999999em){._2p_hO{align-self:center}}@media (min-width:60em){._1-k5f{flex-direction:row-reverse}._2p_hO{margin-left:2em;flex:0 0 18em}._2Ui1D{flex:1 1 auto;max-width:calc(100% - 20em)}._97P8u{position:fixed;top:50px}}@media (min-width:80em){._2UKWQ{margin-right:2em;flex:0 0 18em}._2Ui1D{max-width:calc(100% - 40em)}._1emDc{max-width:85em}}",""]),t.locals={header:"DDb6_",wrapper:"_1emDc",columns:"_1-k5f",title:"_3Qobu",description:"ymNy_",menulike:"_72WqG",menu:"uxMEn _72WqG",menuSticky:"_97P8u uxMEn _72WqG",subMenu:"BjTBA _72WqG",menuItemSection:"_3zkN7",menuItemSectionActive:"_2ldgy _3zkN7",menuItemSubsection:"_2yyyp",menuItemSubsectionActive:"_3cLpj _2yyyp",aside:"_2p_hO",main:"_2Ui1D",filler:"_2UKWQ"}},193:function(e,t,i){var o=i(194);"string"==typeof o&&(o=[[e.id,o,""]]);i(117)(o,{});o.locals&&(e.exports=o.locals)},194:function(e,t,i){t=e.exports=i(115)(),t.push([e.id,"._200Fg{text-decoration:none;color:#000;font-weight:600;position:relative;padding:1em 2em;display:inline-block;background:#f9f9f9;border-radius:3px}._1_Nby{margin-top:2em;text-align:center}",""]),t.locals={link:"_200Fg",wrapper:"_1_Nby"}},195:function(e,t,i){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(73),a=o(n),l=i(74),s=o(l),d=i(1),r=i(187),c=o(r),u=i(196),m=o(u),_=i(193),f=o(_),h=function(){function e(t,i,o,n,l){(0,a.default)(this,e),this.title=n.headers.title+" ‹ "+o.name+" ‹ Docs ‹ Tweed",this._box=t,this._router=i,this._section=o,this._subsection=n,this._layout=l}return(0,s.default)(e,null,[{key:"load",value:function(t,i,o,n,a){return new e(i,t,o,n,new c.default(t,a))}}]),(0,s.default)(e,[{key:"render",value:function(){var e=this._section.subsections.map(function(e){return e.slug}).indexOf(this._subsection.slug)+1,t=this._section.subsections[e],i=null==t;return this._layout.render(this._subsection.headers.title,(0,d.Node)("article",{className:m.default.article},this._resolveContent(),(0,d.Node)("div",{className:f.default.wrapper},i?this._router.link("/docs","Back to docs",{className:f.default.link}):this._router.link("/docs/"+this._section.slug+"/"+t.slug,"Next: "+t.headers.title,{className:f.default.link}))))}},{key:"_resolveContent",value:function(){var e=this,t=this._subsection.content,i=t.examples,o=t.html;return o.split("<example-slot></example-slot>").map(function(e){return(0,d.Node)("div",{innerHTML:e})}).reduce(function(t,o,n){return i.length<=n?t.concat(o):t.concat(o,e._example(i[n]))},[])}},{key:"_example",value:function(e){var t=e.javascript,i=e.typescript;return this._box.render({JavaScript:t,TypeScript:i})}}]),e}();t.default=h},196:function(e,t,i){var o=i(197);"string"==typeof o&&(o=[[e.id,o,""]]);i(117)(o,{});o.locals&&(e.exports=o.locals)},197:function(e,t,i){t=e.exports=i(115)(),t.push([e.id,'._1CdiW{margin-bottom:5vw}._1CdiW h1,._1CdiW h2,._1CdiW h3,._1CdiW h4,._1CdiW h5,._1CdiW h6{margin:2em 0 .8em}._1CdiW blockquote,._1CdiW p{margin:1em 0;max-width:45em}._1CdiW p{line-height:1.6}._1CdiW p a{color:#0062ff;text-decoration:none}._1CdiW blockquote{border-left:3px solid #ddd;padding-left:1em;color:#555}._1CdiW hr{border:0;background:#eee;height:3px;margin:3em 0}._1CdiW pre{overflow-x:auto;-webkit-overflow-scrolling:touch}._1CdiW code,._1CdiW pre{background:#f9f9f9;border-radius:3px}._1CdiW code{display:inline-block;font-family:SF Mono,Roboto Mono,Menlo,monospace;font-size:.9em;line-height:1.5}._1CdiW p code{padding:0 .2em;font-size:.95em}._1CdiW pre code{padding:.6em .9em}._1CdiW .token{color:#2d2d2d}._1CdiW .token.annotation,._1CdiW .token.keyword{color:#0062ff}._1CdiW .token.punctuation{color:#999}._1CdiW .token.boolean,._1CdiW .token.function,._1CdiW .token.number{color:#8f55ca}._1CdiW .token.comment{color:#999}._1CdiW .token.operator{color:#4c4c4c}._1CdiW .token.string{color:#5bab22}._1CdiW .token.class-name{color:#ff4a60}._1CdiW .token.tag{color:#0062ff}._1CdiW .token.attr-name{color:#8f55ca}._1CdiW .token.attr-value .punctuation:first-child{color:#4c4c4c}._1CdiW .token.attr-value,._1CdiW .token.attr-value>.punctuation:not(:first-child){color:#5bab22}._1CdiW .lang-shell{margin-left:1.2em}._1CdiW .shell-prompt{width:0;position:relative}._1CdiW .shell-prompt:before{content:"$";position:absolute;color:#ccc;left:-1.2em}',""]),t.locals={article:"_1CdiW"}}});