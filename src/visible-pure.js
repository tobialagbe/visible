"use strict";


class Visible {
    
    constructor(config){
       
        if(config){
            this.full = config.full;
        }else{
            this.full = false;
        }

    };



    isVisible(id){

        let windowScroll = (window.pageYOffset || document.documentElement.scrollTop)  - (document.documentElement.clientTop || 0);
        let element = document.getElementById(id);
        let elemOffset = element.getBoundingClientRect().top + windowScroll;
        var elemHeight = element.offsetHeight;
        let windowHeight = window.innerHeight;
        let fullOffset = elemOffset + elemHeight;

        return this.eval(elemOffset,windowScroll,fullOffset,elemHeight,windowHeight);
    }



    eval(elemOffset,windowScroll,fullOffset,elemHeight,windowHeight){
        
        if (this.full == true) {
            
            if (windowScroll >= ((elemOffset-windowHeight)+elemHeight) && windowScroll < fullOffset) {
                return true;
            }else{
                return false;
            }

        }else{
            
            if (windowScroll >= (elemOffset-windowHeight) && windowScroll < fullOffset) {
                return true;
            }else{
                return false;
            }

        }
    
    }



   }