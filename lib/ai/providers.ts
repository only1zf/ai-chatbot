import {
  customProvider,
  extractReasoningMiddleware,
  wrapLanguageModel,
} from 'ai';
import { openai } from '@ai-sdk/openai';
import { deepseek } from '@ai-sdk/deepseek';
import { isTestEnvironment } from '../constants';
import {
  artifactModel,
  chatModel,
  reasoningModel,
  titleModel,
} from './models.test';

export const myProvider = isTestEnvironment
  ? customProvider({
    languageModels: {
      'chat-model-small': chatModel,
      'chat-model-large': chatModel,
      'chat-model-reasoning': reasoningModel,
      'title-model': titleModel,
      'artifact-model': artifactModel,
    },
  })
  : customProvider({
    languageModels: {
      'chat-model-small': openai('gpt-4o-mini'),
      'chat-model-large': openai('gpt-4o'),
      'chat-model-reasoning': deepseek('deepseek-reasoner'),
      'title-model': openai('gpt-4o'),
      'artifact-model': openai('gpt-4o-mini'),
    },
    imageModels: {
      'small-model': openai.image('dall-e-2'),
      'large-model': openai.image('dall-e-3'),
    },
  });
