/*global module:false*/

/**
 * Javascript Project Boilerplate
 * Version 0.1.0
 */
module.exports = function(grunt) {
    "use strict";
    var pkg, config;

    pkg = grunt.file.readJSON('package.json');

    config = {
        banner : [
            '/**\n',
            ' * <%= pkg.name %> v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>\n',
            ' * <%= pkg.description %>\n',
            ' *\n',
            ' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author %>\n',
            ' * Licensed <%= pkg.license %>\n',
            ' */\n'
        ].join(''),

        sources : [
            'src/intro.js',

            // add'l packages

            'src/export.js',
            'src/outro.js'
        ],
        pkg : pkg,
        uglifyFiles : {}
    };

    // setup dynamic filenames
    config.versioned = [config.pkg.name, config.pkg.version].join('-');
    config.dist = ['dist/', '.js'].join(config.versioned);
    config.uglifyFiles[['dist/', '.min.js'].join(config.versioned)] = config.dist;

    // Project configuration.
    grunt.initConfig({
        pkg : config.pkg,
        lint : {
            files : ['gruntfile.js', 'test/*.js', 'src/*']
        },
        clean : {
            dist : ['dist/']
        },
        concat : {
            options : {
                stripBanners : true,
                banner : config.banner
            },
            dist : {
                src : config.sources,
                dest : config.dist
            }
        },
        uglify : {
            options : { mangle : true },
            dist : {
                files : config.uglifyFiles
            }
        },
        jasmine : {
            tests : {
                src : ['dist/', '.min.js'].join(config.versioned),
                options : {
                    specs : 'test/spec/*.spec.js',
                    template : 'test/grunt.tmpl'
                }
            }
        },
        jshint : {
            options : {
                jshintrc : 'jshint.json'
            },
            source : config.dist
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jasmine');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-jshint');

    // Default task.
    grunt.registerTask('default', ['boilerplate-check', 'clean', 'concat', 'jshint', 'uglify', 'jasmine']);

    grunt.registerTask('boilerplate-check', 'Ensures defaults have been updated.', function() {
        var configured, log;

        configured = true;
        log = grunt.log;
        if (pkg.name === 'project-name') {
            log.writeln('project.json.name has not been configured.');
            configured = false;
        }
        if (pkg.version === '0.0.0') {
            log.writeln('project.json.version has not been configured. Consider 0.0.1');
            configured = false;
        }
        if (pkg.author === 'Your Name <your.name@domain.com>') {
            log.writeln('project.json.author has not been configured.');
            configured = false;
        }
        if (pkg.description === '') {
            log.writeln('project.json.description has not been configured.');
            configured = false;
        }
        if (pkg.contributors[0].name === 'Your Name') {
            log.writeln('project.json.contributors name has not been configured.');
            configured = false;
        }
        if (pkg.contributors[0].email === 'your.name@domain.com') {
            log.writeln('project.json.contributors email has not been configured.');
            configured = false;
        }
        if (pkg.main === null) {
            log.writeln('project.json.main is null. Use grunt --force and find the file in ./dist');
            configured = false;
        }
        if (pkg.repository.url === 'https://github.com/...') {
            log.writeln('project.json.repository.url has not been configured.');
            configured = false;
        }
        if (!pkg.keywords.length) {
            log.writeln('project.json.keywords have not been configured.');
            configured = false;
        }
        return configured;
    });
};