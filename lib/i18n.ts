export type Locale = 'en' | 'es'

const enPlaceholderStudy = {
  problem:
    'Describe the business context here. What process was slow, error-prone, or opaque, and who was affected by it?',
  challenges: [
    'Key challenge or pain point #1',
    'Key challenge or pain point #2',
    'Key challenge or pain point #3',
  ],
  solution:
    'Summarize your approach here. Explain the architecture you designed, the tools you chose, and why they fit the problem.',
  architecture: [
    { title: 'Data Source', detail: 'input' },
    { title: 'Transformation', detail: 'process' },
    { title: 'Storage / Model', detail: 'persist' },
    { title: 'Output', detail: 'deliver' },
  ],
  results: [
    { value: '00%', label: 'Key result metric' },
    { value: '00h', label: 'Time saved per cycle' },
    { value: '0x', label: 'Improvement factor' },
  ],
  outcome: 'Describe the final business impact here and how stakeholders use the solution today.',
}

const esPlaceholderStudy: typeof enPlaceholderStudy = {
  problem:
    'Describe aquí el contexto de negocio. ¿Qué proceso era lento, propenso a errores u opaco, y a quién afectaba?',
  challenges: ['Desafío o problema clave #1', 'Desafío o problema clave #2', 'Desafío o problema clave #3'],
  solution:
    'Resume aquí tu enfoque. Explica la arquitectura que diseñaste, las herramientas elegidas y por qué encajan con el problema.',
  architecture: [
    { title: 'Fuente de datos', detail: 'entrada' },
    { title: 'Transformación', detail: 'proceso' },
    { title: 'Almacenamiento / Modelo', detail: 'persistencia' },
    { title: 'Salida', detail: 'entrega' },
  ],
  results: [
    { value: '00%', label: 'Métrica de resultado clave' },
    { value: '00h', label: 'Tiempo ahorrado por ciclo' },
    { value: '0x', label: 'Factor de mejora' },
  ],
  outcome: 'Describe aquí el impacto final en el negocio y cómo los usuarios utilizan la solución hoy.',
}

const en = {
  nav: {
    links: [
      { href: '/#expertise', label: 'Solutions' },
      { href: '/#projects', label: 'Projects' },
      { href: '/#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    hire: 'Hire me',
    tagline: '/ data · finance',
    switchLabel: 'Change language',
  },
  hero: {
    badge: 'Open to data & BI roles and freelance projects',
    subtitle: 'Finance, automation, and Business Intelligence',
    intro:
      "I'm a **data and automation analyst** with a background in **accounting and reconciliations**. I turn manual reports into automated ones and build data models that help the business get answers faster.",
    titleLead: 'Finance, Automation, and',
    titleAccent: 'Business Intelligence.',
    bio: (name: string) =>
      `I'm ${name}. I streamline accounting and finance reporting by automating workflows, integrating data from multiple sources, and building reports and dashboards that replace manual work.`,
    ctaProjects: 'View Projects',
    ctaContact: 'Get in Touch',
    metrics: [
      { value: '8+', label: 'Years in finance & control' },
      { value: '120h', label: 'Manual work automated / mo' },
      { value: '99.7%', label: 'Reconciliation match rate' },
    ],
    slidesNote: 'synthetic data',
    slides: [
      { title: 'Payment gateway reconciliation' },
      { title: 'P&L and Balance Sheet' },
      { title: 'Accounts receivable and collection risk' },
    ],
    code: {
      comment: '# → push exceptions to Power BI',
      processed: '14,382 transactions processed',
      matched: '14,339 matched',
      flagged: '43 exceptions flagged for review',
    },
  },
  expertise: {
    eyebrow: 'Solutions',
    title: 'Three areas of work.',
    description:
      'Accounting expertise and financial rigor, combined with the data tools to automate and analyze.',
    skillsSuffix: 'skills',
    categories: [
      {
        title: 'Automation & Python Scripting',
        description: 'Python scripts that ingest, clean, and validate data from ERPs, banks, and flat files.',
        skills: ['Python', 'Pandas', 'NumPy', 'Regex', 'RapidFuzz', 'SQLite', 'GitHub Actions'],
      },
      {
        title: 'Business Intelligence',
        description:
          'Power BI reports built on star-schema models: P&L and balance sheet variances, receivables aging, and payment reconciliations.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'IBCS', 'Figma'],
      },
      {
        title: 'Financial Analysis',
        description: 'Month-end close, bank and gateway reconciliations, receivables control, and tax withholdings.',
        skills: ['Reconciliations', 'Receivables Aging', 'P&L Analysis', 'Balance Sheet Analysis', 'Month-end Close', 'Tax Withholdings'],
      },
    ],
  },
  projects: {
    eyebrow: 'Featured Projects',
    title: 'Reporting automation and data analytics.',
    description: '',
    stackLabel: 'Tech stack',
    viewCode: 'View Code',
    viewCodeSr: (title: string) => `for ${title} (opens in new tab)`,
    caseStudy: 'Case Study',
    items: [
      {
        title: 'Automated Payment Gateway Reconciliation',
        description:
          'Python pipeline that cross-checks the ERP, the payment gateway, and the bank, applies gateway commissions and tax withholdings to separate expected differences from genuine errors, and publishes the results to a historical database and a Power BI dashboard. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '3,024', label: 'synthetic transactions classified' },
        stack: ['Python', 'Pandas', 'SQLite', 'Power BI'],
      },
      {
        title: 'Retail Data Analysis & Star-Schema Pipeline',
        description:
          'End-to-end ETL transforming raw retail transactions into a star-schema model with fact and dimension tables, powering an interactive Power BI sales dashboard.',
        metric: { value: '2M+', label: 'rows modeled into fact tables' },
        stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Star Schema'],
      },
      {
        title: 'Automated PDF Invoice Extraction to Excel',
        description:
          'Python workflow that reads electronic PDF invoices, extracts their data using supplier-specific templates with an AI model as a fallback, validates the amounts, and delivers an Excel report ready for tax reporting and accounting entry. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '12', label: 'synthetic invoices processed' },
        stack: ['Python', 'Regex', 'Gemini API', 'Excel'],
      },
      {
        title: 'Bank Reconciliation with Exact and Fuzzy Matching',
        description:
          'Reconciles the general ledger against the bank statement and finds the transactions that an exact match leaves pending because of formatting differences in the reference, flagging every approximate match for review. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '356/466', label: 'ledger records reconciled (synthetic data)' },
        stack: ['Python', 'RapidFuzz', 'Pandas', 'Openpyxl'],
      },
      {
        title: 'P&L and Balance Sheet in Power BI',
        description:
          'Power BI report that turns the Income Statement and Balance Sheet into a dynamic narrative: it explains variances against the prior year and monitors solvency with liquidity and leverage indicators, following IBCS standards. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '3', label: 'analyses combined in one report' },
        stack: ['Power Query', 'Power BI', 'DAX', 'Financial Modeling'],
      },
      {
        title: 'Accounts Receivable and Collection Risk',
        description:
          'Power BI dashboard built on a star schema that calculates days-past-due aging, a risk score, and balance variances. It shows the gap between billed and collected amounts in a waterfall chart, with customer-level detail. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '3', label: 'analyses combined in one dashboard' },
        stack: ['Power BI', 'Power Query', 'DAX', 'Star Schema'],
      },
    ],
  },
  caseStudy: {
    back: 'Back to Portfolio',
    label: 'Case Study',
    problemEyebrow: 'The Challenge',
    problemTitle: 'Business problem',
    solutionEyebrow: 'The Solution',
    solutionTitle: 'Architecture & implementation',
    architectureLabel: 'Pipeline architecture',
    codeLabel: 'Core implementation',
    resultsEyebrow: 'Results',
    resultsTitle: 'Business impact',
    prev: 'Previous',
    next: 'Next',
    ctaTitle: 'Have a similar challenge?',
    ctaBody: "Let's discuss how automation and better data models can help your finance team.",
    ctaButton: 'Get in Touch',
    items: [
      {
        problem:
          'At month-end, the ERP, the payment gateway (Datafast, Medianet, PayPhone), and the bank have to agree, but they are not connected to each other. The ERP bills the gross amount, the gateway deducts its commission, and the bank deposits the net amount after tax withholdings, so no two figures match at first glance. The accounting team ends up cross-checking the reports by hand, and errors slip through along the way. This is a real and common problem for businesses that accept card payments; to develop the solution I used synthetic data that simulates that scenario.',
        challenges: [
          'Three sources with different formats and no guaranteed common identifier',
          'Normal differences (commission and withholdings) mixed in with real errors',
          'Cumulative reports that repeat on every run without duplicating the history',
          'A process that someone without programming knowledge must be able to run',
        ],
        solution:
          'I built a three-stage pipeline. First, it cleans and normalizes the three reports, applying the tax withholdings and the commission rates of each payment gateway. Next, it cross-matches the transactions and classifies each one by status and type of exception. Finally, it loads the results into SQLite, updating by transaction ID, so a sale that was pending one week becomes reconciled the next without being duplicated. It runs with a single command or a .bat file, and Power BI reads the output.',
        architecture: [
          { title: 'Source Reports', detail: 'bank · gateway · ERP' },
          { title: 'Cleaning (ETL)', detail: 'tax withholdings' },
          { title: 'Matching', detail: 'exception classification' },
          { title: 'Historical Store', detail: 'SQLite · by tx_id' },
          { title: 'Dashboard', detail: 'Power BI' },
        ],
        results: [
          { value: '3,024', label: 'Synthetic transactions classified' },
          { value: '99', label: 'Exceptions detected in the test data' },
          { value: '3', label: 'Exception types: overcharged commission, unrecorded chargeback, missing from gateway' },
        ],
        outcome:
          'In the test with synthetic data that simulates a real operating scenario (3,024 transactions, July to December 2024), the system flagged 45 overcharged commissions ($100.70 recoverable), 24 chargebacks not recorded in the ERP ($5,060.69 at risk), and 30 sales with no gateway confirmation ($12,872.18 untraceable). The amounts come from test data and illustrate the kind of finding the system produces.',
      },
      {
        problem:
          'A retail business had years of transactional data spread across flat exports, but reporting was built on a single wide spreadsheet. Dashboards were slow, metrics disagreed between departments, and nobody trusted the numbers.',
        challenges: [
          'Over 2 million rows with duplicated product and store attributes',
          'Conflicting revenue definitions across teams',
          'Report refreshes taking minutes and frequently failing',
        ],
        solution:
          'I designed an ETL pipeline in Python and SQL that cleans raw transactions and reshapes them into a star schema — one sales fact table surrounded by date, product, store, and customer dimensions. A single DAX measure layer in Power BI now defines every KPI once.',
        architecture: [
          { title: 'Raw Transactions', detail: 'CSV exports' },
          { title: 'Clean & Validate', detail: 'pandas / SQL' },
          { title: 'Star Schema', detail: 'fact + dims' },
          { title: 'Semantic Model', detail: 'DAX measures' },
          { title: 'Sales Dashboard', detail: 'Power BI' },
        ],
        results: [
          { value: '2M+', label: 'Rows modeled into fact tables' },
          { value: '10x', label: 'Faster dashboard refresh' },
          { value: '1', label: 'Single source of truth for KPIs' },
        ],
        outcome:
          'Sales, finance, and operations now review the same numbers in weekly meetings, and category managers self-serve analysis without requesting ad-hoc extracts.',
      },
      {
        problem:
          'The accounting team spends many hours downloading invoices from recurring suppliers and manually typing 49-digit authorization numbers, taxpayer IDs (RUC), issue dates, and tax breakdowns. The volume delays the close, and manual entry increases the risk of errors. This is a real and recurring problem for accounting teams; to develop the solution I used synthetic invoices that follow the real structure of electronic invoices.',
        challenges: [
          'Invoice formats that differ by issuer',
          'New suppliers that are not in the catalog',
          'Inconsistent data that must not reach the accounting records',
          'Corrupt PDFs or locked reports that must not stop the batch',
        ],
        solution:
          'I built a hybrid Python workflow. It converts each PDF to Markdown to preserve table structure. If the supplier is in the catalog, it applies a regular-expression template tailored to that format; if the supplier is new, it sends the text to an AI model with a strict JSON schema. Every record goes through an arithmetic check (taxable base + VAT = total), and the Excel report highlights rows with errors in red.',
        architecture: [
          { title: 'PDF Invoices', detail: 'input folder' },
          { title: 'Conversion', detail: 'PDF to Markdown' },
          { title: 'Extraction', detail: 'template or AI' },
          { title: 'Validation', detail: 'base + VAT = total' },
          { title: 'Excel Report', detail: 'errors in red' },
        ],
        results: [
          { value: '12', label: 'Synthetic invoices processed in testing' },
          { value: '2', label: 'Extraction routes: template and AI fallback' },
          { value: '1', label: 'Template file to extend when adding a supplier' },
        ],
        outcome:
          'The workflow lets reviewers focus on the rows flagged in red instead of typing every invoice, and adding a new supplier only takes a new template, with no changes to the main flow. Tested with 12 synthetic invoices that follow the real structure.',
      },
      {
        problem:
          'At month-end, the accounting team has to confirm that every ledger entry has its matching bank credit and vice versa. When the references do not match exactly, because of a typo, a hyphen, or an extra zero, the system leaves them as pending even though the transaction exists, and someone has to review them one by one. This is a real and common problem in high-volume businesses; to develop the solution I used synthetic data that simulates that scenario.',
        challenges: [
          'The same transaction written differently in the ledger and in the bank',
          'False pending items that force row-by-row review',
          'Knowing which approximate matches can be trusted',
          'Telling what is missing from the bank apart from what is missing from the books',
        ],
        solution:
          'The process first matches what agrees exactly, then looks, only among the pending items, for transactions with the same amount and similar references. Each approximate match is flagged with its similarity percentage so the accountant can decide whether to accept it. Whatever remains unmatched is split into two lists: ledger items with no bank credit, and bank deposits with no accounting entry. Everything is delivered in a 6-sheet Excel workbook, with a summary of the reconciliation status.',
        architecture: [
          { title: 'Ledger & Banks', detail: 'Excel' },
          { title: 'Exact Match', detail: 'reference + amount' },
          { title: 'Fuzzy Match', detail: 'similarity ≥ 80' },
          { title: 'Exceptions', detail: 'unmatched items' },
          { title: 'Excel Report', detail: '6 sheets' },
        ],
        results: [
          { value: '356/466', label: 'Ledger records reconciled (350 exact and 6 by fuzzy matching)' },
          { value: '6', label: 'Matches found only by fuzzy matching ($8,694.63)' },
          { value: '128', label: 'Items for review: 110 unmatched ledger items and 18 unmatched bank deposits' },
        ],
        outcome:
          'In the test with synthetic data that simulates a real operating scenario, 356 of 466 ledger records were reconciled: 350 by exact match and 6 that only fuzzy matching could identify ($8,694.63). 110 unmatched ledger items ($167,731.45) and 18 bank deposits with no accounting entry ($747,664.25) remained, separated into two sheets for review. The team reviews only what truly does not add up and validates approximate matches using their similarity score.',
      },
      {
        problem:
          'Traditional financial reports are static and dense. Connecting operating profitability (P&L) with the capital structure (Balance Sheet) is hard; knowing how much was earned or lost is easy, but understanding where it comes from takes hours of manual reconciliation, and liquidity or debt risks take a long time to spot among so much text. This is a real and common problem in financial management; to develop the solution I used synthetic data that simulates the financial statements of a company.',
        challenges: [
          'P&L and Balance Sheet kept apart, with no model connecting them',
          'Explaining variances instead of just showing them',
          'Spotting liquidity and debt risks at a glance',
          'Keeping the executive read clear with a consistent visual standard',
        ],
        solution:
          'I built the report in three stages. First, I structured the chart of accounts and standardized the accounting records with Power Query to consolidate the financial statements. Then I modeled in DAX the accumulation matrices, the variances against the prior year, and the liquidity and leverage indicators. Finally, I designed the interface in Figma following IBCS standards. The report includes a waterfall chart showing how the margin erodes from gross revenue to net income, a solvency panel with the capital structure and short- versus long-term debt, and a cross-statement view with ROA and net working capital.',
        architecture: [
          { title: 'Financial Statements', detail: 'P&L and Balance Sheet' },
          { title: 'Power Query', detail: 'standardized chart of accounts' },
          { title: 'DAX Model', detail: 'variances and KPIs' },
          { title: 'IBCS Design', detail: 'Figma prototype' },
          { title: 'Power BI Report', detail: 'waterfall, solvency, ROA' },
        ],
        results: [
          { value: '2', label: 'Financial statements connected in one model (P&L and Balance Sheet)' },
          { value: '3', label: 'Combined analyses: variances, solvency, and cross-statement view' },
          { value: 'IBCS', label: 'Standard applied to the report design' },
        ],
        outcome:
          'Readers can go from net income to its causes with the waterfall chart and assess solvency without switching tools. The report was developed with synthetic data that simulates the financial statements of a company.',
      },
      {
        problem:
          'Traditional accounts receivable management does not give a structured view of the gap between what was billed and what was actually collected. It is hard to reconcile billed, collected, and outstanding balances in real time; collection is reactive because the portfolio is not classified by risk of late payment, and continuous payment delays erode cash flow and working capital. This is a real and common problem in accounts receivable management; to develop the solution I used synthetic data that simulates a customer receivables portfolio.',
        challenges: [
          'Reconciling billed, collected, and outstanding balances in one place',
          'Classifying receivables by risk of late payment, based on days past due',
          'Moving from the overall state of the portfolio to each customer without losing context',
          'Designing a dashboard that reduces cognitive load and speeds up decisions',
        ],
        solution:
          'I built the dashboard in three stages. First, I cleaned and standardized the transactional billing and payments data with Power Query. Then I designed a star-schema dimensional model and wrote the aging, risk scoring, and balance variance calculations in DAX. Finally, I laid out the dashboard in Figma with a fast analytical read in mind. The dashboard includes a waterfall chart with the gap between billed, collected, and outstanding amounts; a risk segmentation by days-past-due bucket; and a customer view with the pending invoices, due dates, and credit status of each account.',
        architecture: [
          { title: 'Billing & Payments', detail: 'transactional data' },
          { title: 'Power Query', detail: 'cleaning and standardization' },
          { title: 'Star Schema', detail: 'DAX: aging, score, variances' },
          { title: 'Figma Design', detail: 'analytical dashboard' },
          { title: 'Power BI Dashboard', detail: 'waterfall, risk, customer detail' },
        ],
        results: [
          { value: '3', label: 'Combined analyses: collection gap, late-payment risk, and customer detail' },
          { value: 'Aging', label: 'Risk segmentation by days-past-due bucket' },
          { value: '2', label: 'Reading levels: overall portfolio and customer or invoice detail' },
        ],
        outcome:
          'The dashboard helps direct collection efforts to the accounts with the greatest financial impact and supports decisions on credit policies and provisions for uncollectible accounts. Developed with synthetic data that simulates a customer receivables portfolio.',
      },
    ],
  },
  about: {
    eyebrow: 'Professional Background',
    title: 'From reconciliations to automated reporting.',
    paragraphs: [
      'Most of my career has been in accounting and reconciliations. Working daily with Excel, ERP reports, and scattered data sources showed me how much these areas depend on manual, repetitive processes that consume time that should go to analyzing information.',
      'That experience led me to build my own solutions, particularly around workflow automation and data analysis.',
    ],
    principles: [
      { k: 'accuracy', v: 'Every number traceable to its source' },
      { k: 'controls', v: 'Validation built into each pipeline step' },
      { k: 'clarity', v: 'Reports designed for decision-makers' },
    ],
    timeline: [
      {
        period: 'Foundation',
        title: 'Accounting & Financial Control',
        body: 'Experience across the accounting cycle, month-end closes, balance sheet reconciliations, and operational control under strict audit standards.',
      },
      {
        period: 'Transition',
        title: 'Financial Reporting Automation',
        body: 'Introduced Python scripts and Power Query to replace manual spreadsheet processes, shortening reporting times and eliminating operational errors.',
      },
      {
        period: 'Today',
        title: 'Data Analysis & Automation',
        body: 'Data analysis and automated workflows that management teams use to streamline their day-to-day operations.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Online presence',
    description:
      "If you'd like to exchange ideas on automation and data analysis, or explore a professional collaboration, feel free to write to me directly.",
    newTab: '(opens in new tab)',
    rights: 'All rights reserved.',
    built: 'Built with Next.js',
  },
}

export type Dictionary = typeof en

const es: Dictionary = {
  nav: {
    links: [
      { href: '/#expertise', label: 'Soluciones' },
      { href: '/#projects', label: 'Proyectos' },
      { href: '/#about', label: 'Perfil' },
      { href: '#contact', label: 'Contacto' },
    ],
    hire: 'Contrátame',
    tagline: '/ datos · finanzas',
    switchLabel: 'Cambiar idioma',
  },
  hero: {
    badge: 'Abierto a roles de datos y BI y a proyectos freelance',
    subtitle: 'Finanzas, automatización y Business Intelligence',
    intro:
      'Soy **analista de datos y automatización** con experiencia en **contabilidad y conciliaciones**. Convierto reportes manuales en informes automatizados y en modelos de datos que aceleran las respuestas del negocio.',
    titleLead: 'Finanzas, automatizacion y ',
    titleAccent: 'Business Intelligence.',
    bio: (name: string) =>
      `Soy ${name}. Optimizo la elaboración de reportes contables y financieros mediante la automatización de flujos de trabajo, la integración de datos de múltiples fuentes, la creación de informes y paneles de control que sustituyen el trabajo manual.`,
    ctaProjects: 'Ver proyectos',
    ctaContact: 'Contactar',
    metrics: [
      { value: '8+', label: 'Años en finanzas y control' },
      { value: '120h', label: 'Trabajo manual automatizado / mes' },
      { value: '99.7%', label: 'Tasa de conciliación' },
    ],
    slidesNote: 'datos sintéticos',
    slides: [
      { title: 'Conciliación de pasarelas de pago' },
      { title: 'P&L y Balance General' },
      { title: 'Cartera y riesgo de mora' },
    ],
    code: {
      comment: '# → enviar excepciones a Power BI',
      processed: '14,382 transacciones procesadas',
      matched: '14,339 conciliadas',
      flagged: '43 excepciones marcadas para revisión',
    },
  },
  expertise: {
    eyebrow: 'Soluciones',
    title: 'Tres áreas de intervención.',
    description:
      'Experiencia contable y rigor financiero, combinados con herramientas de datos para automatizar y analizar.',
    skillsSuffix: 'habilidades',
    categories: [
      {
        title: 'Automatización y Scripts en Python',
        description: 'Scripts en Python que ingieren, limpian y validan datos de ERPs, bancos y archivos planos.',
        skills: ['Python', 'Pandas', 'NumPy', 'Regex', 'RapidFuzz', 'SQLite', 'GitHub Actions'],
      },
      {
        title: 'Inteligencia de Negocios',
        description:
          'Reportes en Power BI sobre modelos en estrella: variaciones de P&L y balance, antigüedad de cartera y conciliaciones de pagos.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Modelo Estrella', 'IBCS', 'Figma'],
      },
      {
        title: 'Análisis Financiero',
        description: 'Cierre mensual, conciliaciones bancarias y de pasarelas, control de cartera y retenciones de impuestos.',
        skills: [
          'Conciliaciones',
          'Antigüedad de Cartera',
          'Análisis de P&L',
          'Análisis de Balance',
          'Cierre Mensual',
          'Retenciones de Impuestos',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Proyectos Destacados',
    title: 'Automatización de reportería y analítica de datos.',
    description: '',
    stackLabel: 'Stack tecnológico',
    viewCode: 'Ver código',
    viewCodeSr: (title: string) => `de ${title} (se abre en una pestaña nueva)`,
    caseStudy: 'Caso de estudio',
    items: [
      {
        title: 'Conciliación Automatizada de Pasarelas de Pago',
        description:
          'Pipeline en Python que cruza el ERP, la pasarela de pago y el banco, aplica las comisiones y las retenciones de impuestos para separar diferencias esperadas de errores reales, y publica los resultados en una base histórica y un dashboard de Power BI. Inspirado en un problema real; desarrollado con datos sintéticos.',
        metric: { value: '3,024', label: 'transacciones sintéticas clasificadas' },
        stack: ['Python', 'Pandas', 'SQLite', 'Power BI'],
      },
      {
        title: 'Análisis de Datos Retail y Pipeline con Modelo Estrella',
        description:
          'ETL de extremo a extremo que transforma transacciones retail en un modelo estrella con tablas de hechos y dimensiones, alimentando un dashboard interactivo de ventas en Power BI.',
        metric: { value: '2M+', label: 'filas modeladas en tablas de hechos' },
        stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Star Schema'],
      },
      {
        title: 'Extracción Automatizada de Facturas PDF a Excel',
        description:
          'Flujo en Python que lee facturas electrónicas en PDF, extrae sus datos con plantillas por proveedor y un modelo de IA como respaldo, valida los montos y entrega un Excel listo para el anexo transaccional y el registro contable. Inspirado en un problema real; desarrollado con datos sintéticos.',
        metric: { value: '12', label: 'facturas sintéticas procesadas' },
        stack: ['Python', 'Regex', 'Gemini API', 'Excel'],
      },
      {
        title: 'Conciliación Bancaria con Cruce Exacto y Difuso',
        description:
          'Concilia el mayor contable contra el estado de cuenta bancario y encuentra los movimientos que un cruce exacto deja como pendientes por diferencias de formato en la referencia, marcando cada coincidencia aproximada para su revisión. Inspirado en un problema real; desarrollado con datos sintéticos.',
        metric: { value: '356/466', label: 'registros del mayor conciliados (datos sintéticos)' },
        stack: ['Python', 'RapidFuzz', 'Pandas', 'Openpyxl'],
      },
      {
        title: 'P&L y Balance General en Power BI',
        description:
          'Reporte en Power BI que convierte el Estado de Resultados y el Balance General en una narrativa dinámica: explica las variaciones frente al año anterior y monitorea la solvencia con indicadores de liquidez y apalancamiento, bajo estándares IBCS. Inspirado en un problema real; desarrollado con datos sintéticos.',
        metric: { value: '3', label: 'análisis integrados en un solo reporte' },
        stack: ['Power Query', 'Power BI', 'DAX', 'Modelado financiero'],
      },
      {
        title: 'Control de Cartera y Riesgo de Mora',
        description:
          'Tablero en Power BI sobre un modelo en estrella que calcula la antigüedad de la mora, un score de riesgo y las variaciones de saldo. Muestra la brecha entre lo facturado y lo cobrado en un gráfico de cascada, con detalle por cliente. Inspirado en un problema real; desarrollado con datos sintéticos.',
        metric: { value: '3', label: 'análisis integrados en un solo tablero' },
        stack: ['Power BI', 'Power Query', 'DAX', 'Star Schema'],
      },
    ],
  },
  caseStudy: {
    back: 'Volver al portafolio',
    label: 'Caso de estudio',
    problemEyebrow: 'El desafío',
    problemTitle: 'Problema de negocio',
    solutionEyebrow: 'La solución',
    solutionTitle: 'Arquitectura e implementación',
    architectureLabel: 'Arquitectura del pipeline',
    codeLabel: 'Implementación principal',
    resultsEyebrow: 'Resultados',
    resultsTitle: 'Impacto en el negocio',
    prev: 'Anterior',
    next: 'Siguiente',
    ctaTitle: '¿Tienes un desafío similar?',
    ctaBody: 'Hablemos de cómo la automatización y mejores modelos de datos pueden ayudar a tu equipo financiero.',
    ctaButton: 'Contactar',
    items: [
      {
        problem:
          'Al cierre del mes, el ERP, la pasarela (Datafast, Medianet, PayPhone) y el banco deben coincidir, pero no se comunican entre sí. El ERP factura el valor bruto, la pasarela descuenta su comisión y el banco deposita el neto tras las retenciones de impuestos, así que ninguna cifra coincide a primera vista. El equipo contable termina cruzando los reportes a mano, y en ese proceso se escapan errores. Es un problema real y frecuente en empresas que cobran con tarjeta; para desarrollar la solución usé datos sintéticos que simulan ese escenario.',
        challenges: [
          'Tres fuentes con formatos distintos y sin identificador común garantizado',
          'Diferencias normales (comisión y retenciones) mezcladas con errores reales',
          'Reportes acumulados que se repiten en cada corrida sin duplicar el histórico',
          'Un proceso que debe poder operar una persona sin conocimientos de programación',
        ],
        solution:
          'Construí un pipeline en tres etapas. Primero limpia y normaliza los tres reportes, aplicando las retenciones de impuestos y las comisiones de cada pasarela. Luego cruza las transacciones y clasifica cada una según su estado y tipo de novedad. Por último, carga el resultado en SQLite actualizando por identificador de transacción, de modo que una venta pendiente una semana pase a conciliada la siguiente sin duplicarse. Se ejecuta con un solo comando o con un archivo .bat, y Power BI lee el resultado.',
        architecture: [
          { title: 'Reportes fuente', detail: 'banco · pasarela · ERP' },
          { title: 'Limpieza (ETL)', detail: 'retenciones de impuestos' },
          { title: 'Cruce', detail: 'clasificación de novedades' },
          { title: 'Base histórica', detail: 'SQLite · por tx_id' },
          { title: 'Dashboard', detail: 'Power BI' },
        ],
        results: [
          { value: '3,024', label: 'Transacciones sintéticas clasificadas' },
          { value: '99', label: 'Novedades detectadas en los datos de prueba' },
          { value: '3', label: 'Tipos de novedad: comisión de más, chargeback no registrado, sin pasarela' },
        ],
        outcome:
          'En la prueba con datos sintéticos que simulan un escenario operativo real (3,024 transacciones, de julio a diciembre de 2024), el sistema identificó 45 comisiones cobradas de más ($100.70 recuperables), 24 chargebacks no registrados en el ERP ($5,060.69 en riesgo) y 30 ventas sin confirmación de la pasarela ($12,872.18 sin trazabilidad). Los montos corresponden a datos de prueba e ilustran el tipo de hallazgo que produce el sistema.',
      },
      {
        problem:
          'Una empresa retail tenía años de datos transaccionales repartidos en exportaciones planas, pero los reportes se construían sobre una única hoja de cálculo enorme. Los dashboards eran lentos, las métricas no coincidían entre departamentos y nadie confiaba en las cifras.',
        challenges: [
          'Más de 2 millones de filas con atributos de producto y tienda duplicados',
          'Definiciones de ingresos contradictorias entre equipos',
          'Actualizaciones de reportes que tardaban minutos y fallaban con frecuencia',
        ],
        solution:
          'Diseñé un pipeline ETL en Python y SQL que limpia las transacciones y las transforma en un modelo estrella: una tabla de hechos de ventas rodeada de dimensiones de fecha, producto, tienda y cliente. Una única capa de medidas DAX en Power BI define cada KPI una sola vez.',
        architecture: [
          { title: 'Transacciones crudas', detail: 'exportaciones CSV' },
          { title: 'Limpieza y validación', detail: 'pandas / SQL' },
          { title: 'Modelo estrella', detail: 'hechos + dimensiones' },
          { title: 'Modelo semántico', detail: 'medidas DAX' },
          { title: 'Dashboard de ventas', detail: 'Power BI' },
        ],
        results: [
          { value: '2M+', label: 'Filas modeladas en tablas de hechos' },
          { value: '10x', label: 'Actualización del dashboard más rápida' },
          { value: '1', label: 'Única fuente de verdad para los KPIs' },
        ],
        outcome:
          'Ventas, finanzas y operaciones revisan ahora las mismas cifras en las reuniones semanales, y los gerentes de categoría analizan por su cuenta sin pedir extracciones ad hoc.',
      },
      {
        problem:
          'El equipo contable dedica muchas horas a descargar las facturas de proveedores recurrentes y a transcribir a mano números de autorización de 49 dígitos, RUC, fechas de emisión y desgloses de impuestos. El volumen retrasa el cierre y la digitación manual aumenta el riesgo de errores. Es un problema real y recurrente en los equipos contables; para desarrollar la solución usé facturas sintéticas que siguen la estructura real de las facturas electrónicas.',
        challenges: [
          'Formatos de factura distintos según el emisor',
          'Proveedores nuevos que no están en el catálogo',
          'Datos inconsistentes que no deben llegar al registro contable',
          'PDFs dañados o reportes bloqueados que no deben detener el lote',
        ],
        solution:
          'Desarrollé un flujo híbrido en Python. Convierte cada PDF a Markdown para conservar la estructura de las tablas. Si el proveedor está en el catálogo, aplica una plantilla de expresiones regulares propia de su formato; si es nuevo, envía el texto a un modelo de IA con un esquema JSON estricto. Todos los registros pasan por una validación aritmética (base imponible + IVA = total), y el reporte en Excel marca en rojo las filas con errores.',
        architecture: [
          { title: 'Facturas PDF', detail: 'carpeta de entrada' },
          { title: 'Conversión', detail: 'PDF a Markdown' },
          { title: 'Extracción', detail: 'plantilla o IA' },
          { title: 'Validación', detail: 'base + IVA = total' },
          { title: 'Reporte Excel', detail: 'errores en rojo' },
        ],
        results: [
          { value: '12', label: 'Facturas sintéticas procesadas en la prueba' },
          { value: '2', label: 'Rutas de extracción: plantilla y respaldo con IA' },
          { value: '1', label: 'Archivo de plantillas a ampliar para sumar un proveedor' },
        ],
        outcome:
          'El flujo permite concentrar la revisión en las filas marcadas en rojo en lugar de digitar cada factura, y sumar un proveedor nuevo solo requiere agregar una plantilla, sin modificar el flujo principal. Probado con 12 facturas sintéticas que siguen la estructura real.',
      },
      {
        problem:
          'Al cerrar el mes, el equipo contable debe confirmar que cada movimiento del mayor tenga su acreditación en el banco y viceversa. Cuando las referencias no coinciden exactamente, por una digitación errónea, un guion o un cero de más, el sistema las deja como pendientes aunque el movimiento exista, y alguien debe revisarlas una por una. Es un problema real y frecuente en empresas con alta transaccionalidad; para desarrollar la solución usé datos sintéticos que simulan ese escenario.',
        challenges: [
          'Referencias escritas distinto en el mayor y en el banco para el mismo movimiento',
          'Falsos pendientes que obligan a revisar fila por fila',
          'Saber en qué coincidencias aproximadas se puede confiar',
          'Distinguir lo que falta en el banco de lo que falta en la contabilidad',
        ],
        solution:
          'El proceso cruza primero lo que coincide de forma exacta y luego busca, solo entre lo pendiente, movimientos con el mismo importe y referencias parecidas. Cada coincidencia aproximada queda marcada y con su porcentaje de similitud, para que el contador decida si la acepta. Lo que sigue sin cruzar se separa en dos listas: partidas del mayor sin acreditación en el banco y depósitos del banco sin registro contable. Todo se entrega en un Excel de 6 hojas, con un resumen del estado de la conciliación.',
        architecture: [
          { title: 'Mayor y bancos', detail: 'Excel' },
          { title: 'Cruce exacto', detail: 'referencia + importe' },
          { title: 'Cruce difuso', detail: 'similitud ≥ 80' },
          { title: 'Excepciones', detail: 'pendientes y sobrantes' },
          { title: 'Reporte Excel', detail: '6 hojas' },
        ],
        results: [
          { value: '356/466', label: 'Registros del mayor conciliados (350 exactos y 6 por cruce difuso)' },
          { value: '6', label: 'Coincidencias que solo detectó el cruce difuso ($8,694.63)' },
          { value: '128', label: 'Movimientos para revisión: 110 partidas pendientes y 18 depósitos sobrantes' },
        ],
        outcome:
          'En la prueba con datos sintéticos que simulan un escenario operativo real, de 466 registros del mayor se conciliaron 356: 350 por cruce exacto y 6 que solo el cruce difuso pudo identificar ($8,694.63). Quedaron 110 partidas pendientes ($167,731.45) y 18 depósitos del banco sin registro contable ($747,664.25), separados en dos hojas para su revisión. El equipo revisa solo lo que realmente no cuadra y valida las coincidencias aproximadas con su puntaje.',
      },
      {
        problem:
          'Los reportes financieros tradicionales son estáticos y densos. Conectar la rentabilidad operativa (P&L) con la estructura patrimonial (Balance General) es difícil; saber cuánto se ganó o perdió es sencillo, pero entender de dónde viene exige horas de reconciliación manual, y los riesgos de liquidez o endeudamiento tardan en detectarse entre tanto texto. Es un problema real y frecuente en la gestión financiera; para desarrollar la solución usé datos sintéticos que simulan los estados financieros de una empresa.',
        challenges: [
          'P&L y Balance General en archivos separados, sin un modelo que los conecte',
          'Explicar las variaciones, no solo mostrarlas',
          'Detectar riesgos de liquidez y endeudamiento de un vistazo',
          'Mantener una lectura ejecutiva clara con un estándar visual consistente',
        ],
        solution:
          'Construí el reporte en tres etapas. Primero estructuré el plan de cuentas y estandaricé los registros contables con Power Query para consolidar los estados financieros. Luego modelé en DAX las matrices de acumulación, las variaciones frente al año anterior y los indicadores de liquidez y apalancamiento. Por último diseñé la interfaz en Figma bajo normas IBCS. El reporte incluye un gráfico de cascada que muestra cómo se erosiona el margen desde los ingresos brutos hasta la utilidad neta, un panel de solvencia con la estructura de capital y la deuda de corto y largo plazo, y un cruce de ambos estados con ROA y capital de trabajo neto.',
        architecture: [
          { title: 'Estados financieros', detail: 'P&L y Balance General' },
          { title: 'Power Query', detail: 'plan de cuentas estandarizado' },
          { title: 'Modelo DAX', detail: 'variaciones y KPIs' },
          { title: 'Diseño IBCS', detail: 'prototipo en Figma' },
          { title: 'Reporte Power BI', detail: 'cascada, solvencia, ROA' },
        ],
        results: [
          { value: '2', label: 'Estados financieros conectados en un solo modelo (P&L y Balance General)' },
          { value: '3', label: 'Análisis integrados: variaciones, solvencia y cruce de estados' },
          { value: 'IBCS', label: 'Estándar aplicado al diseño del reporte' },
        ],
        outcome:
          'El lector puede ir de la utilidad neta a sus causas con el gráfico de cascada y evaluar la solvencia sin cambiar de herramienta. El reporte se desarrolló con datos sintéticos que simulan los estados financieros de una empresa.',
      },
      {
        problem:
          'La gestión tradicional de cuentas por cobrar no ofrece una visión estructurada de la brecha entre lo facturado y lo realmente cobrado. Es difícil reconciliar en tiempo real los saldos facturados, cobrados y pendientes; la cobranza es reactiva porque la cartera no se clasifica por riesgo de morosidad, y los retrasos continuos en los cobros deterioran el flujo de caja y el capital de trabajo. Es un problema real y frecuente en la gestión de cuentas por cobrar; para desarrollar la solución usé datos sintéticos que simulan una cartera de clientes.',
        challenges: [
          'Reconciliar saldos facturados, cobrados y pendientes en un mismo lugar',
          'Clasificar la cartera por riesgo de morosidad según su antigüedad',
          'Pasar del estado global de la cartera al detalle de cada cliente sin perder contexto',
          'Diseñar un tablero que reduzca la carga cognitiva y acelere la decisión',
        ],
        solution:
          'Construí el tablero en tres etapas. Primero limpié y estandaricé la base transaccional de facturación y abonos con Power Query. Luego diseñé un modelo dimensional en estrella y escribí en DAX los cálculos de antigüedad de mora, scoring de riesgo y variaciones de saldo. Por último maqueté el dashboard en Figma, pensando en una lectura analítica rápida. El tablero incluye un gráfico de cascada con la brecha entre lo facturado, lo cobrado y lo pendiente; una segmentación de riesgo por tramos de días de mora; y una vista por cliente con sus facturas pendientes, fechas de vencimiento y estado crediticio.',
        architecture: [
          { title: 'Facturación y abonos', detail: 'base transaccional' },
          { title: 'Power Query', detail: 'limpieza y estandarización' },
          { title: 'Modelo en estrella', detail: 'DAX: mora, score, variaciones' },
          { title: 'Diseño en Figma', detail: 'dashboard analítico' },
          { title: 'Tablero Power BI', detail: 'cascada, riesgo, detalle por cliente' },
        ],
        results: [
          { value: '3', label: 'Análisis integrados: brecha de cobranza, riesgo por mora y detalle por cliente' },
          { value: 'Aging', label: 'Segmentación de riesgo por tramos de días de mora' },
          { value: '2', label: 'Niveles de lectura: visión global de la cartera y detalle por cliente y factura' },
        ],
        outcome:
          'El tablero permite orientar la cobranza hacia las cuentas de mayor impacto económico y sirve de apoyo para definir políticas de crédito y anticipar provisiones por cuentas incobrables. Desarrollado con datos sintéticos que simulan una cartera de clientes.',
      },
    ],
  },
  about: {
    eyebrow: 'Trayectoria Profesional',
    title: 'De las conciliaciones a la reportería automatizada.',
    paragraphs: [
      'Gran parte de mi carrera se desarrolló en las áreas de contabilidad y conciliaciones. Lidiar a diario con Excel, reportes de ERP y fuentes dispersas me mostró cómo estas áreas dependen de procesos manuales y repetitivos que consumen el tiempo que deberían dedicar al análisis de información.',
      'Esta experiencia me llevó a crear mis propias soluciones, particularmente en torno a la automatización de flujos de trabajo y el análisis de información.',
    ],
    principles: [
      { k: 'precisión', v: 'Cada cifra trazable hasta su origen' },
      { k: 'controles', v: 'Validación en cada paso del pipeline' },
      { k: 'claridad', v: 'Reportes diseñados para quien decide' },
    ],
    timeline: [
      {
        period: 'Base',
        title: 'Contabilidad y Control Financiero',
        body: 'Experiencia en el ciclo contable, cierres mensuales, conciliaciones de balance y control de operaciones bajo estrictos estándares de auditoría.',
      },
      {
        period: 'Transición',
        title: 'Automatización de reporteria financiera',
        body: 'Incorporación de scripts en Python y Power Query para reemplazar procesos manuales en hojas de cálculo, reduciendo tiempos de reportería y eliminando errores operativos.',
      },
      {
        period: 'Hoy',
        title: 'Análisis de datos y automatización',
        body: 'Análisis de datos y desarrollo de flujos automatizados que los equipos de gestión utilizan para optimizar su operación diaria.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contacto',
    title: 'Presencia',
    description:
      'Si te interesa intercambiar ideas sobre automatización y análisis de datos o evaluar alguna colaboración profesional, puedes escribirme directamente.',
    newTab: '(se abre en una pestaña nueva)',
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con Next.js ',
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, es }
