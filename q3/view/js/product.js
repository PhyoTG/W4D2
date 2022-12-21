$(eventHandler);

function eventHandler(){
    $(".addToCartForm").click(doAjax);
}

function doAjax(){
    const data={
        id: $(this).attr("hidden-value")  
    };   
    $.post({
        url: "/addToCart",
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8"
    }).done(success)
        .fail(failure).always(done);       
}

function success(){
  console.log("Product was added to the Cart Successfully");
}

function failure(){
    console.log("Couldn't add Product to the Cart");
}

function done(){
    console.log("done");
}