"""Converte sete páginas renderizadas do PDF do upsell em WebP otimizado."""

from pathlib import Path
from PIL import Image

ROOT = Path(__file__).resolve().parents[1]
SOURCE = ROOT.parent / "upsell-manual-cercas-vivas-profissionais" / "tmp" / "renders"
OUTPUT = ROOT / "public" / "assets" / "upsell" / "carousel"

PAGES = {
    "01-capa.webp": 1,
    "02-alinhamento.webp": 16,
    "03-correcoes.webp": 23,
    "04-reducao.webp": 32,
    "05-cantos-curvas.webp": 36,
    "06-acabamento.webp": 41,
    "07-checklist.webp": 47,
}

OUTPUT.mkdir(parents=True, exist_ok=True)

for filename, page in PAGES.items():
    source = SOURCE / f"page-{page:02d}.png"
    if not source.exists():
        raise FileNotFoundError(f"Render não encontrado: {source}")
    with Image.open(source).convert("RGB") as image:
        target_width = min(920, image.width)
        target_height = round(image.height * target_width / image.width)
        image = image.resize((target_width, target_height), Image.Resampling.LANCZOS)
        target = OUTPUT / filename
        image.save(target, "WEBP", quality=84, method=6)
        print(f"{target.name}: {target_width}x{target_height}")
