$(document).ready(function(){
   $('button').hover(function(){
       console.log($(this).attr("alt-data"))
       switch($(this).attr("alt-data")){
            case 'beach':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/beach.jpg')");
            break;
            case 'planet':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/earth.jpg')");
            break;
            case 'dojo':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/dojo.jpg')");
            break;
            case 'forest':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/forest.jpg')");
            break;
            case 'matrix':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/matrix.jpg')");
            break;
            case 'snow':
            $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/snow.jpg')");
            break;
       } 
   },
        function(){
            $(this).parent().parent().parent().css('background-image', "");
    });

    $('button').click(function(){
        $('#screen1').hide();
        $('#screen2').show();
    });

    $('select').click(function(){
        console.log($(this).val());
        switch($(this).val()){
            //left select

            
            case 'lRaph':
                $('#player1').css('background-image', "url('dojo_arena_photos-master/raphael.png')");
                break;
            case 'lLeo':
                $('#player1').css('background-image', "url('dojo_arena_photos-master/leo.png')");
                break;
            case 'lDonny':
                $('#player1').css('background-image', "url('dojo_arena_photos-master/donny.png')");
                break;
            case 'lMikey':
                $('#player1').css('background-image', "url('dojo_arena_photos-master/mikey.png')");
                break;

            // right select

            case 'rRaph':
                $('#player2').css('background-image', "url('dojo_arena_photos-master/raphael.png')");
                break;
            case 'rLeo':
                $('#player2').css('background-image', "url('dojo_arena_photos-master/leo.png')");
                break;
            case 'rDonny':
                $('#player2').css('background-image', "url('dojo_arena_photos-master/donny.png')");
                break;
            case 'rMikey':
                $('#player2').css('background-image', "url('dojo_arena_photos-master/mikey.png')");
                break;


        }
    });

})