import { required } from './helpers.js';
 
export default {
  description: 'React + Typescript icon component',
  prompts: [
    {
      message: 'Icon name',
      type: 'input',
      name: 'iconName',
      validate: required,
    },
  ],
  actions: [
    {
      type: 'add',
      path: 'src/components/icons/{{normalizeIconName iconName}}Icon/{{normalizeIconName iconName}}Icon.tsx',
      templateFile: 'scaffolding/templates/Icon/Icon.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/components/icons/{{normalizeIconName iconName}}Icon/index.ts',
      templateFile: 'scaffolding/templates/Icon/index.ts.hbs',
    },
    {
      type: 'append',
      path: 'src/components/icons/index.ts',
      force: true,
      unique: true,
      separator: '',
      template:
        "export { {{normalizeIconName iconName}}Icon } from './{{normalizeIconName iconName}}Icon';",
    },
  ],
};
