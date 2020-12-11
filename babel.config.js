//项目分布阶段需要用到的babel插件
const prodPlugins = ['transform-remove-console']
if (process.env.NODE_ENV === 'production') {
    prodPlugins.push('')
}
module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [...prodPlugins]
}