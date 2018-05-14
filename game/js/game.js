$(function () {
    var num = 10;
    $(".card").flip()
    var ary = [];
    function randomArray(num) {
        for (var i = 0; i < num; i++) {
            ary[i] = i + 1;
        }
        ary.sort(function () {
            return 0.5 - Math.random();
        });
        return ary;
    }

    randomArray(num)

    for (var i = 0, j = 0; i < num, j < num; i++, j++) {
        var str = "img/" + ary[j] + ".png";
        // console.log(str);
        $(".back-img:eq(" + i + ")").attr("src", str);
        // var temp = Math.floor((ary[j]+1) / 2);
        $(".back-img:eq(" + i + ")").parents(".card").attr("index", ary[j]);
    }

    var matched = 0,
        attempts = 0;
    var index1 = 0,
        index2 = 0;
    $(".card").click(function () {
        attempts++;
        $("#attempts").html(attempts);
        if (attempts > 1) {
            index1 = index2
        }
        index2 = $(this).attr("index");
        // console.log(index1,attempts,index2);
        if (attempts > 1 && index1 != index2) {
            var t1 = Math.floor((parseInt(index1) + 1) / 2);
            var t2 = Math.floor((parseInt(index2) + 1) / 2);
            if (t1 == t2) {
                matched++;
                $("#matched").html(matched);
                $(".card[index=" + index1 + "]").off("click");
                $(".card[index=" + index2 + "]").off("click");
                index1 = -1;
                index2 = -1;
            }
            if (t1 != t2) {
                $(".card[index="+index1+"]").delay(3000).flip('toggle');
                $(".card[index="+index2+"]").flip('toggle');
                $(".card[index="+index2+"]").delay(3000).flip('toggle');
                // console.log(index1,index2);
                // index1 = index2;
            }
        }
        if (matched == 5) {
            $("p").html("Congratulations!")
        }
    });
});