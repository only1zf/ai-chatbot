---
description: System Patterns
globs:
alwaysApply: false
---
# System Patterns

## 系统架构

该项目采用现代化的 Web 应用架构，主要由以下几部分组成：

1. **前端**：
   - 使用 Next.js 14 App Router 构建的 React 应用
   - 客户端和服务器组件的混合使用
   - 基于 shadcn/ui 和 Tailwind CSS 的 UI 层

2. **后端**：
   - Next.js API 路由和 Server Actions
   - AI SDK 用于与 LLM 模型交互
   - 数据库和存储服务集成

3. **数据层**：
   - Vercel Postgres (基于 Neon) 用于结构化数据
   - Vercel Blob 用于文件存储

4. **身份验证**：
   - NextAuth.js 提供的身份验证系统

## 关键技术决策

1. **Next.js App Router**：
   - 利用 React Server Components 优化性能
   - 使用服务器端渲染减少客户端 JavaScript 负载
   - 文件系统路由简化导航结构

2. **AI SDK**：
   - 提供统一 API 接口访问多种 LLM 模型
   - 支持流式响应，改善用户体验
   - 工具调用功能扩展 AI 能力

3. **数据持久化**：
   - 选择 Vercel 托管服务简化部署和维护
   - 使用关系型数据库确保数据一致性
   - Blob 存储支持大型文件处理

4. **UI 设计**：
   - 使用组件化方法促进代码复用
   - 采用 Tailwind CSS 实现响应式设计
   - 基于 Radix UI 的可访问性优先组件

## 设计模式

1. **组件模式**：
   - 采用原子设计思想构建 UI 组件
   - 将复杂功能拆分为小型、可维护的组件

2. **状态管理**：
   - 使用 React Context 在组件树间共享状态
   - 结合 React 钩子实现状态逻辑抽象

3. **服务抽象**：
   - 将 API 调用和数据访问封装在服务层中
   - 使用依赖注入简化测试和维护

4. **流式数据处理**：
   - 采用流式处理模式处理 AI 生成的内容
   - 使用异步迭代器处理流式响应

## 组件关系

```

```

核心数据流：

1. 用户在客户端输入消息
2. 通过服务器组件或 Server Actions 将请求发送到 AI 提供商
3. 流式接收 AI 响应并更新 UI
4. 将对话历史保存到数据库
