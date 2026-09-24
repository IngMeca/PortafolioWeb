"""Aplica los nombres descriptivos del inventario a los JPG ya presentes en este repositorio."""
from pathlib import Path
import csv

root = Path(__file__).resolve().parent
with (root / 'inventario_certificados.csv').open(encoding='utf-8-sig', newline='') as handle:
    rows = list(csv.DictReader(handle))

missing = [r['archivo_actual'] for r in rows if not (root / r['archivo_actual']).is_file() and not (root / r['nuevo_archivo']).is_file()]
conflicts = [r['nuevo_archivo'] for r in rows if (root / r['archivo_actual']).is_file() and (root / r['nuevo_archivo']).exists()]
if missing or conflicts:
    raise SystemExit(f'No se aplicaron cambios. Faltantes: {missing[:5]}; conflictos: {conflicts[:5]}')

changed = 0
for row in rows:
    old = root / row['archivo_actual']
    new = root / row['nuevo_archivo']
    if old.is_file():
        new.parent.mkdir(parents=True, exist_ok=True)
        old.rename(new)
        changed += 1
print(f'{changed} JPG renombrados; {len(rows)} registrados en el inventario.')
