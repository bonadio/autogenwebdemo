import { create } from 'zustand'
import { chatStore } from './ChatStore'

export const useBoundStore = create((...a) => ({
  ...chatStore(...a),
}))