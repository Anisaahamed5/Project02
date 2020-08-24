$(document).on("submit", "#searchform", function(e) {
    e.preventDefault();

    let search = $("#gifsearch").val();
    let num = $("#numberofgifs").val();
    
    alert("Hello World " + search + " " + num )
    
    $.get( 
        "https://api.giphy.com/v1/gifs/search",
        {
            api_key: "pjmmwnyIi8m8REUNndmZcXLMyavaAKIR",
            q: search,
            limit: num,
        }, 
        function(ret) {
            console.log(ret)
        }

    )
});