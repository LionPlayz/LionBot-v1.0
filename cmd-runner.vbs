  Set WshShell = WScript.CreateObject("WScript.Shell")
  WshShell.AppActivate "Terminal"
  WScript.Sleep(1000)
  WshShell.SendKeys "node "
  WScript.Sleep(100)
  WshShell.SendKeys "index.js"
  WScript.Sleep(100)
  WshShell.SendKeys "{ENTER}"