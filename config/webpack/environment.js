const { environment } = require('@rails/webpacker')

const webpack = require('webpack')
environment.plugins.prepend('Provide',
  new webpack.ProvidePligin({
      $:'jquey/src/jquery',
      jQuery: 'jquery/src/jquery',
      Popper: 'popper.js'
  })
)

module.exports = environment
