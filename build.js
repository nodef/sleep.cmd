const path  = require('path');
const build = require('extra-build');


const owner = 'nodef';
const names = [];  // 'cli-sleep'
const RELEASE_URLS = [
  'https://github.com/nodef/sleep.cmd/releases/download/2.0.5/sleep.exe',
  'https://github.com/nodef/sleep.cmd/releases/download/2.0.5/sleep.dll',
  'https://github.com/nodef/sleep.cmd/releases/download/2.0.5/sleep.runtimeconfig.json',
];




// Get keywords for main/sub package.
function keywords(ds, less=false) {
  var m = build.readMetadata('.');
  var s = new Set([...m.keywords]);
  return Array.from(s);
}


// Publish a root package to NPM, GitHub.
function publishRootPackage(ds, ver, typ) {
  var _package = build.readDocument('package.json');
  var m  = build.readMetadata('.');
  m.version  = ver;
  m.keywords = keywords(ds);
  build.writeMetadata('.', m);
  build.publish('.');
  try { build.publishGithub('.', owner); }
  catch {}
  build.writeDocument(_package);
}


// Publish root packages to NPM, GitHub.
function publishRootPackages(ds, ver) {
  downloadRelease();
  publishRootPackage(ds, ver, '');
}


// Publish docs.
function publishDocs(ds) {
  build.updateGithubRepoDetails({owner, repo, topics: keywords(ds, true)});
}


// Pushish root, sub packages to NPM, GitHub.
function publishPackages(ds) {
  var m   = build.readMetadata('.');
  var ver = build.nextUnpublishedVersion(m.name, m.version);
  publishRootPackages(ds, ver);
}


// Download release files.
function downloadRelease() {
  for (var url of RELEASE_URLS) {
    var fil = path.basename(url);
    build.exec(`wget -nv -O "${fil}" "${url}"`);
  }
}


// Finally.
function main(a) {
  if (a[2]==='publish-docs') publishDocs([]);
  else if (a[2]==='publish-packages') publishPackages([]);
  else downloadRelease();
}
main(process.argv);
