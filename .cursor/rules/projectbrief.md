---
description: Project Brief
globs:
alwaysApply: false
---
# Project Brief

## Overview

这是一个使用 Next.js 14 和 App Router 构建的开源 AI 聊天机器人项目。该项目使用了 Vercel 的 AI SDK，提供了一个功能完善的聊天界面，支持多种 AI 模型集成。

## Core Features

- 基于 Next.js App Router 的现代化路由系统
- AI SDK 支持文本生成、结构化对象输出和工具调用
- 使用 shadcn/ui 和 Tailwind CSS 构建的美观界面
- 数据持久化：使用 Vercel Postgres 存储聊天历史和用户数据
- 使用 Vercel Blob 进行文件存储
- NextAuth.js 提供的身份验证功能

## Target Users

- 开发者和企业，希望快速部署自己的 AI 聊天机器人
- 需要自定义 AI 聊天界面的用户
- 想要学习和探索 AI 应用开发的开发者

## Technical Preferences

- 使用 Next.js 14 和 React Server Components
- 默认使用 OpenAI 的 gpt-4o 模型，但支持切换到其他提供商
- 使用 pnpm 作为包管理器
- 使用中文作为主要开发语言
