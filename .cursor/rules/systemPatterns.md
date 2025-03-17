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

项目的组件结构遵循清晰的层次关系：

1. **布局组件**：
   - `app/layout.tsx`：提供全局布局和主题支持
   - `app/(chat)/layout.tsx`：聊天页面的特定布局

2. **页面组件**：
   - `app/(chat)/page.tsx`：聊天主页面
   - `app/(auth)/*/page.tsx`：身份验证相关页面

3. **功能组件**：
   - `components/chat.tsx`：聊天界面的核心组件
   - `components/messages.tsx`：消息列表组件
   - `components/message.tsx`：单条消息组件
   - `components/model-selector.tsx`：模型选择组件

4. **UI 组件**：
   - `components/ui/`：通用 UI 组件库
   - `components/icons.tsx`：图标组件

5. **工具和服务**：
   - `lib/ai/`：AI 模型和提供商相关功能
   - `lib/db/`：数据库操作和模型定义
   - `lib/utils.ts`：通用工具函数

核心数据流：

1. 用户在客户端输入消息（通过 `components/chat.tsx`）
2. 通过服务器组件或 Server Actions（`app/(chat)/actions.ts`）将请求发送到 AI 提供商
3. 使用 AI SDK（`lib/ai/providers.ts`）与 AI 模型交互
4. 流式接收 AI 响应并更新 UI（使用 `components/message.tsx` 显示）
5. 将对话历史保存到数据库（通过 `lib/db/` 中的函数）

特殊组件关系：

1. **聊天相关组件**：
   - `chat.tsx` → `messages.tsx` → `message.tsx`：形成消息显示的层次结构
   - `multimodal-input.tsx`：处理多模态输入（文本、图像等）
   - `message-actions.tsx`：提供消息相关的操作按钮

2. **编辑器组件**：
   - `code-editor.tsx`：代码编辑器组件
   - `text-editor.tsx`：文本编辑器组件
   - `sheet-editor.tsx`：表格编辑器组件

3. **AI 模型集成**：
   - `lib/ai/models.ts`：定义支持的 AI 模型
   - `lib/ai/providers.ts`：配置 AI 提供商
   - `lib/ai/prompts.ts`：定义系统提示词
