import fs from 'fs';
import * as viteValuesJSON from './vite.config.values.json' with { type: 'json' };

const projects = {
  uzi: {
    name: 'kabinet-uzi-crimea',
  },
};

const viteValuesFilePath = './vite.config.values.json';
const mainFilePath = './src/main.tsx';
let viteValues = viteValuesJSON;
viteValues = { ...viteValuesJSON.default };

const result = process.argv.some(proKey => {
  const project = projects[proKey];

  (async () => {
    if (project == null) return;

    const proDirPath = `./sub/${project.name}`;
    const proGenRouteTreeFilePath = `${proDirPath}/routeTree.gen`;

    viteValues.tanstackRoutesDir = `${proDirPath}/routes`;
    viteValues.tanstackGenRouteTree = `${proGenRouteTreeFilePath}.ts`;

    fs.writeFileSync(viteValuesFilePath, JSON.stringify(viteValues, null, '  '));
    fs.writeFileSync(
      mainFilePath,
      ('' + fs.readFileSync(mainFilePath)).replace(
        /import([\w\W]+?routeTree[\w\W]+?}).+?\/routeTree.gen';?/,
        `import$1 from '.${proGenRouteTreeFilePath}';`,
      ),
    );

    setTimeout(() => {
      console.log('*****************************************************');
      console.log('*****************************************************');
      console.log(`************** SWITCHED on ${proKey} **********************`);
      console.log('*****************************************************');
      console.log('*****************************************************');
    }, 100);
  })();

  return project != null;
});

if (!result) throw 'Unknown project name';
