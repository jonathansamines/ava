const test = require('@ava/test');
const exec = require('../helpers/exec');

for (const [where, which, message = '’js’, ’jsx’'] of [
	['top-level', 'top-level-duplicates'],
	['top-level and babel', 'shared-duplicates', '’jsx’']
]) {
	test(`errors if ${where} extensions include duplicates`, async t => {
		return t.throwsAsync(exec.fixture([], {
			cwd: exec.cwd(which)
		}), {
			message: new RegExp(`Unexpected duplicate extensions in options: ${message}`, 'gi')
		});
	});
}
