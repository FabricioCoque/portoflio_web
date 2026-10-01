export const PROJECT_COUNT = 6

export const projectSlug = (index: number) => `project-${index + 1}`

export function projectIndexFromSlug(slug: string): number | null {
  const match = /^project-(\d+)$/.exec(slug)
  if (!match) return null
  const index = Number(match[1]) - 1
  return index >= 0 && index < PROJECT_COUNT ? index : null
}

const placeholderSnippet = {
  file: 'main.py',
  code: `# Replace with a representative snippet from your project

def main() -> None:
    data = load_source()
    result = transform(data)
    validate(result)
    publish(result)


if __name__ == "__main__":
    main()`,
}

export const projectSnippets: { file: string; code: string }[] = [
  {
    file: 'reconcile.py',
    code: `import sqlite3
import pandas as pd

TOLERANCE = 0.01   # currency units
WINDOW_DAYS = 3    # allowed posting-date gap


def reconcile(bank: pd.DataFrame, ledger: pd.DataFrame) -> pd.DataFrame:
    merged = bank.merge(
        ledger, on="reference", how="outer",
        suffixes=("_bank", "_erp"), indicator=True,
    )
    amount_ok = (merged.amount_bank - merged.amount_erp).abs() <= TOLERANCE
    date_ok = (merged.date_bank - merged.date_erp).dt.days.abs() <= WINDOW_DAYS

    merged["status"] = "exception"
    merged.loc[amount_ok & date_ok, "status"] = "matched"
    return merged


with sqlite3.connect("recon.db") as conn:
    run = reconcile(load_bank(), load_ledger())
    run.to_sql("reconciliation_runs", conn, if_exists="append", index=False)`,
  },
  {
    file: 'build_star_schema.py',
    code: `import pandas as pd

raw = pd.read_csv("retail_transactions.csv", parse_dates=["order_date"])

dim_product = (
    raw[["sku", "product_name", "category"]]
    .drop_duplicates("sku")
    .reset_index(drop=True)
    .rename_axis("product_key")
    .reset_index()
)

dim_date = pd.DataFrame(
    {"date": pd.date_range(raw.order_date.min(), raw.order_date.max())}
)
dim_date["date_key"] = dim_date.date.dt.strftime("%Y%m%d").astype(int)

fact_sales = (
    raw.merge(dim_product[["sku", "product_key"]], on="sku")
    .assign(
        date_key=lambda d: d.order_date.dt.strftime("%Y%m%d").astype(int),
        revenue=lambda d: d.quantity * d.unit_price,
    )
    [["date_key", "product_key", "store_id", "quantity", "revenue"]]
)`,
  },
  {
    file: 'extract_invoice.py',
    code: `import re
import pdfplumber

PATTERNS = {
    "invoice_no": r"Invoice\\s*(?:No\\.?|#)\\s*[:\\-]?\\s*([A-Z0-9\\-]+)",
    "date": r"Date\\s*[:\\-]?\\s*(\\d{2}/\\d{2}/\\d{4})",
    "total": r"Total\\s*(?:Due)?\\s*[:\\-]?\\s*\\$?([\\d,]+\\.\\d{2})",
}


def extract(path: str) -> dict:
    with pdfplumber.open(path) as pdf:
        text = "\\n".join(page.extract_text() or "" for page in pdf.pages)

    fields = {
        key: (m.group(1) if (m := re.search(pattern, text, re.I)) else None)
        for key, pattern in PATTERNS.items()
    }

    missing = [k for k, v in fields.items() if v is None]
    if missing:
        fields |= ai_fallback(text, fields=missing)

    return validate(fields)`,
  },
  placeholderSnippet,
  placeholderSnippet,
  placeholderSnippet,
]

// Enlaces por proyecto (mismo orden que los proyectos: 1 al 6).
// repo:  dirección completa del repositorio en GitHub (si no hay, el botón "View Code" no se muestra)
// video: solo el identificador del video de YouTube, o sea lo que va después de youtu.be/
export type ProjectLinks = { repo?: string; video?: string }

export const projectLinks: ProjectLinks[] = [
  {}, // 1
  {}, // 2
  {
    // 3 - Extracción de facturas PDF a Excel
    repo: 'https://github.com/Fabricio-BI/Ingesta_y_Registro_Automatico_de_Facturas_PDF_a_Excel',
    video: 'https://youtu.be/st_ghVMpDYo',
  },
  {}, // 4
  {}, // 5
  {}, // 6
]
