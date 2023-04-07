$(document).ready(()=> {

    document.getElementById('import').onclick = function () {
        var files = document.getElementById('file').files;
        console.log(files);
        if (files.length <= 0) {
            alert("Empty JSON!");
            return false;
        }

        var fr = new FileReader();

        fr.onload = function (e) {
            var result = JSON.parse(e.target.result);
            let cards = result.cards;
            for (var i = 0; i <= 15; i++) {
                let id = cards[i];
                document.getElementById('card'+id).remove();
                output = '<img src="../resources/images/cards/'+id+'.png" id="card'+id+'" class="card" draggable="true" ondragstart="drag(event)"></img>';
                let curDiv = '#div' + (i+1);
                $(curDiv).html(output);
            }
        }

        fr.readAsText(files.item(0));
        document.getElementById("file").value = null;
    };
});
