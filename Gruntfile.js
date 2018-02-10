/**
 * @project love
 * @file    Gruntfile.js
 * @author  St. <st_sister@icloud.com>
 * @time    2016-02-14
 */
module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/**\n'+
                //' * Copyright (c) <%= grunt.template.today("yyyy") %> Xinhuanet Inc. All rights reserved.\n' +
                ' * <%= pkg.name %>\n' +
                ' * @time <%= grunt.template.today("yyyy-mm-dd-HH.MM.ss") %>\n' +
                ' */\n',
        // js混淆压缩
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            execute: {
                files: {
                    'js/app.min.js': ['js/app.js']
                }
            }
        },
        // css压缩
        cssmin: {
            options: {
                //shorthandCompacting: false,
                //roundingPrecision: -1
            },
            execute: {
                files: {
                    'bundle/app.min.css': ['bundle/app.css'],
                }
            }
        },
        // 给压缩后的css添加注释
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            cssAddBanner: {
                files: {
                    'bundle/app.min.css': ['bundle/app.min.css'],
                }
            }
        },
    });
    require('load-grunt-tasks')(grunt);
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.registerTask('default', ['uglify', 'cssmin', 'concat']);
};