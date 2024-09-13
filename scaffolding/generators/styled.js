import { PROMPTS } from './consts.js';
import { shouldSkip } from './helpers.js';

export default {
  description: 'Styled component',
  prompts: [
    PROMPTS.COMPONENT_NAME_PROMPT,
    PROMPTS.PATH_PROMPT,
    PROMPTS.CREATE_STORY_PROMPT,
    PROMPTS.CREATE_TEST_PROMPT,
  ],
  actions: [
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.style.tsx',
      templateFile: 'scaffolding/templates/Styled/Styled.style.tsx.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/index.ts',
      templateFile: 'scaffolding/templates/Styled/index.ts.hbs',
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.story.tsx',
      templateFile: 'scaffolding/templates/Styled/Styled.story.tsx.hbs',
      skip: shouldSkip('createStory', 'Skipping storybook'),
    },
    {
      type: 'add',
      path: 'src/{{path}}/{{pascalCase componentName}}/{{pascalCase componentName}}.test.tsx',
      templateFile: 'scaffolding/templates/Styled/Styled.test.tsx.hbs',
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
