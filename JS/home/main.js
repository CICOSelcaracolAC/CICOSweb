let menu= document.getElementById("navigation");
let btnmenu = document.getElementById("btnmenu");
let menuchecker = 0; 
let menuicon = document.getElementById("menu-icon");

btnmenu.addEventListener("click", function(){
    if (menuchecker == 0){
        menu.classList.remove("menu--unshow");
        menu.className = ("menu--show");
        menuchecker = 1;
        // 
        btnmenu.style.backgroundColor = ("#ffffff");
        menuicon.style.color=("var(--yellowx)");
    }
    else{
        menu.classList.remove("menu--show");
        menu.className = ("menu--unshow");
        menuchecker = 0;
        // 
        btnmenu.style.backgroundColor = ("var(--yellowx)");
        menuicon.style.color=("#ffffff");
    }
});

// SLIDER
        // 
        let pag_eins = document.getElementById("pagination_eins");
        let pag_zwei = document.getElementById("pagination_zwei");
        let pag_drei = document.getElementById("pagination_drei");
        // 
        let slide = document.getElementById("slide");
        //
        let slider_status = 0;

        pag_eins.addEventListener("click", function(){
            if(slider_status == 0){
                pag_eins.style.backgroundColor=("var(--bluex)");
                slide.classList.remove("s--animated");
                slide.className = ("slider s--nonanimated");
                slide.style.transform=("translateX(0)");
                slider_status=1;
                pag_zwei.style.pointerEvents = ("none");
                pag_drei.style.pointerEvents = ("none");
            }
            else{
                pag_eins.style.backgroundColor=("var(--yellowx)");
                slide.classList.remove("s--nonanimated");
                slide.className = ("slider s--animated");
                slider_status = 0;
                pag_zwei.style.pointerEvents = ("all");
                pag_drei.style.pointerEvents = ("all");
            }
        });
        
        pag_zwei.addEventListener("click", function(){
            if(slider_status == 0){
                pag_zwei.style.backgroundColor=("var(--bluex)");
                slide.classList.remove("s--animated");
                slide.className = ("slider s--nonanimated");
                slide.style.transform=("translateX(-100%)");
                slider_status=1;
                pag_eins.style.pointerEvents = ("none");
                pag_drei.style.pointerEvents = ("none");
            }
            else{
                pag_zwei.style.backgroundColor=("var(--yellowx)");
                slide.classList.remove("s--nonanimated");
                slide.className = ("slider s--animated");
                slider_status = 0;
                pag_eins.style.pointerEvents = ("all");
                pag_drei.style.pointerEvents = ("all");
            }
        });
        
        pag_drei.addEventListener("click", function(){
            if(slider_status == 0){
                pag_drei.style.backgroundColor=("var(--bluex)");
                slide.classList.remove("s--animated");
                slide.className = ("slider s--nonanimated");
                slide.style.transform=("translateX(-200%)");
                slider_status=1;
                pag_zwei.style.pointerEvents = ("none");
                pag_eins.style.pointerEvents = ("none");
            }
            else{
                pag_drei.style.backgroundColor=("var(--yellowx)");
                slide.classList.remove("s--nonanimated");
                slide.className = ("slider s--animated");
                slider_status = 0;
                pag_zwei.style.pointerEvents = ("all");
                pag_eins.style.pointerEvents = ("all");
            }
        });
        

// 


// 

