const eslint = require('eslint');
const test = require('tape');

test('load config in eslint to validate all rule syntax is correct', t => {
  const { ESLint } = eslint;

  const cli = new ESLint({
    useEslintrc: false,
    overrideConfigFile: 'eslintrc.json'
  });

  const codeExample = 'const c = 1;\nfunction add(a, b) {\n  return a + b;\n}\n\nadd(c, 2);\n';

  async function lintText(code) {
    const results = await cli.lintText(code);
    results.forEach(result => {
      t.equal(result.errorCount, 0);
    });
    t.end();
  }

  lintText(codeExample);
});
