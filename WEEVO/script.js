// FEAture1: Scroll Fade-in Animation
// IntersectionObserver watches elements and ineexecute kapag may nagiinteresect, PRAC MORE kasi hirap parin and need magask sa AI

const observer = new IntersectionObserver(function(entries) {
// llist of all watched elemenrts ang "watched" na nachange visibilit
    entries.forEach(function(entry) {
    if (entry.isIntersecting) {
        entry.target.classList.add('show'); // css transition kapag show = (opacity + slide up)
        observer.unobserve(entry.target);  //animation only plays once
    }
});
}, { threshold: 0.1 }); //10% of the element is visible
// observe every .era elemnt
document.querySelectorAll('.era').forEach(function(el) {
    observer.observe(el);
});

// F2: Animated Number Counter , depeneds sa activity ng stats sec, then counts up numbers if kita
const statsObserver = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
    if (entry.isIntersecting) {
        runCounters();//count animation
        statsObserver.unobserve(entry.target); //once lang rin run
    }
});
}, { threshold: 0.4 });

statsObserver.observe(document.getElementById('stats'));// ma ffilter out any element na may id="stats"

function runCounters() {//find elements naman na may datatarget att
    document.querySelectorAll('[data-target]').forEach(function(el) {
    var target  = parseFloat(el.dataset.target);  //final num
    var suffix  = el.dataset.suffix || '';         //"B" or "M+"
    var isFloat = (target % 1 !== 0);              //deci
    var current = 0;
    var step    = target / 60;                     //add per tick
    // help AI to run fucntion repeteadly every milisec kada ni rerefresh web
    var timer = setInterval(function() {
        current = Math.min(current + step, target);  // Update the visible text
        el.textContent = isFloat
        ? current.toFixed(1) + suffix   // expale"5.5B"
        : Math.floor(current) + suffix;
        if (current >= target) {
        clearInterval(timer); //else if mareach ang goal
        }
    }, 25); //40x per sec in smooth animation
});
}
//F3: Toggle Preview Panel Open/Closed -> onclick="togglePreview(this)" on each button

function togglePreview(btn) {//btn if maclick mapapass fucntiond duto
    var panel  = btn.nextElementSibling;// nextElementSibling = html element na kasunod ng btn

    var isOpen = panel.classList.toggle('open');// Returns true if "open" was ADDED, false if REMOVED
    btn.classList.toggle('open', isOpen);// sync button open class
    btn.querySelector('.arrow').textContent = isOpen ? '▴' : '▾';//useless
}


// f4: Switch Tabs (Code / Stats) -> onclick="switchTab(this, 'c1')" 

function switchTab(btn, paneId) {// btn clicked
    var inner = btn.closest('.preview-body');
    // specific affect sa mga tabs inside THIS cards only 
    inner.querySelectorAll('.tab').forEach(function(t) {  // quit tabs
    t.classList.remove('active');
    });
    inner.querySelectorAll('.pane').forEach(function(p) { // deact panels din
    p.classList.remove('active');
    });
    btn.classList.add('active');  // click lang gagana

    document.getElementById(paneId).classList.add('active'); // specific activatiojn lang sa pane
}

// featuyre 5: Live Preview ─(!!! AI HELPPPPP !!!) EACH STYLE PER ERA
var livePreviews = {
// ERA 1 — Static Web (1991 style)
era1: `
<!DOCTYPE html>
<html>
<head>
    <title>Welcome to my Homepage!</title>
</head>
<body bgcolor="#ffffff" text="#000000">
    <h1>World Wide Web</h1>
    <hr>
    <p>Welcome to my homepage!</p>
    <p>This page is <b>under construction</b> </p>
    <hr>
    <a href="#">About Me</a> |
    <a href="#">My Links</a> |
    <a href="#">Email Me</a>
    <hr>
    <p><small>Best viewed in Netscape Navigator 2.0</small></p>
    <p><small>You are visitor number: 000421</small></p>
</body>
</html>
`,

era2: `
<!DOCTYPE html>
<html>
<head>
<title>★ MY AWESOME SITE ★</title>
<style>
    /* Spinning star GIF simulation */
    @keyframes spin {
    from { transform: rotate(0deg) scale(1); }
    to   { transform: rotate(360deg) scale(1.2); }
    }
    @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
    }
    @keyframes rainbow {
    0%   { color: #FF0000; }
    16%  { color: #FF8800; }
    33%  { color: #FFFF00; }
    50%  { color: #00FF00; }
    66%  { color: #0088FF; }
    83%  { color: #8800FF; }
    100% { color: #FF0000; }
    }
    @keyframes bounce {
    0%,100% { transform: translateY(0); }
    50%      { transform: translateY(-10px); }
    }

    body {
    background-color: #000080;
    color: #FFFF00;
    font-family: 'Comic Sans MS', cursive;
    text-align: center;
    margin: 0;
    padding: 20px;
    }

    /* Simulated spinning GIF — pure CSS */
    .fake-gif {
    width: 80px;
    height: 80px;
    background: linear-gradient(45deg,
        #FF0000, #FFFF00, #00FF00, #0000FF, #FF00FF);
    border-radius: 50%;
    display: inline-block;
    animation: spin 1s linear infinite;
    margin: 10px;
    border: 3px solid #FFFF00;
    box-shadow: 0 0 20px #FF0000;
    }

    /* Simulated dancing baby — bouncing emoji */
    .dancing-baby {
    font-size: 50px;
    display: inline-block;
    animation: bounce 0.4s ease infinite;
    margin: 5px 15px;
    }

    /* Simulated spinning globe */
    .globe {
    font-size: 50px;
    display: inline-block;
    animation: spin 3s linear infinite;
    margin: 5px 15px;
    }

    .blink-text {
    animation: blink 0.8s step-start infinite;
    color: #FF0000;
    font-size: 22px;
    font-weight: bold;
    }

    .rainbow-text {
    animation: rainbow 1s linear infinite;
    font-size: 18px;
    font-weight: bold;
    }

    marquee {
    color: #FF0000;
    font-size: 18px;
    font-weight: bold;
    }

    hr { border-color: red; border-width: 4px; }

    .counter {
    color: #FF0000;
    font-size: 22px;
    font-weight: bold;
    }

    .under-construction {
    font-size: 24px;
    animation: rainbow 1s linear infinite;
    font-weight: bold;
    padding: 10px;
    border: 3px dashed #FF0000;
    display: inline-block;
    margin: 10px auto;
    }
</style>
</head>
<body>

<marquee scrollamount="8">
    🌟 WELCOME TO MY AWESOME HOMEPAGE — EST. 1999 🌟
</marquee>

<!-- Simulated animated GIFs using CSS -->
<div>
    <div class="fake-gif"></div>
    <span class="dancing-baby">🕺</span>
    <span class="globe">🌍</span>
    <div class="fake-gif"></div>
</div>
<div class="under-construction">
    ★★★ UNDER CONSTRUCTION ★★★
</div>
<br>
<div class="blink-text">
    *** CLICK HERE FOR FREE iPod!!! ***
</div>
<br>
<marquee scrollamount="3" direction="right">
    💥 HOT SITE — YOU WON'T BELIEVE WHAT'S INSIDE 💥
</marquee>

<hr
<p>You are visitor number:
    <span class="counter">000420</span>
</p>

<p class="rainbow-text">
    Sign my GuestBook!! Leave a comment!!
</p>
<br>
<p style="color:#00FFFF;">
    <a href="#" style="color:#FF00FF;">My Photos</a> |
    <a href="#" style="color:#FF00FF;">My Friends</a> |
    <a href="#" style="color:#FF00FF;">My Music</a> |
    <a href="#" style="color:#FF00FF;">Sign Guestbook</a>
</p>
<hr>
<p style="color:#CCCCCC; font-size:11px;">
    Best viewed in Internet Explorer 5.0 at 800x600 resolution
    <br>
    © 1999 MyAwesomeSite.geocities.com — All Rights Reserved Maybe
</p>
</body>
</html>
`,
era3: `
<!DOCTYPE html>
<html>
<head>
    <title>MyBlog 2.0</title>
    <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: Arial, sans-serif;
            background: #f0f0f0; color: #333; }
    #header { background: #3b5998; color: white;
                padding: 10px 20px; }
    #header h1 { font-size: 22px; }
    #nav { background: #2d4373; padding: 6px 20px; }
    #nav a { color: #adc0e6; text-decoration: none;
                margin-right: 15px; font-size: 13px; }
    #main { display: flex; gap: 16px;
            padding: 16px 20px; }
    #feed { flex: 1; }
    #sidebar { width: 200px; }
    .post { background: white; border: 1px solid #ddd;
            padding: 14px; margin-bottom: 12px;
            border-radius: 4px; }
    .post h2 { font-size: 15px; color: #3b5998;
                margin-bottom: 6px; }
    .post p { font-size: 13px; color: #555;
                line-height: 1.5; }
    .post-meta { font-size: 11px; color: #999;
                    margin-top: 8px; }
    .widget { background: white; border: 1px solid #ddd;
                padding: 12px; margin-bottom: 12px;
                border-radius: 4px; }
    .widget h3 { font-size: 13px; color: #3b5998;
                    margin-bottom: 8px; border-bottom: 1px solid #eee;
                    padding-bottom: 4px; }
    .widget ul { font-size: 12px; color: #555;
                    padding-left: 16px; }
    .widget li { margin-bottom: 4px; }
    .tag { display: inline-block; background: #e0e0e0;
            padding: 2px 8px; border-radius: 10px;
            font-size: 11px; margin: 2px; color: #333; }
    #footer { background: #ddd; text-align: center;
                padding: 10px; font-size: 11px; color: #777; }
    </style>
</head>
<body>
    <div id="header">
    <h1>📝 MyBlog — Web 2.0 Style</h1>
    </div>
    <div id="nav">
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Archive</a>
    <a href="#">RSS Feed</a>
    </div>
    <div id="main">
    <div id="feed">
        <div class="post">
        <h2>AJAX is changing everything</h2>
        <p>I just tried Gmail and the page updates
            without refreshing. This is the future
            of web development. jQuery makes it so easy!</p>
        <div class="post-meta">
            Posted by admin · 47 comments · ♥ 312 likes
        </div>
        </div>
        <div class="post">
        <h2>YouTube launched today!</h2>
        <p>You can now upload and share videos
            directly in the browser. The web will
            never be the same after this.</p>
        <div class="post-meta">
            Posted by admin · 23 comments · ♥ 198 likes
        </div>
        </div>
    </div>
    <div id="sidebar">
        <div class="widget">
        <h3>Tags</h3>
        <span class="tag">ajax</span>
        <span class="tag">web2.0</span>
        <span class="tag">jquery</span>
        <span class="tag">rss</span>
        <span class="tag">blog</span>
        </div>
        <div class="widget">
        <h3>Blogroll</h3>
        <ul>
            <li>TechCrunch</li>
            <li>Lifehacker</li>
            <li>Digg</li>
            <li>Slashdot</li>
        </ul>
        </div>
    </div>
    </div>
    <div id="footer">
    Powered by WordPress · RSS · ©2006 MyBlog
    </div>
</body>
</html>
`,
era4: `
<!DOCTYPE html>
<html>
<head>
    <title>AppUI — Modern Web App</title>
    <meta name="viewport"
        content="width=device-width, initial-scale=1.0">
    <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont,
            'Segoe UI', sans-serif;
            background: #f5f5f5; color: #333; }
    nav { background: #fff; padding: 14px 20px;
            border-bottom: 1px solid #e0e0e0;
            display: flex; align-items: center;
            justify-content: space-between;
            box-shadow: 0 1px 4px rgba(0,0,0,0.08); }
    nav h1 { font-size: 18px; font-weight: 600;
                color: #1a73e8; }
    nav .btn { background: #1a73e8; color: white;
                border: none; padding: 8px 18px;
                border-radius: 20px; font-size: 13px;
                cursor: pointer; }
    .hero { background: linear-gradient(135deg,
            #1a73e8, #0d47a1);
            color: white; padding: 40px 20px;
            text-align: center; }
    .hero h2 { font-size: 26px; margin-bottom: 10px; }
    .hero p { font-size: 14px; opacity: 0.85; }
    .cards { display: grid;
                grid-template-columns: repeat(3, 1fr);
                gap: 14px; padding: 20px; }
    .card { background: white; border-radius: 8px;
            padding: 16px;
            box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
    .card h3 { font-size: 14px; font-weight: 600;
                margin-bottom: 6px; color: #1a73e8; }
    .card p { font-size: 12px; color: #666;
                line-height: 1.5; }
    .chip { display: inline-block;
            background: #e8f0fe; color: #1a73e8;
            font-size: 11px; padding: 3px 10px;
            border-radius: 12px; margin-top: 8px; }
    footer { text-align: center; padding: 16px;
                font-size: 11px; color: #aaa; }
    </style>
</head>
<body>
    <nav>
    <h1> AppUI</h1>
    <button class="btn">Sign In</button>
    </nav>
    <div class="hero">
    <h2>Built with React · Mobile First</h2>
    <p>Single Page App — no page reloads, ever.</p>
    </div>
    <div class="cards">
    <div class="card">
        <h3>Components</h3>
        <p>Reusable UI blocks built with React and props.</p>
        <span class="chip">React</span>
    </div>
    <div class="card">
        <h3>Responsive</h3>
        <p>Flexbox and Grid adapt to any screen size.</p>
        <span class="chip">CSS Grid</span>
    </div>
    <div class="card">
        <h3>REST API</h3>
        <p>JSON data fetched async — no server rendering.</p>
        <span class="chip">Node.js</span>
    </div>
    </div>
    <footer>Built with React · Vue · Angular · Node.js</footer>
</body>
</html>
`,
era5: `
    <!DOCTYPE html>
    <html>
    <head>
    <title>AI Assistant</title>
    <style>
        * { margin:0; padding:0; box-sizing:border-box; }
        body { font-family: 'Segoe UI', sans-serif;
            background: #0f0f13; color: #e0e0e0;
            height: 100vh; display: flex;
            flex-direction: column; }
        header { padding: 14px 20px;
                border-bottom: 1px solid #1e1e2e;
                display: flex; align-items: center;
                gap: 10px; background: #111118; }
        header .dot { width: 10px; height: 10px;
                    border-radius: 50%; background: #4ade80;
                    box-shadow: 0 0 8px #4ade80; }
        header span { font-size: 14px; font-weight: 600;
                    color: #fff; }
        header small { font-size: 11px; color: #555;
                    margin-left: auto; }
        .chat { flex: 1; overflow-y: auto;
                padding: 20px; display: flex;
                flex-direction: column; gap: 14px; }
        .msg { max-width: 80%; padding: 12px 16px;
            border-radius: 12px; font-size: 13px;
            line-height: 1.6; }
        .msg.user { background: #1a1a2e; color: #c8c8d8;
                    align-self: flex-end;
                    border: 1px solid #2a2a3e; }
        .msg.ai { background: #0d1f0d; color: #4ade80;
                align-self: flex-start;
                border: 1px solid #1a3a1a; }
        .msg.ai strong { color: #86efac; }
        .input-row { padding: 14px 20px;
                    border-top: 1px solid #1e1e2e;
                    background: #111118;
                    display: flex; gap: 10px; }
        .input-row input { flex: 1; background: #1a1a2e;
                        border: 1px solid #2a2a3e;
                        color: #e0e0e0; padding: 10px 14px;
                        border-radius: 8px; font-size: 13px;
                        outline: none; }
        .input-row button { background: #4ade80; color: #000;
                            border: none; padding: 10px 18px;
                            border-radius: 8px; font-size: 13px;
                            font-weight: 600; cursor: pointer; }
    </style>
</head>
<body>
    <header>
        <div class="dot"></div>
        <span>Claude — AI Assistant</span>
        <small>claude-sonnet-4-6 · online</small>
    </header>
    <div class="chat">
    <div class="msg user">
        How did the web evolve from 1991 to today?
    </div>
    <div class="msg ai">
        <strong>Great question!</strong> The web went through
        5 major eras:<br><br>
        1. <strong>Web 1.0 (1991)</strong> — static HTML pages,
        read-only<br>
        2. <strong>Dot-com (1999)</strong> — Flash, GIFs,
        chaos<br>
        3. <strong>Web 2.0 (2004)</strong> — AJAX, social
        media, UGC<br>
        4. <strong>Mobile (2012)</strong> — React, SPAs,
        responsive design<br>
        5. <strong>AI Web (2020)</strong> — LLMs, generative
        interfaces, this chat 
    </div>
    <div class="msg user">
        What comes next?
    </div>
    <div class="msg ai">
        The <strong>Post-Browser Web</strong> — spatial
        computing, AR overlays, and AI that builds its own
        interfaces on demand. The browser as we know it
        may not survive.
    </div>
    </div>
    <div class="input-row">
    <input type="text"
            placeholder="Ask me anything about the web...">
    <button>Send</button>
    </div>
</body>
</html>
`
};

//live preview maoopen sa new tab parang naka target attrivute na a link href
function openLivePreview(eraKey) {
  var html    = livePreviews[eraKey]; // get HTML string
  var newTab  = window.open(); //new blank tab openm
    newTab.document.open();
    newTab.document.write(html); 
    newTab.document.close(); // close stream then render
} // SINAMA SAMA KO NA PO CODE SA ISANG FILE KASI DKO NA PO MAORGANIZE GAWAT KAPOS NA PO SA TIME SIR
// short docum,entation lang din po for improvment and more practice, kaya po may js and css para po malagay ko//
// din po sa portfolio ko po ang personal project po na ito kahit di pa po functional para po sa lahat, thank you po and God bless!