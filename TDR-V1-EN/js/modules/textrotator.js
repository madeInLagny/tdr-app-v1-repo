CNVS.TextRotator=function(){var a=SEMICOLON.Core;return{init:function(e){if(a.getSelector(e,!1,!1).length<1)return!0;a.loadJS({file:"plugins.textrotator.js",id:"canvas-textrotator-js",jsFolder:!0}),a.isFuncTrue(function(){return"undefined"!=typeof jQuery&&jQuery().Morphext&&"undefined"!=typeof Typed}).then(function(t){return!!t&&(a.initFunction({class:"has-plugin-textrotator",event:"pluginTextRotatorReady"}),(e=a.getSelector(e)).length<1||void e.each(function(){var t,e,a,r,n=jQuery(this),o=n.attr("data-typed")||"false",u=n.find(".t-rotate"),d=n.attr("data-rotate")||"fade",i=n.attr("data-speed")||1200,s=n.attr("data-separator")||",";"true"==o?(o=u.html().split(s),e=n.attr("data-loop")||"true",a=n.attr("data-shuffle"),r=n.attr("data-cursor")||"true",i=n.attr("data-speed")||50,t=n.attr("data-backspeed")||30,n=n.attr("data-backdelay"),e="true"==e,a="true"==a,r="true"==r,u.html("").addClass("plugin-typed-init"),new Typed(u[0],{strings:o,typeSpeed:Number(i),loop:e,shuffle:a,showCursor:r,backSpeed:Number(t),backDelay:Number(n)})):u.Morphext({animation:d,separator:s,speed:Number(i)})}))})}}}();