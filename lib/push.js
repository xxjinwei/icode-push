/**
 * @file git push
 */
const spawn = require('child_process').spawn

const gitStatus = spawn('git', ['status', '-sb'])
gitStatus.stdout.on('data', out => {
    const remote = out.toString('utf8').match(/origin\/(.*?)\s/)[1]
    push(remote)
})

function push(remote) {
    const gitPush = spawn('git', ['push', 'origin', `HEAD:refs/for/${remote}`])
    gitPush.stdout.on('data', out => {
        console.log(out.toSting('utf8'))
    })
    gitPush.stderr.on('data', out => {
        console.log(out.toString('utf8'))
    })
}
