// CARDS
let card_status_1 = 0;
let card_status_2 = 0;
let card_status_3 = 0;
let card_status_4 = 0;
let card_status_5 = 0;
let card_status_6 = 0;
let card_status_7 = 0;
let card_status_8 = 0;
let card_status_9 = 0;
let card_status_0 = 0;
// 
let dc1 = document.getElementById("dc-1");
let dc2 = document.getElementById("dc-2");
let dc3 = document.getElementById("dc-3");
let dc4 = document.getElementById("dc-4");
let dc5 = document.getElementById("dc-5");
let dc6 = document.getElementById("dc-6");
let dc7 = document.getElementById("dc-7");
let dc8 = document.getElementById("dc-8");
let dc9 = document.getElementById("dc-9");
let dc0 = document.getElementById("dc-0");
// 
let dco1 = document.getElementById("dco-1");
let dco2 = document.getElementById("dco-2");
let dco3 = document.getElementById("dco-3");
let dco4 = document.getElementById("dco-4");
let dco5 = document.getElementById("dco-5");
let dco6 = document.getElementById("dco-6");
let dco7 = document.getElementById("dco-7");
let dco8 = document.getElementById("dco-8");
let dco9 = document.getElementById("dco-9");
let dco0 = document.getElementById("dco-0");
// 
let idco1 = document.getElementById("idco-1");
let idco2 = document.getElementById("idco-2");
let idco3 = document.getElementById("idco-3");
let idco4 = document.getElementById("idco-4");
let idco5 = document.getElementById("idco-5");
let idco6 = document.getElementById("idco-6");
let idco7 = document.getElementById("idco-7");
let idco8 = document.getElementById("idco-8");
let idco9 = document.getElementById("idco-9");
let idco0 = document.getElementById("idco-0");
// 
dco1.addEventListener("click", function(){
if(card_status_1 == 0){
dc1.classList.remove("dc1--unshow");
dc1.classList.add("dc1--show");
card_status_1 = 1;
// 
idco1.classList.remove("idco1--unrotate");
idco1.classList.add("idco1--rotate");
idco1.style.color=("var(--yellowx)");
dco1.style.backgroundColor=("#fff");
}
else{
dc1.classList.remove("dc1--show");
dc1.classList.add("dc1--unshow");
card_status_1 = 0;
// 
idco1.classList.remove("idco1--rotate");
idco1.classList.add("idco1--unrotate");
idco1.style.color=("#fff");
dco1.style.backgroundColor=("var(--yellowx)");
}
});

dco2.addEventListener("click", function(){
    if(card_status_2 == 0){
    dc2.classList.remove("dc2--unshow");
    dc2.classList.add("dc2--show");
    card_status_2 = 1;
    // 
    idco2.classList.remove("idco2--unrotate");
    idco2.classList.add("idco2--rotate");
    idco2.style.color=("var(--yellowx)");
    dco2.style.backgroundColor=("#fff");
    }
    else{
    dc2.classList.remove("dc2--show");
    dc2.classList.add("dc2--unshow");
    card_status_2 = 0;
    // 
    idco2.classList.remove("idco2--rotate");
    idco2.classList.add("idco2--unrotate");
    idco2.style.color=("#fff");
    dco2.style.backgroundColor=("var(--yellowx)");
    }
    });

    dco3.addEventListener("click", function(){
        if(card_status_3 == 0){
        dc3.classList.remove("dc3--unshow");
        dc3.classList.add("dc3--show");
        card_status_3 = 1;

        // 
        idco3.classList.remove("idco3--unrotate");
        idco3.classList.add("idco3--rotate");
        idco3.style.color=("var(--yellowx)");
        dco3.style.backgroundColor=("#fff");
        }
        else{
        dc3.classList.remove("dc3--show");
        dc3.classList.add("dc3--unshow");
        card_status_3 = 0;
        // 
        idco3.classList.remove("idco3--rotate");
        idco3.classList.add("idco3--unrotate");
        idco3.style.color=("#fff");
        dco3.style.backgroundColor=("var(--yellowx)");
        }
        });

        dco4.addEventListener("click", function(){
            if(card_status_4 == 0){
            dc4.classList.remove("dc4--unshow");
            dc4.classList.add("dc4--show");
            card_status_4 = 1;
            // 
            idco4.classList.remove("idco4--unrotate");
            idco4.classList.add("idco4--rotate");
            idco4.style.color=("var(--yellowx)");
            dco4.style.backgroundColor=("#fff");
            }
            else{
            dc4.classList.remove("dc4--show");
            dc4.classList.add("dc4--unshow");
            card_status_4 = 0;
            // 
            idco4.classList.remove("idco4--rotate");
            idco4.classList.add("idco4--unrotate");
            idco4.style.color=("#fff");
            dco4.style.backgroundColor=("var(--yellowx)");
            }
            });
        
            dco5.addEventListener("click", function(){
                if(card_status_5 == 0){
                dc5.classList.remove("dc5--unshow");
                dc5.classList.add("dc5--show");
                card_status_5 = 16
                // 
                idco5.classList.remove("idco5--unrotate");
                idco5.classList.add("idco5--rotate");
                idco5.style.color=("var(--yellowx)");
                dco5.style.backgroundColor=("#fff");
                }
                else{
                dc5.classList.remove("dc5--show");
                dc5.classList.add("dc5--unshow");
                card_status_5 = 0;
                // 
                idco5.classList.remove("idco5--rotate");
                idco5.classList.add("idco5--unrotate");
                idco5.style.color=("#fff");
                dco5.style.backgroundColor=("var(--yellowx)");
                }
                });

                dco6.addEventListener("click", function(){
                    if(card_status_6 == 0){
                    dc6.classList.remove("dc6--unshow");
                    dc6.classList.add("dc6--show");
                    card_status_6 = 1;
                    // 
                    idco6.classList.remove("idco6--unrotate");
                    idco6.classList.add("idco6--rotate");
                    idco6.style.color=("var(--yellowx)");
                    dco6.style.backgroundColor=("#fff");
                    }
                    else{
                    dc6.classList.remove("dc6--show");
                    dc6.classList.add("dc6--unshow");
                    card_status_6 = 0;
                    // 
                    idco6.classList.remove("idco6--rotate");
                    idco6.classList.add("idco6--unrotate");
                    idco6.style.color=("#fff");
                    dco6.style.backgroundColor=("var(--yellowx)");
                    }
                    });

                    dco7.addEventListener("click", function(){
                        if(card_status_7 == 0){
                        dc7.classList.remove("dc7--unshow");
                        dc7.classList.add("dc7--show");
                        card_status_7 = 1;
                        // 
                        idco7.classList.remove("idco7--unrotate");
                        idco7.classList.add("idco7--rotate");
                        idco7.style.color=("var(--yellowx)");
                        dco7.style.backgroundColor=("#fff");
                        }
                        else{
                        dc7.classList.remove("dc7--show");
                        dc7.classList.add("dc7--unshow");
                        card_status_7 = 0;
                        // 
                        idco7.classList.remove("idco7--rotate");
                        idco7.classList.add("idco7--unrotate");
                        idco7.style.color=("#fff");
                        dco7.style.backgroundColor=("var(--yellowx)");
                        }
                        });

                        dco8.addEventListener("click", function(){
                            if(card_status_8 == 0){
                            dc8.classList.remove("dc8--unshow");
                            dc8.classList.add("dc8--show");
                            card_status_8 = 1;
                            // 
                            idco8.classList.remove("idco8--unrotate");
                            idco8.classList.add("idco8--rotate");
                            idco8.style.color=("var(--yellowx)");
                            dco8.style.backgroundColor=("#fff");
                            }
                            else{
                            dc8.classList.remove("dc8--show");
                            dc8.classList.add("dc8--unshow");
                            card_status_8 = 0;
                            // 
                            idco8.classList.remove("idco8--rotate");
                            idco8.classList.add("idco8--unrotate");
                            idco8.style.color=("#fff");
                            dco8.style.backgroundColor=("var(--yellowx)");
                            }
                            });

                    dco9.addEventListener("click", function(){
                        if(card_status_9 == 0){
                        dc9.classList.remove("dc9--unshow");
                        dc9.classList.add("dc9--show");
                        card_status_9 = 1;
                        //9
                        idco9.classList.remove("idco9--unrotate");
                        idco9.classList.add("idco9--rotate");
                        idco9.style.color=("var(--yellowx)");
                        dco9.style.backgroundColor=("#fff");
                        }
                        else{
                        dc9.classList.remove("dc9--show");
                        dc9.classList.add("dc9--unshow");
                        card_status_9 = 0;
                        // 
                        idco9.classList.remove("idco9--rotate");
                        idco9.classList.add("idco9--unrotate");
                        idco9.style.color=("#fff");
                        dco9.style.backgroundColor=("var(--yellowx)");
                        }
                        });
                        
                        dco0.addEventListener("click", function(){
                            if(card_status_0 == 0){
                            dc0.classList.remove("dc0--unshow");
                            dc0.classList.add("dc0--show");
                            card_status_0 = 1;
                            // 
                            idco0.classList.remove("idco0--unrotate");
                            idco0.classList.add("idco0--rotate");
                            idco0.style.color=("var(--yellowx)");
                            dco0.style.backgroundColor=("#fff");
                            }
                            else{
                            dc0.classList.remove("dc0--show");
                            dc0.classList.add("dc0--unshow");
                            card_status_0 = 0;
                            // 
                            idco0.classList.remove("idco0--rotate");
                            idco0.classList.add("idco0--unrotate");
                            idco0.style.color=("#fff");
                            dco0.style.backgroundColor=("var(--yellowx)");
                            }
                            });




