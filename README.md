# MTR date modifier tool

## Live version

👉 [https://stalegjelsten.github.io/mtr-date-modifier](https://stalegjelsten.github.io/mtr-date-modifier) 👈

This tool is made for orienteering organisers who use emit for time keeping and need to change the read timestamps of all emit cards in a log file.

## The problem

When I organise [orienteering](https://en.wikipedia.org/wiki/Orienteering) events without a fixed start time for each competitor using [emit](https://emit.no/en/) and the [MTR4](https://emit.no/support-base/emit-mini-time-recorder-mtr4/) for card readouts, I need the correct clock time on the MTR4. If the clock is wrong on the MTR4, all runners will have wrong start and finish times. Their total time will be correct, but incorrect start and finish times will make problems for software such as [Livelox](https://livelox.com/) which uses start times and split times to determine when a participant punches each control.

## About this tool

This tool can alter the timestamps of all read emit cards in a log file. Usually I generate the MTR log file using ı|[tTime](https://ttime.matthey.no/) and its MTR module. 

## Sample log file

A line from the MTR log file looks like this 👇
```
"M","0","14917","507857","24.11.22 20:47:35.000","24.11.22 18:40:56.000",507857,0000,0000,000,00000,106,00291,145,00583,092,00753,139,00983,143,02101,119,02225,100,02320,250,02560,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,000,00000,0006402
```
The fifth column contains the time when the log file was created (when MTR was dumped to the computer). The sixth column contains the emit card readout time, i.e. the time when MTR read the participant's emit card. The next columns contain the emit card number, split times and control codes. 