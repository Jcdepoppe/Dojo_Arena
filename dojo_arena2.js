var backgrounds = [
    { name: "attic", filename: "attic.png" },
    { name: "beach", filename: "beach.jpg" },
    { name: "crosswalk", filename: "crosswalk.jpg" },
    { name: "dhalsim", filename: "dhalsim.jpg" },
    { name: "dojo", filename: "dojo.jpg" },
    { name: "planet", filename: "earth.jpg" },
    { name: "forest", filename: "forest.jpg" },
    { name: "hongkong", filename: "hongkong.png" },    
    { name: "mapletree", filename: "mapletree.png" },
    { name: "matrix", filename: "matrix.jpg" },
    { name: "snow", filename: "snow.jpg" },
    { name: "temple", filename: "temple.png" }
];

var fighters = [
    { name: "Donatello", filename: "raphael.png" },
    { name: "Leonardo", filename: "leo.png" },
    { name: "Michelangelo", filename: "mikey.png" },
    { name: "Raphael", filename: "raphael.png" },
    { name: "Ryu", filename: "ryu.png" },
    { name: "Goh", filename: "goh.png" },
    { name: "Silver Samurai", filename: "silversamurai.png" }
];

var bgselected = false;

$(document).ready(function(){

    for(let i=0;i<backgrounds.length;i++){
        $('#buttons').append("<button alt-data='" + backgrounds[i].filename + "'>"  + backgrounds[i].name + "</button>");
    }

    for(let i=0;i<fighters.length;i++){
        $('#selection > select:nth-of-type(1)').append("<option value='" + fighters[i].filename + "' positiondata='left'>"  + fighters[i].name + "</option>");
        $('#selection > select:nth-of-type(2)').append("<option value='" + fighters[i].filename + "' positiondata='right'>"  + fighters[i].name + "</option>");
    }   

    $('button').hover(function(){
        $(this).parent().parent().parent().parent().css('background-image', "url('dojo_arena_photos-master/" + $(this).attr("alt-data") + "')");
    },
        function(){
            if(!bgselected)
                $(this).parent().parent().parent().parent().css('background-image', "");
    });

    $('button').click(function(){
        bgselected = true;
        $('#screen1').hide();
        $('#screen2').show();
    });

    $('select').on('change', function() {
        switch($(this).attr("positiondata")){
            case 'left':
                $('#player1').css('background-image', "url('dojo_arena_photos-master/" + $(this).val() + "')");
                break;
            case 'right':
                $('#player2').css('background-image', "url('dojo_arena_photos-master/" + $(this).val() + "')");
                break;
        }
    });
})