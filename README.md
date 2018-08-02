Sleep for specified time in [Windows Console].
> Exactly same as [sleep] in Unix.<br>
> Only installs itself if `sleep` is not present.

```bash
# install on windows
# (has no effect on linux)
$ npm install -g cli-sleep
```

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


# sleep for 0.1 seconds
$ sleep 0.1

# sleep for 1.23 minutes
$ sleep 1.23m

# sleep for 1 day 23 hours
$ sleep 1d && sleep 23h
```


[![cli-sleep](https://i.imgur.com/2wdhAut.jpg)](https://merferry.github.io)
> Source code for windows executable is [here](https://repl.it/@wolfram77/cli-sleep).

[sleep]: https://en.wikipedia.org/wiki/Sleep_(Unix)
[Windows Console]: https://en.wikipedia.org/wiki/Win32_console
