---
description: Technical Context
globs:
alwaysApply: false
---
# Technical Context

## 使用的技术

### 核心框架和语言

- **Next.js 14**：使用 App Router 和 React Server Components
- **React 18**：用于构建用户界面
- **TypeScript**：提供类型安全和更好的开发体验
- **Node.js**：服务端运行环境

### UI 和样式

- **Tailwind CSS**：用于样式定制和响应式设计
- **shadcn/ui**：基于 Radix UI 的组件集合
- **Lucide Icons**：SVG 图标库

### 数据和存储

- **Vercel Postgres**：基于 Neon 的 PostgreSQL 数据库
- **Vercel Blob**：文件存储服务
- **Drizzle ORM**：类型安全的 SQL 查询构建器

### AI 和机器学习

- **Vercel AI SDK**：用于集成 AI 模型的工具包
- **OpenAI API**：默认的 AI 模型提供商 (GPT-4o)
- **支持其他提供商**：Anthropic、Cohere 等

### 身份验证和安全

- **NextAuth.js**：处理用户身份验证
- **环境变量**：用于安全配置管理

### 开发和测试

- **ESLint**：代码质量工具
- **Biome**：代码格式化工具
- **Playwright**：端到端测试框架

## 开发设置

### 本地环境设置

1. **Node.js**：推荐使用 v18.x 或更高版本
2. **pnpm**：作为首选包管理器
3. **环境变量**：需要配置 `.env` 文件（参考 `.env.example`）
4. **Vercel CLI**：用于管理环境变量和部署

### 开发工作流程

1. 使用 `pnpm install` 安装依赖
2. 使用 `pnpm dev` 启动开发服务器
3. 在 `http://localhost:3000` 访问应用

### 部署

- 主要面向 Vercel 部署
- 需要配置 Vercel Postgres 和 Vercel Blob 存储
- 需要设置 OpenAI API 密钥或其他 AI 提供商的密钥

## 技术约束

1. **浏览器兼容性**：
   - 支持现代浏览器（Chrome、Firefox、Safari、Edge）
   - 不保证支持 IE11 或更旧的浏览器

2. **API 限制**：
   - 受 OpenAI 和其他 AI 提供商 API 限制的约束
   - 需要处理 API 请求频率限制和超时

3. **性能考虑**：
   - 大型 AI 模型生成响应可能需要几秒钟
   - 流式响应改善用户体验但增加了复杂性

4. **数据存储**：
   - Vercel Postgres 有存储限制，需要适当管理数据
   - Blob 存储适用于文件但有大小限制

5. **身份验证**：
   - NextAuth.js 配置需要适当的回调 URL 和密钥
   - 需要考虑不同环境下的身份验证配置

## 依赖关系

### 核心依赖

- **next**: ^14.0.0
- **react**: ^18.2.0
- **react-dom**: ^18.2.0
- **ai**: ^2.2.22
- **tailwindcss**: ^3.3.0
- **typescript**: ^5.0.0
- **drizzle-orm**: ^0.28.0
- **next-auth**: ^4.22.1

### 开发依赖

- **@types/node**: ^20.0.0
- **@types/react**: ^18.2.0
- **@types/react-dom**: ^18.2.0
- **eslint**: ^8.45.0
- **@biomejs/biome**: ^1.4.0
- **@playwright/test**: ^1.36.0

系统主要使用 pnpm 进行依赖管理，package.json 中定义了完整的依赖列表。
