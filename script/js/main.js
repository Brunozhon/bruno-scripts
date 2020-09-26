// Scripts
var bruno_scripts = {
  onmatch: function(findtxt, patt, func) {
    var str = findtxt, _patt = patt;
    var result = str.search(_patt);
    if (result == "") {
      return;
    } else {
      var _func = func;
      _func();
      return _func;
    }
  }
}
// Classes
class Script {
  constructor() {
    this.scriptTag = document.createElement("script");
  }
  run(src, innerHTML, external) {
    if (external) {
      this.scriptTag.src = src;
    } else {
      this.scriptTag.innerHTML = innerHTML;
    }
    document.body.appendChild(scriptTag);
  }
}
