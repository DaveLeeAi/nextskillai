'use client';

import { useState } from 'react';
import { X, Pencil, Trash2, Save, StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface Note {
  id: string;
  text: string;
  createdAt: string;
}

interface NotesDrawerProps {
  lessonTitle: string;
  onClose: () => void;
}

const initialNotes: Note[] = [
  { id: 'n1', text: 'Adding context is the key — who I am + what I need', createdAt: '2 minutes ago' },
];

export function NotesDrawer({ lessonTitle, onClose }: NotesDrawerProps) {
  const [notes, setNotes] = useState<Note[]>(initialNotes);
  const [draft, setDraft] = useState('');
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editText, setEditText] = useState('');

  const addNote = () => {
    if (!draft.trim()) return;
    setNotes((prev) => [
      { id: Date.now().toString(), text: draft.trim(), createdAt: 'just now' },
      ...prev,
    ]);
    setDraft('');
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((n) => n.id !== id));
  };

  const startEdit = (note: Note) => {
    setEditingId(note.id);
    setEditText(note.text);
  };

  const saveEdit = () => {
    setNotes((prev) =>
      prev.map((n) => (n.id === editingId ? { ...n, text: editText.trim() } : n))
    );
    setEditingId(null);
    setEditText('');
  };

  return (
    <div className="w-80 shrink-0 border-l border-slate-200 bg-white flex flex-col h-full">
      <div className="flex items-center justify-between px-4 py-3.5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 rounded-lg bg-amber-100 flex items-center justify-center">
            <StickyNote className="w-3.5 h-3.5 text-amber-600" strokeWidth={2} />
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-800">My Notes</p>
            <p className="text-2xs text-slate-400 truncate max-w-40">{lessonTitle}</p>
          </div>
        </div>
        <button onClick={onClose} className="p-1.5 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors">
          <X className="w-4 h-4" />
        </button>
      </div>

      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {notes.length === 0 && (
          <div className="flex flex-col items-center py-10 text-center">
            <div className="w-12 h-12 rounded-2xl bg-slate-100 flex items-center justify-center mb-3">
              <StickyNote className="w-5 h-5 text-slate-400" strokeWidth={1.5} />
            </div>
            <p className="text-sm text-slate-500">No notes yet. Add your first one below.</p>
          </div>
        )}
        {notes.map((note) => (
          <div key={note.id} className="bg-amber-50 border border-amber-100 rounded-xl p-3">
            {editingId === note.id ? (
              <div className="space-y-2">
                <textarea
                  className="w-full text-sm text-slate-700 px-2.5 py-2 rounded-lg border border-amber-200 bg-white focus:outline-none focus:ring-2 focus:ring-amber-400 resize-none"
                  rows={3}
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <div className="flex gap-2">
                  <button onClick={saveEdit} className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-white bg-amber-500 hover:bg-amber-600 transition-colors">
                    <Save className="w-3 h-3" /> Save
                  </button>
                  <button onClick={() => setEditingId(null)} className="text-xs text-slate-400 hover:text-slate-600">Cancel</button>
                </div>
              </div>
            ) : (
              <>
                <p className="text-sm text-slate-700 leading-relaxed">{note.text}</p>
                <div className="flex items-center justify-between mt-2">
                  <span className="text-2xs text-slate-400">{note.createdAt}</span>
                  <div className="flex gap-1.5">
                    <button onClick={() => startEdit(note)} className="p-1 rounded text-slate-400 hover:text-amber-600 hover:bg-amber-100 transition-colors">
                      <Pencil className="w-3 h-3" />
                    </button>
                    <button onClick={() => deleteNote(note.id)} className="p-1 rounded text-slate-400 hover:text-red-500 hover:bg-red-50 transition-colors">
                      <Trash2 className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      <div className="p-3 border-t border-slate-100 bg-white">
        <textarea
          className="w-full text-xs px-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent placeholder:text-slate-400 resize-none"
          rows={3}
          placeholder="Write a note about this lesson..."
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button
          onClick={addNote}
          disabled={!draft.trim()}
          className="mt-2 w-full flex items-center justify-center gap-1.5 py-2 rounded-xl text-xs font-medium text-white bg-amber-500 hover:bg-amber-600 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
        >
          <Save className="w-3.5 h-3.5" />
          Add Note
        </button>
      </div>
    </div>
  );
}
