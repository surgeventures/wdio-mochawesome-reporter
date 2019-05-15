const AddTestResult = require('./AddTestResult')

describe('AddTestResult Unit Tests', function () {
    it('Should successfully Add A Passing Test', function () {
        const testResult = {
            pass: true,
            fail: false,
            pending: false
        }
        let suiteResult = AddTestResult({tests: [], passes: []}, testResult)

        expect(suiteResult.tests.length).toBe(1)
        expect(suiteResult.passes.length).toBe(1)
    })
    it('Should successfully Add A Failing Test', function () {
        const testResult = {
            pass: false,
            fail: true,
            pending: false
        }
        let suiteResult = AddTestResult({tests: [], failures: []}, testResult)

        expect(suiteResult.tests.length).toBe(1)
        expect(suiteResult.failures.length).toBe(1)
    })
    it('Should successfully Add A Pending Test', function () {
        const testResult = {
            pass: false,
            fail: false,
            pending: true
        }
        let suiteResult = AddTestResult({tests: [], pending: []}, testResult)

        expect(suiteResult.tests.length).toBe(1)
        expect(suiteResult.pending.length).toBe(1)
    })
})
