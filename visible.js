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
        let element = document.getElementById(this.id);
        let elemOffset = $(`#${id}`).offset();
        let elemHeight = $(`#${id}`).outerHeight();
        let windowHeight = $(window).height();
        let fullOffset = elemOffset.top + elemHeight;
        let windowScroll = $(window).scrollTop();

        return this.eval(elemOffset.top,windowScroll,fullOffset,elemHeight,windowHeight);
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