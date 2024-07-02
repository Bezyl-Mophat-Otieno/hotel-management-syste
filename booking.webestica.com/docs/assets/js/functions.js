/**
* Booking - Multipurpose Online Booking Theme
*
* @author Webestica (https://www.webestica.com/)
* 
**/

/* ===================
Table Of Content
======================
01 PRELOADER
02 GLIGHTBOX
03 CHOICES
04 ACTIVE CLASS
05 FLATPICKER
06 GUEST SELECTOR
07 NOUISLIDER
08 SIMPLE SCROLLBAR
09 TINY SLIDER
10 Parallax Background
====================== */

"use strict";
!function () {

    window.Element.prototype.removeClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.remove(className);
        }
        return this;
    }, window.Element.prototype.addClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.add(className);
        }
        return this;
    }, window.Element.prototype.toggleClass = function () {
        let className = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
            selectors = this;
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (this.isVariableDefined(selectors) && className) {
            selectors.classList.toggle(className);
        }
        return this;
    }, window.Element.prototype.isVariableDefined = function () {
        return !!this && typeof (this) != 'undefined' && this != null;
    }
}();


var e = {
    init: function () {
        e.preLoader(),
        e.lightBox(),
        e.choicesSelect(),
        e.activeClass(),
        e.flatPicker(),
        e.guestSelector(),
        e.rangeSlider(),
        e.sScrollbar(),
        e.tinySlider(),
        e.parallaxBG();
    },
    isVariableDefined: function (el) {
        return typeof !!el && (el) != 'undefined' && el != null;
    },
    getParents: function (el, selector, filter) {
        const result = [];
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;

        // match start from parent
        el = el.parentElement;
        while (el && !matchesSelector.call(el, selector)) {
            if (!filter) {
                if (selector) {
                    if (matchesSelector.call(el, selector)) {
                        return result.push(el);
                    }
                } else {
                    result.push(el);
                }
            } else {
                if (matchesSelector.call(el, filter)) {
                    result.push(el);
                }
            }
            el = el.parentElement;
            if (e.isVariableDefined(el)) {
                if (matchesSelector.call(el, selector)) {
                    return el;
                }
            }

        }
        return result;
    },
    getNextSiblings: function (el, selector, filter) {
        let sibs = [];
        let nextElem = el.parentNode.firstChild;
        const matchesSelector = el.matches || el.webkitMatchesSelector || el.mozMatchesSelector || el.msMatchesSelector;
        do {
            if (nextElem.nodeType === 3) continue; // ignore text nodes
            if (nextElem === el) continue; // ignore elem of target
            if (nextElem === el.nextElementSibling) {
                if ((!filter || filter(el))) {
                    if (selector) {
                        if (matchesSelector.call(nextElem, selector)) {
                            return nextElem;
                        }
                    } else {
                        sibs.push(nextElem);
                    }
                    el = nextElem;

                }
            }
        } while (nextElem = nextElem.nextSibling)
        return sibs;
    },
    on: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            if (!(selectors instanceof HTMLElement) && selectors !== null) {
                selectors = document.querySelector(selectors);
            }
            selectors.addEventListener(type, listener);
        });
    },
    onAll: function (selectors, type, listener) {
        document.addEventListener("DOMContentLoaded", () => {
            document.querySelectorAll(selectors).forEach((element) => {
                if (type.indexOf(',') > -1) {
                    let types = type.split(',');
                    types.forEach((type) => {
                        element.addEventListener(type, listener);
                    });
                } else {
                    element.addEventListener(type, listener);
                }


            });
        });
    },
    removeClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.removeClass(className);
        }
    },
    removeAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors) && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.removeClass(className);
            });
        }

    },
    toggleClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.toggleClass(className);
        }
    },
    toggleAllClass: function (selectors, className) {
        if (e.isVariableDefined(selectors)  && (selectors instanceof HTMLElement)) {
            document.querySelectorAll(selectors).forEach((element) => {
                element.toggleClass(className);
            });
        }
    },
    addClass: function (selectors, className) {
        if (!(selectors instanceof HTMLElement) && selectors !== null) {
            selectors = document.querySelector(selectors);
        }
        if (e.isVariableDefined(selectors)) {
            selectors.addClass(className);
        }
    },
    select: function (selectors) {
        return document.querySelector(selectors);
    },
    selectAll: function (selectors) {
        return document.querySelectorAll(selectors);
    },

    // START: 01 Preloader
    preLoader: function () {
        window.onload = function () {
            var preloader = e.select('.preloader');
            if (e.isVariableDefined(preloader)) {
                preloader.className += ' animate__animated animate__fadeOut';
                setTimeout(function(){
                    preloader.style.display = 'none';
                }, 200);
            }
        };
    },
    // END: Preloader

    // START: 02 GLightbox
    lightBox: function () {
        var light = e.select('[data-glightbox]');
        if (e.isVariableDefined(light)) {
            var lb = GLightbox({
                selector: '*[data-glightbox]',
                openEffect: 'fade',
                closeEffect: 'fade'
            });
        }
    },
    // END: GLightbox

    // START: 03 Choices
    choicesSelect: function () {
       var choice = e.select('.js-choice');
       
       if (e.isVariableDefined(choice)) {
         var element = document.querySelectorAll('.js-choice');

         element.forEach(function (item) {
           var removeItemBtn = item.getAttribute('data-remove-item-button') == 'true' ? true : false;
           var placeHolder = item.getAttribute('data-placeholder') == 'false' ? false : true;
           var placeHolderVal = item.getAttribute('data-placeholder-val') ? item.getAttribute('data-placeholder-val') : 'Type and hit enter';
           var maxItemCount = item.getAttribute('data-max-item-count') ? item.getAttribute('data-max-item-count') : 3;
           var searchEnabled = item.getAttribute('data-search-enabled') == 'false' ? false : true;

           var choices = new Choices(item, {
               removeItemButton: removeItemBtn,
               placeholder: placeHolder,
               placeholderValue: placeHolderVal,
               maxItemCount: maxItemCount,
               searchEnabled: searchEnabled
           });

         });
       }
    },
    // END: Choices

    // START: 04 Active class
    activeClass: function () {
      var currentPath = window.location.pathname;
      var path = currentPath.split("/").pop();

      var d = e.select(".navbar .left-sidebar");
      if(e.isVariableDefined(d)) {
        var hTarget = e.select('.left-sidebar .list-group-borderless .list-group-item[href="'+path+'"]');

        if(e.isVariableDefined(hTarget)) {
          var hh = hTarget.getAttribute("href");

          if(path === hh) {
            hTarget.classList.add('active');
          }
        }
      }
    },
    // END: Active class

    // START: 05 Flatpicker
    flatPicker: function () {

      var picker = e.select('.flatpickr');
      if (e.isVariableDefined(picker)) {
        var element = e.selectAll('.flatpickr');
        element.forEach(function (item) {
          var mode = item.getAttribute('data-mode') == 'multiple' ? 'multiple' : item.getAttribute('data-mode') == 'range' ? 'range' : 'single';
          var enableTime = item.getAttribute('data-enableTime') == 'true' ? true : false;
          var noCalendar = item.getAttribute('data-noCalendar') == 'true' ? true : false;
          var inline = item.getAttribute('data-inline') == 'true' ? true : false;
          var dateFormat = item.getAttribute('data-date-format') ? item.getAttribute('data-date-format') : item.getAttribute('data-enableTime') == 'true' ? "h:i K" : "d M";

          flatpickr(item, {
            mode: mode,
            enableTime: enableTime,
            noCalendar: noCalendar,
            inline: inline,
            animate: "false",
            position: "top",
            dateFormat: dateFormat, //Check supported characters here: https://flatpickr.js.org/formatting/
            disableMobile: "true"
          });

        });
      }
    },
    // END: Flatpicker

    // START: 06 Guest Selector
    guestSelector: function () {
      if (e.isVariableDefined(e.select('.guest-selector'))) {

      let adults = 2;
      let child = 0;
      let rooms =1;
      let totalAdults = 2;

      let selectionResult = document.querySelector('.selection-result');

      let adultValue = document.querySelector('.adults');
      let adultAdd = document.querySelector('.adult-add');
      let adultRemove = document.querySelector('.adult-remove');

      let childValue = document.querySelector('.child');
      let childAdd = document.querySelector('.child-add');
      let childRemove = document.querySelector('.child-remove');

      let roomValue = document.querySelector('.rooms');
      let roomAdd = document.querySelector('.room-add');
      let roomRemove = document.querySelector('.room-remove');

      function addElement(type){
        if(type == 'adult'){
          adults++;
          totalAdults = adults + child;

          showElements();
        }else if(type == 'child'){
          child = child + 1;
          console.log(child);
          totalAdults = adults + child;

          showElements();
        }else if(type == 'room'){
          rooms++;
          
          showElements();
        }
      }

      function showElements(){
        adultValue.innerText = adults;
        childValue.innerText = child;
        roomValue.innerText = rooms;

        let roomText = rooms > 1 ? 'Rooms' : 'Room';
        let guestText = totalAdults > 1 ? 'Guests': 'Guest';

        let resultText = totalAdults+' '+guestText+' '+rooms+' '+roomText;

        selectionResult.setAttribute('value', resultText);
      }

      function removeElement(type){
        if(type == 'adult'){
          adults = adults > 0 ?  adults - 1 : adults;
          totalAdults = adults + child;

          showElements();
        }else if(type == 'child'){
          child = child > 0 ? child - 1 : child;
          totalAdults = adults + child;

          showElements();
        }else if(type == 'room'){
          rooms = rooms > 0 ? rooms - 1 : rooms;
          
          showElements();
        }
      }

      adultAdd.addEventListener('click',function(){
        addElement('adult');
      });

      adultRemove.addEventListener('click',function(){
        removeElement('adult');
      });

      childAdd.addEventListener('click',function(){
        addElement('child');
      });

      childRemove.addEventListener('click',function(){
        removeElement('child');
      });

      roomAdd.addEventListener('click',function(){
        addElement('room');
      });

      roomRemove.addEventListener('click',function(){
        removeElement('room');
      });
      }
    },
    // END: Guest Selector

    // START: 07 noUislider
    rangeSlider: function () {
      var rangeSlider = e.select('.noui-slider-range');
      if (e.isVariableDefined(rangeSlider)) {
        var rangeSliders = e.selectAll('.noui-slider-range');
        rangeSliders.forEach(slider => {
          var nouiMin = parseInt(slider.getAttribute('data-range-min'));
          var nouiMax = parseInt(slider.getAttribute('data-range-max'));
          var nouiSelectedMin = parseInt(slider.getAttribute('data-range-selected-min'));
          var nouiSelectedMax = parseInt(slider.getAttribute('data-range-selected-max'));
          
          var rangeText = slider.previousElementSibling;
          var imin = rangeText.firstElementChild;
          var imax = rangeText.lastElementChild;
          var inputs = [imin, imax];
          
          noUiSlider.create(slider, {
              start: [nouiSelectedMin, nouiSelectedMax],
              connect: true,
              step: 1,
              range: {
                  min: [nouiMin],
                  max: [nouiMax]
              }
          });
          
          slider.noUiSlider.on("update", function(values, handle) {
              inputs[handle].value = values[handle];
          });

        });
      }
    },
    // END: noUislider

    // START: 08 Simple scrollbar
    sScrollbar: function () {
      var sb = e.select('.left-sidebar');
      if (e.isVariableDefined(sb)) {
        SimpleScrollbar.initEl(sb);
      }
    },
    // END: Simple scrollbar

    // START: 09 Tiny Slider
    tinySlider: function () {
        var $carousel = e.select('.tiny-slider-inner');
        if (e.isVariableDefined($carousel)) {
          var tnsCarousel = e.selectAll('.tiny-slider-inner');
          tnsCarousel.forEach(slider => {
              var slider1 = slider;
              var sliderMode = slider1.getAttribute('data-mode') ? slider1.getAttribute('data-mode') : 'carousel';
              var sliderAxis = slider1.getAttribute('data-axis') ? slider1.getAttribute('data-axis') : 'horizontal';
              var sliderSpace = slider1.getAttribute('data-gutter') ? slider1.getAttribute('data-gutter') : 30;
              var sliderEdge = slider1.getAttribute('data-edge') ? slider1.getAttribute('data-edge') : 0;

              var sliderItems = slider1.getAttribute('data-items') ? slider1.getAttribute('data-items') : 4; //option: number (items in all device)
              var sliderItemsXl = slider1.getAttribute('data-items-xl') ? slider1.getAttribute('data-items-xl') : Number(sliderItems); //option: number (items in 1200 to end )
              var sliderItemsLg = slider1.getAttribute('data-items-lg') ? slider1.getAttribute('data-items-lg') : Number(sliderItemsXl); //option: number (items in 992 to 1199 )
              var sliderItemsMd = slider1.getAttribute('data-items-md') ? slider1.getAttribute('data-items-md') : Number(sliderItemsLg); //option: number (items in 768 to 991 )
              var sliderItemsSm = slider1.getAttribute('data-items-sm') ? slider1.getAttribute('data-items-sm') : Number(sliderItemsMd); //option: number (items in 576 to 767 )
              var sliderItemsXs = slider1.getAttribute('data-items-xs') ? slider1.getAttribute('data-items-xs') : Number(sliderItemsSm); //option: number (items in start to 575 )

              var sliderSpeed = slider1.getAttribute('data-speed') ? slider1.getAttribute('data-speed') : 500;
              var sliderautoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
              var sliderArrow = slider1.getAttribute('data-arrow') !== 'false'; //option: true or false
              var sliderDots = slider1.getAttribute('data-dots') !== 'false'; //option: true or false

              var sliderAutoPlay = slider1.getAttribute('data-autoplay') !== 'false'; //option: true or false
              var sliderAutoPlayTime = slider1.getAttribute('data-autoplaytime') ? slider1.getAttribute('data-autoplaytime') : 4000;
              var sliderHoverPause = slider1.getAttribute('data-hoverpause') === 'true'; //option: true or false
              if (e.isVariableDefined(e.select('.custom-thumb'))) {
                var sliderNavContainer = e.select('.custom-thumb');
              } 
              var sliderLoop = slider1.getAttribute('data-loop') !== 'false'; //option: true or false
              var sliderRewind = slider1.getAttribute('data-rewind') === 'true'; //option: true or false
              var sliderAutoHeight = slider1.getAttribute('data-autoheight') === 'true'; //option: true or false
              var sliderAutoWidth = slider1.getAttribute('data-autowidth') === 'true'; //option: true or false
              var sliderfixedWidth = slider1.getAttribute('data-fixedwidth') === 'true'; //option: true or false
              var sliderTouch = slider1.getAttribute('data-touch') !== 'false'; //option: true or false
              var sliderDrag = slider1.getAttribute('data-drag') !== 'false'; //option: true or false
              // Check if document DIR is RTL
              var ifRtl = document.getElementsByTagName("html")[0].getAttribute("dir");
              var sliderDirection;
              if (ifRtl === 'rtl') {
                  sliderDirection = 'rtl';
              }

              var tnsSlider = tns({
                  container: slider,
                  mode: sliderMode,
                  axis: sliderAxis,
                  gutter: sliderSpace,
                  edgePadding: sliderEdge,
                  speed: sliderSpeed,
                  autoWidth: sliderautoWidth,
                  controls: sliderArrow,
                  nav: sliderDots,
                  autoplay: sliderAutoPlay,
                  autoplayTimeout: sliderAutoPlayTime,
                  autoplayHoverPause: sliderHoverPause,
                  autoplayButton: false,
                  autoplayButtonOutput: false,
                  controlsPosition: top,
                  navContainer: sliderNavContainer,
                  navPosition: top,
                  autoplayPosition: top,
                  controlsText: [
                      '<i class="bi bi-arrow-left"></i>',
                      '<i class="bi bi-arrow-right"></i>'
                  ],
                  loop: sliderLoop,
                  rewind: sliderRewind,
                  autoHeight: sliderAutoHeight,
                  autoWidth: sliderAutoWidth,
                  fixedWidth: sliderfixedWidth,
                  touch: sliderTouch,
                  mouseDrag: sliderDrag,
                  arrowKeys: true,
                  items: sliderItems,
                  textDirection: sliderDirection,
                  responsive: {
                      0: {
                          items: Number(sliderItemsXs)
                      },
                      576: {
                          items: Number(sliderItemsSm)
                      },
                      768: {
                          items: Number(sliderItemsMd)
                      },
                      992: {
                          items: Number(sliderItemsLg)
                      },
                      1200: {
                          items: Number(sliderItemsXl)
                      }
                  }
              });
          }); 
        }
    },
    // END: Tiny Slider

    // START: 10 Parallax Background
    parallaxBG: function () {
      var parBG = e.select('.bg-parallax');
      if (e.isVariableDefined(parBG)) {
          jarallax(e.selectAll('.bg-parallax'), {
              speed: 0.6
          });
      }
    },
    // END: Parallax Background
};

e.init();







/* Custom Scrollbar */
// var el = document.querySelector('.left-sidebar');
// SimpleScrollbar.initEl(el);

/* Clipboard JS - Copy code button */
var cl = document.querySelector('.copy-link');
if(typeof !!cl && (cl) != 'undefined' && cl != null) {
        var cle = document.querySelectorAll('.copy-link');
        cle.forEach(el => {
            el.addEventListener("click", function () {
                      var theButton = this;
                      var copyId = this.getAttribute('id');
                      var clipboard = new ClipboardJS( '#' + copyId );
                      
                      clipboard.on('success', function(e) {
                        e.clearSelection();
                      theButton.innerHTML = 'Copied';
                      setTimeout(function() {
                          theButton.innerHTML = 'Copy';
                        }, 10000);
                      });
            });         
        });
} 