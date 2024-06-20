var dateFuture1 = new Date(2024,5,21,0,0,0)
  , dateStart1 = new Date(2023,8,4,0,0,0)
  , freeDays = 0;
function FreeDays(e) {
    for (var t = new Date, n = (t.setUTCHours(0, 0, 0, 0),
    t.setDate(t.getDate() + 1),
    e), o = []; t < n; )
        6 != t.getDay() && 0 != t.getDay() && !o.includes(t.getTime()) || freeDays++,
        t.setDate(t.getDate() + 1);
    freeDays *= 864e5
}
function Rzeczownik(e, t, n, o) {
    return 1 == e ? t : e % 10 != 2 && e % 10 != 3 && e % 10 != 4 || e % 100 == 12 || e % 100 == 13 || e % 100 == 14 ? o : n
}
function GetCountTyg(e, t) {
    var n = new Date
      , o = e.getTime() - n.getTime();
    if (delete n,
    o < 0) {
        document.getElementById(t).innerHTML = "";
        for (var n = document.getElementById("finished_note"), i = document.getElementsByClassName("counter"), u = document.getElementsByClassName("explain_main"), d = document.getElementsByClassName("explain_small"), r = 0, m = i.length; r < m; r++)
            i[r].style.display = "none";
        for (r = 0,
        m = d.length; r < m; r++)
            d[r].style.display = "none";
        for (r = 0,
        m = u.length; r < m; r++)
            u[r].style.display = "none";
        n.style.display = "inline"
    } else {
        var n = ""
          , o = Math.floor(o / 1e3);
        n += (o = Math.floor(o / 604800)) + " " + Rzeczownik(o, "tydzień", "tygodnie", "tygodni"),
        document.getElementById(t).innerHTML = n,
        setTimeout(function() {
            GetCountTyg(e, t)
        }, 1e3)
    }
}
function GetCountDni(e, t) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? document.getElementById(t).innerHTML = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 86400)) + " " + (1 == o ? "dzień" : "dni"),
    document.getElementById(t).innerHTML = n,
    setTimeout(function() {
        GetCountDni(e, t)
    }, 1e3))
}
function GetCountFreeDni(e, t) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    (i -= freeDays) < 0 ? document.getElementById(t).innerHTML = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 86400)) + " " + (1 == o ? "dzień" : "dni"),
    document.getElementById(t).innerHTML = n,
    setTimeout(function() {
        GetCountFreeDni(e, t)
    }, 1e3))
}
function GetCountGodz(e, t) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? document.getElementById(t).innerHTML = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 3600)) + " " + Rzeczownik(o, "godzinę", "godziny", "godzin"),
    document.getElementById(t).innerHTML = n,
    setTimeout(function() {
        GetCountGodz(e, t)
    }, 1e3))
}
function GetCountMin(e, t) {
    var n, o = new Date, i = e.getTime() - o.getTime();
    delete o,
    i < 0 ? document.getElementById(t).innerHTML = "" : (o = 0,
    n = "",
    i = Math.floor(i / 1e3),
    n += (o = Math.floor(i / 60)) + " " + Rzeczownik(o, "minutę", "minuty", "minut"),
    document.getElementById(t).innerHTML = n,
    setTimeout(function() {
        GetCountMin(e, t)
    }, 1e3))
}
function GetCountSec(e, t) {
    var n, o, i = new Date, u = e.getTime() - i.getTime();
    delete i,
    u < 0 ? document.getElementById(t).innerHTML = "" : (i = 0,
    o = ((n = "") + (u % 1e3 + 1e3)).substring(1, 4),
    u = Math.floor(u / 1e3),
    n += (i = Math.floor(u)) + "." + o + " " + Rzeczownik(i, "sekundę", "sekundy", "sekund"),
    document.getElementById(t).innerHTML = n,
    setTimeout(function() {
        GetCountSec(e, t)
    }, 25))
}
function Percent(e, t, n) {
    var o = new Date
      , i = e.getTime() - t.getTime()
      , u = e.getTime() - o.getTime();
    delete o,
    u < 0 ? document.getElementById(n).innerHTML = "" : (o = "",
    o += (u / i * 100).toFixed(4) + " %",
    document.getElementById(n).innerHTML = o,
    setTimeout(function() {
        Percent(e, t, n)
    }, 1e3))
}
window.addEventListener("load", function() {
    FreeDays(dateFuture1),
    GetCountTyg(dateFuture1, "tyg_norm"),
    GetCountDni(dateFuture1, "dni_norm"),
    GetCountFreeDni(dateFuture1, "dni_norm_free"),
    GetCountGodz(dateFuture1, "godz_norm"),
    GetCountMin(dateFuture1, "min_norm"),
    GetCountSec(dateFuture1, "sec_norm"),
    Percent(dateFuture1, dateStart1, "procenty")
});
