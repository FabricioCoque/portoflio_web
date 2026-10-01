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
    badge: 'Available for freelance projects',
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
    code: {
      comment: '# → push exceptions to Power BI',
      processed: '14,382 transactions processed',
      matched: '14,339 matched',
      flagged: '43 exceptions flagged for review',
    },
  },
  expertise: {
    eyebrow: 'Technical & Business Focus',
    title: 'Business and finance, powered by data analytics and automation.',
    description:
      'Accounting expertise and financial rigor, combined with the data tools to automate and analyze.',
    skillsSuffix: 'skills',
    categories: [
      {
        title: 'Automation & Python Scripting',
        description: 'Python scripts that ingest, clean, and validate data from ERPs, banks, and flat files.',
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'SQLite', 'ETL', 'GitHub Actions', 'Regex'],
      },
      {
        title: 'Business Intelligence',
        description: 'Semantic models and dashboards that leadership actually trusts and uses to make decisions.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Star Schema', 'Data Modeling', 'KPI Design'],
      },
      {
        title: 'Financial Analysis',
        description: 'Deep domain expertise in close cycles, controls, and turning numbers into actionable insight.',
        skills: ['Reconciliations', 'P&L Analysis', 'Month-end Close', 'Cost Optimization', 'Budgeting', 'Audit Trails'],
      },
    ],
  },
  projects: {
    eyebrow: 'Featured Projects',
    title: 'Reporting automation and data analytics.',
    description: 'Projects that solve recurring challenges in finance and business analysis.',
    stackLabel: 'Tech stack',
    viewCode: 'View Code',
    viewCodeSr: (title: string) => `for ${title} (opens in new tab)`,
    caseStudy: 'Case Study',
    items: [
      {
        title: 'Automated Multi-source Financial Reconciliation',
        description:
          'Scheduled pipeline that ingests bank statements, ERP ledgers, and payment gateway exports, matches transactions with tolerance rules, and surfaces exceptions for review.',
        metric: { value: '-85%', label: 'close-cycle reconciliation time' },
        stack: ['Python', 'Pandas', 'SQLite', 'GitHub Actions'],
      },
      {
        title: 'Retail Data Analysis & Star-Schema Pipeline',
        description:
          'End-to-end ETL transforming raw retail transactions into a star-schema model with fact and dimension tables, powering an interactive Power BI sales dashboard.',
        metric: { value: '2M+', label: 'rows modeled into fact tables' },
        stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Star Schema'],
      },
      {
        title: 'PDF Invoice Data Extraction Tool',
        description:
          'Parses supplier invoices using deterministic regex patterns first, falling back to an AI model for unstructured layouts, then exports validated records for AP processing.',
        metric: { value: '96%', label: 'fields extracted without manual entry' },
        stack: ['Python', 'Regex', 'AI Fallback', 'pdfplumber'],
      },
      {
        title: 'Automated Bank Reconciliation',
        description:
          'Scalable, Python-based automated reconciliation that combines exact matching with fuzzy logic to streamline accounting processes with high transaction volumes.',
        metric: { value: '00%', label: 'key result metric' },
        stack: ['Python', 'RapidFuzz', 'Pandas', 'Openpyxl'],
      },
      {
        title: 'P&L & Balance Sheet in Power BI',
        description:
          'A solution that turns the P&L and Balance Sheet into a dynamic narrative focused on explaining variances and monitoring solvency.',
        metric: { value: '00%', label: 'key result metric' },
        stack: ['Power BI', 'DAX', 'Star Schema'],
      },
      {
        title: 'Accounts Receivable Control',
        description:
          'In-depth analysis of receivables, segmentation by risk profile, and tracking of the collections gap.',
        metric: { value: '00%', label: 'key result metric' },
        stack: ['Power BI', 'DAX', 'Star Schema'],
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
          'Every month-end, the finance team manually reconciled thousands of transactions across bank statements, the ERP general ledger, and payment gateway exports in Excel. The process took days, relied on fragile VLOOKUPs, and left little audit trail.',
        challenges: [
          'Three sources with inconsistent formats, references, and posting dates',
          'Timing differences and FX rounding causing false mismatches',
          'No history of who resolved which exception, or why',
        ],
        solution:
          'I built a scheduled Python pipeline that normalizes every source into a common schema, applies configurable matching rules with amount and date tolerances, and persists each run to SQLite for full traceability. GitHub Actions runs it daily and exceptions flow directly into a Power BI review page.',
        architecture: [
          { title: 'Bank · ERP · Gateway', detail: 'CSV / XLSX' },
          { title: 'Normalize', detail: 'pandas' },
          { title: 'Match Engine', detail: 'tolerance rules' },
          { title: 'Audit Store', detail: 'SQLite' },
          { title: 'Exception Review', detail: 'Power BI' },
        ],
        results: [
          { value: '-85%', label: 'Reconciliation time at close' },
          { value: '99.7%', label: 'Automatic match rate' },
          { value: '120h', label: 'Manual work saved per month' },
        ],
        outcome:
          'The close cycle shortened by two working days, and auditors now receive a complete, queryable history of every match and exception.',
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
          'The accounts payable team typed invoice details from hundreds of supplier PDFs into the ERP each week. Every supplier used a different layout, and manual entry caused duplicate payments and posting errors.',
        challenges: [
          'Dozens of invoice layouts with no common template',
          'Scanned and low-quality PDFs mixed with digital ones',
          'Strict validation required before anything reaches the ERP',
        ],
        solution:
          'I built a hybrid extraction tool: deterministic regex patterns handle known layouts quickly and cheaply, and an AI model is called only as a fallback for fields the patterns miss. Every record is validated against totals, dates, and supplier master data before export.',
        architecture: [
          { title: 'Supplier PDFs', detail: 'inbox folder' },
          { title: 'Text Extraction', detail: 'pdfplumber' },
          { title: 'Regex Parser', detail: 'known layouts' },
          { title: 'AI Fallback', detail: 'missing fields' },
          { title: 'Validated Export', detail: 'AP / ERP' },
        ],
        results: [
          { value: '96%', label: 'Fields extracted without manual entry' },
          { value: '-70%', label: 'AP processing time' },
          { value: '0', label: 'Duplicate payments since launch' },
        ],
        outcome:
          'AP staff moved from data entry to exception review, and AI costs stay low because the model is only used for a small fraction of documents.',
      },
      enPlaceholderStudy,
      enPlaceholderStudy,
      enPlaceholderStudy,
    ],
  },
  about: {
    eyebrow: 'Professional Background',
    title: 'From reconciliations to automated reporting.',
    paragraphs: [
      'I spent more than 8 years in accounting, financial control, and day-to-day reconciliations before I started automating that work with code and data analytics.',
      'That combination shapes how I work: data systems, scripts, and models built with a business mindset, an accountants eye for detail, and operational discipline.',
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
    title: "Let's talk finance, data, and automation.",
    description:
      "If you'd like to exchange ideas on automation and financial data analysis, or explore a professional collaboration, feel free to reach out directly or browse my code on GitHub.",
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
    badge: 'Disponible para proyectos freelance',
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
    code: {
      comment: '# → enviar excepciones a Power BI',
      processed: '14,382 transacciones procesadas',
      matched: '14,339 conciliadas',
      flagged: '43 excepciones marcadas para revisión',
    },
  },
  expertise: {
    eyebrow: 'Enfoque técnico y de negocio',
    title: 'Negocios y finanzas impulsados ​​por el análisis de datos y la automatización.',
    description:
      'Experiencia contable y rigor financiero, combinados con herramientas de datos para automatizar y analizar.',
    skillsSuffix: 'habilidades',
    categories: [
      {
        title: 'Automatización y Scripts en Python',
        description: 'Scripts en Python que ingieren, limpian y validan datos de ERPs, bancos y archivos planos.',
        skills: ['Python', 'Pandas', 'NumPy', 'SQL', 'SQLite', 'ETL', 'GitHub Actions', 'Regex'],
      },
      {
        title: 'Inteligencia de Negocios',
        description: 'Modelos semánticos y dashboards en los que la dirección realmente confía para tomar decisiones.',
        skills: ['Power BI', 'DAX', 'Power Query', 'Modelo Estrella', 'Modelado de Datos', 'Diseño de KPIs'],
      },
      {
        title: 'Análisis Financiero',
        description:
          'Amplio dominio de cierres contables, controles internos y conversión de cifras en conclusiones accionables.',
        skills: [
          'Conciliaciones',
          'Análisis de P&L',
          'Cierre Mensual',
          'Optimización de Costos',
          'Presupuestos',
          'Pistas de Auditoría',
        ],
      },
    ],
  },
  projects: {
    eyebrow: 'Proyectos Destacados',
    title: 'Automatización de reportería y analítica de datos.',
    description: 'Proyectos que resuelven problemas recurrentes en finanzas y análisis de negocio.',
    stackLabel: 'Stack tecnológico',
    viewCode: 'Ver código',
    viewCodeSr: (title: string) => `de ${title} (se abre en una pestaña nueva)`,
    caseStudy: 'Caso de estudio',
    items: [
      {
        title: 'Conciliación Financiera Automatizada Multi-fuente',
        description:
          'Pipeline programado que ingiere extractos bancarios, mayores del ERP y exportaciones de pasarelas de pago, concilia transacciones con reglas de tolerancia y presenta las excepciones para su revisión.',
        metric: { value: '-85%', label: 'tiempo de conciliación en el cierre' },
        stack: ['Python', 'Pandas', 'SQLite', 'GitHub Actions'],
      },
      {
        title: 'Análisis de Datos Retail y Pipeline con Modelo Estrella',
        description:
          'ETL de extremo a extremo que transforma transacciones retail en un modelo estrella con tablas de hechos y dimensiones, alimentando un dashboard interactivo de ventas en Power BI.',
        metric: { value: '2M+', label: 'filas modeladas en tablas de hechos' },
        stack: ['Python', 'SQL', 'Power BI', 'DAX', 'Star Schema'],
      },
      {
        title: 'Herramienta de Extracción de Datos de Facturas PDF',
        description:
          'Procesa facturas de proveedores primero con patrones regex deterministas y recurre a un modelo de IA para formatos no estructurados; luego exporta registros validados para cuentas por pagar.',
        metric: { value: '96%', label: 'campos extraídos sin captura manual' },
        stack: ['Python', 'Regex', 'IA de respaldo', 'pdfplumber'],
      },
      {
        title: 'Conciliacion Bancaria Automatizada',
        description: 'Concilacion automatizada escalable con Python que combina cruce exacto y lógica difusa para optimizar procesos contables con alta transaccionalidad.',
        metric: { value: '00%', label: 'métrica de resultado clave' },
        stack: ['Python', 'RapidFuzz', 'Pandas', 'Openpyxl'],
      },
      {
        title: 'P&L & Hoja de Balance en Power BI',
        description: 'Solución que transforma el P&L y la Hoja de Balance en una narrativa dinámica centrada en la explicación de variaciones y el monitoreo de solvencia.',
        metric: { value: '00%', label: 'métrica de resultado clave' },
        stack: ['Power BI', 'DAX','Star Schema'],
      },
      {
        title: 'Control de Cartera',
        description: 'Análisis analítico de cuentas por cobrar, segmentación por perfil de riesgo y seguimiento de la brecha de recaudación.',
        metric: { value: '00%', label: 'métrica de resultado clave' },
        stack: ['Power BI', 'DAX','Star Schema'],
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
          'Cada cierre de mes, el equipo financiero conciliaba manualmente miles de transacciones entre extractos bancarios, el libro mayor del ERP y las exportaciones de la pasarela de pagos en Excel. El proceso tomaba días, dependía de BUSCARV frágiles y dejaba poca pista de auditoría.',
        challenges: [
          'Tres fuentes con formatos, referencias y fechas de registro inconsistentes',
          'Diferencias temporales y redondeos de tipo de cambio que generaban falsos descuadres',
          'Sin historial de quién resolvió cada excepción ni por qué',
        ],
        solution:
          'Construí un pipeline programado en Python que normaliza cada fuente a un esquema común, aplica reglas de conciliación configurables con tolerancias de importe y fecha, y guarda cada ejecución en SQLite para una trazabilidad completa. GitHub Actions lo ejecuta a diario y las excepciones llegan directamente a una página de revisión en Power BI.',
        architecture: [
          { title: 'Banco · ERP · Pasarela', detail: 'CSV / XLSX' },
          { title: 'Normalización', detail: 'pandas' },
          { title: 'Motor de conciliación', detail: 'reglas de tolerancia' },
          { title: 'Registro de auditoría', detail: 'SQLite' },
          { title: 'Revisión de excepciones', detail: 'Power BI' },
        ],
        results: [
          { value: '-85%', label: 'Tiempo de conciliación en el cierre' },
          { value: '99.7%', label: 'Tasa de conciliación automática' },
          { value: '120h', label: 'Trabajo manual ahorrado al mes' },
        ],
        outcome:
          'El cierre se redujo en dos días hábiles y los auditores ahora reciben un historial completo y consultable de cada conciliación y excepción.',
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
          'El equipo de cuentas por pagar capturaba cada semana en el ERP los datos de cientos de facturas PDF de proveedores. Cada proveedor usaba un formato distinto y la captura manual provocaba pagos duplicados y errores de registro.',
        challenges: [
          'Decenas de formatos de factura sin una plantilla común',
          'PDFs escaneados y de baja calidad mezclados con documentos digitales',
          'Validación estricta requerida antes de que algo llegue al ERP',
        ],
        solution:
          'Construí una herramienta de extracción híbrida: patrones regex deterministas procesan los formatos conocidos de forma rápida y económica, y un modelo de IA se invoca solo como respaldo para los campos que los patrones no detectan. Cada registro se valida contra totales, fechas y el maestro de proveedores antes de exportarse.',
        architecture: [
          { title: 'PDFs de proveedores', detail: 'carpeta de entrada' },
          { title: 'Extracción de texto', detail: 'pdfplumber' },
          { title: 'Parser regex', detail: 'formatos conocidos' },
          { title: 'IA de respaldo', detail: 'campos faltantes' },
          { title: 'Exportación validada', detail: 'CxP / ERP' },
        ],
        results: [
          { value: '96%', label: 'Campos extraídos sin captura manual' },
          { value: '-70%', label: 'Tiempo de procesamiento de CxP' },
          { value: '0', label: 'Pagos duplicados desde el lanzamiento' },
        ],
        outcome:
          'El equipo de CxP pasó de capturar datos a revisar excepciones, y el costo de IA se mantiene bajo porque el modelo solo se usa en una pequeña fracción de documentos.',
      },
      esPlaceholderStudy,
      esPlaceholderStudy,
      esPlaceholderStudy,
    ],
  },
  about: {
    eyebrow: 'Trayectoria Profesional',
    title: 'De las conciliaciones a la reportería automatizada.',
    paragraphs: [
      'Pasé más de 8 años en contabilidad, control financiero y conciliaciones del día a día antes de empezar a automatizar ese trabajo con código y analítica de datos.',
      'Esa combinación define mi forma de trabajo: sistemas de datos, scripts y modelos construidos con mentalidad de negocio, ojo contable para el detalle y rigor operativo.',
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
    title: 'Hablemos de finanzas, datos y automatización.',
    description:
      'Si te interesa intercambiar ideas sobre automatizacion y analisis de datos financieros o evaluar alguna colaboración profesional, puedes escribirme directamente o revisar mi código en GitHub.',
    newTab: '(se abre en una pestaña nueva)',
    rights: 'Todos los derechos reservados.',
    built: 'Hecho con Next.js ',
  },
}

export const dictionaries: Record<Locale, Dictionary> = { en, es }
