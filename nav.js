(function () {
  // ===== EDIT YOUR MENU HERE (only place you ever need to change) =====
  var menu = [
    { label: "Home", href: "index.html" },
    { label: "About Us", href: "about-us.html" },
    { label: "Exams", href: "exam.html" },
    { label: "Master PYQ", href: "master-pyq.html" },
    { label: "Syllabus", children: [
      { label: "Bank", href: "bank-syllabus.html" },
      { label: "Railway", href: "rail-syllabus.html" },
      { label: "SSC", href: "ssc-syllabus.html" },
      { label: "Civil", href: "civil-syllabus.html" } ] },
    { label: "Mock Tests", children: [
      { label: "Banking", href: "banking-mocks.html" },
      { label: "Railway", href: "railway-mocks.html" },
      { label: "SSC", href: "ssc-mocks.html" },
      { label: "UPSC", href: "upsc-mocks.html" } ] },
    { label: "Ask a Doubt", href: "ask-a-doubt.html" },
    { label: "Suggestions", href: "suggestions.html" },
    { label: "Book Appointment", href: "book-appointment.html" }
  ];
  // =====================================================================

  var current = location.pathname.split("/").pop() || "index.html";
  function link(i) { return '<a href="' + i.href + '"' + (i.href === current ? ' class="active"' : '') + '>' + i.label + '</a>'; }

  var items = menu.map(function (i) {
    if (!i.children) return link(i);
    var act = i.children.some(function (c) { return c.href === current; });
    return '<div class="dd' + (act ? ' active' : '') + '"><button class="dd-btn" type="button">' + i.label +
      ' ▾</button><div class="dd-content">' + i.children.map(link).join("") + '</div></div>';
  }).join("");

  var css = '#tr-nav{position:relative;z-index:9999;background:#fffaf1;border-bottom:1px solid #ead9b9;font-family:"DM Sans","Plus Jakarta Sans",Arial,sans-serif}' +
    '#tr-nav .bar{display:flex;align-items:center;justify-content:space-between;max-width:1200px;margin:auto;padding:0 12px}' +
    '#tr-nav .menu{display:flex;align-items:center;flex-wrap:wrap}' +
    '#tr-nav a,#tr-nav .dd-btn{color:#51402a;text-decoration:none;background:none;border:0;font-family:inherit;font-weight:600;font-size:13px;padding:12px 11px;cursor:pointer;display:block}' +
    '#tr-nav a:hover,#tr-nav .dd-btn:hover{color:#b77e2b;background:#fff3d9}' +
    '#tr-nav a.active,#tr-nav .dd.active>.dd-btn{color:#b77e2b;box-shadow:inset 0 -3px 0 #bd8734}' +
    '#tr-nav .dd{position:relative}' +
    '#tr-nav .dd-content{display:none;position:absolute;top:100%;left:0;min-width:150px;background:#fff;border:1px solid #ead9b9;border-radius:10px;box-shadow:0 10px 24px rgba(150,115,67,.2);overflow:hidden}' +
    '#tr-nav .dd:hover .dd-content,#tr-nav .dd.open .dd-content{display:block}' +
    '#tr-nav .burger{display:none;font-size:24px;color:#51402a;background:none;border:0;cursor:pointer;padding:8px}' +
    '@media(max-width:900px){#tr-nav .bar{flex-wrap:wrap}#tr-nav .burger{display:block;margin-left:auto}' +
    '#tr-nav .menu{display:none;width:100%;flex-direction:column;align-items:stretch}#tr-nav .menu.show{display:flex}' +
    '#tr-nav .dd-content{position:static;border:0;box-shadow:none;background:#fff8eb}#tr-nav .dd-content a{padding-left:26px}' +
    '#tr-nav .dd:hover .dd-content{display:none}#tr-nav .dd.open .dd-content{display:block}}';

  function build() {
    var st = document.createElement("style"); st.textContent = css; document.head.appendChild(st);
    var nav = document.createElement("nav"); nav.id = "tr-nav";
    nav.innerHTML = '<div class="bar"><button class="burger" type="button" aria-label="Menu">☰</button><div class="menu">' + items + '</div></div>';
    document.body.insertBefore(nav, document.body.firstChild);
    var m = nav.querySelector(".menu");
    nav.querySelector(".burger").onclick = function () { m.classList.toggle("show"); };
    nav.querySelectorAll(".dd-btn").forEach(function (b) { b.onclick = function () { b.parentElement.classList.toggle("open"); }; });
  }
  if (document.body) build(); else document.addEventListener("DOMContentLoaded", build);
})();
