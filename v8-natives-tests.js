Tinytest.add('Export', function (test) {
  test.isNotUndefined(v8, 'v8 is exported');
  let methodNames = [
    'isNative',
    'getOptimizationStatus',
    'getOptimizationCount',
    'optimizeFunctionOnNextCall',
    'deoptimizeFunction',
    'clearFunctionTypeFeedback',
    'debugPrint',
    'collectGarbage',
    'getHeapUsage',
    'hasFastProperties',
    'hasFastSmiElements',
    'hasFastObjectElements',
    'hasFastDoubleElements',
    'hasDictionaryElements',
    'hasFastHoleyElements',
    'hasFastSmiOrObjectElements',
    'hasSloppyArgumentsElements',
    'haveSameMap',
    'functionGetName',
    'isInPrototypeChain',
    'isSmi',
    'isValidSmi',
    'neverOptimizeFunction',
    'getV8Version',
    'isObserved'
  ];
  for (let methodName of methodNames) {
    test.isNotUndefined(v8[methodName], 'v8.' + methodName + ' is defined');
  }
  test.equal(typeof v8.helpers, 'object', 'v8.helpers is defined');
  let helperMethodNames = [
    'printStatus',
    'testOptimization',
    'benchmark'
  ];
  for (let methodName of helperMethodNames) {
    test.isNotUndefined(v8.helpers[methodName], 'v8.helpers.' + methodName + ' is defined');
  }
});
