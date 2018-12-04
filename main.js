generateRadios();

function generateRadios() {
    let contentdiv = $("#content");
    for (let special of Object.keys(PERKS)) {
        contentdiv.append("<legend>" + special + "</legend>");
        for (let i = 0; i < PERKS[special].length; i++) {
            let radios = "<div class='row'><span class='col-sm-3'>"+PERKS[special][i].name+"</span>" +
                "<div class=\"btn-group btn-group-toggle col-sm-3\" data-toggle=\"buttons\">";
            let groupname = PERKS[special][i].name.replace(/ /g, "-").toLowerCase();
            for (let j = 1; j <= PERKS[special][i].ranks; j++)
                radios += "<label class=\"btn btn-outline-light\">" +
                    "<input type=\"radio\" name=\""+groupname+"\" id=\"rank"+j+"\" autocomplete=\"off\"> Rank" + j +
                    "</label>";
            radios += "</div></div>";
            contentdiv.append(radios);
        }
    }
}