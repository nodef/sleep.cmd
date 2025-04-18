Sleep for specified time in Windows Command prompt.<br>
🖥️ [Command prompt](https://www.npmjs.com/package/sleep.cmd),
📜 [Files](https://unpkg.com/sleep.cmd/).

[sleep] is a command in *Unix-like* operating systems that **suspends program**
**execution** for specified time. This package provides the `sleep` command for
Windows [Command prompt], with exactly the **same behaviour** as in *Unix-like*
*systems*. Please check examples below. [Source code] for the executable is
written in `C#`. It should be noted *small delays* (few milliseconds) are *less*
*accurate*.

> Stability: [Stable](https://www.youtube.com/watch?v=L1j93RnIxEo).

[sleep]: https://en.wikipedia.org/wiki/Sleep_(Unix)
[Command prompt]: https://en.wikipedia.org/wiki/Cmd.exe
[Source code]: https://replit.com/@wolfram77/sleep-cmd

<br>

```bash
# Install on Windows
$ npm install -g sleep.cmd
```

<br>

```bash
$ sleep <number>[unit] | [option]
# Units:
# s: sleep for number seconds.
# m: sleep for number minutes.
# h: sleep for number hours.
# d: sleep for number days.
# Options:
# --help: get help
# --version: get version details
```

<br>

```bash
# sleep for 0.1 seconds
$ sleep 0.1

# sleep for 1.23 minutes
$ sleep 1.23m

# sleep for 1 day 23 hours
$ sleep 1d && sleep 23h
```

<br>
<br>


## References

- [sleep (Unix)][sleep]
- [Thread.Sleep Method (C#)](https://docs.microsoft.com/en-us/dotnet/api/system.threading.thread.sleep)

<br>
<br>


[![](https://img.youtube.com/vi/rCSCPujLs14/maxresdefault.jpg)](https://www.youtube.com/watch?v=rCSCPujLs14)
[![ORG](https://img.shields.io/badge/org-nodef-green?logo=Org)](https://nodef.github.io)
[![DOI](https://zenodo.org/badge/143302321.svg)](https://zenodo.org/badge/latestdoi/143302321)
![](https://ga-beacon.deno.dev/G-RC63DPBH3P:SH3Eq-NoQ9mwgYeHWxu7cw/github.com/nodef/sleep.cmd)
