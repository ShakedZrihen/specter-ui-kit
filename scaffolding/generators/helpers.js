/**
 * Custom validators
 */
function required(input) {
  if (!input) {
    return 'Required!';
  }

  return true;
}

function shouldSkip(key, skipMessage) {
  return input => {
    if (!input[key]) {
      return skipMessage;
    }
  };
}

function directoryHelper(context) {
  const { path } = context?.data?.root;

  return path.replace('components/', '');
}

export { required, shouldSkip, directoryHelper };
