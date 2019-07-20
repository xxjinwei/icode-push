/**
 * icode get remote name
 */
const spawn = require('child_process').spawn

module.exports = function() {
    return new Promise((resolve, reject) => {
        const gitStatus = spawn('git', ['status', '-sb'])
        gitStatus.stdout.on('data', out => {
            const remoteName = out.toString('utf8').match(/origin\/(.*?)\s/)[1]
            resolve(remoteName)
        })
        gitStatus.stderr.on('data', out => {
            reject(out.toString('utf8'))
        })
    })
}
