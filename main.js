generateRadios();

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
                radios += "<label class=\"btn btn-outline-light\">" +
                    "<input type=\"radio\" name=\""+groupname+"\" id=\"rank"+j+"\" autocomplete=\"off\"> Rank" + j +
                    "</label>";
            radios += "</div></div>";
            tabcontent += radios;
        }
        tabcontent += "</div>";
    }
    tabcontent += "</div>";
    contentdiv.append(tabcontent);
}