// Leaving it as an optional props isn't 100% safe
// Can result in undefined types leaking into the logic,
// but it should be fine since only Header uses this so far
// and the use cases are currently tight.
export type HeaderProps = {
  toggleFunction?: () => void;
  toggleStatus?: boolean;
  class?: string;
};
