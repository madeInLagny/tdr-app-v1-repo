CNVS.HoverAnimations=function(){var l=SEMICOLON.Core;return{init:function(t){return l.getSelector(t,!1,!1).length<1||(l.initFunction({class:"has-plugin-hoveranimation",event:"pluginHoverAnimationReady"}),(t=l.getSelector(t,!1)).length<1)||void t.forEach(function(e){var t=e.getAttribute("data-hover-animate"),a=e.getAttribute("data-hover-animate-out")||"fadeOut",i=e.getAttribute("data-hover-speed")||600,n=e.getAttribute("data-hover-delay"),s=e.getAttribute("data-hover-parent"),o=e.getAttribute("data-hover-reset")||"false",r=e.getAttribute("data-hover-mobile")||"true";if("true"!=r)if("false"==r){if(!l.getVars.elBody.classList.contains("device-up-lg"))return!0}else if(!l.getVars.elBody.classList.contains("device-up-"+r))return!0;e.classList.add("not-animated");var u,c,s=s?"self"==s?e:e.closest(s):e.closest(".bg-overlay")?e.closest(".bg-overlay"):e,d=0;n&&(d=Number(n)),i&&(e.style.animationDuration=Number(i)+"ms"),s.addEventListener("mouseover",function(){clearTimeout(c),u=setTimeout(function(){e.classList.add("not-animated"),(a+" not-animated").split(" ").forEach(function(t){e.classList.remove(t)}),(t+" animated").split(" ").forEach(function(t){e.classList.add(t)})},d)},!1),s.addEventListener("mouseleave",function(){e.classList.add("not-animated"),(t+" not-animated").split(" ").forEach(function(t){e.classList.remove(t)}),(a+" animated").split(" ").forEach(function(t){e.classList.add(t)}),"true"==o&&(c=setTimeout(function(){(a+" animated").split(" ").forEach(function(t){e.classList.remove(t)}),e.classList.add("not-animated")},Number(i))),clearTimeout(u)},!1)})}}}();