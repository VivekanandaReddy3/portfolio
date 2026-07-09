'use client';

import { useMemo, useState } from 'react';
import { clsx } from 'clsx';

const CACHED_READ = 0.1; // price multiplier for a cache hit
const CACHE_WRITE = 1.25; // price multiplier for (re)writing the prefix

const SEGMENTS: { label: string; tokens: string[] }[] = [
  {
    label: 'system',
    tokens: [
      'You',
      'are',
      'a',
      'coding',
      'agent.',
      'Now:',
      '09:41:23.',
      'Be',
      'concise.',
    ],
  },
  {
    label: 'tools',
    tokens: [
      'read_file(',
      'path',
      ')',
      'write_file(',
      'path,',
      'content',
      ')',
      'run_tests(',
      ')',
    ],
  },
  {
    label: 'history',
    tokens: [
      'User:',
      'login',
      '500s',
      'on',
      'submit.',
      'Asst:',
      'reading',
      'auth.ts',
      '…',
      'run_tests()',
      '→',
      '3',
      'failing',
      'in',
      'session.ts',
    ],
  },
];

const APPENDED = ['Asst:', 'fixed,', 'tests', 'pass', '✓'];
const TIMESTAMP_INDEX =
  SEGMENTS[0].tokens.findIndex((t) => t === '09:41:23.');

const flat = SEGMENTS.flatMap((s) => s.tokens);
const N = flat.length;

export function KvCacheDemo() {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [appended, setAppended] = useState(false);

  const stats = useMemo(() => {
    const hits = editIndex === null ? N : editIndex;
    const rewrites = N - hits;
    const appendedCount = appended ? APPENDED.length : 0;

    const cost =
      hits * CACHED_READ + (rewrites + appendedCount) * CACHE_WRITE;
    const warm = N * CACHED_READ + appendedCount * CACHE_WRITE;

    return { hits, rewrites, multiplier: cost / warm };
  }, [editIndex, appended]);

  const reset = () => {
    setEditIndex(null);
    setAppended(false);
  };

  let offset = 0;

  return (
    <div className="not-prose my-10 rounded-2xl border border-slate-200 bg-white p-5 shadow-card sm:p-6">
      <p className="font-mono text-[11px] tracking-[0.18em] text-slate-400 uppercase">
        One request, token by token
      </p>
      <p className="mt-1 mb-5 text-sm text-slate-500">
        Click any token to “edit” it and watch what happens to the cache.
      </p>

      <div className="flex flex-col gap-3">
        {SEGMENTS.map((segment) => {
          const start = offset;
          offset += segment.tokens.length;
          return (
            <div key={segment.label} className="flex flex-col gap-1.5">
              <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
                {segment.label}
              </span>
              <div className="flex flex-wrap gap-1.5">
                {segment.tokens.map((token, i) => {
                  const index = start + i;
                  const invalidated =
                    editIndex !== null && index >= editIndex;
                  const isEdited = editIndex === index;
                  return (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setEditIndex(index)}
                      style={{
                        transitionDelay: invalidated
                          ? `${(index - (editIndex ?? 0)) * 14}ms`
                          : `${index * 6}ms`,
                      }}
                      className={clsx(
                        'cursor-pointer rounded-md border px-1.5 py-0.5 font-mono text-xs transition-colors duration-300',
                        invalidated
                          ? 'border-amber-300 bg-amber-50 text-amber-800'
                          : 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400',
                        isEdited && 'ring-2 ring-amber-400'
                      )}
                      aria-label={`Edit token ${index}: ${token}`}
                    >
                      {token}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}

        {appended && (
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
              appended this turn
            </span>
            <div className="flex flex-wrap gap-1.5">
              {APPENDED.map((token, i) => (
                <span
                  key={i}
                  style={{ transitionDelay: `${i * 40}ms` }}
                  className="rounded-md border border-sky-200 bg-sky-50 px-1.5 py-0.5 font-mono text-xs text-sky-800"
                >
                  {token}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-slate-100 pt-5">
        <div className="flex flex-col">
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            cache hits
          </span>
          <span className="font-mono text-lg text-emerald-700 tabular-nums">
            {stats.hits}
            <span className="ml-1 text-xs text-slate-400">× 0.1</span>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            re-billed
          </span>
          <span className="font-mono text-lg text-amber-700 tabular-nums">
            {stats.rewrites}
            <span className="ml-1 text-xs text-slate-400">× 1.25</span>
          </span>
        </div>
        <div className="flex flex-col">
          <span className="font-mono text-[10px] tracking-widest text-slate-400 uppercase">
            cost vs. warm request
          </span>
          <span
            className={clsx(
              'font-mono text-lg tabular-nums transition-colors',
              stats.multiplier > 2 ? 'text-amber-700' : 'text-emerald-700'
            )}
          >
            ×{stats.multiplier.toFixed(1)}
          </span>
        </div>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setEditIndex(TIMESTAMP_INDEX)}
          className="cursor-pointer rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950"
        >
          Edit the timestamp
        </button>
        <button
          type="button"
          onClick={() => setAppended(true)}
          className="cursor-pointer rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950"
        >
          Append a result instead
        </button>
        <button
          type="button"
          onClick={reset}
          className="cursor-pointer rounded-full border border-slate-200 px-3 py-1 font-mono text-[11px] text-slate-600 transition-colors hover:border-slate-400 hover:text-slate-950"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
