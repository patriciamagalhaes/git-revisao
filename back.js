<script>
        
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.sidenav');
        var instances = M.Sidenav.init(elems, options);
      });
        
        $(document).ready(function(){
            $('.sidenav').sidenav();
          }); 
        

        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.slider');
        var instances = M.Slider.init(elems, options);
          });

          // Or with jQuery

        $(document).ready(function(){
        $('.slider').slider();
          }); 
        
        
        document.addEventListener('DOMContentLoaded', function() {
        var elems = document.querySelectorAll('.carousel');
        var instances = M.Carousel.init(elems, options);
        });

        // Or with jQuery

       $(document).ready(function(){
        $('.carousel').carousel();
        });
           
    </script> 
