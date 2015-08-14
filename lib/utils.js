import _glob from 'glob';
import _mkdirp from 'mkdirp';
import B from 'bluebird';

const mkdirp = B.promisify(_mkdirp);
const glob = B.promisify(_glob);

export { mkdirp, glob };
