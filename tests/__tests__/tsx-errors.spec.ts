import runJest from '../__helpers__/runJest';

const tmpDescribe =
  parseInt(process.version.substr(1, 2)) >= 8 ? xdescribe : describe;

tmpDescribe('TSX Errors', () => {
  it('should show the correct error locations in the typescript files', () => {
    const result = runJest('../button', ['--no-cache', '-u']);

    const stderr = result.stderr.toString();

    expect(result.status).toBe(1);
    expect(stderr).toContain('Button.tsx:18:17');
    expect(stderr).toContain('Button.test.tsx:15:12');
  });
});
