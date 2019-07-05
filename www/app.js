

var app = angular.module('kimBook', ['onsen', 'ngRoute', 'ngSQLite']);

app
	.constant('DB_CONFIG', {
        loan: {
            id: 'key',
            borrower: { type: 'text', null: false },
            loan_amount: { type: 'text' }
        }
    })
 
    .run(function ($SQLite) {
        $SQLite.dbConfig({
            name: 'kimbook-db',
            description: 'Bidir Registration Database',
            version: '1.0'
        });
    })
 
    .run(function ($SQLite, DB_CONFIG) {
        $SQLite.init(function (init) {
            angular.forEach(DB_CONFIG, function (config, name) {
                init.step();
                $SQLite.createTable(name, config).then(init.done);
            });
            init.finish();
        });
    });
