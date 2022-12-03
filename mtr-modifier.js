let newLog = ""
function getTimeDelta() {
    let timedelta = document.getElementById("days").value * 24 * 60 * 60 * 1000 + document.getElementById("hours").value * 60 * 60 * 1000 + document.getElementById("minutes").value * 60 * 1000 + document.getElementById("seconds").value * 1000;
    if (document.getElementById("addOrSubtract").value == "subtract") {
        timedelta = -timedelta;
    }
    return timedelta;
}

function parseLog() {
    var input = document.getElementById("input_log").value;
    let lines = input.split("\n");
    const re = /(\d\d\.\d\d\.\d\d \d\d:\d\d:\d\d)(?!.*\d\d\.\d\d\.\d\d \d\d:\d\d:\d\d)/g
    const reFormatDT = /(\d\d)/g
    for (let i = 0; i < lines.length; i++) {
        const e = lines[i];
        if (e.trim().length == 0) {
            continue;
        }
        let oldTimeStr = e.match(re);
        const dates = oldTimeStr[0].match(reFormatDT);
        let oldTimeDT = new Date("20" + dates[2] + "-" + dates[1] + "-" + dates[0] + " " + dates[3] + ":" + dates[4] + ":" + dates[5])
        let newTimeDT = new Date(oldTimeDT.getTime() + getTimeDelta() - oldTimeDT.getTimezoneOffset() * 60 * 1000)
        let date = newTimeDT.toISOString().slice(2, 10).split("-")
        let time = newTimeDT.toISOString().slice(11, 19)
        let newTimeStr = date[2] + "." + date[1] + "." + date[0] + " " + time
        newLog = newLog + e.replace(re, newTimeStr) + "\n"

    }

    document.getElementById("output").innerHTML = newLog.replace("\n", "<br />");
    document.getElementById("download-button-placeholder").innerHTML = '<button type="button" id="downloadButton">Download log file 💾</button>'
    document.getElementById("downloadButton").addEventListener('click', download_txt);
}


function download_txt() {
    var hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(newLog);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'newlog.log';
    hiddenElement.click();
}
