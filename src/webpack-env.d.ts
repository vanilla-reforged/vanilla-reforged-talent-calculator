interface RequireContext {
  keys(): string[];
  <T>(id: string): T;
  resolve(id: string): string;
  id: string;
}

interface NodeRequire {
  context(
    path: string,
    deep?: boolean,
    filter?: RegExp,
    mode?: "sync" | "eager" | "weak" | "lazy" | "lazy-once"
  ): RequireContext;
}