
    let menuBtn = document.querySelector('.burgerBtn');
	let menu = document.querySelector('.burger');
        menuBtn.addEventListener('click', function(){
            menuBtn.classList.toggle('vision');
            menu.classList.toggle('vision');
	})


    let isScrolling = false;
 
        window.addEventListener("scroll", throttleScroll, false);

            function throttleScroll(e) {
                if (isScrolling == false) {
                    window.requestAnimationFrame(function() {
                        scrolling(e);
              isScrolling = false;
            });
          }
          isScrolling = true;
        }
             
        

     
        document.addEventListener("DOMContentLoaded", scrolling, false);
     
        let listItems = document.querySelectorAll(".fadeInUp, .fadeIn, .fadeInDown");


        function scrolling(e) {
      
          for (var i = 0; i < listItems.length; i++) {
            let listItem = listItems[i];
     
            if (isPartiallyVisible(listItem)) {
              listItem.classList.add("active");
            }
          }
        }



        function isPartiallyVisible(el) {
      let elementBoundary = el.getBoundingClientRect();
 
      let top = elementBoundary.top;
	  let bottom = elementBoundary.bottom;
	  let height = elementBoundary.height;
 
      return ((top + height >= 0) && (height + window.innerHeight >= bottom));
    }
 
    function isFullyVisible(el) {
	  let elementBoundary = el.getBoundingClientRect();
 
	  let top = elementBoundary.top;
	  let bottom = elementBoundary.bottom;
 
      return ((top >= 0) && (bottom <= window.innerHeight));
    }