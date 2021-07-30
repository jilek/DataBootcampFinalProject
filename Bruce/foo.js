#!/usr/bin/env -S winpty node

console.log("start");
//let x = [1, 2, 3]
//x.forEach( function(X) {
//	console.log(X);
//});
//
//let square = (num) => num**2;
//x.forEach( function(X) {
//	console.log(square(X));
//});
//
//y = x.map(function(num) {
//	return num*2;
//});
//console.log(y);
//
//console.log( x.map( x => x * 3) );
//
//z = { "a": 1, "b": 2, "c": 3 };
//console.log(z);
//

const fs = require('fs');

//fs.readFile('./databases.json', 'utf8', (err, data) => {
//    if (err) {
//        console.log(`Error reading file from disk: ${err}`);
//    } else {
//        // parse JSON string to JSON object
//        const databases = JSON.parse(data);
//		if( databases instanceof Object ) {
//			console.log("Object");
//		}
//		else if( databases instanceof Array ) {
//			console.log("Array");
//		}
//		else {
//			console.log("-other-");
//		}
//        // print all databases
//        databases.forEach(db => {
//            console.log(`${db.name}: ${db.type}`);
//        });
//    }
//});

//fs.readFile('./example.json', 'utf8', (err, data) => {
//    if (err) {
//        console.log(`Error reading file from disk: ${err}`);
//    } else {
//        // parse JSON string to JSON object
//        const example = JSON.parse(data);
//		if( example instanceof Object ) { console.log("example is Object"); }
//		else if( example instanceof Array ) { console.log("example is Array"); }
//		else { console.log("example is -other-"); }
//        // print all databases
//        Object.keys(example).forEach( foo => {
//			key=foo;
//			value=example[foo];
//
//			let ktype = typeof key;
//			let vtype = typeof value;
//			let kinst = Object.prototype.toString.call(key);
//			let vinst = Object.prototype.toString.call(value);
//			//if( key instanceof Object ) { ktype = "Object"; }
//			//if( key instanceof Array ) { ktype = "Array"; }
//			//if( key instanceof String ) { ktype = "String"; }
//			//if( key instanceof Number ) { ktype = "Number"; }
//			//if( value instanceof Object ) { vtype = "Object"; }
//			//if( value instanceof Array ) { vtype = "Array"; }
//			//if( value instanceof String ) { vtype = "String"; }
//			//if( value instanceof Number ) { vtype = "Number"; }
//
//			console.log(`key=${key} type=${ktype} / ${kinst}, value=${value} type=${vtype} / ${vinst}`);
//		});
//    }
//});

fs.readFile('./dashboard/flavors_of_cacao.json', 'utf8', (err, data) => {
    if (err) {
        console.log(`Error reading file from disk: ${err}`);
    } else {
        // parse JSON string to JSON object
        const flavors = JSON.parse(data);
		let companies = Object.values(flavors["Company"]);
		let bar_name = Object.values(flavors["Bean_Origin_or_Bar_Name"]);
		let REF = Object.values(flavors["REF"]);
		let date = Object.values(flavors["Review_Date"]);
		let percent = Object.values(flavors["Cocoa_Percent"]);
		let where = Object.values(flavors["Company_Location"]);
		let rating = Object.values(flavors["Rating"]);
		let bean_type = Object.values(flavors["Bean_Type"]);
		let origin = Object.values(flavors["Broad_Bean_Origin"]);

        //companies.forEach( foo => {
		//	console.log(`foo=${foo}`);
		//});
		console.log(companies instanceof Number);
		for( ii = 0; ii < companies.length; ii++) {
			console.log(`\'${companies[ii]}\' \'${bar_name[ii]}\' ${origin[ii]}`);
		}
    }
});

console.log("end");
