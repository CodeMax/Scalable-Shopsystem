
(function(global) {
    global.ENV = global.ENV || 'development';

    var map = {
        'app': 'src/tmp/app',
        'test': 'src/tmp/test',
        'ng2-bs3-modal': 'node_modules/ng2-bs3-modal'
    };

    var packages = {
        'app': {
            defaultExtension: 'js'
        },
        'test': {
            defaultExtension: 'js'
        },
        'rxjs': {
            defaultExtension: 'js'
        },
        'angular2-cookie': {
            defaultExtension: 'js'
        },
        'ng2-bs3-modal': {
            defaultExtension: 'js'
        }
    };

    var npmPackages = [
        '@angular',
        'rxjs',
        'lodash',
        'angular2-cookie'
    ];

    var packageNames = [
        // App barrels
        'app/shared',

        // 3rd party barrels
        'lodash',
        'angular2-cookie'
    ];

    // Add package entries for angular packages
    var ngPackageNames = [
        'common',
        'compiler',
        'core',
        'http',
        'platform-browser',
        'platform-browser-dynamic',
        'router'
    ];

    npmPackages.forEach(function (pkgName) {
        map[pkgName] = 'node_modules/' + pkgName;
    });

    packageNames.forEach(function(pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    ngPackageNames.forEach(function(pkgName) {
        var main = global.ENV === 'testing' ? 'index.js' :
            pkgName + '.umd.js';

        packages['@angular/'+pkgName] = { main: main, defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    };

    if (global.filterSystemConfig) {
      global.filterSystemConfig(config);
    }

    System.config(config);

})(this);
