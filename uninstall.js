const cp = require('child_process');
const os = require('os');


if(os.EOL==='\r\n') {
  try { cp.execSync('del /F ..\\..\\sleep.exe', {stdio: [null, null, null]}); }
  catch(e) {}
}
