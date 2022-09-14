using System.Text.RegularExpressions;


class MainClass
{

  // static variables
  static readonly string HELP =
    "Usage: sleep NUMBER[SUFFIX]...\n" +
    "   or:  sleep OPTION\n" +
    "Pause for NUMBER seconds.  SUFFIX may be 's' for seconds (the default),\n" +
    "'m' for minutes, 'h' for hours or 'd' for days.  Unlike most implementations\n" +
    "that require NUMBER be an integer, here NUMBER may be an arbitrary floating\n" +
    "point number.  Given two or more arguments, pause for the amount of time\n" +
    "specified by the sum of their values.\n" +
    "\n" +
    "      --help     display this help and exit\n" +
    "      --version  output version information and exit\n" +
    "\n" +
    "GNU coreutils online help: <http://www.gnu.org/software/coreutils/>\n" +
    "Full documentation at: <http://www.gnu.org/software/coreutils/sleep>\n" +
    "or available locally via: info '(coreutils) sleep invocation'\n";

  static readonly string VERSION =
    "sleep (GNU coreutils) 8.26\n" +
    "Copyright (C) 2016 Free Software Foundation, Inc.\n" +
    "License GPLv3+: GNU GPL version 3 or later <http://gnu.org/licenses/gpl.html>.\n" +
    "This is free software: you are free to change and redistribute it.\n" +
    "There is NO WARRANTY, to the extent permitted by law.\n" +
    "\n" +
    "Written by Jim Meyering and Paul Eggert.\n";

  static readonly string E_MISSING_OPERAND =
    "sleep: missing operand\n" +
    "Try 'sleep --help' for more information.\n";

  static readonly string E_INVALID_TIME_INTERVAL =
    "sleep: invalid time interval ‘${interval}’\n" +
    "Try 'sleep --help' for more information.\n";

  static readonly string E_UNKNOWN_OPTION =
    "sleep: unknown option -- ${option}\n" +
    "Try 'sleep --help' for more information.\n";

  static readonly Regex REGEX = new(@"^[\d\.\+\-eE]+");



  // main function
  public static void Main(string[] args)
  {
    if (args.Length == 0)
    {
      Console.Error.Write(E_MISSING_OPERAND);
      return;
    }
    string operand = args[0];
    if (operand == "--help")
    {
      Console.Write(HELP);
      return;
    }
    if (operand == "--version")
    {
      Console.Write(VERSION);
      return;
    }
    if (operand.StartsWith("-"))
    {
      Console.Error.Write(E_UNKNOWN_OPTION.Replace("${option}", operand));
      return;
    }
    Match match = REGEX.Match(operand);
    if (!match.Success)
    {
      Console.Error.Write(E_INVALID_TIME_INTERVAL.Replace("${interval}", operand));
      return;
    }
    if (!double.TryParse(match.Value, out double number))
    {
      Console.Error.Write(E_INVALID_TIME_INTERVAL.Replace("${interval}", operand));
      return;
    }
    string unit = operand[match.Length..].ToLower();
    TimeSpan time;
    if (unit == "s" || unit == "") time = TimeSpan.FromSeconds(number);
    else if (unit == "m") time = TimeSpan.FromMinutes(number);
    else if (unit == "h") time = TimeSpan.FromHours(number);
    else if (unit == "d") time = TimeSpan.FromDays(number);
    else
    {
      Console.Error.Write(E_INVALID_TIME_INTERVAL.Replace("${interval}", operand));
      return;
    }
    Thread.Sleep(time);
  }
}
