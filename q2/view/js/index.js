$(eventhandler);

function eventhandler(){
    const clearMsg = () => $("#message").text("");
    
    $('#question').on("keypress",function(e){
        if (e.keyCode == 13){ 
            const data = {
                question: $("#question").val()};
            $.ajax({
                url: "/8ball",
                data: JSON.stringify(data),
                contentType: "application/json; charset=utf-8"
            }).done(success)
                .fail(failure).always(done);
            return false;
        }
    })
    $("#submit").click(() => {
        const data = {
            question: $("#question").val()
        };
        $.ajax({
            url: "/8ball",
            data: JSON.stringify(data),
        }).done(success)
            .fail(failure).always(done);
        return false;
    })

    const success = data => {
        console.log("Enter Success", data);
        $("#question").val(data.answer);
    }
    const failure = () => {
        $("#message").text("Unable to reach server");
        setTimeout(clearMsg, 10000);
    }

    const done=()=>{
        $("#question").focus(function () {
            $(this).select();
        })
    }
}