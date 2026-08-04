export function withCurrentQuery(target: string) {
  const base = new URL(target, window.location.origin);
  const current = new URLSearchParams(window.location.search);

  current.forEach((value, key) => {
    if (!base.searchParams.has(key)) base.searchParams.append(key, value);
  });

  if (base.origin === window.location.origin) {
    return `${base.pathname}${base.search}${base.hash}`;
  }

  return base.toString();
}
