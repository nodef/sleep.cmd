const {fs, github, package} = require('extra-build');


const owner = 'nodef';
const names = [];  // 'cli-sleep'




// Update GitHub details.
function updateGithub() {
  var m = package.read('.');
  var {name, description} = m;
  var homepage  = `https://www.npmjs.com/package/${name}`;
  var topics    = m.keywords;
  topics.length = Math.min(topics.length, 20);
  github.updateDetails(owner, name, {description, homepage, topics});
}


// Publish root package to NPM, GitHub.
function publishRoot(nam, ver) {
  fs.restoreFileSync('package.json', () => {
    var m    = package.read();
    var name = m.name;
    m.version  = ver;
    if (nam) { m.name = nam; }
    fs.restoreFileSync('README.md', () => {
      // var txt = fs.readFileTextSync('README.md');
      // if (nam) txt = txt.replace(new RegExp(name, 'g'), nam);
      // fs.writeFileTextSync('README.md', txt);
      package.write('.', m);
      package.publish('.');
      try { package.publishGithub('.', owner); }
      catch (e) { console.error(e); }
    });
  });
}


// Deploy root package to NPM, GitHub.
function deployRoot(ver) {
  publishRoot('', ver);
  for (var nam of names)
    publishRoot(nam, ver);
}


// Deploy root, sub packages to NPM, GitHub.
function deployAll() {
  var m   = package.read();
  var ver = package.nextUnpublishedVersion(m.name, m.version);
  updateGithub();
  deployRoot(ver);
}


function main(a) {
  if (a[2] === 'deploy') deployAll();
  else throw new Error(`unknown command "${a[2]}"!`);
}
main(process.argv);
