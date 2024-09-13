import { PROMPTS } from './consts.js';
import { shouldSkip, directoryHelper } from './helpers.js';

export default {
  description: 'React + Typescript component',
  prompts: [
    PROMPTS.COMPONENT_NAME_PROMPT,
    PROMPTS.PATH_PROMPT,
    PROMPTS.CREATE_STYLED_PROMPT,
    PROMPTS.CREATE_STORY_PROMPT,
    PROMPTS.CREATE_TEST_PROMPT,
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.tsx',
      templateFile: 'scaffolding/templates/Component/Component.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/index.ts',
      templateFile: 'scaffolding/templates/Component/index.ts.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.style.tsx',
      templateFile: 'scaffolding/templates/Component/Component.style.tsx.hbs',
      skip: shouldSkip('createStyled', 'Skipping styles'),
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.story.tsx',
      templateFile: 'scaffolding/templates/Component/Component.story.tsx.hbs',
      skip: shouldSkip('createStory', 'Skipping storybook'),
      data: {
        directory: directoryHelper,
      },
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
      templateFile: 'scaffolding/templates/Component/Component.test.tsx.hbs',
      skip: shouldSkip('createTest', 'Skipping test suite'),
    },
    {
      type: 'append',
      path: 'src/{{path}}/index.ts',
      force: true,
      unique: true,
      separator: '',
      template:
        "export { {{pascalCase componentName}} } from './{{pascalCase componentName}}';",
    },
  ],
};
