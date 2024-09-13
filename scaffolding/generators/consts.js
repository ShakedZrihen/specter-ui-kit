import { required } from './helpers.js';

/**
 * Common prompts
 */
const PROMPTS = {
  PATH_PROMPT: {
    message: 'Component type',
    type: 'directory',
    name: 'path',
    basePath: 'src',
  },
  COMPONENT_NAME_PROMPT: {
    message: 'Component name',
    type: 'input',
    name: 'componentName',
    validate: required,
  },
  CREATE_STYLED_PROMPT: {
    type: 'confirm',
    name: 'createStyled',
    message: 'Create styled component?',
    default: true,
  },
  CREATE_STORY_PROMPT: {
    type: 'confirm',
    name: 'createStory',
    message: 'Create story file?',
    default: true,
  },
  CREATE_TEST_PROMPT: {
    type: 'confirm',
    name: 'createTest',
    message: 'Create test suite?',
    default: true,
  },
};

export {
  PROMPTS,
};
