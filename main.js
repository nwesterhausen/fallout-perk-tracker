var state = Cookies.get(SAVED_COOKIE_NAME);
// Build the page
generateRadios();
// Check for saved cookie
if (state) {
    console.log("Sanitizing state");
    state = state.replace(/[ !'".]/g, "-");
    loadState();
}
// Register auto-saving
$("input").change(function () {
    setTimeout(function() {
        saveState();
        Cookies.set(SAVED_COOKIE_NAME, state);
    },100);
});
// Register menu buttons
$("#btnClearAll").click(clearAllData);
$("#btnCopyTo").click(copyToClipboard);
$("#btnDownload").click(download);

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
            let groupname = PERKS[special][i].name.replace(/[ !'".]/g, "-").toLowerCase();
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

function clearAllData() {
    Cookies.remove(SAVED_COOKIE_NAME);
    clearState();
    let alertid = Date.now();
    $("#alertbox").append("<div id='"+alertid+"' class=\"alert alert-danger\">" +
        "Deleted stored cookie and wiped the slate clean!" +
        "</div>");
    setTimeout(function() {
        $("#"+alertid).remove();
    }, 5000);

}

function copyToClipboard() {
    saveState();
    const textArea = document.createElement('textarea');
    textArea.id = "tempTA";
    textArea.textContent = state;
    document.body.append(textArea);
    textArea.select();
    document.execCommand("copy");
    $('#tempTA').remove();
    let alertid = Date.now();
    $("#alertbox").append("<div id='"+alertid+"' class=\"alert alert-success\">" +
        "Copied current state to clipboard!" +
        "</div>");
    setTimeout(function() {
        $("#"+alertid).remove();
    }, 5000);
}

/**
 * Modified from the example here:
 * https://stackoverflow.com/a/18197341
 */
function download() {
    let filename = 'perks-helper.txt';
    let text = state;

    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/yaml;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
}