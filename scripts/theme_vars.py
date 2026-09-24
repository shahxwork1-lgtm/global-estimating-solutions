from pathlib import Path
path = Path('/home/ubuntu/global-estimating-solutions/client/src/index.css')
text = path.read_text()
replacements = {
    '--primary: var(--color-blue-700);': '--primary: #0066FF;',
    '--primary-foreground: var(--color-blue-50);': '--primary-foreground: #FFFFFF;',
    '--sidebar-primary: var(--color-blue-600);': '--sidebar-primary: #0047AB;',
    '--sidebar-primary-foreground: var(--color-blue-50);': '--sidebar-primary-foreground: #FFFFFF;',
    '--background: oklch(1 0 0);': '--background: #F3F4F6;',
    '--foreground: oklch(0.235 0.015 65);': '--foreground: #0A0A0A;',
    '--card: oklch(1 0 0);': '--card: #FFFFFF;',
    '--card-foreground: oklch(0.235 0.015 65);': '--card-foreground: #0A0A0A;',
    '--popover: oklch(1 0 0);': '--popover: #FFFFFF;',
    '--popover-foreground: oklch(0.235 0.015 65);': '--popover-foreground: #0A0A0A;',
    '--secondary: oklch(0.98 0.001 286.375);': '--secondary: #F3F4F6;',
    '--secondary-foreground: oklch(0.4 0.015 65);': '--secondary-foreground: #1F2937;',
    '--muted: oklch(0.967 0.001 286.375);': '--muted: #F3F4F6;',
    '--muted-foreground: oklch(0.552 0.016 285.938);': '--muted-foreground: #6B7280;',
    '--accent: oklch(0.967 0.001 286.375);': '--accent: #E8F0FF;',
    '--accent-foreground: oklch(0.141 0.005 285.823);': '--accent-foreground: #0A0A0A;',
    '--border: oklch(0.92 0.004 286.32);': '--border: #D1D5DB;',
    '--input: oklch(0.92 0.004 286.32);': '--input: #D1D5DB;',
    '--ring: oklch(0.623 0.214 259.815);': '--ring: #0066FF;',
}
for old, new in replacements.items():
    text = text.replace(old, new)
path.write_text(text)
print('Updated global CSS tokens to the requested blue/black palette.')
