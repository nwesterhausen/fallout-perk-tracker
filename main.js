var state = Cookies.get(SAVED_COOKIE_NAME);
var $loadWindow = $(MODAL_HTML);


// Build the page
generateRadios();
// Check for saved cookie
if (state) {
    console.log("Sanitizing state");
    state = state.replace(/[ !'".]/g, "-");
    loadState();
}

// Register auto-saving
$("input[type='radio']").change(function () {
    setTimeout(function () {
        saveState();
        Cookies.set(SAVED_COOKIE_NAME, state);
    }, 100);
});

// Register menu buttons
$("#btnClearAll").click(clearAllData);
$("#btnCopyTo").click(copyToClipboard);
$("#btnDownload").click(download);
$("#btnLoadFrom").click(loadFromClipboard);

function generateRadios() {
    let contentdiv = $("#content");
    let tabheader = "<ul class=\"nav nav-tabs\">\n";
    let key = "strength";

    for (let special of Object.keys(PERKS)) {
        active =
            tabheader += "  <li class=\"nav-item\">\n" +
                "    <a class=\"nav-link " + (key == special.toLowerCase() ? "active show" : "") + "\" data-toggle=\"tab\" href=\"#" + special + "\">" + special.substring(0, 1) + "<span class='specText'>" + special.substring(1) + "</span> </a>\n" +
                "  </li>";
    }
    tabheader += "</ul>";
    contentdiv.append(tabheader);
    let tabcontent = "<div id=\"tabContent\" class=\"tab-content\">";
    for (let special of Object.keys(PERKS)) {
        tabcontent += "<div class=\"tab-pane fade " + (key == special.toLowerCase() ? "active show" : "") + "\" id=\"" + special + "\">";
        tabcontent += "<legend>" + special + "</legend>";
        for (let i = 0; i < PERKS[special].length; i++) {
            let groupname = PERKS[special][i].name.replace(/[ !'".]/g, "-").toLowerCase();
            let radios = "<div class='row mb-2' id='" + groupname + "'><div class='col-sm-3'><span class='mr-1'>" + PERKS[special][i].name + "</span><span class='badge badge-pill badge-secondary'>Level " + PERKS[special][i].levelreq + "</span></div>" +
                "<div class=\"btn-group btn-group-toggle col-sm-6\" data-toggle=\"buttons\">";
            for (let j = 1; j <= PERKS[special][i].ranks; j++)
                radios += "<label class=\"btn btn-outline-primary\">" +
                    "<input type=\"radio\" name=\"" + groupname + "\" id=\"" + groupname + "rank" + j + "\" autocomplete=\"off\"> Rank" + j +
                    "</label>";
            radios += "</div>" +
                "<div class='col-sm-3'><button hidden='' class='btn btn-danger btn-sm' id='reset-" + groupname + "' onclick='(function(){" +
                "$(\"#" + groupname + " > div > label\").removeClass(\"active\");" +
                "$(\"#reset-" + groupname + "\").attr(\"hidden\",\"\");" +
                "})()'>RESET</button></div>" +
                "</div>";
            tabcontent += radios;
        }
        tabcontent += "</div>";
    }
    tabcontent += "</div>";
    contentdiv.append(tabcontent);
}

function saveState() {
    state = "";
    console.log("State: (saved to var state)");
    $(".active > input").each(function () {
        state += this.id + ",";
        $("#reset-" + this.name).removeAttr("hidden");
    });
    state = state.substring(0, state.length - 1);
    console.log(state);
}

function clearState() {
    $(".active > input").each(function () {
        $("#" + this.id).parent().removeClass("active");
        $("#reset-" + this.name).attr("hidden", "");
    });
}

function loadState(givenstate) {
    clearState();
    if (typeof givenstate !== "undefined") {
        if (givenstate === "") return;
        for (let idn of givenstate.split(',')) {
            $("#" + idn).parent().addClass("active");
        }
    } else {
        for (let idn of state.split(',')) {
            $("#" + idn).parent().addClass("active");
        }
    }
    saveState();
}

function clearAllData() {
    Cookies.remove(SAVED_COOKIE_NAME);
    clearState();
    alert("Deleted stored cookie and wiped the slate clean!", "alert-danger");
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
    alert("Copied current state to clipboard!", "alert-success");
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

function loadFromClipboard() {
    $loadWindow.modal('show');
    $("#btnModalLoad").click(function () {
        $("#btnModalLoad").unbind();
        $loadWindow.modal('hide');
        let tempState = $("#loadStateTextarea").val();
        $("#loadStateTextarea").html("");
        console.log("Sanitizing loaded state");
        tempState = "" + tempState.replace(/[ !'".]/g, "-").replace(/[^a-zA-Z0-9\-,]/g, "");
        loadState(tempState);
        if (state && state !== "" && tempState !== "") {
            // successfully loaded
            alert("Loaded your perks successfully!", "alert-success");
        } else {
            // we failed
            alert("Couldn't load a single perk!", "alert-danger");
        }
    });
}

function alert(message, style = "alert-info") {
    // Build and attach alert
    let alertid = Date.now();
    $("#alertbox").append("<div id='" + alertid + "' class=\"alert alert-dismissible " + style + "\">" +
        "<button type=\"button\" class=\"close\" data-dismiss=\"alert\">&times;</button>" +
        message +
        "</div>");
    // Auto dismiss alert
    setTimeout(function () {
        $("#" + alertid).remove();
    }, ALERT_DISPLAY_TIME);
}