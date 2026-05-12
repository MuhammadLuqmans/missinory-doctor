export function formatMoney(amount: number, opts?: { compact?: boolean }) {
  if (opts?.compact && amount >= 1000) {
    if (amount >= 1_000_000) {
      return `$${(amount / 1_000_000).toFixed(2).replace(/\.00$/, "")}M`;
    }
    return `$${Math.round(amount / 1000)}k`;
  }
  return `$${amount.toLocaleString("en-US")}`;
}

export function percent(raised: number, goal: number) {
  if (!goal) return 0;
  return Math.max(0, Math.min(1, raised / goal));
}

export function percentLabel(raised: number, goal: number) {
  return `${Math.round(percent(raised, goal) * 100)}%`;
}
