import gulp from 'gulp'
import gutil from 'gulp-util'
import liveserver from 'gulp-live-server'
import webserver from 'gulp-webserver'
// import livereload from 'gulp-livereload'
// import nodemon from 'gulp-nodemon'
import webpack from 'webpack'

const APP_DIR = 'dist'

let isWatch = false

gulp.task('default', () => {
  // livereload.listen({
  //   basePath: APP_DIR,
  //   start: true
  // })
  isWatch = true
  return gulp.start('debug')
})

gulp.task('debug', ['mock', 'server', 'webpack'])

gulp.task('mock', () => {
  const server = liveserver.new(['--harmony_destructuring', 'mock/server.js'])
  server.start()
  gulp.watch('mock/server.js', server.start.bind(server))
})

gulp.task('server', () => {
  gulp
    .src(APP_DIR)
    .pipe(webserver({
      port: 8000,
      livereload: {
        enable: true,
        port: 9000
      },
      open: true
    }))
})

gulp.task('webpack', (cb) => {
  webpack({
    watch: isWatch,
    entry: {
      main: './src/main.js',
    },
    output: {
      path: APP_DIR,
      filename: 'app.js'
    },
    module: {
      loaders: [
        {
          test: /\.js$/,
          loader: 'babel',
          exclude: /(node_modules|bower_components)/,
          query: {
            optional: ['runtime'],
            stage: 0
          }
        }, {
        //   test: /\.css$/,
        //   loaders: ['style', 'raw']
        // }, {
          test: /\.styl$/,
          loaders: ['style', 'raw', 'stylus']
        }//, {
        //   test: /\.json/,
        //   loader: 'json'
        // }
      ]
    },
    resolve: {
      extensions: ['', '.js', '.coffee']
    },
    externals: [
      (() => {
        let IGNORE
        IGNORE = [
          // Node
          'fs',
          'path',
          // Electron
          'crash-reporter',
          'app',
          'menu',
          'menu-item',
          'browser-window',
          'dialog',
          'shell',
          'ipc',
          'remote',
          // NPM
          'chokidar',
          'emojione'
        ]
        return (context, request, callback) => {
          if (IGNORE.indexOf(request) >= 0) {
            return callback(null, `require('${request}')`)
          }
          return callback()
        }
      })()
    ],
    stats: {
      colors: true
    // },
    // node: {
    //   console: false,
    //   global: false,
    //   process: false,
    //   Buffer: false,
    //   __filename: false,
    //   __dirname: false,
    //   setImmediate: false
    }
  }, (err, stats) => {
    if (err) {
      throw new gutil.PluginError('webpack', err)
    }
    gutil.log('[webpack]', stats.toString({
      chunkModules: false
    }))
    // if (isWatch) {
    //   livereload.reload(`${APP_DIR}/app.js`)
    // }
    if (cb) {
      cb()
      cb = null
    }
  })
})
