YUI.add("moodle-theme_nead_unicentro-zoom",function(e,t){var n=function(){var t=e.one("body").hasClass("zoomin");t?(e.one("body").removeClass("zoomin"),e.one("body").addClass("nozoom"),console.log("nozoom"),M.util.set_user_preference("theme_nead_unicentro_zoom","nozoom")):(e.one("body").addClass("zoomin"),e.one("body").removeClass("nozoom"),console.log("zoomin"),M.util.set_user_preference("theme_nead_unicentro_zoom","zoomin"))};M.theme_nead_unicentro=M.theme_unicentro||{},M.theme_nead_unicentro.zoom={init:function(){e.one("body").delegate("click",n,".moodlezoom")}}},"@VERSION@",{requires:["node"]});
