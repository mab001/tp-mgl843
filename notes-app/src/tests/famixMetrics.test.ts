import { aggregateFamixClassMetrics } from '../famixMetrics';

describe('Famix metrics aggregation', () => {
  test('calculates class cyclomatic metrics correctly', () => {
    const model = [
      {
        FM3: 'FamixTypeScript.Class',
        id: 1,
        name: 'DemoClass',
        methods: [{ ref: 2 }, { ref: 3 }],
        attributes: [{ ref: 4 }]
      },
      {
        FM3: 'FamixTypeScript.Method',
        id: 2,
        name: 'method1',
        cyclomaticComplexity: 1,
        numberOfLinesOfCode: 5
      },
      {
        FM3: 'FamixTypeScript.Method',
        id: 3,
        name: 'method2',
        cyclomaticComplexity: 3,
        numberOfLinesOfCode: 10
      },
      {
        FM3: 'FamixTypeScript.Attribute',
        id: 4,
        name: 'field1'
      }
    ];

    const metrics = aggregateFamixClassMetrics(model);
    expect(metrics).toHaveLength(1);

    expect(metrics[0]).toEqual({
      className: 'DemoClass',
      numberOfMethods: 2,
      numberOfAttributes: 1,
      linesOfCode: 15,
      cyclomaticTotal: 4,
      cyclomaticAverage: 2
    });
  });
});
