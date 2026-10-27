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
      { href: '/#projects', label: 'Projects' },
      { href: '/#expertise', label: 'Solutions' },
      { href: '/#about', label: 'About' },
      { href: '#contact', label: 'Contact' },
    ],
    hire: 'Hire me',
    tagline: '',
    switchLabel: 'Change language',
  },
  hero: {
    badge: 'Open to data & BI roles and freelance projects',
    subtitle: 'Finance, automation, and Business Intelligence',
    intro:
      "I help you turn manual reports into **automated** ones and build **data models** that get your business answers **faster**.",
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
      { title: 'Receivables and late-payment risk' },
    ],
    code: {
      comment: '# → push exceptions to Power BI',
      processed: '14,382 transactions processed',
      matched: '14,339 matched',
      flagged: '43 exceptions flagged for review',
    },
  },
  techStack: {
    eyebrow: 'Tools',
  },
  expertise: {
    eyebrow: 'Solutions',
    title: '',
    description:
      '',
    skillsSuffix: 'skills',
    categories: [
      {
        title: 'Automation & Optimization',
        description:
          'Automating data processing and consolidation: pulling together multiple sources, cleaning data, and flagging anomalies. Large-scale matching of transactional records and automated report generation.',
        skills: ['Python', 'Pandas', 'SQL', 'ETL Automation'],
      },
      {
        title: 'Business Intelligence',
        description:
          'Analysis, modeling, and visualization: building dashboards and reports that give clear visibility into key metrics, working closely with business and technology teams.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Data Modeling', 'IBCS', 'SQL'],
      },
      {
        title: 'Financial Analysis',
        description: 'Month-end close, bank and payment gateway reconciliations, receivables control, and tax withholdings.',
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
    caseStudy: 'View project',
    items: [
      {
        title: 'Automated Payment Gateway Reconciliation',
        description:
          'Python pipeline that cross-checks the ERP, the payment gateway, and the bank, applies gateway fees and tax withholdings to separate expected differences from real errors, and publishes the results to a historical database and a Power BI dashboard. Inspired by a real-world problem; built and tested with synthetic data.',
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
          'Python workflow that reads electronic PDF invoices, extracts the data using supplier-specific templates (with an AI model as a fallback), validates the amounts, and produces an Excel file ready for tax filing and bookkeeping. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '12', label: 'synthetic invoices processed' },
        stack: ['Python', 'Regex', 'Gemini API', 'Excel'],
      },
      {
        title: 'Bank Reconciliation with Exact and Fuzzy Matching',
        description:
          'Reconciles the general ledger against the bank statement and catches the transactions that an exact match leaves pending because of formatting differences in the reference, flagging every approximate match for review. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '356/466', label: 'ledger records reconciled (synthetic data)' },
        stack: ['Python', 'RapidFuzz', 'Pandas', 'Openpyxl'],
      },
      {
        title: 'P&L and Balance Sheet in Power BI',
        description:
          'Power BI report that turns the Income Statement and Balance Sheet into a dynamic narrative: it explains variances against the prior year and tracks solvency with liquidity and leverage indicators, following IBCS standards. Inspired by a real-world problem; built and tested with synthetic data.',
        metric: { value: '3', label: 'analyses combined in one report' },
        stack: ['Power Query', 'Power BI', 'DAX', 'Financial Modeling'],
      },
      {
        title: 'Accounts Receivable Control and Late-Payment Risk',
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
    onThisPage: 'On this page',
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
          'At month-end close, the ERP, the payment gateway (Datafast, Medianet, PayPhone), and the bank all have to agree, yet none of them talk to each other. The ERP bills the gross amount, the gateway deducts its fee, and the bank deposits the net amount after tax withholdings, so no two figures match at first glance. The accounting team ends up cross-checking the reports by hand, and errors slip through along the way. This is a real and common problem for businesses that accept card payments; to build the solution, I used synthetic data that simulates that scenario.',
        challenges: [
          'Three sources with different formats and no guaranteed common identifier',
          'Expected differences (fees and withholdings) mixed in with real errors',
          'Cumulative reports that get re-run without duplicating the history',
          'A process that someone with no programming background can run',
        ],
        solution:
          'I built a three-stage pipeline. First, it cleans and normalizes the three reports, applying the tax withholdings and the fee rates of each payment gateway. Next, it matches the transactions and classifies each one by status and exception type. Finally, it loads the results into SQLite, updating by transaction ID, so a sale that was pending one week shows up as reconciled the next, without being duplicated. It runs with a single command or a .bat file, and Power BI reads the output.',
        architecture: [
          { title: 'Source Reports', detail: 'bank · gateway · ERP' },
          { title: 'Cleaning (ETL)', detail: 'tax withholdings' },
          { title: 'Matching', detail: 'exception classification' },
          { title: 'Historical Database', detail: 'SQLite · by tx_id' },
          { title: 'Dashboard', detail: 'Power BI' },
        ],
        results: [
          { value: '3,024', label: 'Synthetic transactions classified' },
          { value: '99', label: 'Exceptions detected in the test data' },
          { value: '3', label: 'Exception types: overcharged fee, unrecorded chargeback, missing from gateway' },
        ],
        outcome:
          'In a test with synthetic data simulating a real operating scenario (3,024 transactions, July through December 2024), the system flagged 45 overcharged fees ($100.70 recoverable), 24 chargebacks missing from the ERP ($5,060.69 at risk), and 30 sales with no gateway confirmation ($12,872.18 untraceable). The amounts come from test data and illustrate the kind of findings the system produces.',
      },
      {
        problem:
          'A retail business had years of transactional data spread across flat exports, but reporting was built on a single wide spreadsheet. Dashboards were slow, metrics disagreed between departments, and nobody trusted the numbers.',
        challenges: [
          'Over 2 million rows with duplicated product and store attributes',
          'Conflicting revenue definitions across teams',
          'Refreshes that took minutes and often failed',
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
          'Sales, finance, and operations now review the same numbers in weekly meetings, and category managers run their own analysis without asking for ad hoc extracts.',
      },
      {
        problem:
          'The accounting team spends hours downloading invoices from recurring suppliers and manually keying in 49-digit authorization numbers, taxpayer IDs (RUC), issue dates, and tax breakdowns. The volume delays the close, and manual entry raises the risk of errors. This is a real and recurring problem for accounting teams; to build the solution, I used synthetic invoices that follow the structure of real electronic invoices.',
        challenges: [
          'Invoice formats that differ by issuer',
          'New suppliers not yet in the catalog',
          'Inconsistent data that must never reach the books',
          'Corrupt PDFs or locked files that cannot be allowed to stop the batch',
        ],
        solution:
          'I built a hybrid Python workflow. It converts each PDF to Markdown to preserve table structure. If the supplier is in the catalog, it applies a regex template tailored to that format; if the supplier is new, it sends the text to an AI model with a strict JSON schema. Every record goes through an arithmetic check (taxable base + VAT = total), and the Excel report highlights rows with errors in red.',
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
          'The workflow lets reviewers focus on the rows flagged in red instead of keying in every invoice, and adding a new supplier only takes a new template, with no changes to the main flow. Tested with 12 synthetic invoices that follow the real structure.',
      },
      {
        summary:
          'This project reconciles the general ledger against the bank statement, with the main goal of finding inconsistencies, clearing out pending items, and producing a detailed report of the findings, replacing manual matching and Excel formulas. It was built in Python using exact matching and fuzzy matching. End users can run it without opening a console or a code editor, and it can be scheduled to run automatically to fit their needs.',
        problem:
          'Delayed month-end closes, the workload of manual reconciliation, and late follow-up on pending items are the problems this project solves. Through a reconciliation, the accounting team has to make sure that every ledger entry has a matching bank credit, and vice versa. The process runs in Excel, cross-matching the data from those reports with formulas: items that match on reference and amount are marked as reconciled, and those with no match are left as pending. When the matching fields, such as amount and reference, do not match exactly because of a typo, a different digit, a hyphen, or an extra zero, the system leaves the items pending even though the transaction exists, and someone has to review them one by one.',
        challenges: [
          'Delayed month-end closes',
          'Workload of manual reconciliation',
          'Late follow-up on pending items',
          'Near-identical references that an exact match leaves unmatched',
        ],
        solution:
          'The solution was designed for a non-technical end user, so it could not be limited to a script run with commands in a terminal. But before getting to how it runs, I should explain how it was built. The architecture starts with data cleaning, then runs an exact match using two parameters, and finally applies a fuzzy-logic match (approximate values, using a set similarity threshold). Once every match has run, it generates a report with separate tabs detailing the transactions, in a format the accounting team can use for their analysis.',
        architecture: [
          { title: 'Ledger & Banks', detail: 'Excel' },
          { title: 'Cleaning', detail: 'data normalization' },
          { title: 'Exact Match', detail: 'reference + amount' },
          { title: 'Fuzzy Match', detail: 'similarity ≥ 80' },
          { title: 'Excel Report', detail: '6 tabs' },
        ],
        details: [
          {
            title: 'Exact matching logic (Layer 1)',
            body: 'Matching uses the reference from both the ledger file and the bank statement. The reference is a number that the company’s system assigns to every transaction made at the point of sale. The second parameter is the amount. Using both parameters improves precision.',
          },
          {
            title: 'Fuzzy matching logic (Layer 2)',
            body: 'Fuzzy matching is done with a Python library called RapidFuzz, specifically fuzz.partial_ratio, which is well suited to bank references for the following reasons:',
            bullets: [
              'It detects whether one string is contained within another.',
              'It handles different prefixes or suffixes well.',
              'It tolerates hyphens, spaces, and zeros that the bank and the ledger record differently.',
            ],
          },
          {
            title: 'Result: output Excel file structure',
            body: 'The file conciliacion_resultado.xlsx contains 6 tabs, designed to cover each stage of the accounting review process.',
          },
          {
            title: 'How it runs',
            body: 'Back to how it runs: I will mention a couple of technical terms, but they are easy to follow. Since the solution was designed for a user who does not run terminal commands, the pipeline runs from a .bat file with a double click, or on a schedule through Windows Task Scheduler. On a Linux server, a cron job needs to be set up. The technical details for that last point are in the GitHub repository.',
          },
        ],
        results: [
          { value: '76.39%', label: 'Total transaction reconciliation coverage' },
          { value: '+1.71%', label: 'Increase in reconciled transactions through fuzzy matching' },
          { value: '-5.17%', label: 'Reduction in manual review workload' },
        ],
        outcome:
          'In a test with synthetic data simulating a real operating scenario, 356 of 466 ledger records were reconciled, for a total reconciliation coverage of 76.39%: 350 by exact match and 6 that only fuzzy matching could identify (a 1.71% increase in reconciled transactions, worth $8,694.63). That cut the manual review workload by 5.17%, leaving just 110 pending items ($167,731.45) and 18 bank deposits with no accounting entry ($747,664.25), split across two sheets for analysis.',
      },
      {
        problem:
          'Traditional financial reports are static and dense. Linking operating profitability (P&L) to the capital structure (Balance Sheet) is hard: seeing how much was earned or lost is easy, but understanding where it came from takes hours of manual reconciliation, and liquidity or debt risks are slow to surface in all that text. This is a real and common problem in financial management; to build the solution, I used synthetic data that simulates a company’s financial statements.',
        challenges: [
          'P&L and Balance Sheet in separate files, with no model linking them',
          'Explaining variances instead of just showing them',
          'Spotting liquidity and debt risks at a glance',
          'Keeping the executive view clear with a consistent visual standard',
        ],
        solution:
          'I built the report in three stages. First, I structured the chart of accounts and standardized the accounting records with Power Query to consolidate the financial statements. Then I modeled the accumulation matrices, year-over-year variances, and liquidity and leverage indicators in DAX. Finally, I designed the interface in Figma following IBCS standards. The report includes a waterfall chart showing how margin erodes from gross revenue to net income, a solvency panel with the capital structure and short- versus long-term debt, and a cross-statement view with ROA and net working capital.',
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
          'Readers can go from net income to its causes with the waterfall chart and assess solvency without switching tools. The report was developed with synthetic data that simulates a company’s financial statements.',
      },
      {
        problem:
          'Traditional accounts receivable management gives no structured view of the gap between what was billed and what was actually collected. Reconciling billed, collected, and outstanding balances in real time is hard; collection is reactive because the portfolio is not classified by risk of late payment, and ongoing payment delays erode cash flow and working capital. This is a real and common problem in accounts receivable management; to build the solution, I used synthetic data that simulates a customer receivables portfolio.',
        challenges: [
          'Reconciling billed, collected, and outstanding balances in one place',
          'Classifying receivables by risk of late payment, based on days past due',
          'Drilling down from the overall portfolio to each customer without losing context',
          'Designing a dashboard that reduces cognitive load and speeds up decisions',
        ],
        solution:
          'I built the dashboard in three stages. First, I cleaned and standardized the transactional billing and payments data with Power Query. Then I designed a star-schema dimensional model and wrote the aging, risk scoring, and balance variance calculations in DAX. Finally, I laid out the dashboard in Figma with quick analytical reading in mind. The dashboard includes a waterfall chart with the gap between billed, collected, and outstanding amounts; a risk segmentation by days-past-due bucket; and a customer view with the pending invoices, due dates, and credit status of each account.',
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
          'The dashboard helps focus collection efforts on the accounts with the biggest financial impact and supports decisions on credit policies and bad-debt provisions. Developed with synthetic data that simulates a customer receivables portfolio.',
      },
    ],
  },
  about: {
    eyebrow: 'Professional Background',
    title: '',
    paragraphs: [
      'I have spent most of my career in accounting and reconciliations. Working with Excel, ERP reports, and scattered data sources every day showed me how much these areas rely on manual, repetitive processes that eat up time better spent analyzing information.',
      'That experience pushed me to build my own solutions, especially around workflow automation and data analysis.',
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
        body: 'Hands-on experience across the accounting cycle: month-end closes, balance sheet reconciliations, and operational controls under strict audit standards.',
      },
      {
        period: 'Transition',
        title: 'Financial Reporting Automation',
        body: 'Brought in Python scripts and Power Query to replace manual spreadsheet processes, cutting reporting time and eliminating operational errors.',
      },
      {
        period: 'Today',
        title: 'Data Analysis & Automation',
        body: 'Data analysis and automated workflows that management teams rely on to run their day-to-day operations more efficiently.',
      },
    ],
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Online presence',
    description:
      "If you’d like to talk automation and data analysis, or explore working together, feel free to reach out directly.",
    newTab: '(opens in new tab)',
    rights: 'All rights reserved.',
    built: '',
  },
}

export type Dictionary = typeof en

const es: Dictionary = {
  nav: {
    links: [
      { href: '/#projects', label: 'Proyectos' },
      { href: '/#expertise', label: 'Soluciones' },
      { href: '/#about', label: 'Perfil' },
      { href: '#contact', label: 'Contacto' },
    ],
    hire: 'Contrátame',
    tagline: '',
    switchLabel: 'Cambiar idioma',
  },
  hero: {
    badge: 'Abierto a roles de datos y BI y a proyectos freelance',
    subtitle: 'Finanzas, automatización y Business Intelligence',
    intro:
      'Te ayudo a convertir reportes manuales en informes **automatizados** y en **modelos de datos** que **aceleran** las respuestas del negocio.',
    titleLead: 'Finanzas, automatización y ',
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
  techStack: {
    eyebrow: 'Herramientas',
  },
  expertise: {
    eyebrow: 'Soluciones',
    title: '',
    description:
      '',
    skillsSuffix: 'habilidades',
    categories: [
      {
        title: 'Automatización y Optimización',
        description: 'Automatización de procesamiento y consolidación de datos: integración de múltiples fuentes, limpieza y detección de anomalías. Cruce masivo de información transaccional y generación de reportería automatizada.',
        skills: ['Python', 'Pandas', 'SQL', 'Automatización de ETL'],
      },
      {
        title: 'Inteligencia de Negocios',
        description:
          'Análisis, modelado y visualización: desarrollo de dashboards e informes que proporcionan visibilidad sobre indicadores clave. Colaboración con áreas de negocio y tecnología.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Modelo de datos', 'IBCS','SQL'],
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
    caseStudy: 'Ver proyecto',
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
    onThisPage: 'En esta página',
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
        summary:
          'El proyecto desarrolla una conciliación bancaria mediante el cruce de los registros contables y el extracto bancario, teniendo como principal objetivo detectar inconsistencias, depurar partidas y generar un informe detallado sobre los hallazgos, dejando de lado el cruce manual y las fórmulas en Excel. El proyecto fue desarrollado en Python utilizando cruces exactos y coincidencias difusas. El proceso puede ser ejecutado por el usuario final sin necesidad de abrir consolas o editores de código, y puede ser programado para su ejecución automatizada de acuerdo con las necesidades del usuario.',
        problem:
          'Retraso en cierres mensuales, carga operativa por conciliación manual y gestiones tardías por partidas pendientes constituyen el problema que el proyecto resuelve. El equipo contable debe, a través de una conciliación, asegurarse de que cada movimiento del mayor tenga su acreditación en el banco y viceversa. El proceso de conciliación usa Excel mediante cruces con fórmulas de la información contenida en los reportes antes mencionados, marcando como conciliados los que cruzan por referencias y montos, y dejando como partidas pendientes aquellos que no encuentran coincidencia. Cuando los parámetros usados para el cruce como el monto y referencias no coinciden exactamente por una digitación errónea, un número diferente, un guion o un cero de más, el sistema las deja como pendientes aunque el movimiento exista, y alguien debe revisarlas una por una.',
        challenges: [
          'Retraso en cierres mensuales',
          'Carga operativa por conciliación manual',
          'Gestiones tardías por partidas pendientes',
          'Referencias casi idénticas que un cruce exacto deja sin conciliar',
        ],
        solution:
          'La solución fue pensada para un usuario final no técnico, por lo cual no se podía limitar a un script que se tenga que ejecutar con comandos en una terminal. Pero antes de llegar a la ejecución, debo detallar cómo se llegó ahí. La arquitectura del proyecto contempla la limpieza de los datos, luego pasa por un cruce exacto utilizando dos parámetros para el cruce para finalmente aplicar un cruce mediante lógica difusa (valores aproximados fijando un porcentaje de coincidencia). Una vez ejecutados todos los cruces, se genera un reporte con pestañas separadas con el detalle de las transacciones en un formato que puede ser usado por el equipo contable para su análisis.',
        architecture: [
          { title: 'Mayor y bancos', detail: 'Excel' },
          { title: 'Limpieza', detail: 'normalización de datos' },
          { title: 'Cruce exacto', detail: 'referencia + importe' },
          { title: 'Cruce difuso', detail: 'similitud ≥ 80' },
          { title: 'Reporte Excel', detail: '6 pestañas' },
        ],
        details: [
          {
            title: 'Lógica de la conciliación exacta (Capa 1)',
            body: 'La conciliación se realiza tomando la referencia tanto del archivo del mayor como del estado de cuenta. La referencia corresponde a un número que el sistema usado por la empresa le asigna a cada transacción que se produce en el punto de venta. El segundo parámetro que se usa es el importe. Para mayor precisión se usan ambos parámetros.',
          },
          {
            title: 'Lógica del Fuzzy Matching (Capa 2)',
            body: 'El fuzzy matching (coincidencia difusa) se realiza mediante una librería de Python llamada RapidFuzz, específicamente usando fuzz.partial_ratio, que es ideal para referencias bancarias por los siguientes motivos:',
            bullets: [
              'Detecta si una cadena está contenida dentro de otra.',
              'Maneja bien prefijos o sufijos distintos.',
              'Tolera guiones, espacios y ceros que el banco y el mayor registran diferente.',
            ],
          },
          {
            title: 'Resultado: Estructura del Excel de salida',
            body: 'El archivo conciliacion_resultado.xlsx contiene 6 pestañas diseñadas para cubrir cada etapa del proceso de revisión contable.',
          },
          {
            title: 'Ejecución',
            body: 'Es momento de volver a la ejecución; para ello mencionaré un par de términos técnicos que son de fácil comprensión. Como la solución fue pensada para un usuario que no ejecuta comandos en terminal, el pipeline se ejecuta a través de un archivo .bat haciendo un doble clic sobre él o programando su ejecución a través del Programador de Tareas de Windows (Task Scheduler). Si se ejecuta en un servidor Linux, se deberá configurar un cron. En el repositorio de GitHub se pueden encontrar los detalles técnicos sobre este último punto.',
          },
        ],
        results: [
          { value: '76.39%', label: 'Cobertura total de conciliación de transacciones' },
          { value: '+1.71%', label: 'Incremento de transacciones conciliadas mediante cruce difuso' },
          { value: '-5.17%', label: 'Reducción de carga de revisión manual' },
        ],
        outcome:
          'En la prueba con datos sintéticos que simulan un escenario operativo real, de 466 registros del mayor se conciliaron 356, logrando una cobertura total de conciliación del 76.39%: 350 por cruce exacto y 6 que solo el cruce difuso pudo identificar (+1.71% de incremento en transacciones conciliadas por $8,694.63). Esto permitió una reducción del 5.17% en la carga de revisión manual, dejando únicamente 110 partidas pendientes ($167,731.45) y 18 depósitos del banco sin registro contable ($747,664.25), separados en dos hojas para su análisis.',
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
    title: '',
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
        title: 'Automatización de reportería financiera',
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
    built: '',
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, es }
