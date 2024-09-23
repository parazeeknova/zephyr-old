'use client';

import Placeholder from '@tiptap/extension-placeholder';
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

import { useSubmitPostMutation } from '@/BE/posts/editor/mutations';
import { useSession } from '@/BE/SessionProvider';
import UserAvatar from '@/C/UserAvatar';
import './styles.css';
import LoadingButton from '@/C/widgets/authPage/LoadingButton';

export default function PostEditor() {
  const { user } = useSession();
  const mutation = useSubmitPostMutation();

  const editor = useEditor({
    immediatelyRender: false,
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

  function onSubmit() {
    mutation.mutate(input, {
      onSuccess: () => {
        editor?.commands.clearContent();
      },
    });
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
        <LoadingButton
          onClick={onSubmit}
          loading={mutation.isPending}
          disabled={!input.trim()}
          className="min-w-20"
        >
          Post
        </LoadingButton>
      </div>
    </div>
  );
}
