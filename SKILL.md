---
name: "nuxtflow-starter"
description: "Clones and sets up the nuxtflow-starter project. Invoke when user wants to create a new project based on nuxtflow-starter template."
---

# nuxtflow-starter

该技能会按照以下步骤克隆并设置 nuxtflow-starter 项目：

1. 从 GitHub 克隆仓库
2. 清理 Git 历史记录
3. 更新项目名称
4. 删除不必要的文件
5. 安装依赖
6. 启动开发服务器
7. 验证首页加载正确

## 使用方法

当用户想要基于 nuxtflow-starter 模板创建新项目时，该技能会：

1. 将仓库克隆到指定目录
2. 删除 .git 目录并初始化新的 Git 仓库
3. 在 package.json 中更新项目名称
4. 删除 README.md 和 CHANGELOG.md 文件
5. 使用 pnpm 安装依赖
6. 启动开发服务器
7. 验证首页显示正确
8. 停止服务器

## 项目详情

- 基于 nuxt3 + vuetify3 + unocss 构建
- 自定义了 vuetify 默认样式
- 包含 Unocss 的 presetWind4 和 transformerDirectives 预设
- Unocss 需要使用 'un-' 前缀