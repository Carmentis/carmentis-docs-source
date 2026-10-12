// Builds the specs published in the docs from the raw swagger files downloaded in `openapi/`.
// - keeps only the public API (`/api/v1/...`): the admin UI routes are not part of the documented API;
// - drops the `anchorWithWallet` endpoints, officially removed while being reworked.
import {mkdirSync, readFileSync, writeFileSync} from 'node:fs';

const SPECS = {
  'openapi/openapi-operator': 'openapi/prepared/operator.json',
  'openapi/openapi-indexer': 'openapi/prepared/indexer.json',
};

const isDocumented = (path) => path.startsWith('/api/v1') && !path.includes('anchorWithWallet');

mkdirSync('openapi/prepared', {recursive: true});
for (const [source, target] of Object.entries(SPECS)) {
  const spec = JSON.parse(readFileSync(source, 'utf8'));
  spec.paths = Object.fromEntries(Object.entries(spec.paths).filter(([path]) => isDocumented(path)));
  writeFileSync(target, JSON.stringify(spec, null, 2));
  console.log(`${target}: ${Object.keys(spec.paths).length} paths`);
}
