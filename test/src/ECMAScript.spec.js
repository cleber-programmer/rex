describe('ECMAScript', () => {

  it('Verificando se todos as funcoes nativas do ECMA foram definidos', () => {

    Rex((r) => {

      [
        'anchor',
        'big',
        'blink',
        'bold',
        'charAt',
        'charCodeAt',
        'codePointAt',
        'concat',
        'copyWithin',
        'endsWith',
        'entries',
        'every',
        'fill',
        'filter',
        'find',
        'findIndex',
        'fixed',
        'fontcolor',
        'fontsize',
        'forEach',
        'hasOwnProperty',
        'includes',
        'indexOf',
        'isPrototypeOf',
        'italics',
        'join',
        'keys',
        'lastIndexOf',
        'link',
        'localeCompare',
        'map',
        'match',
        'normalize',
        'pop',
        'propertyIsEnumerable',
        'push',
        'reduce',
        'reduceRight',
        'repeat',
        'replace',
        'reverse',
        'search',
        'shift',
        'slice',
        'small',
        'some',
        'sort',
        'splice',
        'split',
        'startsWith',
        'strike',
        'sub',
        'substr',
        'substring',
        'sup',
        'toExponential',
        'toFixed',
        'toLocaleLowerCase',
        'toLocaleString',
        'toLocaleUpperCase',
        'toLowerCase',
        'toPrecision',
        'toString',
        'toUpperCase',
        'trim',
        'trimLeft',
        'trimRight',
        'unshift',
        'valueOf',
        'values'
      ].forEach(
          (key) =>
            expect(r[key]).toBeDefined());

    });

  });

  afterEach(window.onload);

});