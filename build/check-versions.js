var chalk = require('chalk')
var semver = require('semver')
var packageConfig = require('../package.json')
var shell = require('shelljs')//下面这个插件是shelljs，作用是用来执行Unix系统命令
function exec (cmd) {
  return require('child_process').execSync(cmd).toString().trim()//子进程运行cmd等命令
}

var versionRequirements = [
  {
    name: 'node',
    currentVersion: semver.clean(process.version),//使用semver插件吧版本信息转化成规定格式，也就是 '  =v1.2.3  ' -> '1.2.3' 这种功能
    versionRequirement: packageConfig.engines.node
  },
]

if (shell.which('npm')) {//// npm环境中
  versionRequirements.push({
    name: 'npm',
    currentVersion: exec('npm --version'),// 执行方法得到版本号
    versionRequirement: packageConfig.engines.npm// 要求的版本
  })
}

module.exports = function () {
  var warnings = []
  for (var i = 0; i < versionRequirements.length; i++) {
    var mod = versionRequirements[i]
    if (!semver.satisfies(mod.currentVersion, mod.versionRequirement)) {//上面这个判断就是如果版本号不符合package.json文件中指定的版本号，就执行下面的代码
      warnings.push(mod.name + ': ' +
        chalk.red(mod.currentVersion) + ' should be ' +
        chalk.green(mod.versionRequirement)
      )
    }
  }

  if (warnings.length) {
    console.log('')
    console.log(chalk.yellow('To use this template, you must update following to modules:'))
    console.log()
    for (var i = 0; i < warnings.length; i++) {
      var warning = warnings[i]
      console.log('  ' + warning)
    }
    console.log()
    process.exit(1)
  }
}
