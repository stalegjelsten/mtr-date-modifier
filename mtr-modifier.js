let newLog = ""

function getTimeDelta() {
    // calculates amount of milliseconds to add or subtract based on the input numbers
    let timedelta = document.getElementById("days").value * 24 * 60 * 60 * 1000 + document.getElementById("hours").value * 60 * 60 * 1000 + document.getElementById("minutes").value * 60 * 1000 + document.getElementById("seconds").value * 1000;

    if (document.getElementById("addOrSubtract").value == "subtract") {
        timedelta = -timedelta;
    }
    return timedelta;
}

function parseLog() {
    newLog = ""
    const input = document.getElementById("input_log").value;
    let lines = input.split("\n");

    // regex for the last datetime-like object in the line. This is the emit card readout time
    const re = /(\d\d\.\d\d\.\d\d \d\d:\d\d:\d\d)(?!.*\d\d\.\d\d\.\d\d \d\d:\d\d:\d\d)/g

    // regex to split the datetime into an array of numbers
    const reFormatDT = /(\d\d)/g

    for (let i = 0; i < lines.length; i++) {
        const e = lines[i];

        if (e.trim().length == 0) {
            // continue if the line is empty or whitespace
            continue;
        }

        // create array of each two-digit part of the datetime, eg 11 for november. Format is
        // currently DD.MM.YY HH:MM:SS
        const oldDatetimeParts = e.match(re)[0].match(reFormatDT);

        // create a date using YYYY-MM-DD HH:MM:SS
        const oldTimeDT = new Date("20" + oldDatetimeParts[2] + "-" + oldDatetimeParts[1] + "-" + oldDatetimeParts[0] + " " + oldDatetimeParts[3] + ":" + oldDatetimeParts[4] + ":" + oldDatetimeParts[5])

        // add the timedelta and adjust for timezone offset. This makes the toISOString have the correct
        // time offset later on

        const newTimeDT = new Date(oldTimeDT.getTime() + getTimeDelta() - oldTimeDT.getTimezoneOffset() * 60 * 1000)

        // separate date and time parts to match original MM.DD.YY HH:MM:SS format
        const date = newTimeDT.toISOString().slice(2, 10).split("-")
        const time = newTimeDT.toISOString().slice(11, 19)
        let newTimeStr = date[2] + "." + date[1] + "." + date[0] + " " + time

        // append the line to the output with new timestamp
        newLog = newLog + e.replace(re, newTimeStr) + "\n"

    }

    // show the output on the screen
    document.getElementById("output").innerHTML = '<h2>Output</h2>\n<code>' + newLog.replace("\n", "<br />") + '</code>';

    // show download button after parsing
    document.getElementById("download-button-placeholder").innerHTML = '<button type="button" id="downloadButton">💫 Download your fixed log file 💾</button>'

    // add download button functionality
    document.getElementById("downloadButton").addEventListener('click', download_txt);
}


function download_txt() {
    let hiddenElement = document.createElement('a');

    hiddenElement.href = 'data:attachment/text,' + encodeURI(newLog);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'newlog.log';
    hiddenElement.click();
}
