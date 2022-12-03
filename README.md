# MTR date modifier tool

## Live version

👉 [](https://stalegjelsten.github.io/mtr-date-modifier) 👈

This tool is made for orienteering organisers who use emit for time keeping and need to change the read timestamps of all emit cards in a log file.

## The problem

When I organise [orienteering](https://en.wikipedia.org/wiki/Orienteering) events without a fixed start time for each competitor using [emit](https://emit.no/en/) and the [MTR4](https://emit.no/support-base/emit-mini-time-recorder-mtr4/) for card readouts, I need the correct clock time on the MTR4. If the clock is wrong on the MTR4, all runners will have wrong start and finish times. Their total time will be correct, but incorrect start and finish times will make problems for software such as [Livelox](https://livelox.com/) which uses start times and split times to determine when a participant punches each control.

## About this tool

This tool can alter the timestamps of all read emit cards in a log file. Usually I generate the MTR log file using ı|[tTime](https://ttime.matthey.no/) and its MTR module. 
