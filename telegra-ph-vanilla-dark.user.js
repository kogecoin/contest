// ==UserScript==
// @name          Telegra.ph Vanilla Dark
// @namespace     http://userstyles.org
// @description	  Dark theme for telegra.ph
// @author        kandy
// @homepage      https://userstyles.org/styles/152115
// @include       http://telegra.ph/*
// @include       https://telegra.ph/*
// @include       http://*.telegra.ph/*
// @include       https://*.telegra.ph/*
// @include       http://tgraph.io/*
// @include       https://tgraph.io/*
// @include       http://*.tgraph.io/*
// @include       https://*.tgraph.io/*
// @run-at        document-start
// @version       0.20190116092618
// ==/UserScript==
(function() {var css = [
	":root {",
	"  --color1: #9d9d9d;",
	"  --color2: #908B67;",
	"  --color3: #282828;",
	"  --color4: #222;",
	"  --color5: #191919;",
	"	--color6: #959595;",
	"  --color7: #333;",
	"  --color8: #666;",
	"  --color9: #b9b9b9;",
	"  --color10: #c8c8c8;",
	"  --color11: #c2c2c2;",
	"}",
	"",
	"::selection {",
	"  background-color:var(--color6)!important;",
	"  color:#ccc;",
	"}",
	"",
	"::-moz-selection {",
	"  background-color:var(--color6)!important;",
	"  color:#ddd !important;",
	"}",
	"",
	"html body a {",
	"	border-bottom: .1em solid #959595!important;",
	"}",
	"",
	"html body address a {",
	"	border-bottom: none!important;",
	"}",
	"",
	"*::-webkit-scrollbar {",
	"  background-color:  var(--color4) !important;",
	"  border: 1px solid var(--color3) !important;",
	"}",
	"",
	"*::-webkit-scrollbar-thumb {",
	"  background-color: var(--color7) !important;",
	"}",
	"",
	"*::-webkit-scrollbar-button {",
	"  background-color: var(--color7) !important;;",
	"}",
	"",
	"body, html, .tl_article .tl_article_content figcaption, .tl_article .tl_article_content figcaption .editable_input {",
	"	background-color: var(--color4);",
	"  color: var(--color6);",
	"}",
	"",
	".button {",
	"	background-color: var(--color3);",
	"}",
	"",
	"a, a strong {",
	"  color: var(--color1)!important;",
	"  border: none!important;",
	"  transition: all .2s;",
	"}",
	"",
	"a:hover, a strong:hover {",
	"  color: var(--color11)!important;",
	"  transition: all .2s;",
	"}",
	"",
	".tl_article .tl_article_content, .tl_article .tl_article_content .ql-editor *, .tl_article.tl_article_edit [data-placeholder].empty:before, .button, .tl_article.tl_article_edit figcaption[data-placeholder].empty:after {",
	"  color: var(--color6);",
	"}",
	"",
	".tl_article address, .tl_article address a, address a {",
	"  color: var(--color8)!important;",
	"}",
	"",
	"h1 {",
	"	color: var(--color10)!important;",
	"}",
	"h2, h3, h4, h5, h6, .tl_article.tl_article_edit [data-label]:after, .tl_article.tl_article_edit.title_focused [data-label].empty:after {",
	"	color: var(--color9)!important;",
	"}",
	"",
	".tl_article .tl_article_content blockquote, .tl_article a[href], .tl_article.tl_article_edit [data-label]:after, .tl_article.tl_article_edit.title_focused [data-label].empty:after {",
	"	border-color: var(--color8);",
	"}"
].join("\n");
if (typeof GM_addStyle != "undefined") {
	GM_addStyle(css);
} else if (typeof PRO_addStyle != "undefined") {
	PRO_addStyle(css);
} else if (typeof addStyle != "undefined") {
	addStyle(css);
} else {
	var node = document.createElement("style");
	node.type = "text/css";
	node.appendChild(document.createTextNode(css));
	var heads = document.getElementsByTagName("head");
	if (heads.length > 0) {
		heads[0].appendChild(node);
	} else {
		// no head yet, stick it whereever
		document.documentElement.appendChild(node);
	}
}
})();
