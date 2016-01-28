'use strict';

var fs = require('fs');
var certlocation = require('config').get('connect.cert.location');
var certFileTypes = require('config').get('connect.cert.filetypes');
var log = require('winston');

module.exports = function readCerts(cb) {
	var certPaths = [];
	fs.readdir(certlocation, (err, files) => {
		if(!err) {
			files.forEach((file) => {
				let fileType;
				try{
					fileType = file.substring(file.lastIndexOf('.') + 1, file.length);
				} catch(exception) {
					return;
				}
				if(~certFileTypes.indexOf(fileType)){
					certPaths.push({
						type: fileType,
						path: certlocation + file
					});
				}
			});
		}
		if(certPaths.length === 0){
			log.error('Unable to find valid cert files.');
			throw Error('Unable to find valid cert files. Please check configuration.');
		} else {
			log.info('Cert files located. Files: ' + JSON.stringify(certPaths));
			cb(null, certPaths);
		}
	});
};