export function CustomCode({ code }: { code: string }) {
  return (
    <code className="rounded bg-muted px-2 py-1 text-sm text-neutral-600 whitespace-pre-wrap break-all dark:text-neutral-200">
      {code}
    </code>
  );
}
