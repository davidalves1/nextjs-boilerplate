module.exports = function (plop) {
  plop.setGenerator('Component', {
      description: 'Application component',
      prompts: [{
          type: 'input',
          name: 'name',
          message: 'What is the component name?'
      }],
      actions: [
        {
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.tsx',
          templateFile: 'templates/component.tsx.hbs'
        },{
          type: 'add',
          path: '../src/components/{{pascalCase name}}/styles.ts',
          templateFile: 'templates/styles.ts.hbs'
        },{
          type: 'add',
          path: '../src/components/{{pascalCase name}}/index.test.tsx',
          templateFile: 'templates/test.tsx.hbs'
        }
      ]
  });

  plop.setGenerator('Test', {
    description: 'Component test',

    prompts: [{
        type: 'input',
        name: 'name',
        message: 'What is the component name?'
    }],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.test.tsx',
        templateFile: 'templates/test.tsx.hbs'
      }
    ]
  });
};
