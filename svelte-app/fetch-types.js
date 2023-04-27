import fs from 'fs/promises';
import { join } from 'path';

/* Doesn't really matter for this POC, but for production application,
We probably don't want to expose all the types. Instead of getting them
from the host, since we're have a monorepo, we can just copy them
through the local file structure? Also, this doesn't appear to be
consistently working, only got it working by using the public folder
instead of the dist folder.
*/

(async () => {
	const REMOTE_URL = 'http://localhost:3000/';
	const REMOTE_TYPES_URL = `${REMOTE_URL}types/sharedComponents.d.ts`;
	const DESTINATION = join('./', 'types/react-app.d.ts');

	const response = await fetch(REMOTE_TYPES_URL);
	const types = await response.text();

	await fs.writeFile(DESTINATION, types);
})();
