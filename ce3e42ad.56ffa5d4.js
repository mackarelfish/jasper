(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{178:function(n,e,t){"use strict";t.r(e),t.d(e,"frontMatter",(function(){return M})),t.d(e,"metadata",(function(){return E})),t.d(e,"rightToc",(function(){return N})),t.d(e,"Highlight",(function(){return X})),t.d(e,"default",(function(){return D}));var r=t(2),o=t(9),i=t(0),a=t.n(i),c=t(180),d=(t(193),t(28),t(18),t(19),t(54),t(52),t(43)),s=t.n(d),p=t(247),l=t(253);function u(){return(u=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r])}return n}).apply(this,arguments)}function h(n,e){return e||(e=n.slice(0)),n.raw=e,n}var m="_2ZXgh",f=function(n){return n.href?a.a.createElement("a",{href:n.href},a.a.createElement("button",u({className:m},n),n.children)):a.a.createElement("button",u({className:m},n),n.children)};function b(){var n=h(["\n  top: 0;\n  left: 0;\n  width: 100%;\n  min-height: 100vh;\n  display: flex;\n  position: fixed;\n  z-index: 1000;\n  background-color: #14062f;\n  overflow: hidden;\n  padding-bottom: 500px;\n\n  .container {\n    width: 100%;\n    text-align: center;\n    align-self: center;\n  }\n\n  .info-message {\n    margin: auto;\n    max-width: 650px;\n    width: 80%;\n    padding-bottom: 30px;\n    font-size: 20px;\n    color: white;\n  }\n\n  button {\n    margin-left: 8px;\n    margin-right: 8px;\n  }\n\n  button:nth-of-type(1) {\n    background: transparent;\n    border: 1px solid #ffffff;\n  }\n"]);return b=function(){return n},n}f.propTypes={href:s.a.string,children:s.a.string},f.defaultProps={type:"button"};p.a.div(b());function g(){var n=h(["\n  #card-body {\n    background: #F3F3F3;\n    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);\n    border-radius: 10px;\n    padding: 25px 20px;\n    width: 11rem;\n  }\n\n  #title {\n    font-style: normal;\n    font-weight: 600;\n    font-size: 18px;\n    line-height: 22px;\n    color: #000000;\n    margin: 0;\n  }\n\n  #content {\n    font-style: normal;\n    font-weight: normal;\n    font-size: 13px;\n    line-height: 177%;\n    color: #000000;\n    margin-top: 10px;\n    margin-bottom: 20px;\n  }\n\n  #link {\n    font-style: normal;\n    font-weight: 500;\n    font-size: 12px;\n    line-height: 14px;\n    color: #747373;\n    text-decoration: none;\n  }\n"]);return g=function(){return n},n}p.a.div(g());function x(){var n=h(['\n  display: block;\n  position: relative;\n  padding-left: 35px;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  /* Hide the browser\'s default checkbox */\n  input {\n    position: absolute;\n    opacity: 0;\n    cursor: pointer;\n    height: 0;\n    width: 0;\n  }\n\n  /* Create a custom checkbox */\n  .checkmark {\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 20px;\n    width: 20px;\n    border: 1px solid #000;\n    border-radius: 2px;\n  }\n\n  /* On mouse-over, add a grey background color */\n  &:hover input ~ .checkmark {\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n\n  /* When the checkbox is checked, add a blue background */\n  input:checked ~ .checkmark {\n    background-color: #000;\n  }\n\n  /* Style the checkmark/indicator */\n  .checkmark:after {\n    content: "";\n    display: none;\n    position: absolute;\n    left: 7px;\n    top: 3px;\n    width: 5px;\n    height: 10px;\n    border: solid white;\n    border-width: 0 2px 2px 0;\n    transform: rotate(45deg);\n  }\n\n  /* Show the checkmark when checked */\n  input:checked ~ .checkmark:after {\n    display: block;\n  }\n']);return x=function(){return n},n}function k(){var n=h(['\n  position: absolute;\n  margin: 15px;\n\n  &:after {\n    content: "";\n    position: absolute;\n    top: -5px;\n    display: block;\n    left: 2.5rem;\n    width: 1px;\n    height: calc(1rem + 10px);\n    background: #000;\n  }\n']);return k=function(){return n},n}function w(){var n=h(["\n  border: 0;\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n  margin: 0;\n  padding: 0;\n  position: absolute;\n  width: 1px;\n\n  &:checked + ",":before {\n    background: #000;\n  }\n"]);return w=function(){return n},n}function y(){var n=h(['\n  display: block;\n\n  &:before {\n    content: "";\n    display: inline-block;\n    width: 1.2rem;\n    height: 1.2rem;\n    vertical-align: -0.25rem;\n    border-radius: 1.2rem;\n    border: 1px solid #000;\n    margin-right: 0.6rem;\n    transition: background 0.2s ease;\n    box-shadow: inset 0 0 0 0.15rem #fff;\n  }\n']);return y=function(){return n},n}function v(){var n=h(["\n  width: calc(100% - 34px);\n  padding: 10px 15px;\n  color: #000;\n  background-color: transparent;\n  border: 2px solid #000;\n  border-radius: 5px;\n  font-family: inherit;\n"]);return v=function(){return n},n}s.a.string.isRequired,s.a.string.isRequired,s.a.string,s.a.string;Object(p.a)(l.a)(v());var j=p.a.span(y());Object(p.a)(l.a)(w(),j),p.a.span(k()),p.a.label(x());function O(){var n=h(["\n  .small-nav {\n    margin-top: 30px;\n    padding-bottom: 10px;\n    margin-bottom: 10px;\n    display: flex;\n    justify-content: center;\n    font-size: 1.2rem;\n    overflow-x: auto;\n  }\n\n  .small-nav div {\n    display: block;\n    margin: 0 10px;\n    cursor: pointer;\n    white-space: nowrap;\n\n    &:first-child {\n      margin-left: 0;\n    }\n    &:last-child {\n      margin-right: 0;\n    }\n  }\n\n  @media (max-width: 992px) {\n    .small-nav {\n      display: flex;\n      justify-content: center;\n    }\n  }\n\n  .nav-content {\n    display: flex;\n    justify-content: center;\n  }\n"]);return O=function(){return n},n}var T=p.a.div(O());(function(n){var e,t;function r(e){var t;return(t=n.call(this,e)||this).state={index:0},t}return t=n,(e=r).prototype=Object.create(t.prototype),e.prototype.constructor=e,e.__proto__=t,r.prototype.render=function(){var n=this,e=this.props.navItems;return a.a.createElement(T,null,a.a.createElement("div",{className:"small-nav"},e.map((function(e,t){return a.a.createElement("div",{key:t,onClick:function(){return n.setState({index:t})},style:{fontWeight:n.state.index===t?"bold":"normal"}},e.title)}))),a.a.createElement("div",{className:"nav-content"},e[this.state.index].component))},r}(i.Component)).propTypes={navItems:s.a.array.isRequired};t(170);var M={id:"mdx",title:"Powered by MDX"},E={id:"mdx",title:"Powered by MDX",description:"import { Button } from 'jasper-ui'",source:"@site/docs/mdx.md",permalink:"/docs/mdx",editUrl:"https://github.com/COMPFEST/jasper/edit/master/docusaurus/docs/mdx.md",sidebar:"someSidebar",previous:{title:"This is Document Number 3",permalink:"/docs/doc3"}},N=[],X=function(n){var e=n.children,t=n.color;return Object(c.b)("span",{style:{backgroundColor:t,borderRadius:"2px",color:"#fff",padding:"0.2rem"}}," ",e," ")},z={rightToc:N,Highlight:X};function D(n){var e=n.components,t=Object(o.a)(n,["components"]);return Object(c.b)("wrapper",Object(r.a)({},z,t,{components:e,mdxType:"MDXLayout"}),Object(c.b)("p",null,"You can write JSX and use React components within your Markdown thanks to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://mdxjs.com/"}),"MDX"),"."),Object(c.b)(X,{color:"#25c2a0",mdxType:"Highlight"},"Docusaurus green")," and ",Object(c.b)(X,{color:"#1877F2",mdxType:"Highlight"},"Facebook blue")," are my favorite colors.",Object(c.b)(f,{mdxType:"Button"},"Helloww"),Object(c.b)("p",null,"I can write ",Object(c.b)("strong",{parentName:"p"},"Markdown")," alongside my ",Object(c.b)("em",{parentName:"p"},"JSX"),"!"))}D.isMDXComponent=!0}}]);