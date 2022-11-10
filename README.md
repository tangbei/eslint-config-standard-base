# eslint-config-tangbei-base

## .editorconfig

[https://blog.csdn.net/lwx931449660/article/details/120451417]
EditorConfig 有助于为跨各种编辑器和 IDE 处理同一项目的多个开发人员维护一致的编码风格。
EditorConfig 项目由用于定义编码样式的文件格式和一组文本编辑器插件组成，这些插件使编辑器能够读取文件格式并遵循定义的样式。


## eslint-plugin-import
支持 ES2015+ (ES6+) 导入/导出语法的 linting
顾名思义，是对导入的模块进行排序，并防止文件路径和导入名称拼写错误的问题
对比排序前后代码，排序后的代码看起来更整洁，
react全家桶、外部库、公共组件、子组件、api、工具类依次排列


## 注意事项
发布时使用`npm publish --access public`
由于npm publish 如果发布带组织名的包，默认为私有的包，而私有的包是要收费的。因此需要在发布的时候增加 --access public。
