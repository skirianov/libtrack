module.exports = {
  env: {
    browser: true,
    es2020: true,
    jest: {
      globals: true,
    },
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'airbnb',
  ],
  plugins: [
    'react',
    'react-hooks',
  ],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        paths: ['.'],
      },
    },
  },
  globals: {
    NodeJS: true,
  },
  rules: {
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx', 'tsx'] }],

    // Max line length
    'max-len': [
      'error',
      {
        code: 90,
        ignorePattern: '^import\\s.+\\sfrom\\s.+;$',
      },
    ],
    'linebreak-style': 0,
    // Import order
    'import/order': [
      'warn',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],

    // note you must disable the base rule as it can report incorrect errors
    'no-use-before-define': 'off',

    // Fix requirement to add extensions to import files
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],

    // Allow absolute paths
    'import/no-absolute-path': ['error', {
      commonjs: false,
      amd: false,
      esmodule: false,
    }],

    // Allow pasting raw HTML
    'react/no-danger': 'off',

    // Allow usage of snake_case for API response data
    camelcase: 'off',

    // Don't use propTypes
    'react/prop-types': 'off',
    'react/require-default-props': 'off',

    // Remove all false-positives
    'no-unused-vars': 'off',

    // Allow to connect label by EITHER using id or nesting
    'jsx-a11y/label-has-associated-control': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],
    'jsx-a11y/label-has-for': ['error', {
      required: {
        some: ['nesting', 'id'],
      },
    }],

    // Allow props spreading
    'react/jsx-props-no-spreading': 'off',

    // React hooks
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies

    // Allow class components
    'react/prefer-stateless-function': [0],

    // Fix storybook ESLint bug
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: [
          '**/*.stories.tsx',
        ],
      },
    ],
  },
};
