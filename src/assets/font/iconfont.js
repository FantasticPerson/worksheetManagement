(function(window){var svgSprite='<svg><symbol id="icon-daoru" viewBox="0 0 1024 1024"><path d="M545.45188 294.90559c0-18.511609-14.994506-33.506115-33.478486-33.506115-18.48398 0-33.478486 14.994506-33.478486 33.506115l0 217.09441c0 18.511609 14.994506 33.506115 33.478486 33.506115l217.122039 0c18.48398 0 33.478486-14.994506 33.478486-33.506115s-14.994506-33.506115-33.478486-33.506115L592.834027 478.493885l337.89673-337.89673c13.08604-13.08604 13.08604-34.297131 0-47.38317s-34.241872-13.08604-47.327912 0L545.45188 431.16495 545.45188 294.90559z"  ></path><path d="M925.169087 391.143445c-18.48398 0-33.478486 14.994506-33.478486 33.506115L891.690602 735.63743c0 86.041632-70.01154 156.025543-156.053172 156.025543L288.307312 891.662973c-85.987397 0-155.997913-69.983911-155.997913-156.025543L132.309398 288.334941c0-86.014003 70.01154-155.997913 155.997913-155.997913l307.416532 0c18.48398 0 33.478486-14.994506 33.478486-33.506115s-14.994506-33.506115-33.478486-33.506115L288.307312 65.324798c-122.955356 0-222.955908 100.054787-222.955908 223.010143L65.351404 735.63743c0 122.982986 100.000552 223.037772 222.955908 223.037772l447.330118 0c122.955356 0 223.010143-100.054787 223.010143-223.037772L958.647573 424.64956C958.648596 406.13795 943.653067 391.143445 925.169087 391.143445z"  ></path></symbol><symbol id="icon-daochu" viewBox="0 0 1024 1024"><path d="M782.19776 900.62848H228.89472c-61.11744 0-110.6432-49.53088-110.6432-110.6432V231.56224c0-61.08672 51.38432-123.55072 112.50176-123.55072h309.376v56.24832H230.74816c-30.57152 0-56.24832 25.6768-56.24832 56.24832l-0.92672 569.47712c0 30.54592 24.77568 55.32672 55.3216 55.32672l564.35712-0.93184c30.54592 0 56.24832-25.70752 56.24832-56.24832V478.75584h56.24832v309.376c0 61.11232-62.464 112.49664-123.55072 112.49664z m95.42656-539.4944c-15.94368 0.0256-28.15488-12.90752-28.12416-28.12416l-0.8448-134.37952-428.0064 413.32736c-11.22304 10.68544-29.41952 10.68544-40.64256 0-11.22304-10.71616-11.22304-28.06784 0-38.75328l424.32-409.84064-123.58144 0.90112c-15.9488 0.0256-28.14976-12.90752-28.12416-28.12416s12.17536-28.09856 28.12416-28.12416h196.25472c15.94368-0.0256 28.7744 12.20608 28.74368 27.42272v197.57568c-0.0256 15.21152-12.17536 28.09344-28.11904 28.11904z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)