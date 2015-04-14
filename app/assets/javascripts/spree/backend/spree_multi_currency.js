//= require spree/backend

$(document).ready(function(){
	// custom css expression for a case-insensitive contains()
  $.expr[':'].Contains = function(a,i,m){
      return (a.textContent || a.innerText || "").toUpperCase().indexOf(m[3].toUpperCase())>=0;
  };


  function listFilter(list) { // header is any element, list is an unordered list
    // create and add the filter form to the header
    var input = $("#variant-price-search");

    $(input)
      .change( function () {
        var filter = $(this).val();
        if(filter) {
          // this finds all links in a list that contain the input,
          // and hide the ones not containing the input while showing the ones that do
          $(list).find(".panel-title:not(:Contains(" + filter + "))").parent().parent().parent().hide();
          $(list).find(".panel-title:Contains(" + filter + ")").parent().parent().parent().show();
        } else {
          $(list).find(".panel").parent().show();
        }
        return false;
      })
    .keyup( function () {
        // fire the above change event after every letter
        $(this).change();
    });
  }


  //ondomready
  $(function () {
    listFilter($("#variant-prices"));
  });
})