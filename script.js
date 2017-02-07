// ==UserScript==
// @name        xkcd
// @namespace   *xkcd.com/*
// @include     *xkcd.com/*
// @version     1
// @grant       none
// ==/UserScript==
var subscriptSet=0;
function doc_keyUp(e) {
    if(e.ctrlKey) return;
    var query = window.location.href;
    query = query.substring(query.indexOf(".com/")+4).replace(/\//g,'');
    switch(e.code){
        case "KeyF":
            window.location.href = "https://xkcd.com/"+query;
            break;
        case "KeyH":
            window.location.href = "https://explainxkcd.com/"+query;
            break;
        case "KeyN":
            window.location.href = "https://xkcd.com/"+(parseInt(query)+1).toString();
            break;
        case "KeyP":
            window.location.href = "https://xkcd.com/"+(parseInt(query)-1).toString();
            break;
        case "KeyR":
            window.location.href = "https://c.xkcd.com/random/comic/";
            break;
        case "KeyS":
            if(subscriptSet) break;
            subscriptSet = 1;
            var subscript = $("#comic")["0"].firstElementChild.title;
            $("#comic").append("<br/>" + subscript);
            break;
        case "KeyT":
            window.location.href = "https://xkcd.com";
            break;
        default:
            break;
    }
}
document.addEventListener('keyup', doc_keyUp, false);
