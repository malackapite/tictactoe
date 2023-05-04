import { Jatek } from "./Jatek.js";

$(function () {
   new Jatek()
})


//     function game(ix){
//     if(document.getElementsByTagName("div")[ix].innerHTML=="")
//     {    
//     if(player)
//             {
//                 document.getElementsByTagName("div")[ix].innerHTML="X"
//                 lista[ix]="X"
//                 player--
                
//             }
//         else{
//                 document.getElementsByTagName("div")[ix].innerHTML="O"
//                 lista[ix]="O"
//                 player++
                
//             }
//         ellenorzes()
//     }
// }

// function ellenorzes()
// {
//    sorEll();
//    oszlopEll();
//    fugEll();
// }

// function sorEll()
// {
//     var Xnyer=true;
//     var Onyer=true;

//     for(let ix=0;ix<3;ix++)
//     {
//         Xnyer=true;
//         Onyer=true;
//         for(let jx=0;jx<3;jx++)
//         {
            
//             if(lista[3*ix+jx]!="X")
//                 Xnyer=false;
//             if(lista[3*ix+jx]!="O")
//                 Onyer=false;
//         }
//         if(Onyer || Xnyer)
//             break;
//     }
//     if(Xnyer)
//         console.log("X nyert")
//     else if(Onyer)
//         console.log("O nyert")
// }

// function oszlopEll(){
//     var Xnyer=true;
//     var Onyer=true;

//     for(let ix=0;ix<3;ix++)
//     {
//         Xnyer=true;
//         Onyer=true;
//         for(let jx=0;jx<3;jx++)
//         {
            
//             if(lista[ix+3*jx]!="X")
//                 Xnyer=false;
//             if(lista[ix+3*jx]!="O")
//                 Onyer=false;
//         }
//         if(Onyer || Xnyer)
//             break;
//     }
//     if(Xnyer)
//         console.log("X nyert")
//     else if(Onyer)
//         console.log("O nyert")
// }

// function fugEll(){
//     var Xnyer=true;
//     var Onyer=true;

//     for(let ix=0;ix<3;ix++)
//     {     
          
//         if(lista[ix+3*ix]!="X")
//             Xnyer=false;
//         if(lista[ix+3*ix]!="O")
//             Onyer=false;
//     }
    
//     if(Xnyer)
//         console.log("X nyert")
//     else if(Onyer)
//         console.log("O nyert")

//         Xnyer=true;
//         Onyer=true;
//         for(let ix=0;ix<3;ix++)
//         {
//             if(lista[(3-ix)+3*(ix)-1]!="X")
//                 Xnyer=false;
//             if(lista[(3-ix)+3*(ix)-1]!="O")
//                 Onyer=false;
//         }
//     if(Xnyer)
//         console.log("X nyert")
//     else if(Onyer)
//         console.log("O nyert")

    
// }