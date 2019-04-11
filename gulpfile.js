"use strict";

var gulp = require('gulp');
var connect = require('gulp-connect'); //run as a local dev server
var open = require('gulp-open');  //Open a url in a web browser
var browserify = require('browserify'); //bundles JS
var reactify = require('reactify'); // Transform React JSX to js
var source = require('vinyl-source-stream'); // use convertinal test stream with gulp
var concat = require('gulp-concat');//concatenates files
var lint = require('gulp-eslint'); //lint JS files including  jsx
var config = {
    port:9000,
    devBaseUrl:'http://localhost',
    path:{
        html:'./src/*.html',
        js:'./src/**/*.js',
        images:"./src/images/*",
        css: ['node_modules/bootstrap/dist/css/bootstrap.min.css'],
        dist:'./dist',
        mainJs:'./src/main.js'
    }
};

//start a local dev server
gulp.task('connect',function(){
    connect.server({
        root:['dist'],
        port: config.port,
        base: config.devBaseUrl,
        livereload:true
    });
});

gulp.task('open',gulp.parallel('connect', function(){
    gulp.src('dist/index.html')
                .pipe(open({uri:config.devBaseUrl+':'+config.port+'/'}));
}));

gulp.task('html', function(){
    console.log("move files");
    return gulp.src(config.path.html, {base:'src'})
                    .pipe(gulp.dest(config.path.dist))
                    .pipe(connect.reload());
});
gulp.task('js', function(){
    browserify(config.path.mainJs)
        .transform(reactify)
        .bundle()
        .on('error', console.error.bind(console))
        .pipe(source('bundle.js'))
        .pipe(gulp.dest(config.path.dist + '/scripts'))
        .pipe(connect.reload());
    });



gulp.task('css', function(){
   return gulp.src(config.path.css, {base:'src'})
            .pipe(concat('bundle.css'))
            .pipe(gulp.dest(config.path.dist +'/css')
           );
});
gulp.task('image', function(){
   return gulp.src(config.path.images)
        .pipe(gulp.dest(config.path.dist + '/images'))
        .pipe(connect.reload());
    });

gulp.task('lint',function(){
    return gulp.src(config.path.js)
                    .pipe(lint({configFile:'eslint.config.json'}))
                    .pipe(lint.format());
})

gulp.task('watch', function(){
    gulp.watch(config.path.html, gulp.series('html'));
    gulp.watch(config.path.html, gulp.series('js','lint'));
    gulp.watch(config.path.html, gulp.series('css'));
   });

  
   gulp.task('default',  gulp.parallel('html','css','js','image','lint','open','watch'));

