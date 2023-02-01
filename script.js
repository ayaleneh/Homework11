window.onload = function () {
    $("#startButton").click(function () {
        var width = parseInt($("#width").val());
        console.log("width:" + width);
        var growth = parseInt($("#growth").val());
        var interval = parseInt($("#interval").val());
        var numCircles = parseInt($("#numCircles").val());

        for (var i = 0; i < numCircles; i++) {
            var circle = $("<div>", {
                class: "circle",
                width: width + "px",
                height: width + "px"
            });
            circle.appendTo("#container");

            var x = Math.floor(Math.random() * ($("#container").width() - width));
            var y = Math.floor(Math.random() * ($("#container").height() - width));
            circle.offset({ top: y, left: x });

            var grow = setInterval(function () {
                width += growth;
                circle.css("width", width + "px");
                circle.css("height", width + "px");
                if (width > $("#container").width() || width > $("#container").height()) {
                    clearInterval(grow);
                }
            }, interval);

            circle.click(function () {
                clearInterval(grow);
                circle.remove();
            });
        }
    });
}