const t={sction:document.querySelector(".section-products"),img:document.querySelectorAll(".card__touch")};let e=null,r=null;function c(){e[1].style.transform="rotateY(0deg)",e[2].style.transform="rotateY(180deg)",e[1].classList.remove("activ-card")}t.sction.addEventListener("click",(o=>{const s=o.target.closest(".card");if(!s)return c(),void a();if(o.target.closest(".activ-card"))return c(),s.classList.remove("activ-card"),void a();document.querySelector(".activ-card")&&(c(),a()),r=s,e=s.children,s.classList.add("activ-card"),e[1].style.transform="rotateY(180deg)",e[2].style.transform="rotateY(360deg)";for(const e of t.img)e.remove();function a(){r.classList.remove("activ-card")}}));
//# sourceMappingURL=index.996e64da.js.map