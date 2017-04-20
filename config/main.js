module.exports = function (app) {
    var env = process.env;
    var config = require('../config.json');
    app.set('port', env.PORT || config.port);
    app.set('siteUrl', env.SITE_URL || config.siteUrl);
    app.set('absoluteUrl', function (path) {
        return app.get('siteUrl') + '/' + path;
    });
    app.set('fromName', env.FROM_NAME || config.fromName);
    app.set('fromEmail', env.FROM_EMAIL || config.fromEmail);
    app.set('dbaddress', env.DB_ADDRESS || config.dbAddress);
    app.set('dbname', env.DB_NAME || config.dbName);
    app.set('dbuser', config.dbUser);
    app.set('dbpwd', config.dbPwd);

    // SMTP settings
    app.set('smtpService', env.SMTP_SERVICE || config.smtpService);
    app.set('smtpUser', env.SMTP_USER || config.smtpUser);
    app.set('smtpPwd', env.SMTP_PWD || config.smtpPwd);
    app.set('smtpHost', env.SMTP_HOST || config.smtpHost);
    app.set('smtpPort', env.SMTP_PORT || config.smtpPort || 587);
    app.set('smtpSecure', env.SMTP_SECURE || config.smtpSecure);
    app.set('smtpFrom', `"${app.get('fromName')}" <${app.get('fromEmail')}>`);

    //SendGrid settings
    app.set('sendGridAPIKey', env.SG_KEY || config.sgApiKey);
    app.set('sendGridTemplateId', env.SG_TEMPLATE_ID || config.sgTemplateId);
};