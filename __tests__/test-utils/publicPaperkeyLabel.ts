export default function publicPaperkeyLabel(paperkey: string): string {
  return paperkey
    .split(' ')
    .slice(0, 2)
    .join(' ')
}
