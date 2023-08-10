$(document).ready(function(){
  
});

/* When using Yamm, we need this to prevent unexpected closing of menu when tapping 
 * some content inside. 
 * Ref: http://geedmo.github.io/yamm3
 */
$(document).on('click', '.yamm .dropdown-menu', function(e) {
  e.stopPropagation();
});