module.exports = {
  root: true,
  overrides: [
    {
      files: '*.js?(.flow)',
      extends: ['./config/eslintJS'],
    },
    {
      files: '*.ts?(x)',
      extends: ['./config/eslintTS'],
    },
  ],
};
