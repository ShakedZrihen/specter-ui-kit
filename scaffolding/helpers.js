import _ from 'lodash';

const kebabCaseLodash = _.kebabCase;

/**
 * Convert a string to PascalCase
 * @param {string} value
 */
function pascalCase(value) {
  return _.upperFirst(_.camelCase(value));
}

export const kebabCase = value => {
  return kebabCaseLodash(value);
};

/**
 * Normalizes icon name by removed the `Icon` suffix
 * @param {string} value
 */
export const normalizeIconName = value => {
  if (value.endsWith('Icon')) {
    const [iconName] = value.split('Icon');

    return pascalCase(iconName);
  }

  if (value.endsWith('icon')) {
    const [iconName] = value.split('icon');

    return pascalCase(iconName);
  }

  return pascalCase(value);
};
