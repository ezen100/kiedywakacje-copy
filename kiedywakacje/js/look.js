function setCookie(e, t, o) {
    const n = new Date;
    n.setTime(n.getTime() + 24 * o * 60 * 60 * 1e3);
    o = "expires=" + n.toUTCString();
    document.cookie = e + "=" + t + ";" + o + ";path=/;SameSite=Strict;Secure"
}
function getCookie(e) {
    var o = e + "=";
    let t = decodeURIComponent(document.cookie);
    var n = t.split(";");
    for (let t = 0; t < n.length; t++) {
        let e = n[t];
        for (; " " == e.charAt(0); )
            e = e.substring(1);
        if (0 == e.indexOf(o))
            return e.substring(o.length, e.length)
    }
    return ""
}
function deleteCookie(e) {
    document.cookie = e + "=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;SameSite=Strict;Secure"
}
function switchLook() {
    var e = document.getElementById("dark_css");
    "stylesheet alternate" == e.rel ? (e.rel = "stylesheet",
    setCookie("look", "dark", 365),
    _paq.push(["trackEvent", "Look", "Color mode", "Change to dark"])) : (e.rel = "stylesheet alternate",
    deleteCookie("look"),
    _paq.push(["trackEvent", "Look", "Color mode", "Change to light"]))
}
function turnDark() {
    document.getElementById("dark_css").rel = "stylesheet"
}
"dark" == getCookie("look") && (turnDark(),
setCookie("look", "dark", 365)),
window.addEventListener("load", function() {
    document.getElementById("dark").addEventListener("click", switchLook)
});
