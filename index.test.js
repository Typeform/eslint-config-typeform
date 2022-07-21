const child_process = require('child_process')

describe('eslint config', () => {
  // #region Pass
  it('should pass if there are no errors', () => {
    const output = child_process
      .execSync('yarn eslint -f "json" --no-ignore test-cases/pass.js')
      .toString()
    expect(output.includes('"errorCount":0')).toBeTruthy()
    expect(output.includes('"fatalErrorCount":0')).toBeTruthy()
    expect(output.includes('"warningCount":0')).toBeTruthy()
    expect(output.includes('"fixableErrorCount":0')).toBeTruthy()
    expect(output.includes('"fixableWarningCount":0')).toBeTruthy()
  })
  // #endregion

  // #region Warn
  it('should warn if console is used', () => {
    const output = child_process
      .execSync(
        'yarn eslint -f "json" --no-ignore test-cases/warn-no-console.js'
      )
      .toString()

    expect(output.includes('"ruleId":"no-console"')).toBeTruthy()
    expect(output.includes('"errorCount":0')).toBeTruthy()
    expect(output.includes('"warningCount":1')).toBeTruthy()
  })

  it('should warn if var is used', () => {
    const output = child_process
      .execSync('yarn eslint -f "json" --no-ignore test-cases/warn-no-var.js')
      .toString()

    expect(output.includes('"ruleId":"no-var"')).toBeTruthy()
    expect(output.includes('"errorCount":0')).toBeTruthy()
    expect(output.includes('"warningCount":1')).toBeTruthy()
  })

  it('should warn if braces are not used', () => {
    const output = child_process
      .execSync('yarn eslint -f "json" --no-ignore test-cases/warn-curly.js')
      .toString()

    expect(output.includes('"ruleId":"curly"')).toBeTruthy()
    expect(output.includes('"errorCount":0')).toBeTruthy()
    expect(output.includes('"warningCount":2')).toBeTruthy()
  })

  it('should warn if destructuring is not used', () => {
    const output = child_process
      .execSync(
        'yarn eslint -f "json" --no-ignore test-cases/warn-prefer-destructuring.js'
      )
      .toString()

    expect(output.includes('"ruleId":"prefer-destructuring"')).toBeTruthy()
    expect(output.includes('"errorCount":0')).toBeTruthy()
    expect(output.includes('"warningCount":1')).toBeTruthy()
  })
  // #endregion

  // #region Fail
  it('should fail if debugger is used', () => {
    const call = () =>
      child_process.execSync(
        'yarn eslint -f "json" --no-ignore test-cases/error-no-debugger.js'
      )

    expect(call).toThrow()

    let output = null

    try {
      call()
    } catch (err) {
      output = err.stdout.toString()
      expect(output.includes('"ruleId":"no-debugger"')).toBeTruthy()
      expect(output.includes('"errorCount":1')).toBeTruthy()
      expect(output.includes('"warningCount":0')).toBeTruthy()
    }
  })

  // #endregion
})
