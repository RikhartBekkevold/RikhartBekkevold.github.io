"use strict";var article_headings=document.querySelectorAll(".article h1, .article h2, .article h3, .article h4, .article h5, .article h6"),overview_menu=document.querySelectorAll(".menu ul li a");document.addEventListener("scroll",function(){for(var a=null,b=0;b<article_headings.length&&!(article_headings[b].getBoundingClientRect().top>innerHeight/10);b++)a=article_headings[b];overview_menu.forEach(function(b){a.id===b.getAttribute("data-attri")?b.classList.add("hl"):b.classList.remove("hl")})});