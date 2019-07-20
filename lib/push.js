/**
 * @file icode push
 */
const spawn = require('child_process').spawn

module.exports = function(remote) {
    spawn(
        'git',
        ['push', 'origin', `HEAD:refs/for/${remote}`],
        {
            stdio: 'inherit'
        }
    )
}
