 $(document).ready(function(){
/**
* @description change form style to focus and animate the label
* */

//TODO: find for all the elements that have a class form (input element) of the block that has a grid-size class
$('.grid-size').find('.form').focus(function() {
    
//TODO: add the class focus to the parent who has a input-block class of the current element (input element =focus)
    
  $(this).parent('.input-block').addClass('focus');
    
//TODO: find label element that has the same parent as the current element (input element =focus) and apply an animation 
  $(this).parent().find('label').animate({
    'top': '10px',
    'fontSize': '12px'
  }, 300);
});

/**
* @description change form style when it loses focus and animate the label
*/

//TODO: find for all the elements that have a class form of the block that has a grid-size class
$('.grid-size').find('.form').blur(function() {
    
//see if there is content in the input : if it is empty
  if ($(this).val().length == 0) {
//TODO: removing the class focus from the parent who has a input-block class
    $(this).parent('.input-block').removeClass('focus');
      
//TODO: find label element that has the same parent as the current element (input element =focus) and apply an animation : to return to the initial state     
    $(this).parent().find('label').animate({
      'top': '25px',
      'fontSize': '14px'
    }, 300);
  }
});

/**
* @trigger a click on the input of type color which has a
* colorPicker id (input is not visible) when we click on the element * that has the class color-btn
*/

$("#color-btn").on('click',function(e){
    
     $("#colorPicker").click();
    
});

/**
* @retrieve the value of the color input that has the colorPicker id * in case of change and apply it to the background of the element * that has the class color-btn
*/
$("#colorPicker").change(function(e){
    var color = $("#colorPicker").val();
     $(".color-btn").css('background', color);
});


//
const TABLE_CANVAS = $("#pixel_canvas");
const TABLE_HEIGHT = $("#input-height");
const TABLE_WIDTH = $("#input-width");
const TABLE_CASE_COLOR = $("#colorPicker");
     
/**
* @description retrieve the values of height and width and call the * makeGride () and colorCellClick () functions, if a grid already
* exists will be removed  * label
*/
$('#sizePicker').submit( function(e) {
    e.preventDefault();

    let width = TABLE_WIDTH.val();
    let height = TABLE_HEIGHT.val();

    TABLE_CANVAS.html(''); //clear
    makeGrid(height, width);
    colorCellClick();
    
    
});

/**
* @description the function allows you to draw a table
* @param {number} [[number of columns]]
* @param {number} [[number of line]]
*/
function makeGrid(height, width) {
    for(let i=0; i < height; i++) {
        TABLE_CANVAS.append('<tr></tr>');
    }    

    for(let i=0; i < width; i++) {
        $('tr').append('<td></td>');
    }
};

/**
*Add Click Listener so that when we click cell in grid, the cell color changes
*/
function colorCellClick() {
    $('td').click( function(){
        let color = TABLE_CASE_COLOR.val();
        $(this).css("background-color", color)
    });
      //Colors the cell in white, when the cell is double-clicked
  $('td').on("dblclick", function() {
        $(this).css("background-color", "white");
  });
}
  
}); 

