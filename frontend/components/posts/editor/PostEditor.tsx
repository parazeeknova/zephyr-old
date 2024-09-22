'use client';

import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { submitPost } from '@/BE/posts/editor/actions';
import { useSession } from '@/BE/SessionProvider';
import UserAvatar from '@/C/UserAvatar';
import { Button } from '@/components/ui/button';

import './styles.css';

export default function PostEditor() {
  const { user } = useSession();

  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        bold: false,
        italic: false,
      }),
      Placeholder.configure({
        placeholder: "What's crack-a-lackin'?",
      }),
    ],
  });

  const input =
    editor?.getText({
      blockSeparator: '\n',
    }) || '';

  async function onSubmit() {
    await submitPost(input);
    editor?.commands.clearContent();
  }

  return (
    <div className="flex flex-col gap-5 rounded-2xl border border-border bg-card p-5 shadow-xl">
      <div className="flex items-center gap-5">
        <UserAvatar avatarUrl={user.avatarUrl} className="hidden sm:inline" />
        <EditorContent
          editor={editor}
          className="editor-content max-h-[20rem] w-full flex-grow overflow-y-auto rounded-2xl bg-secondary px-5 py-5 focus:outline-none"
        />
      </div>
      <div className="flex justify-end">
        <Button onClick={onSubmit} disabled={!input.trim()} className="min-w-20">
          Post
        </Button>
      </div>
    </div>
  );
}
