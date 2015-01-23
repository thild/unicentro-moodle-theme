if (typeof __coverage__ === 'undefined') { __coverage__ = {}; }
if (!__coverage__['build/moodle-theme_nead_unicentro-zoom/moodle-theme_nead_unicentro-zoom.js']) {
   __coverage__['build/moodle-theme_nead_unicentro-zoom/moodle-theme_nead_unicentro-zoom.js'] = {"path":"build/moodle-theme_nead_unicentro-zoom/moodle-theme_nead_unicentro-zoom.js","s":{"1":0,"2":0,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0,"13":0,"14":0,"15":0},"b":{"1":[0,0],"2":[0,0]},"f":{"1":0,"2":0,"3":0},"fnMap":{"1":{"name":"(anonymous_1)","line":1,"loc":{"start":{"line":1,"column":44},"end":{"line":1,"column":63}}},"2":{"name":"(anonymous_2)","line":9,"loc":{"start":{"line":9,"column":13},"end":{"line":9,"column":24}}},"3":{"name":"(anonymous_3)","line":27,"loc":{"start":{"line":27,"column":8},"end":{"line":27,"column":19}}}},"statementMap":{"1":{"start":{"line":1,"column":0},"end":{"line":32,"column":40}},"2":{"start":{"line":9,"column":0},"end":{"line":22,"column":2}},"3":{"start":{"line":10,"column":2},"end":{"line":10,"column":48}},"4":{"start":{"line":11,"column":2},"end":{"line":21,"column":3}},"5":{"start":{"line":12,"column":4},"end":{"line":12,"column":40}},"6":{"start":{"line":13,"column":4},"end":{"line":13,"column":37}},"7":{"start":{"line":14,"column":4},"end":{"line":14,"column":26}},"8":{"start":{"line":15,"column":4},"end":{"line":15,"column":70}},"9":{"start":{"line":17,"column":4},"end":{"line":17,"column":37}},"10":{"start":{"line":18,"column":4},"end":{"line":18,"column":40}},"11":{"start":{"line":19,"column":4},"end":{"line":19,"column":26}},"12":{"start":{"line":20,"column":4},"end":{"line":20,"column":70}},"13":{"start":{"line":25,"column":0},"end":{"line":25,"column":49}},"14":{"start":{"line":26,"column":0},"end":{"line":30,"column":2}},"15":{"start":{"line":28,"column":4},"end":{"line":28,"column":59}}},"branchMap":{"1":{"line":11,"type":"if","locations":[{"start":{"line":11,"column":2},"end":{"line":11,"column":2}},{"start":{"line":11,"column":2},"end":{"line":11,"column":2}}]},"2":{"line":25,"type":"binary-expr","locations":[{"start":{"line":25,"column":25},"end":{"line":25,"column":42}},{"start":{"line":25,"column":46},"end":{"line":25,"column":48}}]}},"code":["(function () { YUI.add('moodle-theme_nead_unicentro-zoom', function (Y, NAME) {","","/* zoom.js"," * copyright  2014 Bas Brands, www.basbrands.nl"," * authors    Bas Brands, David Scotson"," * license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later"," *  */","","var onZoom = function() {","  var zoomin = Y.one('body').hasClass('zoomin');","  if (zoomin) {","    Y.one('body').removeClass('zoomin');","    Y.one('body').addClass('nozoom');","    console.log('nozoom');","    M.util.set_user_preference('theme_nead_unicentro_zoom', 'nozoom');","  } else {","    Y.one('body').addClass('zoomin');","    Y.one('body').removeClass('nozoom');","    console.log('zoomin');","    M.util.set_user_preference('theme_nead_unicentro_zoom', 'zoomin');","  }","};","","//When the button with class .moodlezoom is clicked fire the onZoom function","M.theme_nead_unicentro = M.theme_unicentro || {};","M.theme_nead_unicentro.zoom =  {","  init: function() {","    Y.one('body').delegate('click', onZoom, '.moodlezoom');","  }","};","","}, '@VERSION@', {\"requires\": [\"node\"]});","","}());"]};
}
var __cov_tumOIBkR4Nwd1YFtfXBVjQ = __coverage__['build/moodle-theme_nead_unicentro-zoom/moodle-theme_nead_unicentro-zoom.js'];
__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['1']++;YUI.add('moodle-theme_nead_unicentro-zoom',function(Y,NAME){__cov_tumOIBkR4Nwd1YFtfXBVjQ.f['1']++;__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['2']++;var onZoom=function(){__cov_tumOIBkR4Nwd1YFtfXBVjQ.f['2']++;__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['3']++;var zoomin=Y.one('body').hasClass('zoomin');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['4']++;if(zoomin){__cov_tumOIBkR4Nwd1YFtfXBVjQ.b['1'][0]++;__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['5']++;Y.one('body').removeClass('zoomin');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['6']++;Y.one('body').addClass('nozoom');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['7']++;console.log('nozoom');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['8']++;M.util.set_user_preference('theme_nead_unicentro_zoom','nozoom');}else{__cov_tumOIBkR4Nwd1YFtfXBVjQ.b['1'][1]++;__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['9']++;Y.one('body').addClass('zoomin');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['10']++;Y.one('body').removeClass('nozoom');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['11']++;console.log('zoomin');__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['12']++;M.util.set_user_preference('theme_nead_unicentro_zoom','zoomin');}};__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['13']++;M.theme_nead_unicentro=(__cov_tumOIBkR4Nwd1YFtfXBVjQ.b['2'][0]++,M.theme_unicentro)||(__cov_tumOIBkR4Nwd1YFtfXBVjQ.b['2'][1]++,{});__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['14']++;M.theme_nead_unicentro.zoom={init:function(){__cov_tumOIBkR4Nwd1YFtfXBVjQ.f['3']++;__cov_tumOIBkR4Nwd1YFtfXBVjQ.s['15']++;Y.one('body').delegate('click',onZoom,'.moodlezoom');}};},'@VERSION@',{'requires':['node']});