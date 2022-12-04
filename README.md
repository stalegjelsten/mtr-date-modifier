# MTR date modifier tool

## Live version

👉 [https://stalegjelsten.github.io/mtr-date-modifier](https://stalegjelsten.github.io/mtr-date-modifier) 👈

This tool is made for orienteering organisers who use emit for time keeping and need to change the read timestamps of all emit cards in a log file.

## The problem

When I organise [orienteering](https://en.wikipedia.org/wiki/Orienteering) events without a fixed start time for each competitor using [emit](https://emit.no/en/) and the [MTR4](https://emit.no/support-base/emit-mini-time-recorder-mtr4/) for card readouts, I need the correct clock time on the MTR4. If the clock is wrong on the MTR4, all runners will have wrong start and finish times. Their total time will be correct, but incorrect start and finish times will make problems for software such as [Livelox](https://livelox.com/) which uses start times and split times to determine when a participant punches each control.

## About this tool

This tool can alter the timestamps of all read emit cards in a log file. Usually I generate the MTR log file using [tTime](https://ttime.matthey.no/) and its MTR module. MTR log files are also created by [eTiming](http://www.eqtiming.no/downloads/), where they are located in the `log` folder in the race directory.

## About emit log files

I haven't found any information on emit log files online, so this section is mostly for my own reference.

A line from the MTR log file looks like this 👇

```output
"M","0","14917","507857","24.11.22 20:47:35.000","24.11.22 18:40:56.000",507857,0000,0000,000,00000,106,00291,145,00583,092,00753,139,00983,143,02101,119,02225,100,02320,250,02560,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,0006402
```

For this script, we are interested in the sixth column. This column contains the emit card readout time, i.e. the time when the mini time recorder read the participant's emit card.

From looking at a few different log files, the other columns are as follows

1. "M" or "X". Don't know what this means
2. Always "0"
3. This seems to always be "14917" when using MTR4 and "0" when using a [USB reading device](https://emit.no/en/nettbutikk/avlesningsenhet-usb/).
4. Emit card number
5. MTR4 spool or poll timestamp, i.e. the timestamp when dumping the data from the MTR4 to the computer.
6. Emit card readout timestamt, i.e. the timstamp when the mini time recorder reads the emit card
7. Emit card number
8. Columns 8–11 are empty. Columns 12–109 are control code and split time pairs (control code first, split time second)
9. Column 110 ends with the message number

## Licenses

CSS stylesheet is [Simple.css curtesy of kevquirk](https://github.com/kevquirk/simple.css). This tool is provided under an MIT license.
