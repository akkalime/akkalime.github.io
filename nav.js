document.getElementById('nav').innerHTML = `
<!-- Navigation -->
<input type="checkbox" id="menu">
<label for="menu" class="menu-icon">
<div class="navbutton">
    <span class="navicon" aria-label="mobile menu icon"></span>
</div>
</label>
<nav id="navigation">
<ul>
    <li><a href="/">home</a></li>
    <li><a href="/about">about</a></li>
    <li><a href="/portfolio">portfolio</a></li>
    <li><a href="/commissions">commissions</a></li>
    <li><a href="/terms-of-service">tos</a></li>
    <li><a href="mailto:akkalime@gmail.com" target="_blank">contact</a></li>
</ul>
</nav>
`;