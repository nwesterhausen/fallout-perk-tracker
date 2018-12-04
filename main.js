generateRadios();
var state;

function generateRadios() {
    let contentdiv = $("#content");
    let tabheader = "<ul class=\"nav nav-tabs\">\n";
    for (let special of Object.keys(PERKS)) {
        tabheader += "  <li class=\"nav-item\">\n" +
            "    <a class=\"nav-link\" data-toggle=\"tab\" href=\"#" + special + "\">" +
            special.substring(0, 1) + "</a>\n" +
            "  </li>";
    }
    tabheader += "</ul>";
    contentdiv.append(tabheader);
    let tabcontent = "<div id=\"tabContent\" class=\"tab-content\">";
    for (let special of Object.keys(PERKS)) {
        tabcontent += "<div class=\"tab-pane fade\" id=\""+special+"\">";
        tabcontent += "<legend>" + special + "</legend>";
        for (let i = 0; i < PERKS[special].length; i++) {
            let radios = "<div class='row'><span class='col-sm-3'>"+PERKS[special][i].name+"</span>" +
                "<div class=\"btn-group btn-group-toggle col-sm-3\" data-toggle=\"buttons\">";
            let groupname = PERKS[special][i].name.replace(/ /g, "-").toLowerCase();
            for (let j = 1; j <= PERKS[special][i].ranks; j++)
                radios += "<label class=\"btn btn-outline-primary\">" +
                    "<input type=\"radio\" name=\""+groupname+"\" id=\""+groupname+"rank"+j+"\" autocomplete=\"off\"> Rank" + j +
                    "</label>";
            radios += "</div></div>";
            tabcontent += radios;
        }
        tabcontent += "</div>";
    }
    tabcontent += "</div>";
    contentdiv.append(tabcontent);
}

function saveState() {
    state = "";
    console.log("State: (saved to var state");
    $(".active > input").each(function() {
        state += this.id +",";
    });
    state = state.substring(0, state.length - 1);
    console.log(state);
}

function clearState() {
    $(".active > input").each(function() {
        $("#"+this.id).parent().removeClass("active");
    });
}

function loadState() {
    clearState();
    for (let idn of state.split(',')) {
        $("#"+idn).parent().addClass("active");
    }
}