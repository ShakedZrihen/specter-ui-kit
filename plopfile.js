import figlet from 'figlet';
import { component, icon, styled } from './scaffolding/generators/index.js';
import { kebabCase, normalizeIconName } from './scaffolding/helpers.js';
import inquirerDirectory from 'inquirer-directory';

export default function (plop) {
  plop.setHelper('kebabCase', kebabCase);
  plop.setHelper('normalizeIconName', normalizeIconName);

  plop.setPrompt('directory', inquirerDirectory);

  plop.setWelcomeMessage(`\n${figlet.textSync('Specter UI Kit')}\n`);

  plop.setGenerator('component', component);
  plop.setGenerator('icon', icon);
  plop.setGenerator('styled', styled);
}