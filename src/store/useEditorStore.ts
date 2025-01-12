import { create } from 'zustand'
import { type Editor } from '@tiptap/react'

interface EditorState {
  editor: Editor | null
  setEditor: (value: Editor | null) => void
}

export const useEditorStore = create<EditorState>((set) => ({
  editor: null,
  setEditor: (value) => set({ editor: value }),
}))
