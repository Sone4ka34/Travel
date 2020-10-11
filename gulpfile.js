const gulp = require ("gulp");
const concat = require ("gulp-concat");
var rename = require("gulp-rename");
const cssmin = require ("gulp-cssmin")

var paths = {
    styles: {
      src: 'src/**/*.css', 
    //   откуда все файлы идут
      dest: 'styles/'
    //   куда идут (создается файл на уровне package.json)
    },
  };
   
  function styles() {
    //   взять src файлы, объединить и положить в dest (папка назначения)
    return gulp.src(paths.styles.src)
      .pipe(concat(paths.styles.dest))
      
      .pipe(rename(function (path){
        path.extname = ".css";
      }))

      .pipe(cssmin())
      .pipe(gulp.dest(paths.styles.dest));
    //   dest и есть наша папка добавленная styles
  }
  
   
  function watch() {
    gulp.watch(paths.styles.src, styles);
  }
  var build = gulp.series(gulp.parallel(styles));

  exports.styles = styles;
  exports.watch = watch;
  exports.build = build;
  exports.default = build;
