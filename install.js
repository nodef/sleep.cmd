const cp = require('child_process');
const os = require('os');


if(os.EOL==='\r\n') {
  try { cp.execSync('sleep', {stdio: [null, null, null]}); }
  catch(e) { cp.execSync('move /Y index.exe ..\\..\\sleep.exe'); }
}
