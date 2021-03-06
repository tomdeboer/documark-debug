var cacheHelper = require('documark-cache');

module.exports = function debug ($, document, cb) {
	if (document.config().debug) {
		document.once('post-compile', function () {
			var cache  = cacheHelper(document);
			var file   = cache.fileWriteStream('document.html');
			var config = cache.fileWriteStream('config.json');

			file.end($.html());
			config.end(JSON.stringify(document.config(), null, 4));
		});
	}
	cb();
};
