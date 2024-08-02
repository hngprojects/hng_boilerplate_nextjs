export function debounce<T extends (...arguments_: string[]) => void>(
  function_: T,
  wait: number,
) {
  let timeout: ReturnType<typeof setTimeout>;
  return function (...arguments_: Parameters<T>) {
    clearTimeout(timeout);
    timeout = setTimeout(() => function_(...arguments_), wait);
  };
}
