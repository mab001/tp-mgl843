import * as fs from 'fs';

type Ref = { ref: number };

type FamixClass = {
  FM3: 'FamixTypeScript.Class';
  id: number;
  name: string;
  methods?: Ref[];
  attributes?: Ref[];
};

type FamixMethod = {
  FM3: 'FamixTypeScript.Method';
  id: number;
  cyclomaticComplexity?: number;
  numberOfLinesOfCode?: number;
};

type FamixEntity = {
  FM3?: string;
  id?: number;
  name?: string;
  methods?: Ref[];
  attributes?: Ref[];
  cyclomaticComplexity?: number;
  numberOfLinesOfCode?: number;
};

export type ClassMetrics = {
  className: string;
  numberOfMethods: number;
  numberOfAttributes: number;
  linesOfCode: number;
  cyclomaticTotal: number;
  cyclomaticAverage: number;
};

export function loadFamixModel(filePath: string): FamixEntity[] {
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

export function aggregateFamixClassMetrics(model: FamixEntity[]): ClassMetrics[] {
  const entitiesById = new Map<number, FamixEntity>();

  for (const entity of model) {
    if (entity.id !== undefined) {
      entitiesById.set(entity.id, entity);
    }
  }

  const classes = model.filter(
    (entity): entity is FamixClass => entity.FM3 === 'FamixTypeScript.Class' && entity.id !== undefined
  );

  return classes.map((cls) => {
    const methodRefs = cls.methods ?? [];
    const attributeRefs = cls.attributes ?? [];

    const methods: FamixMethod[] = methodRefs
      .map((methodRef) => entitiesById.get(methodRef.ref))
      .filter((entity): entity is FamixMethod => entity?.FM3 === 'FamixTypeScript.Method');

    const cyclomaticTotal = methods.reduce(
      (sum, method) => sum + (method.cyclomaticComplexity ?? 0),
      0
    );

    const linesOfCode = methods.reduce(
      (sum, method) => sum + (method.numberOfLinesOfCode ?? 0),
      0
    );

    return {
      className: cls.name,
      numberOfMethods: methodRefs.length,
      numberOfAttributes: attributeRefs.length,
      linesOfCode,
      cyclomaticTotal,
      cyclomaticAverage: methodRefs.length > 0 ? cyclomaticTotal / methodRefs.length : 0,
    };
  });
}