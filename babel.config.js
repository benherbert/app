module.exports = {
  'presets': [
    [
      '@babel/preset-env',
      {
        'debug': false,
        'targets': {
          'node': 'current',
          'browsers': [
            '> 1%',
            'last 2 versions'
          ]
        }
      }
    ],
    '@babel/preset-react'
  ]
}
