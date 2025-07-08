// Last-Mile Logistics Encyclopedia - Enhanced Version
// Enhanced with comprehensive data, emojis, and detailed analysis

// ===================== ENHANCED DATA STRUCTURE =====================
const DATA = {
  world: { market2024: 401.9, avgCAGR: 11.2, regions: 6, countries: 50 },
  regions: [
    { 
      id: 'sea', 
      name: 'Юго-Восточная Азия', 
      emoji: '🌏',
      market2024: 114.6, 
      cagr: 13.5, 
      avgCOD: 65.8, 
      avgHHI: 1145,
      countries: ['IDN','PHL','VNM','THA','MYS','SGP','KHM','LAO','MMR','BRN']
    },
    { 
      id: 'sas', 
      name: 'Южная Азия', 
      emoji: '🇮🇳',
      market2024: 89.3, 
      cagr: 14.2, 
      avgCOD: 58.4, 
      avgHHI: 890,
      countries: ['IND','BGD','PAK','LKA','NPL','BTN','MDV','AFG']
    },
    { 
      id: 'ssa', 
      name: 'Африка к югу от Сахары', 
      emoji: '🌍',
      market2024: 45.3, 
      cagr: 18.7, 
      avgCOD: 72.1, 
      avgHHI: 650,
      countries: ['NGA','KEN','GHA','UGA','TZA','RWA','ETH','ZMB','MOZ','MDG']
    },
    { 
      id: 'mena', 
      name: 'Ближний Восток и Северная Африка', 
      emoji: '🕌',
      market2024: 78.2, 
      cagr: 9.8, 
      avgCOD: 45.3, 
      avgHHI: 1230,
      countries: ['EGY','MAR','JOR','LBN','TUN','DZA','IRQ','YEM','LBY','SDN']
    },
    { 
      id: 'lac', 
      name: 'Латинская Америка', 
      emoji: '🌎',
      market2024: 52.7, 
      cagr: 8.9, 
      avgCOD: 38.9, 
      avgHHI: 1456,
      countries: ['BRA','MEX','COL','ARG','PER','CHL','ECU','GTM','BOL','PRY']
    },
    { 
      id: 'eeu', 
      name: 'Восточная Европа', 
      emoji: '🏰',
      market2024: 21.8, 
      cagr: 7.2, 
      avgCOD: 28.4, 
      avgHHI: 1678,
      countries: ['RUS','UKR','POL','ROU','HUN','BGR','HRV','SRB']
    }
  ],
  countries: {}
};

// Enhanced data for detailed countries
const DETAILED_COUNTRIES = {
  IDN: {
    iso: 'IDN', emoji: '🇮🇩', name: 'Индонезия', region: 'sea',
    population: 273.5, gdpPerCapita: 4350, internetPen: 73.7, urbanisation: 56.6,
    market2024: 6.4, cagr: 12.0, codShare: 60, hhi: 1080, lpiScore: 3.1, amliRank: 45, aggPen: 23.5,
    competitors: [
      {name: 'J&T Express', type: 'traditional', share: 28.6, ebitda: 8.2, market_leader: true},
      {name: 'SiCepat', type: 'traditional', share: 9.8, ebitda: 7.1, local_player: true},
      {name: 'Ninja Van', type: 'aggregator', share: 8.7, ebitda: 4.3, regional: true},
      {name: 'Shiprocket', type: 'aggregator', share: 1.2, ebitda: -1.5, growth_focused: true},
      {name: 'DHL Express', type: 'traditional', share: 3.4, ebitda: 15.2, premium: true},
      {name: 'FedEx', type: 'traditional', share: 2.1, ebitda: 12.8, b2b_focused: true}
    ],
    payMix: {cod: 60, wallet: 24, card: 11, bnpl: 5},
    regulation: {fdi: 49, licence: 'Требуется', precedent: 'Grab-Gojek слияние заблокировано'},
    swot: {
      strengths: [
        'Крупнейший архипелаг с высоким спросом на межостровные перевозки',
        'Высокое проникновение смартфонов (70%) способствует цифровизации',
        'Правительственная логистическая дорожная карта поддерживает развитие',
        'Молодое население активно использует e-commerce платформы'
      ],
      weaknesses: [
        'Заторы в городских центрах увеличивают операционные расходы',
        'Наложенный платеж 60% повышает потребность в оборотном капитале',
        'Фрагментированная база МСП-продавцов усложняет масштабирование',
        'Сложная география архипелага затрудняет логистику'
      ],
      opportunities: [
        'Сети локеров за пределами острова Ява с огромным потенциалом',
        'Финансирование цепочки поставок, привязанное к потокам COD',
        'Пилотные проекты дронов и электромобилей для отдаленных островов',
        'Партнерства с местными варунгами для последней мили'
      ],
      threats: [
        'Правила FDI могут ужесточиться после смены правительства',
        'Ценовая война между стартапами, финансируемыми венчурным капиталом',
        'Сокращение топливных субсидий может привести к росту затрат',
        'Геополитическая напряженность в регионе АСЕАН'
      ]
    },
    sources: ['IDX Research 2024', 'Bangkok Post 2025', 'McKinsey SEA Logistics 2024']
  },
  
  NGA: {
    iso: 'NGA', emoji: '🇳🇬', name: 'Нигерия', region: 'ssa',
    population: 206.1, gdpPerCapita: 2420, internetPen: 51.0, urbanisation: 52.0,
    market2024: 1.75, cagr: 18.0, codShare: 95, hhi: 650, lpiScore: 2.6, amliRank: 58, aggPen: 4.8,
    competitors: [
      {name: 'GIG Logistics', type: 'traditional', share: 6.0, ebitda: 2.1, local_leader: true},
      {name: 'Kobo360', type: 'aggregator', share: 5.0, ebitda: -1.2, tech_focused: true},
      {name: 'FedEx Nigeria', type: 'traditional', share: 4.0, ebitda: 12.8, premium: true},
      {name: 'Fargo Courier', type: 'traditional', share: 3.5, ebitda: 4.2, regional: true},
      {name: 'DHL Nigeria', type: 'traditional', share: 3.0, ebitda: 14.5, b2b: true},
      {name: 'Sendbox', type: 'aggregator', share: 2.8, ebitda: -3.1, startup: true}
    ],
    payMix: {cod: 95, wallet: 3, card: 1, bnpl: 1},
    regulation: {fdi: 100, licence: 'Сложная', precedent: 'Требования к локализации'},
    swot: {
      strengths: [
        'Крупнейшее население в Африке создает огромный потребительский рынок',
        'Бурный рост принятия мобильных денег и цифровых платежей',
        'Множественные мегаполисы обеспечивают высокую концентрацию объемов',
        'Молодое население быстро адаптируется к новым технологиям'
      ],
      weaknesses: [
        'Плохая дорожная инфраструктура увеличивает время доставки',
        'Высокий процент неудачных доставок в пригородных районах',
        'Хроническая волатильность валютного курса влияет на затраты',
        'Низкое проникновение банковских услуг ограничивает безналичные платежи'
      ],
      opportunities: [
        'Факторинг COD, связанный с финтех-решениями',
        'Парки электрических мотоциклов снижают топливные риски',
        'Партнерства с неформальными киосками для пунктов выдачи',
        'Трансграничная торговля в рамках AfCFTA'
      ],
      threats: [
        'Непредсказуемость регулятивной среды создает бизнес-риски',
        'Отмена топливных субсидий влияет на структуру затрат',
        'Риски безопасности на автомагистралях в некоторых регионах',
        'Политическая нестабильность может затронуть инвестиции'
      ]
    },
    sources: ['Vanguard Nigeria 2024', 'Techpoint Africa 2024', 'CBN Financial Inclusion Report 2024']
  },

  PHL: {
    iso: 'PHL', emoji: '🇵🇭', name: 'Филиппины', region: 'sea',
    population: 109.6, gdpPerCapita: 3850, internetPen: 67.0, urbanisation: 47.4,
    market2024: 1.3, cagr: 15.0, codShare: 71, hhi: 890, lpiScore: 2.9, amliRank: 52, aggPen: 18.7,
    competitors: [
      {name: 'LBC Express', type: 'traditional', share: 22.4, ebitda: 12.1, market_leader: true},
      {name: 'J&T Express Philippines', type: 'traditional', share: 19.8, ebitda: 6.8, growth_focused: true},
      {name: 'Ninja Van Philippines', type: 'aggregator', share: 12.4, ebitda: 4.3, tech_platform: true},
      {name: '2GO Group', type: 'traditional', share: 8.2, ebitda: 5.4, island_specialist: true},
      {name: 'Shopee Express', type: 'aggregator', share: 6.9, ebitda: -2.1, ecommerce_focused: true},
      {name: 'Lazada Express', type: 'aggregator', share: 4.8, ebitda: -1.8, platform_owned: true}
    ],
    payMix: {cod: 71, wallet: 15, card: 7, bnpl: 7},
    regulation: {fdi: 40, licence: 'Требуется', precedent: 'Дополнительные ограничения для иностранцев'},
    swot: {
      strengths: [
        'Архипелаг с высокими денежными переводами от OFW, стимулирующими e-commerce',
        'Англоговорящая рабочая сила облегчает международное сотрудничество',
        'Растущее принятие цифровых кошельков (GCash, PayMaya)',
        'Высокое проникновение социальных сетей способствует онлайн-торговле'
      ],
      weaknesses: [
        'Серьезные пробки в Метро Манила увеличивают время доставки',
        '71% COD приводит к высокому проценту возвратов',
        'Подверженность тайфунам вызывает регулярные сбои в работе',
        'Фрагментированная островная география усложняет логистику'
      ],
      opportunities: [
        'Хабы консолидации трансграничных грузов для АСЕАН',
        'Развертывание локеров через сеть 7-Eleven',
        'Микро-фулфилмент в регионах Висайи и Минданао',
        'Партнерства с сельскими кооперативами для последней мили'
      ],
      threats: [
        'Конкуренция со стороны интеграторов авиагрузов',
        'Повышение НДС на e-commerce может снизить спрос',
        'Заторы в портах влияют на цепочки поставок',
        'Климатические изменения усиливают тайфуны'
      ]
    },
    sources: ['Philippine Statistics Authority 2024', 'Rappler Business 2024', 'ADB Philippines Report 2024']
  },

  VNM: {
    iso: 'VNM', emoji: '🇻🇳', name: 'Вьетнам', region: 'sea',
    population: 97.3, gdpPerCapita: 4200, internetPen: 77.0, urbanisation: 37.3,
    market2024: 2.2, cagr: 13.0, codShare: 75, hhi: 970, lpiScore: 3.2, amliRank: 39, aggPen: 31.2,
    competitors: [
      {name: 'Viettel Post', type: 'traditional', share: 21.0, ebitda: 11.2, state_owned: true},
      {name: 'Vietnam Post', type: 'traditional', share: 19.0, ebitda: 8.9, government: true},
      {name: 'GHTK', type: 'aggregator', share: 9.0, ebitda: 5.1, local_tech: true},
      {name: 'GHN', type: 'aggregator', share: 8.0, ebitda: 4.3, growing_fast: true},
      {name: 'J&T Express Vietnam', type: 'traditional', share: 7.5, ebitda: 6.8, regional_expansion: true},
      {name: 'Ninja Van Vietnam', type: 'aggregator', share: 6.2, ebitda: 3.9, tech_platform: true}
    ],
    payMix: {cod: 75, wallet: 15, card: 8, bnpl: 2},
    regulation: {fdi: 51, licence: 'Упрощенная', precedent: 'Поддержка местных операторов'},
    swot: {
      strengths: [
        'Производственный бум стимулирует экспорт МСП',
        'Высокое принятие цифровых технологий молодежью',
        'Правительственная дорожная карта электронной логистики',
        'Стратегическое расположение в цепочках поставок АСЕАН'
      ],
      weaknesses: [
        'Фрагментированная адресация в сельских районах',
        'Крайне высокий уровень COD - 75%',
        'Отставание портовой инфраструктуры за пределами Хошимина',
        'Ограниченная интеграция с международными платформами'
      ],
      opportunities: [
        'Доставка в тот же день в городах второго уровня',
        'Альянсы умных локеров с VinGroup',
        'Развертывание электрических мотоциклов',
        'Трансграничная электронная коммерция с Китаем'
      ],
      threats: [
        'Агрессивное снижение цен между конкурентами',
        'Регулирование трансграничного обмена данными',
        'Нехватка рабочей силы в пиковые сезоны',
        'Торговые напряженности между США и Китаем'
      ]
    },
    sources: ['Vietnam E-commerce Report 2024', 'Nikkei Asia Logistics 2024', 'World Bank Vietnam 2024']
  },

THA: {
    iso: 'THA',
    emoji: '🇹🇭',
    name: 'Тайланд',
    region: 'sea',
    population: 71.8,
    gdpPerCapita: 7492,
    internetPen: 88.0,
    urbanisation: 52.1,
    market2024: 3.1,
    cagr: 12.5,
    codShare: 28,
    hhi: 920,
    lpiScore: 3.5,
    amliRank: 41,
    aggPen: 35.2,
    competitors: [
        {name: 'Kerry Express', type: 'traditional', share: 28.5, ebitda: 9.3, market_leader: true, local_leader: true},
        {name: 'Flash Express', type: 'traditional', share: 25.2, ebitda: 6.7, unicorn: true, growth_focused: true},
        {name: 'Thailand Post', type: 'traditional', share: 18.4, ebitda: 2.8, state_owned: true, legacy_player: true},
        {name: 'J&T Express Thailand', type: 'traditional', share: 8.9, ebitda: 5.1, regional_expansion: true},
        {name: 'Ninja Van Thailand', type: 'aggregator', share: 6.8, ebitda: 3.2, tech_platform: true},
        {name: 'Best Express', type: 'traditional', share: 4.2, ebitda: 4.5, local_player: true}
    ],
    payMix: {cod: 28, wallet: 22, card: 21, bnpl: 7, bank_transfer: 22},
    regulation: {fdi: 49, licence: 'Требуется FBL', precedent: 'Ограничения на внутренние перевозки'},
    swot: {
        strengths: [
            'Развитая цифровая экосистема с высоким проникновением PromptPay',
            'Стратегическое расположение как логистический хаб АСЕАН',
            'Сильная туристическая индустрия стимулирует спрос на доставку',
            'Высокое проникновение интернета и смартфонов (88%)'
        ],
        weaknesses: [
            'Заторы в Бангкоке значительно увеличивают время доставки',
            'Остается значительная доля COD (28%) требующая оборотного капитала',
            'Фрагментированный рынок с множеством мелких игроков',
            'Ограничения FDI на внутренние транспортные услуги'
        ],
        opportunities: [
            'Растущий рынок электронной коммерции ($66.7B к 2024)',
            'Правительственная инициатива Eastern Economic Corridor (EEC)',
            'Развитие сетей умных локеров в торговых центрах',
            'Интеграция с региональными цепочками поставок'
        ],
        threats: [
            'Интенсивная ценовая конкуренция между игроками',
            'Усиление регулирования иностранных инвестиций',
            'Экономическое замедление может снизить потребительские расходы',
            'Растущие затраты на топливо влияют на рентабельность'
        ]
    },
    sources: ['Mordor Intelligence Thailand 2024', 'Nation Thailand Logistics Report 2024', 'GlobalData E-commerce Thailand 2024']
},
  
// Данные по Малайзии для DETAILED_COUNTRIES
MYS: {
    iso: 'MYS',
    emoji: '🇲🇾',
    name: 'Малайзия',
    region: 'sea',
    population: 35.03,           // 2025: 35 028 030 человек[17]
    gdpPerCapita: 12620,         // 2024: 12 620 USD[18]
    internetPen: 97.4,           // 2024: 97.4%[22]
    urbanisation: 77.4,          // 2025: 77.4% городского населения[23]
    market2024: 29.7,            // 2025: рынок фрахта и логистики 29.7 млрд USD[56]
    cagr: 5.2,                   // CAGR 2025–2030: 5.2%[56]
    codShare: 25,                // COD ~25% (оценочно)
    hhi: 1150,                   // средний HHI по SEA ≈1145[attachment]
    lpiScore: 3.7,               // LPI Score 2023: 3.75[59]
    amliRank: 36,                // GII 2023: 36-е место[55]
    aggPen: 89.0,                // агрегационная доля digital-логистики ≈89%
    competitors: [
        {name: 'Poslaju', type: 'traditional', share: 35.0},
        {name: 'J&T Express Malaysia', type: 'traditional', share: 25.0, unicorn: true},
        {name: 'DHL Express Malaysia', type: 'traditional', share: 15.0, premium: true},
        {name: 'Ta-Q-Bin', type: 'traditional', share: 8.0},
        {name: 'Ninja Van Malaysia', type: 'aggregator', share: 7.0},
        {name: 'City-Link Express', type: 'traditional', share: 10.0}
    ],
    payMix: {cod: 25, wallet: 30, card: 25, bnpl: 5, bank_transfer: 15},
    regulation: {fdi: 100, licence: 'Не требуется', precedent: 'Открытый рынок'},
    swot: {
        strengths: [
            'Высокое проникновение интернета (97.4%) и мобильных устройств',
            'Развитая инфраструктура морских и железных портов',
            'Правительственная поддержка цифровизации (MyDIGITAL, DFTZ)'
        ],
        weaknesses: [
            'Высокие издержки дизельного топлива после отмены субсидий',
            'Региональные узкие места в трансграничных коридорах',
            'Дефицит квалифицированных кадров в логистике'
        ],
        opportunities: [
            'Рост электронной коммерции (CAGR >14% до 2030)[67]',
            'Расширение сети 5G и e-wallet',
            'Интеграция с ASEAN trade lanes'
        ],
        threats: [
            'Жесткая конкуренция со стороны Сингапура и Таиланда',
            'Глобальные тарифные и торговые барьеры',
            'Риски кибербезопасности в digital-логистике'
        ]
    },
    sources: [
        'Macrotrends Population Malaysia 2025'[17],
        'FocusEconomics Malaysia GDP per Capita 2024'[18],
        'DataReportal Internet Penetration Malaysia 2024'[22],
        'Mordor Intelligence Malaysia Freight Logistics 2025'[56],
        'World Bank LPI 2023'[59]
    ]
},
// Данные по Сингапуру для DETAILED_COUNTRIES
SGP: {
    iso: 'SGP',
    emoji: '🇸🇬',
    name: 'Сингапур',
    region: 'sea',
    population: 6.05,          // млн
    gdpPerCapita: 90689,       // USD
    internetPen: 96.0,         // %
    urbanisation: 100.0,       // %
    market2024: 11.6,          // млрд USD
    cagr: 12.19,               // %
    codShare: 3,               // %
    hhi: 1500,                 // индекс концентрации
    lpiScore: 4.2,             // Logistics Performance Index
    amliRank: 5,               // Asia-Pacific Last-Mile Index
    aggPen: 45.0,              // % агрегационного спроса
    competitors: [
        { name: 'SingPost', type: 'traditional', share: 20.0, state_owned: true, market_leader: true },
        { name: 'Ninja Van Singapore', type: 'aggregator', share: 18.0, tech_platform: true },
        { name: 'GrabExpress', type: 'on-demand', share: 15.0, ecosystem_integrated: true },
        { name: 'Qxpress', type: 'aggregator', share: 12.0, ecommerce_focus: true },
        { name: 'Lalamove', type: 'on-demand', share: 10.0, rapid_delivery: true },
        { name: 'DHL eCommerce', type: 'traditional', share: 8.0, global_network: true },
        { name: 'J&T Express Singapore', type: 'traditional', share: 7.0, growth_focused: true },
        { name: 'Aramex', type: 'traditional', share: 5.0, b2b_focus: true }
    ],
    payMix: {
        card: 68,        // % карт
        bnpl: 10,        // % Buy-Now-Pay-Later
        wallet: 12,      // % электронных кошельков
        bank_transfer: 7,// % банковских переводов
        cod: 3           // % наложенного платежа
    },
    regulation: {
        fdi: 100,                      // % допускается FDI
        licence: 'Не требуется',       // лицензия на внутренние перевозки
        esgStandards: 'Жёсткие'        // растущие стандарты ESG
    },
    swot: {
        strengths: [
            'Сверхбыстрая доставка: >90% заказов в пределах 2 часов',
            'Передовая цифровая инфраструктура (5G, NTP)',
            'Полная урбанизация и плотная сеть транспортных коридоров'
        ],
        weaknesses: [
            'Очень высокие операционные расходы (аренда, труд)',
            'Ограниченные резервы дешёвой рабочей силы'
        ],
        opportunities: [
            'Рост e-commerce до $25.3 млрд к 2028 г.',
            'Автоматизация (роботы, дроны, трёхколёсные транспортные средства)',
            'Развитие сети локеров и PUDO-точек'
        ],
        threats: [
            'Усиление конкуренции от новых игроков',
            'Ужесточение экологических и топливных норм',
            'Колебания цен на энергоносители'
        ]
    },
    sources: [
        'Statista Singapore Last-Mile 2024',
        'GlobalData Singapore E-commerce Report 2024',
        'World Bank LPI 2023'
    ]
},
// Данные по Камбодже для DETAILED_COUNTRIES
KHM: {
    iso: 'KHM',
    emoji: '🇰🇭',
    name: 'Камбоджа',
    region: 'sea',
    population: 17.12,         // млн
    gdpPerCapita: 2071,        // USD
    internetPen: 69.6,         // %
    urbanisation: 26.0,        // %
    market2024: 0.8,           // млрд USD
    cagr: 18.5,                // %
    codShare: 85,              // %
    hhi: 650,                  // индекс концентрации
    lpiScore: 2.8,             // Logistics Performance Index
    amliRank: 67,              // Asia-Pacific Last-Mile Index
    aggPen: 15.0,              // % агрегационного спроса
    competitors: [
        { name: 'Cambodia Post', type: 'traditional', share: 25.0, state_owned: true, market_leader: true },
        { name: 'J&T Express Cambodia', type: 'traditional', share: 20.0, growth_focused: true },
        { name: 'VET Express', type: 'traditional', share: 15.0, local_leader: true },
        { name: 'Ninja Van Cambodia', type: 'aggregator', share: 12.0, tech_platform: true },
        { name: 'Best Express', type: 'traditional', share: 10.0, local_player: true },
        { name: 'DHL Cambodia', type: 'traditional', share: 8.0, premium_segment: true },
        { name: 'Other Local Players', type: 'traditional', share: 10.0, fragmented: true }
    ],
    payMix: {
        cod: 85,             // % наложенного платежа
        bank_transfer: 8,    // % банковских переводов
        wallet: 4,           // % мобильных кошельков
        card: 3              // % карт
    },
    regulation: {
        fdi: 49,                       // % допускается FDI
        licence: 'Требуется',          // лицензия на коммерческие перевозки
        ecommerce_law: 'Развивающееся' // законодательство по e-commerce
    },
    swot: {
        strengths: [
            'Молодое население (средний возраст 26 лет)',
            'Быстрый рост проникновения смартфонов',
            'Низкие операционные расходы по сравнению с развитыми рынками'
        ],
        weaknesses: [
            'Слабая транспортная инфраструктура',
            'Крайне высокая зависимость от COD (85%)',
            'Низкий уровень банковских услуг и финансовой грамотности'
        ],
        opportunities: [
            'Рост e-commerce на 25%+ в год',
            'Цифровизация платежей и банковских услуг',
            'Развитие мобильных кошельков и финтех-решений'
        ],
        threats: [
            'Политическая нестабильность',
            'Серьезные инфраструктурные ограничения',
            'Конкуренция с соседними развитыми рынками'
        ]
    },
    sources: [
        'Cambodia Population 2024',
        'World Bank Cambodia GDP 2024',
        'DataReportal Cambodia Digital Report 2024'
    ]
},
  
LAO: {
    iso: 'LAO',
    emoji: '🇱🇦',
    name: 'Лаос',
    region: 'sea',
    population: 7.87,           // млн (оценка 2025)[19]
    gdpPerCapita: 2146,         // USD (номинал, конец 2024)[20]
    internetPen: 66.2,          // % (2024)[18]
    urbanisation: 38.3,         // % (2025)[28]
    market2024: 0.243,          // рынок 3PL, млрд USD (2024)[57]
    cagr: 0.35,                 // CAGR 2025–2029, % (3PL)[57]
    codShare: 75,               // % COD (оценочно, высокий уровень)[29]
    hhi: 800,                   // низкая концентрация рынка (оценочно)
    lpiScore: 2.9,              // Logistics Performance Index[9]
    amliRank: 67,               // Asia-Pacific Last-Mile Index (Камбоджа 67 близко)[29]
    aggPen: 20.0,               // % агрегаторской доли спроса (низкая)[Bass]
    competitors: [
        { name: 'Laos Post', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'J&T Express Laos', type: 'traditional', share: 20.0, regional_expansion: true },
        { name: 'Ninja Van Laos', type: 'aggregator', share: 15.0, tech_platform: true },
        { name: 'Flash Express Laos', type: 'traditional', share: 12.0, discount_pricing: true },
        { name: 'Best Express Laos', type: 'traditional', share: 10.0, local_player: true },
        { name: 'Other Local', type: 'traditional', share: 13.0, fragmented: true }
    ],
    payMix: { cod: 75, wallet: 10, card: 8, bnpl: 2, bank_transfer: 5 },
    regulation: {
        fdi: 49,                       // % допускается FDI
        licence: 'Требуется',          // лицензия на коммерческие перевозки
        ecommerceLaw: 'Развивающееся'  // законодательство по e-commerce
    },
    swot: {
        strengths: [
            'Молодое население (медианный возраст 24.9 лет)', 
            'Растущая мобильная связь (88.5% подключений)', 
            'Низкие операционные расходы'
        ],
        weaknesses: [
            'Слабая дорожная инфраструктура', 
            'Низкий уровень урбанизации (38.3%)', 
            'Зависимость от COD (75%)'
        ],
        opportunities: [
            'Рост e-commerce (CAGR 14.3% до 2029)[48]', 
            'Развитие 4G/5G и мобильных платежей', 
            'Интеграция с ASEAN trade lanes'
        ],
        threats: [
            'Политическая нестабильность', 
            'Высокие тарифы на импорт', 
            'Рост цен на топливо'
        ]
    },
    sources: [
        'Worldometer Laos Population 2025'[19],
        'World Economics Laos GDP per Capita 2024'[20],
        'Laotian Times Internet Penetration 2024'[18],
        'Statista Laos Demographics 2025'[28],
        'Statista Third-Party Logistics Laos 2025'[57],
        'eCommerceDB Laos eCommerce Market 2025'[48]
    ]
},
// Данные по Мьянме для DETAILED_COUNTRIES
MMR: {
    iso: 'MMR',
    emoji: '🇲🇲',
    name: 'Мьянма',
    region: 'sea',
    population: 55.34,           // млн (2025)[17]
    gdpPerCapita: 4272,          // USD (2024)[18]
    internetPen: 60.15,          // % (2025)[19]
    urbanisation: 34.1,          // % (2025)[20]
    market2024: 8.09,            // млрд USD (2024)[54]
    cagr: 10.96,                 // % (2025–2030)[50]
    codShare: 65,                // % COD (оценочно)
    hhi: 700,                    // оценочный HHI (низкая концентрация)
    lpiScore: 2.29,              // LPI Score 2023[78]
    amliRank: 58,                // AMLI 2024 rank (пример)
    aggPen: 20.0,                // % агрегаторской доли спроса (оценочно)
    competitors: [
        { name: 'Myanmar Post', type: 'traditional', share: 25.0, state_owned: true, market_leader: true },
        { name: 'Flash Express Myanmar', type: 'traditional', share: 20.0, regional_growth: true },
        { name: 'J&T Express Myanmar', type: 'traditional', share: 18.0, unicorn: true },
        { name: 'Ninja Van Myanmar', type: 'aggregator', share: 15.0, tech_platform: true },
        { name: 'Kerry Express Myanmar', type: 'traditional', share: 12.0 },
        { name: 'Lalamove Myanmar', type: 'on-demand', share: 10.0 },
        { name: 'Other Local Players', type: 'traditional', share: 0.0, fragmented: true }
    ],
    payMix: { cod: 65, bank_transfer: 15, wallet: 12, card: 5, bnpl: 3 },
    regulation: { fdi: 35, licence: 'Не требуется', ecomLaw: 'Развивающееся' },
    swot: {
        strengths: [
            'Молодое население и растущее потребление',
            'Геостратегическое положение между Китаем и Индией',
            'Быстро растущий e-commerce сегмент'
        ],
        weaknesses: [
            'Нестабильная политическая ситуация',
            'Недостаточная инфраструктура дорог',
            'Низкое проникновение банковских услуг (35%)'
        ],
        opportunities: [
            'Развитие инфраструктурных проектов ASEAN Corridors',
            'Рост мобильных платежей и digital wallets',
            'Инвестиции в модернизацию портов'
        ],
        threats: [
            'Экономические санкции и международная изоляция',
            'Высокая зависимость от COD (65%)',
            'Волатильность валюты (киат)'
        ]
    },
    sources: [
        'Macrotrends Population Myanmar 2025'[17],
        'World Economics Myanmar GDP Per Capita 2024'[18],
        'Statista Internet Penetration Myanmar 2025'[19],
        'World Bank LPI 2023'[78],
        'Mordor Intelligence Myanmar Freight And Logistics 2025'[54]
    ]
},
// Данные по Брунею для DETAILED_COUNTRIES
BRN: {
    iso: 'BRN',
    emoji: '🇧🇳',
    name: 'Бруней',
    region: 'sea',
    population: 466.33,          // млн (2025)[19]
    gdpPerCapita: 32963,         // USD (2023)[23]
    internetPen: 98.0,           // % (2025)[21]
    urbanisation: 80.1,          // % (2025)[19]
    market2024: 0.233,           // млрд USD (3PL доход, 2025)[47]
    cagr: 2.15,                  // % (2025–2029)[47]
    codShare: 5,                 // % (оценочно)
    hhi: 850,                    // оценочный
    lpiScore: 2.79,              // LPI общий (2018)[50]
    amliRank: null,              // нет данных
    aggPen: 40.0,                // % агрегаторской доли спроса (оценочно)
    competitors: [
        { name: 'Royal Brunei Post', type: 'traditional', share: 25.0, state_owned: true },
        { name: 'Ninja Van Brunei', type: 'aggregator', share: 20.0, tech_platform: true },
        { name: 'J&T Express Brunei', type: 'traditional', share: 18.0, growth_focused: true },
        { name: 'GD Express', type: 'traditional', share: 15.0 },
        { name: 'Speedoc Logistics', type: 'aggregator', share: 12.0 },
        { name: 'DHL Express', type: 'traditional', share: 10.0, global_network: true }
    ],
    payMix: {
        card: 60,        // % карт
        wallet: 20,      // % электронных кошельков
        bank_transfer: 10,// % банковских переводов
        bnpl: 5,          // % BNPL
        cod: 5            // % наложенного платежа
    },
    regulation: {
        fdi: 100,                       // % допускается FDI
        licence: 'Не требуется',        // лицензия на внутренние перевозки
        esgStandards: 'Соблюдаются'    // растущие стандарты ESG
    },
    swot: {
        strengths: [
            'Высокий уровень цифровой и транспортной инфраструктуры',
            'Небольшая географическая площадь упрощает маршрутизацию',
            'Стабильная экономика с высоким ВВП на душу населения'
        ],
        weaknesses: [
            'Низкий объём рынка с ограниченной критической массой',
            'Высокая доля государственных услуг снижает конкуренцию',
            'Зависимость от импорта товаров'
        ],
        opportunities: [
            'Рост e-commerce и экспресс-доставки',
            'Интеграция с региональными логистическими хабами',
            'Внедрение автономных и экологичных транспортных средств'
        ],
        threats: [
            'Усиление конкуренции со стороны международных игроков',
            'Изменение регуляторных требований в ASEAN',
            'Колебания цен на топливо и валютный риск'
        ]
    },
    sources: [
        'Worldometer Brunei Population 2025'[19],
        'Macrotrends Brunei GDP per Capita 2023'[23],
        'Statista Internet Penetration Brunei 2025'[21],
        'Statista 3PL Brunei 2025'[47],
        'World Bank LPI Brunei 2018'[50]
    ]
},

// Данные по Пакистану для DETAILED_COUNTRIES
PAK: {
    iso: 'PAK',
    emoji: '🇵🇰',
    name: 'Пакистан',
    region: 'asia',
    population: 255.2,         // млн (2025)[1]
    gdpPerCapita: 1707,        // USD (2025)[2]
    internetPen: 33.96,        // % (2025)[3]
    urbanisation: 38.82,       // % (2025)[1]
    market2024: 1.7,           // млрд USD (Pakistan CEP market 2024)[4]
    cagr: 5.0,                 // % (2024–2033 CEP market)[4]
    codShare: 90,              // % COD (e-commerce)[5]
    hhi: 1200,                 // оценочный HHI (умеренная концентрация)
    lpiScore: 2.5,             // Logistics Performance Index (2023)[6]
    amliRank: 58,              // Asia-Pacific Last-Mile Index (пример)
    aggPen: 25.0,              // % агрегаторской доли спроса (оценочно)
    competitors: [
        { name: 'TCS', type: 'traditional', share: 35.0, market_leader: true },
        { name: 'Leopards Courier', type: 'traditional', share: 20.0 },
        { name: 'PostEx', type: 'traditional', share: 15.0, tech_platform: true },
        { name: 'BlueEX', type: 'aggregator', share: 10.0 },
        { name: 'Rider', type: 'on-demand', share: 8.0, rapid_delivery: true },
        { name: 'Swyft', type: 'aggregator', share: 7.0 },
        { name: 'Other Local Players', type: 'traditional', share: 5.0, fragmented: true }
    ],
    payMix: {
        cod: 90,             // % наложенного платежа
        bank_transfer: 5,    // % банковских переводов
        wallet: 2,           // % электронных кошельков
        card: 2,             // % карт
        bnpl: 1              // % BNPL
    },
    regulation: {
        fdi: 100,                   // % допускается FDI
        licence: 'Не требуется',    // лицензия на внутренние перевозки
        precedent: 'Открытый рынок'  // precedent
    },
    swot: {
        strengths: [
            'Крупный населённый рынок (255 млн)',
            'Развитый сектор CEP с ведущими местными игроками',
            'Правительственная поддержка цифровизации и инфраструктуры'
        ],
        weaknesses: [
            'Низкая интернет-проникновение (34%)',
            'Низкая урбанизация (39%) ограничивает доступ',
            'Высокая зависимость от COD (90%)'
        ],
        opportunities: [
            'Рост e-commerce (CAGR >17% до 2027)',
            'Инвестиции в цифровые платежные решения',
            'Расширение услуг same-day delivery'
        ],
        threats: [
            'Инфраструктурные ограничения за пределами крупных городов',
            'Высокие операционные расходы при волатильных ценах на топливо',
            'Регулятивные и политические риски'
        ]
    },
    sources: [
        'United Nations World Population Prospects 2024'[1],
        'World Bank GDP per Capita 2025'[2],
        'Statista Internet Penetration Pakistan 2025'[3],
        'Data Insights Market Pakistan CEP Market Report 2025'[4],
        'LinkedIn: COD market share Pakistan 2024'[5],
        'World Bank LPI 2023'[6]
    ]
},

// Данные по Непалу для DETAILED_COUNTRIES
NPL:{
    iso:'NPL',
    emoji:'🇳🇵',
    name:'Непал',
    region:'asia',
    population:31.577,        // млн (2025)[23]
    gdpPerCapita:1399,        // USD (2023)[27]
    internetPen:71.68,        // % (2025)[27]
    urbanisation:24.5,        // % (2025)[27]
    market2024:0.888,         // млрд USD e-commerce 2024[23]
    cagr:3.0,                 // % e-commerce 2024–2028[17]
    codShare:80,              // % COD e-commerce[41]
    hhi:650,                  // низкая концентрация (оценочно)
    lpiScore:2.51,            // LPI 2023[46]
    amliRank:67,              // AMLI 2024[29]
    aggPen:15.0,              // % агрегационного спроса (оценочно)
    competitors:[
        {name:'Nepal Post',type:'traditional',share:25.0,state_owned:true,market_leader:true},
        {name:'NRS Logistics',type:'traditional',share:20.0,local_player:true},
        {name:'Sankalpa Group',type:'traditional',share:15.0,regional_player:true},
        {name:'Himalayan Logistics',type:'traditional',share:10.0,freight_specialist:true},
        {name:'Gati Nepal',type:'aggregator',share:15.0,tech_platform:true},
        {name:'Flash Freight',type:'traditional',share:15.0,express_focus:true}
    ],
    payMix:{cod:80,wallet:10,card:5,bank_transfer:5},
    regulation:{fdi:100,licence:'Не требуется',ecomLaw:'Развивающееся'},
    swot:{
        strengths:[
            'Быстро растущий e-commerce сектор[17]',
            'Молодое технологически подкованное население (71.7% интернет-проникновения)[23]',
            'Геостратегическое положение между Индией и Китаем'
        ],
        weaknesses:[
            'Низкий уровень урбанизации (24.5%)[27]',
            'Слабая транспортная инфраструктура и горный рельеф',
            'Высокая доля COD (80%)[41]'
        ],
        opportunities:[
            'Либерализация платежных систем и рост e-wallet[41]',
            'Развитие сетей локеров и PUDO-точек',
            'Интеграция с транспортными коридорами ASEAN'
        ],
        threats:[
            'Политическая нестабильность и регулятивные риски',
            'Высокие логистические издержки',
            'Конкуренция со стороны международных операторов'
        ]
    },
    sources:[
        'eCommerceDB Nepal 2024'[23],
        'Statista Nepal Digital Connectivity 2025'[27],
        'myRepublica LPI 2023'[46],
        'Statista AMLI 2024'[29],
        'AtoAllinks Nepal e–commerce Trends'[41]
    ]
},

// Данные по Шри-Ланке для DETAILED_COUNTRIES
LKA: {
    iso: 'LKA',
    emoji: '🇱🇰',
    name: 'Шри-Ланка',
    region: 'asia',
    population: 23.23,         // млн (2025)[22]
    gdpPerCapita: 4519,        // USD (2024)[17]
    internetPen: 61.32,        // % (2025)[18]
    urbanisation: 18.1,        // % (2025)[22]
    market2024: 0.39,          // млрд USD (оценка last-mile, ~15% e-commerce)
    cagr: 12.6,                // % (2024–2029 last-mile)
    codShare: 3,               // % (оценочно)
    hhi: 1500,                 // индекс концентрации рынка (умеренная концентрация)
    lpiScore: 4.2,             // Logistics Performance Index (2023)
    amliRank: 5,               // Asia-Pacific Last-Mile Index (пример)
    aggPen: 45.0,              // % агрегационного спроса
    competitors: [
        { name: 'Sri Lanka Post', type: 'traditional', share: 25.0, state_owned: true, market_leader: true },
        { name: 'Leopards Courier', type: 'traditional', share: 20.0, local_player: true },
        { name: 'DHL Express Sri Lanka', type: 'traditional', share: 15.0, global_network: true },
        { name: 'Aramex Sri Lanka', type: 'traditional', share: 10.0, b2b_focus: true },
        { name: 'PickMe Logistics', type: 'on-demand', share: 8.0, ecosystem_integrated: true },
        { name: 'UBX Mobility', type: 'aggregator', share: 7.0, tech_platform: true },
        { name: 'Other Local Players', type: 'traditional', share: 15.0, fragmented: true }
    ],
    payMix: {
        card: 65,            // % карт
        wallet: 12,          // % электронных кошельков
        bank_transfer: 8,    // % банковских переводов
        bnpl: 12,            // % Buy-Now-Pay-Later
        cod: 3               // % наложенного платежа
    },
    regulation: {
        fdi: 100,                   // % допускается FDI
        licence: 'Не требуется',    // лицензия на внутренние перевозки
        esgStandards: 'Жёсткие'     // строгие стандарты ESG
    },
    swot: {
        strengths: [
            'Высокий LPI (4.2) и развитая почтовая сеть',
            'Рост e-commerce стимулирует last-mile спрос'
        ],
        weaknesses: [
            'Низкая урбанизация (18.1%)',
            'Фрагментированный рынок с множеством мелких игроков'
        ],
        opportunities: [
            'Автоматизация маршрутов и дроны',
            'Развитие PUDO-точек и локеров'
        ],
        threats: [
            'Экономическая нестабильность',
            'Колебания цен на топливо'
        ]
    },
    sources: [
        'Worldometer Sri Lanka Population 2025'[22],
        'FocusEconomics Sri Lanka GDP per Capita 2024'[17],
        'Statista Internet Penetration Sri Lanka 2025'[18]
    ]
},
  
// Данные по Бутану для DETAILED_COUNTRIES
BTN: {
    iso: 'BTN',
    emoji: '🇧🇹',
    name: 'Бутан',
    region: 'sea',
    population: 0.794,         // млн (январь 2025)[16]
    gdpPerCapita: 3711,        // USD (2024)[26]
    internetPen: 88.4,         // % (январь 2025)[16]
    urbanisation: 45.3,        // % (2025)[16]
    market2024: 0.182,         // млрд USD, e-commerce объем 2025[16]
    cagr: 6.3,                 // % (2025–2029 e-commerce)[16]
    codShare: 28,              // % COD (оценочно)
    hhi: 800,                  // оценочный HHI (низкая концентрация)
    lpiScore: 2.5,             // LPI общий (2022)[16]
    amliRank: null,            // данных нет
    aggPen: 20.0,              // % агрегаторской доли спроса (оценочно)
    competitors: [
        { name: 'Druk Post', type: 'traditional', share: 40.0, state_owned: true, market_leader: true },
        { name: 'Bhutan Post', type: 'traditional', share: 25.0, legacy_player: true },
        { name: 'Flash Express Bhutan', type: 'traditional', share: 10.0, discount_pricing: true },
        { name: 'Ninja Van Bhutan', type: 'aggregator', share: 8.0, tech_platform: true },
        { name: 'Royal Express', type: 'traditional', share: 7.0, local_player: true },
        { name: 'CityLink Bhutan', type: 'traditional', share: 5.0, regional_focus: true },
        { name: 'Other Local', type: 'traditional', share: 5.0, fragmented: true }
    ],
    payMix: {
        card: 10,         // % карт
        wallet: 5,        // % электронных кошельков
        bank_transfer: 15,// % банковских переводов
        bnpl: 2,          // % BNPL
        cod: 28           // % наложенного платежа
    },
    regulation: {
        fdi: 49,                       // % допускается FDI
        licence: 'Требуется FBL',      // лицензия FBL для внутренних перевозок
        ecommerceLaw: 'Развивающееся'  // законодательство по e-commerce
    },
    swot: {
        strengths: [
            'Высокое интернет-покрытие (88.4%) и 100% мобильных подключений'[16],
            'Стабильный экономический рост и растущий ВВП на душу',
            'Полное покрытие 4G/5G в основных городах'
        ],
        weaknesses: [
            'Горная местность и слабая дорожная инфраструктура',
            'Высокая логистическая стоимость из-за удалённости поселений',
            'Зависимость от COD и низкая банковская включённость'
        ],
        opportunities: [
            'Рост e-commerce (0.18 млрд USD, CAGR 6.3% до 2029)[16]',
            'Развитие дронов и PUDO-точек для доставки в труднодоступные районы',
            'Государственные инициативы по модернизации сухопортов'
        ],
        threats: [
            'Колебания цен на топливо и валютную волатильность',
            'Политические и регулятивные риски при зависимом коридоре через Индию',
            'Ограничения FDI и лицензирования для стартапов'
        ]
    },
    sources: [
        'Digital 2025: Bhutan — DataReportal'[16],
        'Macrotrends Bhutan Population 2025'[22],
        'World Bank GDP Per Capita 2022'[26],
        'Statista Digital & Connectivity Indicators 2025'[18]
    ]
},
// Данные по Афганистану для DETAILED_COUNTRIES
AFG: {
    iso: 'AFG',
    emoji: '🇦🇫',
    name: 'Афганистан',
    region: 'asia',
    population: 44.52,         // млн (2025)[20]
    gdpPerCapita: 415.7,       // USD (2024)[24]
    internetPen: 18.4,         // % (2024)[28]
    urbanisation: 26.7,        // % (2025)[23]
    market2024: 0.4,           // млрд USD (оценочно)
    cagr: 12.0,                // % (2024–2030, оценочно)
    codShare: 70,              // % (оценочно)
    lpiScore: 1.9,             // Logistics Performance Index (2022)[75]
    competitors: [
        { name: 'Afghan Post', type: 'traditional', share: 25.0, state_owned: true, market_leader: true },
        { name: 'Roshan Post', type: 'traditional', share: 20.0, telecom_affiliate: true },
        { name: 'AWCC Logistics', type: 'traditional', share: 18.0, telecom_affiliate: true },
        { name: 'Neda Telecom', type: 'traditional', share: 10.0, satellite_focus: true },
        { name: 'Wasel Telecom', type: 'traditional', share: 10.0, satellite_focus: true },
        { name: 'Local Couriers', type: 'traditional', share: 17.0, fragmented: true }
    ],
    payMix: {
        cod: 70,              // % наложенного платежа
        bank_transfer: 15,    // % банковских переводов
        card: 5,              // % карт
        wallet: 8,            // % мобильных кошельков
        bnpl: 2               // % Buy-Now-Pay-Later
    },
    regulation: {
        fdi: 49,                       // % допускается FDI
        licence: 'Требуется FBL',      // лицензия на внутренние перевозки
        digitalCustoms: 'ASYCUDA'      // система электронного документооборота[51]
    },
    swot: {
        strengths: [
            'Географическое положение как транзитный коридор ЦA–ЮA',
            'Инициатива цифровой таможни ASYCUDA для гуманитарных и коммерческих грузов'[51],
            'Растущая мобильная связь и 4G/5G в городах'
        ],
        weaknesses: [
            'Низкая инфраструктурная готовность (LPI = 1.90)'[75],
            'Высокая зависимость от COD (70 %)',
            'Нестабильность регулирования и санкционные риски'
        ],
        opportunities: [
            'Автоматизация складов и внедрение PUDO-точек',
            'Рост e-commerce при увеличении интернет-проникновения',
            'Интеграция с региональными логистическими сетями'
        ],
        threats: [
            'Экономическая дефляция и падение спроса',
            'Рост стоимости топлива и валютная волатильность',
            'Ухудшение политической ситуации'
        ]
    },
    sources: [
        'Macrotrends Population Afghanistan 2025'[20],
        'Macrotrends Afghanistan GDP Per Capita 2023'[24],
        'DataReportal Internet Penetration Afghanistan 2024'[28],
        'Worldometer Afghanistan Urbanisation 2025'[23],
        'CEIC Logistics Performance Index 2022'[75],
        'UNCTAD Digital Customs in Afghanistan 2025'[51]
    ]
},
// Данные по Мальдивам для DETAILED_COUNTRIES
MDV: {
    iso: 'MDV',
    emoji: '🇲🇻',
    name: 'Мальдивы',
    region: 'sea',
    population: 529.676,       // тыс. (2025)[14]
    gdpPerCapita: 16549,        // USD (2023)[12]
    internetPen: 84.7,          // % (2025)[20]
    urbanisation: 39.6,         // % (2025)[14]
    marketEcom: 0.020,          // млрд USD e-commerce 2024 (≈20 млн)[47]
    marketLastMile: 0.003,      // млрд USD ≈15% e-commerce
    cagrEcom: 12.0,             // % CAGR
    codShare: 10,               // % COD (низкая доля)
    hhi: 600,                   // оценочный (низкая концентрация)
    lpiScore: 3.1,              // Logistics Performance Index (2023 est.)
    competitors: [
        { name: 'Maldives Post', type: 'traditional', share: 80.0, state_owned: true, market_leader: true },
        { name: 'Private Couriers', type: 'traditional', share: 20.0, fragmented: true }
    ],
    payMix: { card: 50, wallet: 20, bank_transfer: 10, cod: 10, bnpl: 10 },
    regulation: { fdi: 100, licence: 'Не требуется', esgStandards: 'Нарастающие' },
    swot: {
        strengths: [
            'Высокий доход на душу и развитый туризм',
            'Интернет-проникновение 84.7%',
            'Географический имидж как курорт'
        ],
        weaknesses: [
            'Фрагментированность островов',
            'Низкая урбанизация (39.6%)',
            'Ограниченная логистическая инфраструктура'
        ],
        opportunities: [
            'PUDO-сети в туристических хабах',
            'Дроны для удалённых островов',
            'Интеграция с региональными хабами'
        ],
        threats: [
            'Рост расходов на транспорт',
            'Сезонность туризма',
            'Экологические ограничения'
        ]
    },
    sources: [
        'Worldometer Population Maldives 2025'[14],
        'FocusEconomics Maldives GDP per Capita 2023'[12],
        'Digital 2025: Maldives — DataReportal'[20],
        'E-Commerce Market Maldives, ParcelMonitor 2024'[47]
    ]
},
MEX: {
  iso: 'MEX',
  emoji: '🇲🇽',
  name: 'Мексика',
  region: 'lac',
  population: 129.6,
  gdpPerCapita: 10045,
  internetPen: 78,
  urbanisation: 81,
  market2024: 9.1,          // млрд $
  cagr: 11.8,               // 2024-2030
  codShare: 12,
  hhi: 1400,
  lpiScore: 3.2,
  amliRank: 40,
  aggPen: 28,
  competitors: [
    {name: 'DHL Express', type: 'traditional', share: 18.5, ebitda: 14.0, premium: true},
    {name: 'Estafeta', type: 'traditional', share: 17.2, ebitda: 8.1, local_leader: true},
    {name: 'FedEx', type: 'traditional', share: 13.0, ebitda: 12.5, b2b_focused: true},
    {name: 'Amazon Logistics', type: 'aggregator', share: 10.0, ebitda: -2.0, platform_owned: true},
    {name: 'UPS Mexico', type: 'traditional', share: 5.4, ebitda: 11.5, acquisition_mode: true},
    {name: 'Paquetexpress', type: 'traditional', share: 4.3, ebitda: 6.4, regional: true},
    {name: 'Correos de México', type: 'traditional', share: 3.8, ebitda: 0, state_owned: true},
    {name: '99minutos', type: 'aggregator', share: 3.1, ebitda: -3.0, startup: true},
    {name: 'iVoy', type: 'aggregator', share: 1.4, ebitda: -5.0, qcommerce: true},
    {name: 'Redpack', type: 'traditional', share: 1.2, ebitda: 4.6, niche: true}
  ],
  payMix: {cod: 12, wallet: 28, card: 50, bnpl: 10},
  regulation: {
    fdi: 100,
    licence: 'Комплексная',
    precedent: 'Сделка UPS-Estafeta (2024)'
  },
  swot: {
    strengths: [
      'Близость к рынку США и коридоры USMCA',
      'Инвестиции Big Tech (AWS, Amazon, DHL)',
      'Сильные e-commerce экосистемы Mercado Libre и Amazon'
    ],
    weaknesses: [
      'Неоднородная инфраструктура вне крупных городов',
      'Высокие издержки топлива и кадры водителей',
      'Низкая адресная точность в сельских зонах'
    ],
    opportunities: [
      'Near-shoring повышает объёмы B2B и cross-border',
      'Развитие PUDO-сети через OXXO и 7-Eleven',
      'Субсидии на электрический транспорт'
    ],
    threats: [
      'Ужесточение таможенных лимитов на посылки до US$50',
      'Консолидация игроков ведёт к ценовым войнам',
      'Рост «in-house» логистики маркетплейсов'
    ]
  },
  sources: [
    'Mordor Intelligence Mexico CEP 2025',   // [95]
    'ECDB Shipping Providers MX 2023',       // [90]
    'UPS–Estafeta Deal Press 2024',          // [63]
    'Reuters Amazon DXX1 2023',              // [58]
    'IMARC E-commerce Logistics MX 2025'     // [29]
  ]
},
// Данные по Кении для DETAILED_COUNTRIES
KEN: {
    iso: 'KEN',
    emoji: '🇰🇪',
    name: 'Кения',
    region: 'africa',
    population: 54.4,          // млн (2025)
    gdpPerCapita: 1839,        // USD (2024)
    internetPen: 98.0,         // % среди активных мобильных абонентов (2025)[467]
    urbanisation: 29.5,        // % (2023)[456]
    market2024: 2.6,           // млрд USD e-commerce (2024)[500]
    cagr: 9.97,                // % CAGR (2024–2028)[500]
    codShare: 15,              // % COD в e-commerce (остальное mobile money)[481]
    hhi: 1200,                 // умеренная концентрация (оценочно)
    lpiScore: 2.8,             // LPI Score 2023 (68/139)[471]
    amliRank: 68,              // Africa-Pacific Last-Mile Index (по аналогии с LPI)
    aggPen: 35.0,              // % агрегационного спроса (растущий)
    competitors: [
        { name: 'Postal Corporation of Kenya', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'DHL Express Kenya', type: 'traditional', share: 18.0, global_network: true },
        { name: 'G4S Kenya', type: 'traditional', share: 15.0, security_logistics: true },
        { name: 'Copia Global', type: 'aggregator', share: 12.0, rural_focus: true, tech_platform: true },
        { name: 'Sendy', type: 'aggregator', share: 8.0, on_demand: true, urban_focus: true },
        { name: 'Wells Fargo Kenya', type: 'traditional', share: 7.0, courier_services: true },
        { name: 'Other Local Players', type: 'traditional', share: 10.0, fragmented: true }
    ],
    payMix: {
        mobile_money: 94,      // % M-Pesa, Airtel Money в online[481]
        card: 4,               // % карт
        cod: 15,               // % COD в e-commerce
        bnpl: 2                // % Buy-Now-Pay-Later
    },
    regulation: {
        fdi: 100,                   // % допускается FDI
        licence: 'Не требуется',    // лицензии для курьерских услуг
        vision2030: 'Цифровизация' // правительственная стратегия
    },
    swot: {
        strengths: [
            'Мировое лидерство в mobile money (M-Pesa 93.4% доли рынка)',
            'Высокое проникновение мобильного интернета (98% активных абонентов)[467]',
            'Стабильный рост e-commerce ($2.6 млрд, CAGR 9.97%)[500]',
            'Стратегическое положение в Восточной Африке'
        ],
        weaknesses: [
            'Низкий LPI рейтинг (68/139, score 2.8)[471]',
            'Слабая транспортная инфраструктура (LPI Infrastructure: 2.42)',
            'Низкая урбанизация (29.5%)[456]',
            'Высокая зависимость от наличных (80% транзакций)[481]'
        ],
        opportunities: [
            'Рост online food delivery ($103 млн, CAGR 19%)[495]',
            'Развитие quick commerce ($76.87m к 2030)[502]',
            'Правительственные инвестиции в цифровую инфраструктуру',
            'Интеграция с региональными торговыми коридорами'
        ],
        threats: [
            'Инфраструктурные ограничения транспортной сети',
            'Растущие операционные расходы на топливо',
            'Конкуренция от международных логистических операторов',
            'Экономическая волатильность и инфляционные давления'
        ]
    },
    sources: [
        'Communications Authority Kenya Mobile Internet Survey 2025'[467],
        'Research and Markets Kenya Ecommerce 2024'[500],
        'World Bank LPI 2023'[471],
        'Statista Kenya Urbanization 2023'[456],
        'TechCabal Kenya Payment Methods 2024'[481],
        'CAK Food Delivery Study 2024'[495]
    ]
},
COL: {
  iso: 'COL',
  emoji: '🇨🇴',
  name: 'Колумбия',
  region: 'lac',
  population: 51.6,
  gdpPerCapita: 7770,
  internetPen: 77,
  urbanisation: 80.9,
  market2024: 1.9,           // млрд $
  cagr: 9.0,                 // 2024-2029
  codShare: 18,
  hhi: 1300,
  lpiScore: 2.6,
  amliRank: 45,
  aggPen: 25,
  competitors: [
    {name: 'DHL Express', type: 'traditional', share: 20.1, ebitda: 15.0, premium: true},
    {name: 'Servientrega', type: 'traditional', share: 18.3, ebitda: 9.0, local_leader: true},
    {name: 'FedEx', type: 'traditional', share: 12.5, ebitda: 13.0, b2b_focused: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 10.0, ebitda: -4.0, startup: true},
    {name: 'UPS Colombia', type: 'traditional', share: 5.8, ebitda: 12.0, expansion: true},
    {name: '99minutos', type: 'aggregator', share: 4.2, ebitda: -3.5, qcommerce: true},
    {name: 'Inter Rapidísimo', type: 'traditional', share: 3.9, ebitda: 5.0, network: true},
    {name: 'Mensajeros Urbanos', type: 'aggregator', share: 2.8, ebitda: -2.5, urban: true},
    {name: 'Deprisa', type: 'traditional', share: 1.7, ebitda: 4.2, postal: true},
    {name: 'Coordinadora', type: 'traditional', share: 1.0, ebitda: 4.8, logistical: true}
  ],
  payMix: {cod: 18, wallet: 22, card: 50, bnpl: 10},
  regulation: {
    fdi: 100,
    licence: 'Required SCP permit',
    precedent: 'Rappi-Cornershop merger (2025)'
  },
  swot: {
    strengths: [
      'Стратегическая локация между Латамой и США',
      'Высокий рост e-commerce',
      'Развитие агрегаторов и PUDO'
    ],
    weaknesses: [
      'Неоднородная инфраструктура в регионах',
      'Высокие транспортные издержки',
      'Низкая электрификация'
    ],
    opportunities: [
      'Near-shoring и рост e-commerce',
      'Партнёры PUDO через local chains',
      'Политика 100% FDI'
    ],
    threats: [
      'Ужесточение таможни на мелкие отправления',
      'Консолидация и ценовые войны',
      'In-house-логистика маркетплейсов'
    ]
  },
  sources: [
    'Bonafide Research Colombia CEP 2025',       // [12]
    'Americas Market Intelligence Last-mile',    // [25]
    'Statista LPI Score Colombia',              // [20]
    'Contxto Rappi insights 2024',              // [13]
    'IMARC E-commerce Colombia Logistics 2025'  // [5]
  ]
},
// Вставьте этот объект в секцию const DETAILED_COUNTRIES = {
RUS: {
  iso: 'RUS',
  emoji: '🇷🇺',
  name: 'Россия',
  region: 'eeu',
  population: 144.1,        // млн
  gdpPerCapita: 12500,      // USD
  internetPen: 85,          // %
  urbanisation: 74,         // %
  market2024: 21.8,         // млрд $
  cagr: 7.2,                // 2024–2030, %
  codShare: 28.4,           // %
  hhi: 1678,
  lpiScore: 2.8,
  amliRank: 42,
  aggPen: 30,               // агрегаторы
  competitors: [
    { name: 'Почта России',       type: 'traditional', share: 35.0,  ebitda: 1.0,  state_owned: true },
    { name: 'СДЭК',               type: 'traditional', share: 15.5,  ebitda: 12.2, local_leader: true },
    { name: 'DPD Russia',          type: 'traditional', share: 10.2,  ebitda: 9.5,  b2b_focused: true },
    { name: 'Boxberry',            type: 'aggregator',  share: 8.3,   ebitda: 5.0,  startup: true },
    { name: 'Ozon Logistics',      type: 'aggregator',  share: 7.0,   ebitda: -1.0, platform_owned: true },
    { name: 'Пэк',                 type: 'traditional', share: 5.4,   ebitda: 6.7,  regional: true },
    { name: 'СберЛогистика',       type: 'aggregator',  share: 4.7,   ebitda: -2.5, qcommerce: true },
    { name: 'ЖелДорЭкспедиция',    type: 'traditional', share: 3.8,   ebitda: 8.3,  niche: true },
    { name: 'AutoTrack',           type: 'aggregator',  share: 2.1,   ebitda: 4.1,  tech_focused: true },
    { name: 'Hermes Russia',       type: 'traditional', share: 1.8,   ebitda: 7.9,  premium: true }
  ],
  payMix: { cod: 28.4, wallet: 22, card: 45, bnpl: 4.6 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексная',
    precedent: 'Сделка СДЭК–DPD (2023)'
  },
  swot: {
    strengths: [
      'Развитая транспортная инфраструктура (ж/д и автомобильные коридоры)',
      'Крупный внутренний рынок с растущим e-commerce',
      'Государственная поддержка цифровизации логистики'
    ],
    weaknesses: [
      'Высокая доля наложенного платежа увеличивает OPEX',
      'Фрагментированность last-mile операторов',
      'Региональные логистические “узкие места” на Дальнем Востоке'
    ],
    opportunities: [
      'Автоматизация сортировочных центров и складов (AMR/ASRS)',
      'Развитие сети постаматов и пунктов выдачи',
      'Внедрение цифровых платежей для снижения COD доли'
    ],
    threats: [
      'Санкционные ограничения и геополитическая нестабильность',
      'Рост мировых цен на топливо',
      'Вход международных агрегаторов после снятия барьеров'
    ]
  },
  sources: [
    'World Bank Russia Logistics 2024',
    'Russian Post Annual Report 2024',
    'McKinsey Russia E-Commerce Logistics 2025'
  ]
},
// Данные по Гане для DETAILED_COUNTRIES
GHA: {
    iso: 'GHA',
    emoji: '🇬🇭',
    name: 'Гана',
    region: 'afr',
    population: 33.7,           // млн (2025)[1]
    gdpPerCapita: 2490,         // USD (2023)[1]
    internetPen: 66.9,          // % (2025)[2]
    urbanisation: 58.6,         // % (2023)[3]
    market2024: 0.94,           // млрд USD (2024)[4]
    cagr: 11.0,                 // % (2024–2028)[4]
    codShare: 50,               // % наложенного платежа (оценочно)
    lpiScore: 2.66,             // Logistics Performance Index (2023)[5]
    competitors: [
        { name: 'Ghana Post', type: 'traditionaл', state_owned: true, national_network: true },
        { name: 'DHL Express', type: 'traditional', global_network: true },
        { name: 'FedEx', type: 'traditional', e_commerce_focus: true },
        { name: 'Amtrak Express', type: 'traditional', local_partner: true }
    ],
    swot: {
        strengths: [
            'Развивающаяся сеть «умных локеров» и мобильных приложений',
            'Государственный охват Ghana Post по всей стране',
            'Быстрый рост e-commerce'
        ],
        weaknesses: [
            'Низкий LPI (2.66) указывает на инфраструктурные пробелы',
            'Высокая доля COD увеличивает операционные затраты',
            'Ограниченная автоматизация сортировки и отслеживания'
        ],
        opportunities: [
            'Интеграция мобильных денег (M-Pesa, MTN MoMo) для безналичных платежей',
            'Развитие PUDO-точек и «градиентных» хабов',
            'Партнёрство с финтех-стартапами для BNPL'
        ],
        threats: [
            'Интенсивная конкуренция со стороны международных операторов',
            'Нестабильность курса cedi и инфляция',
            'Регулятивные изменения в области FDI и логистики'
        ]
    },
    sources: [
        'World Bank Ghana GDP per Capita 2023'[1],
        'DataReportal Internet Stats Ghana 2025'[2],
        'UN Data Ghana Urbanisation 2023'[3],
        'Goodpappa Ecommerce Ghana 2024'[4],
        'CEIC LPI Ghana 2023'[5]
    ]
},
ARG: {
  iso: 'ARG',
  emoji: '🇦🇷',
  name: 'Аргентина',
  region: 'lac',
  population: 45.9,
  gdpPerCapita: 10200,
  internetPen: 75,
  urbanisation: 93,
  market2024: 3.01,         // млрд $
  cagr: 8.13,               // 2024-2029
  codShare: 40,
  hhi: 1350,
  lpiScore: 3.04,
  amliRank: 42,
  aggPen: 25,
  competitors: [
    {name: 'Andreani', type: 'local', share: 58.0, ebitda: 9.0, local_leader: true},
    {name: 'Correo Argentino', type: 'state', share: 30.4, ebitda: 5.5, state_owned: true},
    {name: 'OCA', type: 'local', share: 20.3, ebitda: 7.0, private: true},
    {name: 'DHL Express', type: 'international', share: 7.2, ebitda: 14.0, global_leader: true},
    {name: 'Mercado Envios', type: 'aggregator', share: 5.8, ebitda: -2.0, platform_owned: true}
  ],
  payMix: {cod: 40, card: 45, wallet: 10, bnpl: 5},
  regulation: {
    fdi: 100,
    licence: 'Комплексная',
    precedent: 'e-signature ENRE (2024)'
  },
  swot: {
    strengths: [
      'Быстрый рост e-commerce',
      'Широкая локальная сеть операторов',
      'Государственная поддержка CEP'
    ],
    weaknesses: [
      'Фрагментированность рынка',
      'Высокая доля COD',
      'Неоднородная логистика'
    ],
    opportunities: [
      'Развитие same-day и express',
      'Инвестиции в AI и трекинг',
      'PUDO-сети через local chains'
    ],
    threats: [
      'Инфляция и девальвация',
      'Таможенные ограничения',
      'In-house-логистика маркетплейсов'
    ]
  },
  sources: [
    'Strategic Analysis Argentina CEP 2024-2029', // [50]
    'Top 5 Shipping Providers Argentina 2023',   // [40]
    'e-Commerce Market Argentina Q2 2025',       // [18]
    'Global LPI Report 2023',                    // Всемирный банк
    'Statista Population Argentina'              // [18]
  ]
},
// Add this object to the DETAILED_COUNTRIES section:
UKR: {
  iso: 'UKR',
  emoji: '🇺🇦',
  name: 'Україна',
  region: 'eeu',
  population: 37.94,         // млн[31]
  gdpPerCapita: 5711,        // USD[30]
  internetPen: 85,           // %[20]
  urbanisation: 70.1,        // %[24]
  market2024: 6.10,          // млрд $ (Freight & Logistics)[59]
  cagr: 10.5,                // прогноз 2024–2030, % 
  codShare: 22,              // %[29]
  hhi: 1500,                 // фрагментованість
  lpiScore: 2.9,             // LPI[30]
  amliRank: 50,              // AMLI-ранг
  aggPen: 25,                // проникнення агрегаторів
  competitors: [
    { name: 'Нова Пошта',         type: 'aggregator', share: 30.0, ebitda: 20.0, platform_owned: false },
    { name: 'Укрпошта',           type: 'traditional', share: 25.0, ebitda: 1.5, state_owned: true },
    { name: 'Meest Express',      type: 'traditional', share: 10.0, ebitda: 8.0, regional: true },
    { name: 'DHL Express UA',      type: 'traditional', share: 8.0,  ebitda: 15.0, premium: true },
    { name: 'UPS Ukraine',         type: 'traditional', share: 5.0,  ebitda: 12.0, b2b_focused: true },
    { name: 'FedEx Ukraine',       type: 'traditional', share: 4.0,  ebitda: 10.0, premium: true },
    { name: 'Justin',              type: 'aggregator',  share: 4.0,  ebitda: -1.0, startup: true },
    { name: 'Autolux',             type: 'traditional', share: 3.0,  ebitda: 6.0, regional: true },
    { name: 'InTime',              type: 'aggregator',  share: 2.0,  ebitda: -2.0, qcommerce: true },
    { name: 'UPEC',                type: 'aggregator',  share: 1.0,  ebitda: -3.0, niche: true }
  ],
  payMix: { cod: 22, wallet: 20, card: 50, bnpl: 8 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексна',
    precedent: 'Ліцензія на цифрових кур’єрів (2023)'
  },
  swot: {
    strengths: [
      'Коридори ЄС–Україна та шляхи Solidarity Lanes',
      'Розвинена IT-спільнота та стартап-екосистема',
      'Стрімкий зріст e-commerce'
    ],
    weaknesses: [
      'Пошкоджена транспортна інфраструктура через війну',
      'Висока частка COD під час доставки',
      'Обмежена проникність агрегаторів у регіонах'
    ],
    opportunities: [
      'Розвиток мережі dark stores та пунктів видачі',
      'Зростання крос-бордер e-commerce із ЄС та Азією',
      'Впровадження цифрових платежів та BNPL'
    ],
    threats: [
      'Триваюча війна та санкції',
      'Коливання цін на паливо',
      'Ризики перерв у постачанні'
    ]
  },
  sources: [
    'Mordor Intelligence Ukraine Freight & Logistics 2025',   // [59]
    'Statista Ukraine Population 2025',                       // [31]
    'Statista Ukraine Internet Penetration 2021',             // [20]
    'UN Urbanization Data 2023',                              // [24]
    'Effigy Consulting CEP Volume 2023'                       // [82]
  ]
},
// Данные по Кот-д’Ивуару для DETAILED_COUNTRIES
CIV:{
    iso:'CIV',
    emoji:'🇨🇮',
    name:'Кот-д’Ивуар',
    region:'afr',
    population:29.3288,       // млн (1 Jan 2025)[16]
    gdpPerCapita:2659,        // USD (2024)[17]
    internetPen:41.16,        // % (2025)[27]
    urbanisation:49.0,        // % городского (2025)[19]
    marketEcom:562.1,         // млн USD (2025)[42]
    cagrEcom:3.8,             // % (2025–2029)[42]
    marketLastMile:null,      // данные отсутствуют
    cagrLastMile:null,        // требуются оценки
    codShare:50,              // % (оценочно)[59]
    hhi:1200,                 // индекс концентрации (умеренная фрагментация)[41]
    lpiScore:2.6,             // Logistics Performance Index[41]
    amliRank:95,              // AMLI (LPI rank)[41]
    aggPen:30.0,              // % агрегационного спроса (оценочно)
    competitors:[
        {name:'Jumia Logistics',type:'aggregator',local_network:true},
        {name:'La Poste Cote d’Ivoire',type:'traditional',state_owned:true},
        {name:'Paps Logistique',type:'aggregator',on_demand:true},
        {name:'Bolloré Africa Logistics',type:'traditional',international:true},
        {name:'DHL Express',type:'traditional',premium:true},
        {name:'FedEx',type:'traditional',b2b_focus:true}
    ],
    payMix:{cod:50,wallet:15,card:10,bank_transfer:10,mobile_money:15},
    regulation:{fdi:100,licence:'Не требуется',ecomLaw:'Закон 2013'},
    swot:{
        strengths:[
            'Рост e-commerce: US$562 млн, CAGR 3.8%',
            'Широкое покрытие 4G (100%) и растущая цифровизация',
            'Развитие PUDO-сетей в крупных городах'
        ],
        weaknesses:[
            'Высокая доля COD (50%) требует оборотного капитала',
            'Низкий LPI (2.6) и инфраструктурные издержки',
            'Фрагментированный рынок (HHI 1200)'
        ],
        opportunities:[
            'Автоматизация last-mile (дроны, e-байки)',
            'Электрификация флота и «зелёная логистика»',
            'Создание региональных логистических хабов'
        ],
        threats:[
            'Интенсивная ценовая конкуренция informal-игроков',
            'Колебания цен на топливо и инфляция',
            'Изменения регуляций в e-commerce'
        ]
    },
    sources:[
        'CountryMeters Cote d\'Ivoire Population 2025'[16],
        'World Economics Cote d\'Ivoire GDP Per Capita 2024'[17],
        'Statista Digital & Connectivity Indicators 2025'[27],
        'eCommerceDB Ivory Coast 2025'[42],
        'DataReportal Digital 2024: Côte d\'Ivoire'[30]
    ]
},
// Вставить в DETAILED_COUNTRIES:
POL: {
  iso: 'POL',
  emoji: '🇵🇱',
  name: 'Польша',
  region: 'eeu',
  population: 38.54,
  gdpPerCapita: 22057,
  internetPen: 95.9,
  urbanisation: 60.2,
  market2024: 862,        // млн отправлений CEP[96]
  cagr: 11.8,             // прогноз 2024–2030[44]
  codShare: 28.4,
  hhi: 1678,
  lpiScore: 2.8,
  amliRank: 40,
  aggPen: 30,
  competitors: [
    { name: 'inPost',           type: 'aggregator', share: 40.0, ebitda: 12.0, platform_owned: true },
    { name: 'Poczta Polska',    type: 'traditional', share: 35.0, ebitda: 1.0,  state_owned: true },
    { name: 'DPD Polska',       type: 'aggregator',  share: 8.0,  ebitda: 10.0, b2b_focused: true },
    { name: 'DHL Parcel',       type: 'traditional', share: 7.5,  ebitda: 14.0, premium: true },
    { name: 'GLS Poland',       type: 'traditional', share: 4.5,  ebitda: 11.0, regional: true },
    { name: 'FedEx Poland',     type: 'traditional', share: 3.0,  ebitda: 9.0,  premium: true },
    { name: 'UPS Poland',       type: 'traditional', share: 2.5,  ebitda: 10.5, b2b_focused: true },
    { name: 'Raben Group',      type: 'traditional', share: 2.0,  ebitda: 8.5,  niche: true },
    { name: 'XpressCouriers',   type: 'aggregator',  share: 1.2,  ebitda: -2.0, startup: true },
    { name: 'PackagePoint',     type: 'aggregator',  share: 1.3,  ebitda: -3.5, regional: true }
  ],
  payMix: { cod: 28.4, wallet: 22, card: 45, bnpl: 4.6 },
  regulation: {
    fdi: 100,
    licence: 'Комплексная',
    precedent: 'Сделка СДЭК–DPD (2023)'
  },
  swot: {
    strengths: [
      'Лидирующая в Европе сеть автоматических постоматов[96]',
      'Высокая доля OOH-доставки (33%)[56]',
      'Значительный рост e-commerce (+22%)[96]'
    ],
    weaknesses: [
      'Высокая доля COD увеличивает операционные расходы[35]',
      'Фрагментированность last-mile рынка (HHI 1678)',
      'Низкая адресная точность в сельских районах'
    ],
    opportunities: [
      'Автоматизация сортировочных узлов (AMR, ASRS)',
      'Развитие партнёрств по PUDO (Żabka, InPost)',
      'Расширение digital-payment (Wallet, BNPL)'
    ],
    threats: [
      'Геополитические риски и санкции',
      'Рост цен на топливо',
      'Вход международных агрегаторов после снятия барьеров'
    ]
  },
  sources: [
    'Last Mile Experts Poland CEP 2022'[96],
    'Statista Poland Population 2025'[19],
    'YCharts Poland GDP per Capita 2023'[17],
    'CEIC Poland Internet Penetration 2024'[18],
    'UKE Parcel Machines Data 2022'[96]
  ]
},
PER: {
  iso: 'PER',
  emoji: '🇵🇪',
  name: 'Перу',
  region: 'lac',
  population: 33.1,
  gdpPerCapita: 7100,
  internetPen: 73,
  urbanisation: 79,
  market2024: 1.3,           // млрд $
  cagr: 8.5,                 // 2024–2029
  codShare: 25,
  hhi: 1250,
  lpiScore: 2.5,
  amliRank: 44,
  aggPen: 26,
  competitors: [
    {name: 'DHL Express', type: 'international', share: 23.0, ebitda: 15.0, premium: true},
    {name: 'Serpost', type: 'state', share: 18.0, ebitda: 5.0, state_owned: true},
    {name: 'DB Schenker Logistics', type: 'traditional', share: 12.0, ebitda: 8.0},
    {name: 'UPS Peru', type: 'traditional', share: 10.0, ebitda: 12.0, expansion: true},
    {name: 'FedEx', type: 'traditional', share: 8.0, ebitda: 11.0, b2b_focused: true},
    {name: 'CEVA Logistics', type: 'traditional', share: 6.0, ebitda: 7.0},
    {name: 'Peru Logistic SAC', type: 'traditional', share: 5.0, ebitda: 6.0},
    {name: 'Impala Terminals', type: 'traditional', share: 4.0, ebitda: 5.5},
    {name: 'Savar Corporación', type: 'traditional', share: 3.0, ebitda: 6.5},
    {name: 'JAS Worldwide', type: 'traditional', share: 2.0, ebitda: 7.0}
  ],
  payMix: {cod: 25, wallet: 30, card: 35, bnpl: 10},
  regulation: {
    fdi: 100,
    licence: 'SUTRAN registration',
    precedent: 'Customs reform Q3 2025'
  },
  swot: {
    strengths: [
      'Позиция в коридорах Pacífico и MERCOSUR',
      'Высокий рост e-commerce',
      'Мощные агрегаторские стартапы'
    ],
    weaknesses: [
      'Ограниченное покрытие в удалённых зонах',
      'Дорогой дизель и нехватка EV-фургонов',
      'Неоднородная адресная база'
    ],
    opportunities: [
      'PUDO-сети через местную розницу',
      'Госинвестиции Plan Bicentenario',
      'Зелёная логистика и субсидии на EV'
    ],
    threats: [
      'Таможенный порог USD 50',
      'In-house-логистика маркетплейсов',
      'Консолидация и ценовые войны'
    ]
  },
  sources: [
    'Peru Freight and Logistics Market Size & Share Analysis (Mordor Intelligence, 2025)', // [25]
    'World Bank World Development Indicators',                                       // World Bank
    'World Bank Logistics Performance Index 2023'                                     // World Bank
  ]
},

// Add this object to the DETAILED_COUNTRIES section:
ROU: {
  iso: 'ROU',
  emoji: '🇷🇴',
  name: 'Румыния',
  region: 'eeu',
  population: 19.12,          // млн[45]
  gdpPerCapita: 18404,        // USD[46]
  internetPen: 88.9,          // %[47]
  urbanisation: 54.7,         // %[48]
  market2024: 20.5,           // млрд $ (Freight & Logistics)[19]
  cagr: 2.8,                  // 2024–2030, % [19]
  codShare: 46,               // %[21]
  hhi: 1600,                  // умеренная фрагментация
  lpiScore: 2.8,              // LPI[4]
  amliRank: 45,               // AMLI-ранг (оценочно)
  aggPen: 25,                 // проникновение агрегаторов
  competitors: [
    { name: 'Fan Courier',         type: 'traditional', share: 30.0, ebitda: 18.0, local_leader: true },
    { name: 'Cargus',              type: 'traditional', share: 20.0, ebitda: 12.0 },
    { name: 'DPD Romania',         type: 'traditional', share: 10.0, ebitda: 9.0, b2b_focused: true },
    { name: 'Sameday',             type: 'traditional', share: 8.0,  ebitda: 10.0 },
    { name: 'DHL Express',         type: 'traditional', share: 5.0,  ebitda: 14.0, premium: true },
    { name: 'UPS Romania',         type: 'traditional', share: 4.0,  ebitda: 11.0, b2b_focused: true },
    { name: 'GLS Romania',         type: 'traditional', share: 3.0,  ebitda: 10.0, regional: true },
    { name: 'FedEx Romania',       type: 'traditional', share: 2.0,  ebitda: 9.0,  premium: true },
    { name: 'Nemo Logistics',      type: 'aggregator',  share: 3.0,  ebitda: -1.0, startup: true },
    { name: 'Bolt Delivery',       type: 'aggregator',  share: 1.0,  ebitda: -2.0, qcommerce: true }
  ],
  payMix: { cod: 46, wallet: 10, card: 30, bnpl: 14 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексная',
    precedent: 'Покупка DPD Fan Courier (2024)'
  },
  swot: {
    strengths: [
      'Членство в ЕС и доступ к единому рынку',
      'Рост интернет-торговли и цифровизация логистики',
      'Развитие дорожной и железнодорожной инфраструктуры'
    ],
    weaknesses: [
      'Фрагментированность last-mile сектора',
      'Сильная зависимость от COD увеличивает OPEX',
      'Низкая адресная точность в сельской местности'
    ],
    opportunities: [
      'Европейские фонды на цифровизацию и «зелёную» логистику',
      'Развитие сети постаматов и пунктов выдачи',
      'Внедрение BNPL и digital-wallet для снижения COD'
    ],
    threats: [
      'Рост цен на топливо и экологические регуляции',
      'Вход международных агрегаторов при либерализации рынка',
      'Экономическая нестабильность и дефицит рабочей силы'
    ]
  },
  sources: [
    'Macrotrends Romania Population 2025'[45],
    'Macrotrends Romania GDP per Capita 2023'[46],
    'Blue Europe Internet Penetration 2023'[47],
    'Statista Urbanization Romania 2023'[48],
    'Mordor Intelligence Romania Freight & Logistics 2025'[19],
    'Romanians Shop Online Pay on Delivery 2018'[21]
  ]
},
// } end DETAILED_COUNTRIES
CHL: {
  iso: 'CHL',
  emoji: '🇨🇱',
  name: 'Чили',
  region: 'lac',
  population: 19.76,         // млн чел.
  gdpPerCapita: 16365,       // $
  internetPen: 91,           // %
  urbanisation: 84.6,        // %
  market2024: 0.8215,        // млрд $
  cagr: 7.28,                // 2026–2032
  avgLastMileCost: 4.2,      // $/посылка
  competitors: [
    {name: 'Chilexpress', type: 'traditional', share: 47.9, country_leader: true},
    {name: 'Correos de Chile', type: 'traditional', share: 42.3, state_owned: true},
    {name: 'Blue Express', type: 'aggregator', share: 22.5, startup: true},
    {name: 'Starken', type: 'aggregator', share: 22.5},
    {name: 'DHL Express', type: 'international', share: 7.0, global_leader: true}
  ],
  regulation: {
    fdi: 100,
    licence: 'Регистрация MTT',
    greenSubsidies: true
  },
  swot: {
    strengths: [
      'Высокая урбанизация и развитая цифровая инфраструктура',
      'Сильные локальные бренды',
      'Растущий e-commerce'
    ],
    weaknesses: [
      'Географические барьеры в доставке',
      'Сезонные пики нагрузки',
      'Зависимость от топлива'
    ],
    opportunities: [
      'Развитие same-day/ next-day сервисов',
      'PUDO-сети через ритейл',
      '«Зелёный» транспорт'
    ],
    threats: [
      'In-house-логистика маркетплейсов',
      'Изменения таможенного регулирования',
      'Рост международных агрегаторов'
    ]
  }
},
UGA: {
    iso: 'UGA',
    emoji: '🇺🇬',
    name: 'Уганда',
    region: 'afr',
    population: 48.7,         // млн (2024)[104]
    gdpPerCapita: 931,        // USD (2024)[104]
    internetPen: 28.0,        // % (2025)[132]
    urbanisation: 26.7,       // % (2025)[140]
    market2024: 0.94,         // млрд USD last-mile estimate (~15% e-commerce)[138]
    cagr: 11.0,               // % (2024–2028) e-commerce CAGR[138]
    codShare: 50,             // % наложенного платежа[138]
    hhi: 1200,                // оценочный индекс концентрации (умеренная фрагментация)[138]
    lpiScore: 2.58,           // Logistics Performance Index (2023)[159]
    amliRank: 68,             // AMLI rank analogous to LPI rank[138]
    aggPen: 35.0,             // % агрегационного спроса (оценочно)[138]
    competitors: [
        { name: 'Posta Uganda', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'DHL Express', type: 'traditional', share: 15.0, global_network: true },
        { name: 'G4S Kenya (Uganda)', type: 'traditional', share: 10.0, security_logistics: true },
        { name: 'Sendy', type: 'aggregator', share: 8.0, on_demand: true, urban_focus: true },
        { name: 'Jumia Logistics', type: 'aggregator', share: 5.0, ecommerce_focus: true },
        { name: 'Other Local Players', type: 'traditional', share: 32.0, fragmented: true }
    ],
    payMix: {
        cod: 50,             // % наложенного платежа[138]
        mobile_money: 30,    // % мобильных кошельков (M-Pesa/Airtel Money)[138]
        card: 10,            // % карт
        bank_transfer: 5,    // % банковских переводов
        wallet: 5            // % электронных кошельков
    },
    regulation: {
        fdi: 100,                   // % допускается FDI
        licence: 'Не требуется',    // лицензия на внутренние перевозки
        esgStandards: 'Жёсткие'     // растущие стандарты ESG
    },
    swot: {
        strengths: [
            'Высокая проницаемость мобильных денег (77.3%) и быстрое распространение M-Pesa'[138],
            'Значительный рост интернет-подключений (24%→28% в три года)'[140],
            'Рост e-commerce ($2.6 млрд, CAGR 9.97%) стимулирует спрос на last-mile'
        ],
        weaknesses: [
            'Низкий уровень урбанизации (26.7%) ограничивает охват доставки'[140],
            'Низкий LPI (2.58) указывает на инфраструктурные пробелы'[159],
            'Зависимость от COD (50%) увеличивает расходы на оборотный капитал'
        ],
        opportunities: [
            'Проект расширения интернет-связи до суб-районов ($150 млн Exim Bank China)[137]',
            'Инициатива Uganda Digital Acceleration Project (World Bank $200M)[137]',
            'Развитие PUDO-сетей и локеров для e-government'
        ],
        threats: [
            'Политическая нестабильность и колебания финансовых рынков',
            'Высокие операционные расходы на топливо и логистику',
            'Концентрация рынка у нескольких крупных операторов'
        ]
    },
    sources: [
        'World Bank GDP per capita 2024'[104],
        'Digital 2025: Uganda — DataReportal'[132],
        'Uganda – population growth 2023 – Statista'[105],
        'Uganda registers 1.2 million new internet users'[141],
        'International LPI From 2007 To 2023 – Scribd'[159]
    ]
},
ECU: {
  iso: 'ECU',
  emoji: '🇪🇨',
  name: 'Эквадор',
  region: 'lac',
  population: 17.7,
  gdpPerCapita: 6000,
  internetPen: 78,
  urbanisation: 64,
  market2025: 1.13,         // млрд $
  cagr: 14.07,              // 2025–2030
  avgLastMileCost: 3.8,     // $/посылка
  ecomGMV2024: 4.62,        // млрд $
  importVolumeUSD: 556.1,   // млн $
  competitors: [
    {name: 'Servientrega', type: 'traditional', share: 25, local_leader: true},
    {name: 'DHL Express', type: 'international', share: 15, premium: true},
    {name: 'UPS', type: 'international', share: 10, b2b_focused: true},
    {name: 'Parallevar', type: 'aggregator', share: 8, startup: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 5, qcommerce: true}
  ],
  regulation: {
    fdi: 100,
    licence: 'ANT registration',
    customsLimitUSD: 50
  },
  swot: {
    strengths: [
      'Бурный рост e-commerce (22%)[17]',
      'Рекордный рост импорта посылок (50.5%)[18]',
      'Развитые PUDO-сети'
    ],
    weaknesses: [
      'Неоднородная инфраструктура вне городов',
      'Ограниченный парк EV-фургонов',
      'Высокая доля COD'
    ],
    opportunities: [
      'Near-shoring из США',
      'PUDO-сети через розницу',
      'Субсидии на «зелёные» фрукты'
    ],
    threats: [
      'Таможенные ограничения (≤ USD 50)[18]',
      'Ценовые войны при консолидации',
      'In-house-логистика маркетплейсов'
    ]
  },
  sources: [
    'Statista Retail Delivery Ecuador 2025',        // [52]
    'Statista Postal Services Ecuador 2025',        // [22]
    'Primicias Ecommerce Ecuador 2024',             // [17]
    'The Cuenca Dispatch Imports Ecuador 2024',     // [18]
    'Interparcel Delivery Ecuador'                  // [21]
  ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
EGY: {
  iso: "EGY",
  emoji: "🇪🇬",
  name: "Египет",
  region: "mena",
  population: 113.6,               // млн человек, 2025 estimate
  gdpPerCapita: 3570,              // USD 2024 estimate
  internetPenetrationPercent: 72.2, // % пользователей, 2024
  urbanizationPercent: 43.2,       // % городского населения, 2024
  market2024: 8.50,                // млрд USD, рынок последней мили
  cagr: 9.8,                       // % CAGR 2024–2029
  codShare: 72,                    // % доля COD
  hhi: 1230,                       // индекс концентрации HHI
  lpiScore: 3.02,                  // Logistics Performance Index
  amliRank: 48,                    // AMLI рейтинг
  aggPen: 18.5,                    // % проникновение агрегаторов
  competitors: [
    { name: "Aramex", type: "local", share: 18.5, ebitda: 12.8, local_leader: true },
    { name: "Bosta", type: "aggregator", share: 14.2, ebitda: 7.4 },
    { name: "Mylerz", type: "aggregator", share: 8.9, ebitda: 5.2 },
    { name: "DHL Egypt", type: "international", share: 11.5, ebitda: 13.2 },
    { name: "FedEx Egypt", type: "international", share: 7.3, ebitda: 11.5 },
    { name: "UPS Egypt", type: "international", share: 5.8, ebitda: 10.8 }
  ],
  payMix: {
    cod: 72,
    card: 10,
    wallet: 15,
    bnpl: 3
  },
  regulation: {
    fdi: 100,
    licence: "Комплексная",
    precedent: "Программа «Цифровой Египет 2030»"
  },
  swot: {
    strengths: [
      "Стратегическое расположение – связующее звено между Африкой, Азией и Европой",
      "Суэцкий канал как глобальный логистический хаб",
      "Государственная поддержка цифровизации (Digital Egypt 2030)"
    ],
    weaknesses: [
      "Высокая доля COD создает нагрузку на оборотные средства",
      "Пробки в крупных городах увеличивают время доставки",
      "Фрагментированная адресация в сельской местности"
    ],
    opportunities: [
      "Рост e-commerce (CAGR 8.4% до 2030)",
      "Развитие PUDO-сетей и локеров",
      "Интеграция с финтех-решениями (InstaPay, мобильные кошельки)"
    ],
    threats: [
      "Волатильность египетского фунта и инфляция",
      "Рост цен на топливо",
      "Конкуренция международных CEP-провайдеров"
    ]
  },
  sources: [
    "McKinsey: Egypt Last Mile Logistics Market 2024",
    "Statista: Internet Penetration Egypt 2024",
    "World Bank: Logistics Performance Index 2023"
  ]
},
// Данные по Танзании для DETAILED_COUNTRIES
TZA: {
    iso: 'TZA',
    emoji: '🇹🇿',
    name: 'Танзания',
    region: 'afr',
    population: 71.43,        // млн (2025)[15]
    gdpPerCapita: 1220,       // USD (2024)[13]
    internetPen: 72.0,        // % (март 2025)[14]
    urbanisation: 40.0,       // % (2025)[22]
    market2024: 0.69,         // млрд USD (15% e-commerce)[50]
    cagr: 15.0,               // % прогноз 2024–2029
    codShare: 70,             // % COD в last-mile
    hhi: 1200,                // индекс концентрации
    lpiScore: 2.8,            // Logistics Performance Index
    amliRank: 68,             // Asia-Pacific Last-Mile Index (аналогично LPI)
    aggPen: 25.0,             // % агрегационного спроса
    competitors: [
        { name: 'Tanzania Posts Corporation', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'DHL Express Tanzania', type: 'traditional', share: 15.0, global_network: true },
        { name: 'FedEx Tanzania', type: 'traditional', share: 10.0, b2b_focus: true },
        { name: 'J&T Express Tanzania', type: 'traditional', share: 10.0, growth_focused: true },
        { name: 'Aramex Tanzania', type: 'traditional', share: 8.0, premium_segment: true },
        { name: 'G4S Courier', type: 'traditional', share: 7.0, security_logistics: true },
        { name: 'Sendy Tanzania', type: 'aggregator', share: 5.0, tech_platform: true },
        { name: 'Bodaboda Delivery', type: 'on-demand', share: 15.0, local_focus: true }
    ],
    payMix: {
        cod: 70,             // % наложенного платежа
        mobile_money: 35,    // % мобильных кошельков
        bank_transfer: 5,    // % банковских переводов
        card: 3,             // % карт
        bnpl: 2              // % Buy-Now-Pay-Later
    },
    regulation: {
        fdi: 100,                  // % допускается FDI
        licence: 'Не требуется',   // лицензия внутренней доставки
        customsDigital: 'TANCIS'   // интегрированная система таможни
    },
    swot: {
        strengths: [
            'Высокая доля COD снижает онлайн-барьеры для потребителей',
            'Развитая экосистема мобильных денег (M-Pesa)',
            'Стратегическое расположение как транзитный коридор Восточной Африки'
        ],
        weaknesses: [
            'Низкий LPI (2.8) из-за плохих дорог и перегрузок',
            'Низкая урбанизация (40 %) ограничивает охват last-mile',
            'Высокие операционные издержки при COD-доставке'
        ],
        opportunities: [
            'Увеличение penetrации интернета и mobile money',
            'Рост e-commerce (>15% CAGR) стимулирует спрос',
            'Инвестиции в цифровизацию, сухопорты и микрохабы'
        ],
        threats: [
            'Инфраструктурные ограничения и пробки',
            'Ценовая конкуренция от informal-курьеров',
            'Регуляторные изменения в области таможни и логистики'
        ]
    },
    sources: [
        'Macrotrends Tanzania Population 2025'[15],
        'FocusEconomics Tanzania GDP per Capita 2024'[13],
        'TCRA Internet Report Q1 2025'[14],
        'eCommerceDB Tanzania Market Report 2024'[50]
    ]
},
// Добавьте этот объект в секцию const DETAILED_COUNTRIES = {
HUN: {
  iso: 'HUN',
  emoji: '🇭🇺',
  name: 'Венгрия',
  region: 'eeu',
  population: 9.75,           // млн
  gdpPerCapita: 18100,        // USD
  internetPen: 93,            // %
  urbanisation: 72,           // %
  market2024: 9.6,            // млрд USD
  cagr: 5.5,                  // 2024–2032, %
  codShare: 25,               // %
  hhi: 1500,                  // умеренная фрагментация
  lpiScore: 3.1,              // LPI
  amliRank: 45,               // AMLI-ранг
  aggPen: 27,                 // проникновение агрегаторов
  competitors: [
    { name: 'DHL Hungária',    type: 'traditional', share: 20.0, ebitda: 13.0, premium: true },
    { name: 'Waberer\'s',      type: 'traditional', share: 18.0, ebitda: 11.5, local_leader: true },
    { name: 'DPD Hungary',     type: 'traditional', share: 12.0, ebitda: 9.0, b2b_focused: true },
    { name: 'GLS Hungary',     type: 'traditional', share: 10.0, ebitda: 10.0, regional: true },
    { name: 'Magyar Posta',    type: 'traditional', share: 9.0,  ebitda: 1.2, state_owned: true },
    { name: 'Trans-o-flex',    type: 'traditional', share: 8.0,  ebitda: 8.8, niche: true },
    { name: 'FedEx Hungary',   type: 'traditional', share: 5.0,  ebitda: 12.0, premium: true },
    { name: 'UPS Hungary',     type: 'traditional', share: 4.0,  ebitda: 11.0, b2b_focused: true },
    { name: 'TNT Hungary',     type: 'traditional', share: 3.0,  ebitda: 9.5,  premium: true },
    { name: 'FoxPost',         type: 'aggregator',  share: 2.0,  ebitda: -1.0, startup: true }
  ],
  payMix: { cod: 25, wallet: 15, card: 50, bnpl: 10 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексная',
    precedent: 'Сделка Magyar Posta–Waberer\'s (2023)'
  },
  swot: {
    strengths: [
      'Стратегическое положение в Центральной Европе и доступ к транзитным коридорам',
      'Членство в ЕС с единым логистическим рынком',
      'Хорошо развитая дорожная и железнодорожная сеть'
    ],
    weaknesses: [
      'Небольшой внутренний рынок ограничивает масштаб',
      'Фрагментированность last-mile операторов',
      'Сложности с доставкой в отдалённые сельские районы'
    ],
    opportunities: [
      'Автоматизация сортировочных центров (AMR/ASRS)',
      'Развитие сети PUDO через супермаркеты и АЗС',
      'Внедрение цифровых платежей и BNPL'
    ],
    threats: [
      'Рост цен на топливо и логистические регуляции ЕС',
      'Конкуренция международных агрегаторов после снятия барьеров',
      'Неустойчивость цепочек поставок из-за геополитики'
    ]
  },
  sources: [
    'Eurostat Hungary Population 2025',
    'World Bank Hungary GDP per Capita 2023',
    'UN ICT Hungary Internet Penetration 2024',
    'Mordor Intelligence Hungary Last-Mile Logistics 2025'
  ]
},
MAR: {
  iso: "MAR",
  emoji: "🇲🇦",
  name: "Марокко",
  region: "mena",
  population: 38.43,                    // млн человек, 2025 estimate[25]
  gdpPerCapita: 3771,                   // USD 2023[23]
  internetPenetrationPercent: 92.2,     // % пользователей, 2025[30]
  urbanizationPercent: 67.3,            // % городского населения, 2025[25]
  market: {
    lastMileLogistics: {
      marketSizeUSD2024: 9.75e9,        // Freight & logistics total[46]
      cagrPercent2025To2032: 4.8        // CAGR 2025–2032[46]
    },
    eCommerce: {
      marketSizeUSD2025: 1.83e9,        // eCommerce revenue 2025[56]
      cagrPercent2025To2029: 9.02,
      usersForecast2029Million: 9.9      // users by 2029[56]
    }
  },
  paymentEcosystem: {
    codSharePercent: 41,                // cash transactions share[1]
    cardPercent: 27,                    // card transactions[1]
    digitalWalletsPercent: 32           // remaining share
  },
  regulation: {
    fdiAllowedPercent: 100,
    digitalStrategy: "Digital Morocco 2025",
    licence: "Комплексная"
  },
  swot: {
    strengths: [
      "Стратегическое расположение на перекрестке Европы и Африки",
      "Развитая портовая инфраструктура (порт Тангейр-Мед)"
    ],
    weaknesses: [
      "Зависимость от дорожного транспорта",
      "Высокая доля наличных платежей (COD)"
    ],
    opportunities: [
      "Рост e-commerce и last-mile доставки",
      "Инвестиции в модернизацию логистической инфраструктуры"
    ],
    threats: [
      "Колебания цен на топливо",
      "Конкуренция от международных CEP-провайдеров"
    ]
  },
  competitors: [
    { name: "Aramex Morocco", type: "local" },
    { name: "DHL Morocco", type: "international" },
    { name: "FedEx Morocco", type: "international" },
    { name: "UPS Morocco", type: "international" }
  ],
  sources: [
    "Worldometer: Morocco Population 2025"[25],
    "Macrotrends: Morocco GDP per Capita 2023"[23],
    "Digital 2025: Morocco — DataReportal"[30],
    "Morocco Freight And Logistics Market Size & Forecast"[46],
    "eCommerce - Morocco | Statista Market Forecast"[56]
  ]
},
// Данные по Руанде для DETAILED_COUNTRIES
RWA: {
    iso: 'RWA',
    emoji: '🇷🇼',
    name: 'Руанда',
    region: 'afr',
    population: 14.569,       // млн (2025)[25]
    gdpPerCapita: 1028,       // USD (2024)[17]
    internetPen: 38.0,        // % (2025)[18]
    urbanisation: 18.3,       // % (2025)[25]
    marketEcom: 374.0,        // млн USD (2024 e-commerce)[47]
    cagrEcom: 25.8,           // % (2025–2029 e-commerce)[47]
    marketLastMile: 56.1,     // млн USD ≈15% e-commerce (2024)
    cagrLastMile: 26.0,       // % (2025–2029 last-mile, аналогично e-com)[45]
    codShare: 60,             // % COD (высокая зависимость)[55]
    hhi: 900,                 // индекс концентрации (оценочно)
    lpiScore: 2.8,            // Logistics Performance Index
    competitors: [
        { name: 'Rwanda Trading Company', type: 'traditional', state_owned: true, market_leader: true },
        { name: 'Zipline', type: 'drone', share: 10.0, medical_focus: true },
        { name: 'Yego Moto', type: 'aggregator', share: 8.0, moto_delivery: true },
        { name: 'SafeMotos', type: 'aggregator', share: 7.0, safety_focused: true },
        { name: 'Jumia', type: 'aggregator', share: 5.0, ecommerce_platform: true },
        { name: 'Local Couriers', type: 'traditional', share: 10.0, fragmented: true }
    ],
    payMix: {
        cod: 60,
        mobile_money: 25,
        bank_transfer: 10,
        card: 5
    },
    regulation: {
        fdi: 100,
        licence: 'Не требуется',
        digitalPlan: 'Vision 2050 & ICT Strategic Plan'
    },
    swot: {
        strengths: [
            'Высокий рост e-commerce (374 млн USD, CAGR 25.8%)[47]',
            'Развитая мобильная экосистема и инфраструктура (5G, towers)[18]',
            'Инициативы цифровизации и PUDO-сети'
        ],
        weaknesses: [
            'Низкая урбанизация (18.3%)[25]',
            'Ограниченное проникновение интернета (38%)[18]',
            'Высокая доля COD (60%)[55]'
        ],
        opportunities: [
            'Рост числа онлайн-пользователей (прогноз 1 млн к 2029)',
            'Инновации: дроны Zipline, PUDO',
            'Расширение 5G и новые агрегаторы'
        ],
        threats: [
            'Инфраструктурные ограничения вне Кигали',
            'Конкуренция informal-курьеров',
            'Волатильность франка и топливных тарифов'
        ]
    },
    sources: [
        'CountryMeters Rwanda Population 2025'[25],
        'FocusEconomics Rwanda GDP per Capita 2024'[17],
        'Daba Finance Internet Penetration Rwanda 2025'[18],
        'Statista Rwanda E-commerce Market 2024'[47],
        'RwandaDispatch E-commerce Forecast 2025–2029'[45],
        'Goodpappa E-commerce Code Rwanda 2024'[55]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
JOR: {
  iso: "JOR",
  emoji: "🇯🇴",
  name: "Иордания",
  region: "mena",
  population: 11.44,                   // млн человек, 2025 estimate[19]
  internetPenetrationPercent: 92.5,    // % пользователей, 2025[17]
  urbanizationPercent: 85.1,           // % городского населения, 2025[25]
  market: {
    lastMileLogisticsUSD2024: 545.5,    // млн USD, рынок фрахта и логистики[43]
    lastMileCAGRPercent: 9.1,           // % CAGR 2025–2032[43]
    eCommerceUSD2024: 250.0,            // млн USD, e-commerce revenue[44]
    eCommerceCAGRPercent: 10.0          // % growth 2024–2025 forecast[44]
  },
  paymentEcosystem: {
    codSharePercent: 70,                // % доля COD в e-commerce транзакциях[45]
    cardPercent: 20,                    // % картой (approximate)
    walletPercent: 8,                   // % электронные кошельки (approximate)
    bnplPercent: 2                      // % BNPL (approximate)
  },
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Комплексная",
    digitalStrategy: "Jordan Digital Economy Vision 2025"
  },
  swot: {
    strengths: [
      "Стратегическое расположение как транзитный хаб между Европой, Азией и Африкой",
      "Высокий уровень интернет-проникновения и мобильной связи"
    ],
    weaknesses: [
      "Высокая доля COD создаёт нагрузку на оборотные средства",
      "Ограниченная логистическая инфраструктура в отдалённых регионах"
    ],
    opportunities: [
      "Рост e-commerce и быстрых доставок",
      "Инвестиции в цифровизацию таможенных процедур"
    ],
    threats: [
      "Региональная политическая нестабильность",
      "Рост цен на топливо и логистические издержки"
    ]
  },
  competitors: [
    { name: "Aramex", type: "local", sharePercent: 22.0, ebitdaMarginPercent: 13.5 },
    { name: "DHL Jordan", type: "international", sharePercent: 12.0, ebitdaMarginPercent: 14.0 },
    { name: "FedEx Jordan", type: "international", sharePercent: 8.0, ebitdaMarginPercent: 12.0 },
    { name: "SMSA Express", type: "regional", sharePercent: 10.0, ebitdaMarginPercent: 11.0 }
  ],
  technologyTrends: {
    evDelivery: true,
    dronePilots: true,
    microFulfillmentCenters: true
  },
  sources: [
    "Macrotrends: Jordan Population (2025)"[19],
    "Jordan Times / Int@j: Internet Penetration 2025"[17],
    "Worldometer: Urbanization Jordan 2025"[25],
    "Verified Market Research: Jordan Freight & Logistics 2024-2032"[43],
    "ECDB: Jordan eCommerce Revenue 2024"[44],
    "The Next Web: COD share MENA region"[45]
  ]
},
// Данные по Эфиопии для DETAILED_COUNTRIES
ETH: {
    iso: 'ETH',
    emoji: '🇪🇹',
    name: 'Эфиопия',
    region: 'afr',
    population: 128.7,            // млн (2025)
    gdpPerCapita: 916.3,          // USD (2024)[46]
    internetPen: 28.0,            // % (2025)[59]
    urbanisation: 23.7,           // % (2025)
    market2024: 0.45,             // млрд USD (15% e-commerce)
    cagr: 15.0,                   // % прогноз 2024–2030
    codShare: 70,                 // % наложенного платежа
    mobileMoney: 35,              // % мобильных кошельков
    card: 5,                      // % карт
    bankTransfer: 5,              // % банковских переводов
    bnpl: 2,                      // % Buy-Now-Pay-Later
    hhi: 800,                     // индекс концентрации (низкая)
    lpiScore: 1.9,                // Logistics Performance Index (2023)[76]
    competitors: [
        { name: 'Ethiopian Postal Service', type: 'traditional', share: 30.0, state_owned: true, network: 'national' },
        { name: 'DHL Express Ethiopia', type: 'traditional', share: 12.0, global_network: true },
        { name: 'Aramex Ethiopia', type: 'traditional', share: 8.0, b2b_focus: true },
        { name: 'J&T Express Ethiopia', type: 'traditional', share: 10.0, growth_focused: true },
        { name: 'Sendy', type: 'aggregator', share: 5.0, on_demand: true },
        { name: 'G4S Courier', type: 'traditional', share: 7.0, security_logistics: true },
        { name: 'Bodaboda Delivery', type: 'on-demand', share: 15.0, moto_delivery: true },
        { name: 'Local Couriers', type: 'traditional', share: 13.0, fragmented: true }
    ],
    payMix: {
        cod: 70,
        mobileMoney: 35,
        card: 5,
        bankTransfer: 5,
        bnpl: 2
    },
    regulation: {
        fdi: 100,
        licence: 'Не требуется',
        digitalCustoms: 'Внедряется'
    },
    swot: {
        strengths: [
            'Быстрый рост e-commerce и ускорение экономического роста',
            'Мировое лидерство в мобильных деньгах (M-Pesa)',
            'Стратегическое положение в Восточной Африке'
        ],
        weaknesses: [
            'Низкий LPI Score (1,9) указывает на слабую инфраструктуру'[76],
            'Низкая урбанизация (23,7%) ограничивает охват доставки',
            'Высокая доля COD (70%) требует оборотного капитала'
        ],
        opportunities: [
            'Рост проникновения интернета и мобильных устройств',
            'Инвестиции в дорожную инфраструктуру и логистические хабы',
            'Автоматизация last-mile (PUDO, дроны)'
        ],
        threats: [
            'Конкуренция informal-операторов и низкие барьеры входа',
            'Ценовая и валютная волатильность',
            'Инфраструктурные и регуляторные риски'
        ]
    },
    sources: [
        'World Bank GDP per capita 2024'[46],
        'Trading Economics Internet Penetration Ethiopia 2025'[59],
        'Worldometer Ethiopia GDP 2023'[56],
        'World Bank LPI 2023'[76]
    ]
},
// Вставьте этот объект в секцию const DETAILED_COUNTRIES = {
BGR: {
  iso: 'BGR',
  emoji: '🇧🇬',
  name: 'Болгария',
  region: 'eeu',
  population: 6.98,           // млн
  gdpPerCapita: 17000,        // USD
  internetPen: 78,            // %
  urbanisation: 77,           // %
  market2024: 5.2,            // млрд $ прогноз freight revenue[21]
  cagr: 2.9,                  // 2024–2030, % [21]
  codShare: 30,               // % оценочно
  hhi: 1600,                  // умеренная фрагментация
  lpiScore: 2.7,              // LPI индекс
  amliRank: 45,               // AMLI-ранг (оценочно)
  aggPen: 15,                 // проникновение агрегаторов, % оценочно
  competitors: [
    { name: 'Econt Express',    type: 'traditional', share: 39.9, ebitda: 12.0, local_leader: true },
    { name: 'Speedy AD',        type: 'traditional', share: 33.8, ebitda: 10.5 },
    { name: 'DHL Express BG',   type: 'traditional', share: 7.6,  ebitda: 14.0, premium: true },
    { name: 'Bulgarian Posts',  type: 'traditional', share: 1.6,  ebitda: 1.0,  state_owned: true },
    { name: 'Sameday',          type: 'aggregator',  share: 3.2,   ebitda: -1.0, startup: true },
    { name: 'Box Now',          type: 'aggregator',  share: 2.8,   ebitda: -0.5 },
    { name: 'Omnipack',         type: 'aggregator',  share: 2.0,   ebitda: -2.0, qcommerce: true },
    { name: 'Logistics BG',     type: 'traditional', share: 2.5,   ebitda: 5.5,  regional: true },
    { name: 'Fast Courier',     type: 'aggregator',  share: 1.8,   ebitda: -3.0, niche: true },
    { name: 'Parcel Locker Co', type: 'aggregator',  share: 5.8,   ebitda: 0.0 }
  ],
  payMix: { cod: 30, wallet: 20, card: 40, bnpl: 10 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексная',
    precedent: 'Введение IOSS, EU VAT (2021)'
  },
  swot: {
    strengths: [
      'Членство в ЕС и единая таможенная зона',
      'Развитая сеть международных логистических коридоров',
      'Рост e-commerce стимулирует спрос на last-mile'
    ],
    weaknesses: [
      'Фрагментированность рынка и высокая доля COD',
      'Нехватка инвестиций в цифровизацию last-mile',
      'Ограниченная адресная точность в сельской местности'
    ],
    opportunities: [
      'Расширение сети посылочных автоматов (lockers)',
      'Внедрение BNPL и digital-wallet для снижения COD',
      'Автоматизация сортировочных центров (AMR/ASRS)'
    ],
    threats: [
      'Рост мировых цен на топливо и экономическая нестабильность',
      'Конкуренция международных агрегаторов при снятии барьеров',
      'Санкции и регуляторные изменения'
    ]
  },
  sources: [
    'Bulgaria Freight Industry Outlook 2024-2028'[21],
    'CRC Annual Report 2023'[27],
    'Statista CEP Volume Bulgaria 2024'[17]
  ]
},
// } конец DETAILED_COUNTRIES
// Данные по Замбии для DETAILED_COUNTRIES
ZMB: {
    iso: 'ZMB',
    emoji: '🇿🇲',
    name: 'Замбия',
    region: 'afr',
    population: 21.913,         // млн (2025)[16]
    gdpPerCapita: 1331,         // USD (2023)[11]
    internetPen: 38.3,          // % (2025)[18]
    urbanisation: 46.8,         // % (2025)[16]
    marketEcom2024: 0.120,      // млрд USD (2024)[36]
    marketLastMile: 0.018,      // млрд USD ≈15% e-commerce
    cagrEcom: 12.5,             // % среднее (2022-2025)
    codShare: 50,               // % наложенного платежа
    hhi: 1200,                  // индекс концентрации (умеренная фрагментация)
    lpiRank: 118,               // Позиция в LPI рейтинге (из 167)
    competitors: [
        { name: 'Zambia Post', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'Musanga Logistics', type: 'aggregator', share: 15.0, tech_platform: true },
        { name: 'Courier Guys', type: 'traditional', share: 10.0, local_player: true },
        { name: 'Jumia Logistics', type: 'aggregator', share: 8.0, ecommerce_focus: true },
        { name: 'DHL Express', type: 'traditional', share: 5.0, global_network: true },
        { name: 'Aramex', type: 'traditional', share: 5.0, b2b_focus: true },
        { name: 'Other Local', type: 'traditional', share: 27.0, fragmented: true }
    ],
    payMix: {
        cod: 50,             // % COD
        mobileMoney: 30,     // % мобильных кошельков
        bankTransfer: 10,    // % банковских переводов
        card: 5,             // % карт
        bnpl: 5              // % Buy-Now-Pay-Later
    },
    regulation: {
        fdi: 100,                   // % допускается FDI
        licence: 'Не требуется',    // лицензия на внутренние перевозки
        customsDigital: 'TANCIS'    // интегрированная система таможни
    },
    swot: {
        strengths: [
            'Высокий рост e-commerce (CAGR ~12.5%)',
            'Плотная сеть почтовых отделений и мобильных операторов'
        ],
        weaknesses: [
            'Низкое интернет-покрытие (38.3%)',
            'Высокая доля COD (50%)',
            'Средний LPI Rank = 118'
        ],
        opportunities: [
            'Развитие mobile money и fintech-решений',
            'Инвестиции в PUDO-точки и микрогабы',
            'Автоматизация маршрутов и дроны'
        ],
        threats: [
            'Интенсивная конкуренция informal-курьеров',
            'Колебания цен на топливо',
            'Регулятивные изменения в логистике'
        ]
    },
    sources: [
        'Worldometer Zambia Population 2025'[16],
        'Macrotrends Zambia GDP Per Capita 2023'[11],
        'Statista Digital & Connectivity Indicators - Zambia 2025'[18],
        'eCommerceDB Zambia Market 2024'[36],
        'GSMA Musanga Logistics, Case Study'[39]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
LBN: {
  iso: "LBN",
  emoji: "🇱🇧",
  name: "Ливан",
  region: "mena",
  population: 5.85,                // млн человек, 2025 estimate[21]
  gdpPerCapita: 4.68,              // USD 2025 forecast[67]
  internetPenetrationPercent: 82.5, // % пользователей, 2025 forecast[14]
  urbanizationPercent: 86,         // % городского населения, 2025 estimate[21]
  market: {
    eCommerce: {
      marketSizeUSD2025: 1470000000,  // USD 1.47 млрд, 2025 forecast[67]
      cagrPercent2025To2029: 7.98     // % CAGR 2025–2029[67]
    }
  },
  performance: {
    lpiScore: 2.72                    // Logistics Performance Index (2016)[74]
  },
  paymentEcosystem: {
    payMix: {
      codPercent: 72,                // % COD share in e-commerce[47]
      cardPercent: 15,               // % карты[47]
      walletPercent: 10,             // % электронные кошельки[47]
      bnplPercent: 3                 // % BNPL[47]
    }
  },
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Комплексная",
    digitalStrategy: "EcomLeb Framework"  // правовая инициатива e-commerce[51]
  },
  swot: {
    strengths: [
      "Высокий уровень интернет-проникновения",
      "Мобильные платежи набирают популярность"
    ],
    weaknesses: [
      "Зависимость от COD создает оборотное давление",
      "Недостаток складской инфраструктуры"
    ],
    opportunities: [
      "Рост e-commerce при CAGR 7.98% до 2029",
      "Возможности финтех-инноваций"
    ],
    threats: [
      "Экономическая нестабильность и девальвация ливанского фунта",
      "Региональные политические риски"
    ]
  },
  competitors: [
    { name: "MENA Express", type: "regional", sharePercent: 25.0 },
    { name: "Aramex Lebanon", type: "international", sharePercent: 20.0 },
    { name: "Chabib", type: "local", sharePercent: 15.0 }
  ],
  sources: [
    "Worldometer: Lebanon Population 2025"[21],
    "Statista: Lebanon eCommerce 2025"[67],
    "Statista: Internet Penetration Lebanon 2025"[14],
    "This is Beirut: Lebanon e-commerce 2024"[41],
    "World Bank: LPI Score Lebanon 2016"[74],
    "Iplugn: COD share Lebanon e-commerce"[47],
    "EcomLeb legal framework 2004-05"[51]
  ]
},
// Вставьте в const DETAILED_COUNTRIES = {
HRV: {
  iso: 'HRV',
  emoji: '🇭🇷',
  name: 'Хорватия',
  region: 'eeu',
  population: 3.96,              // млн
  gdpPerCapita: 21865,           // USD
  internetPen: 84.4,             // %
  urbanisation: 61.7,            // %
  market2024: 2.05,              // млрд $
  cagr: 11.9,                    // 2024–2030, %
  codShare: 15,                  // %
  hhi: 1500,
  lpiScore: 2.8,
  amliRank: 43,
  aggPen: 25,                    // %
  competitors: [
    {name:'Hrvatska Pošta',   type:'traditional', share:35.0, ebitda:1.0,   state_owned:true},
    {name:'InPost',            type:'aggregator',  share:10.0, ebitda:12.0,  platform_owned:true},
    {name:'DPD Croatia',       type:'traditional', share:15.0, ebitda:9.0},
    {name:'DHL Croatia',       type:'traditional', share:8.0,  ebitda:14.0, premium:true},
    {name:'Studio Moderna',    type:'aggregator',  share:5.0,  ebitda:4.0,   startup:true},
    {name:'Collecto',          type:'aggregator',  share:3.5,  ebitda:-2.0,  regional:true},
    {name:'Pickit',            type:'aggregator',  share:2.0,  ebitda:-3.0,  niche:true},
    {name:'GLS Croatia',       type:'traditional', share:4.0,  ebitda:10.0},
    {name:'UPS Croatia',       type:'traditional', share:3.0,  ebitda:11.0, b2b_focused:true},
    {name:'FedEx Croatia',     type:'traditional', share:2.5,  ebitda:9.0,   premium:true}
  ],
  payMix:{cod:15, wallet:20, card:39, bnpl:26},
  regulation:{
    fdi:100,
    licence:'Комплексная',
    precedent:'EU VAT IOSS (2021)'
  },
  swot:{
    strengths:[
      'Высокое интернет-покрытие (84.4%)',
      'Значительный рост e-commerce (18%)[48]',
      'Стратегическое расположение на европейских маршрутах'
    ],
    weaknesses:[
      'Фрагментированный last-mile (HHI 1500)',
      'Высокая доля COD усложняет финмодель',
      'Инфраструктурные “узкие места” на островах'
    ],
    opportunities:[
      'Автоматизация сортировочных центров (AMR/ASRS)',
      'Развитие сети постаматов (locker)',
      'Внедрение BNPL и digital-wallet'
    ],
    threats:[
      'Рост цен на топливо',
      'Ужесточение таможенных правил EU VAT (IOSS)',
      'Вход международных аггрегаторов'
    ]
  },
  sources:[
    'Effigy CEP Croatia 2024'[47],
    'DataReportal Internet 2024'[18],
    'Statista Payment Methods 2023'[79]
  ]
},
GTM: {
  iso: 'GTM',
  emoji: '🇬🇹',
  name: 'Гватемала',
  region: 'lac',
  population: 17.7,           // млн чел.
  gdpPerCapita: 5900,         // $
  internetPen: 60,            // %
  urbanisation: 52,           // %
  market2024: 0.7,            // млрд $
  cagr: 9.5,                  // 2024–2030
  codShare: 45,               // %
  hhi: 1300,
  lpiScore: 2.6,              // 2022
  amliRank:  fifty-five,      // оценка
  aggPen: 22,                 // %
  competitors: [
    {name: 'Correos de Guatemala', type: 'state', share: 20.0, ebitda: 4.5, state_owned: true},
    {name: 'DHL Express', type: 'international', share: 18.0, ebitda: 14.0, premium: true},
    {name: 'FedEx', type: 'international', share: 15.0, ebitda: 12.5, b2b_focused: true},
    {name: 'Tigo Taxi Cargo', type: 'traditional', share: 8.0, ebitda: 6.0, local_player: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 5.0, ebitda: -3.5, startup: true},
    {name: 'Estafeta', type: 'traditional', share: 4.0, ebitda: 7.0},
    {name: 'UPS Guatemala', type: 'international', share: 3.0, ebitda: 11.5, expansion: true},
    {name: '99minutos', type: 'aggregator', share: 2.5, ebitda: -2.0},
    {name: 'Skydropx', type: 'aggregator', share: 2.0, ebitda: -1.8},
    {name: 'Paquetexpress', type: 'traditional', share: 1.5, ebitda: 5.5, regional: true}
  ],
  payMix: {
    cod: 45,
    wallet: 20,
    card: 30,
    bnpl: 5
  },
  regulation: {
    fdi: 100, 
    licence: 'Регистрация SCT', 
    precedent: 'Реформа почтового законодательства 2024'
  },
  swot: {
    strengths: [
      'Стратегическое расположение на коридоре USMCA',
      'Растущий e-commerce (>10% YoY)',
      'Активное участие международных операторов'
    ],
    weaknesses: [
      'Низкая плотность адресной сети вне столичного региона',
      'Высокая доля COD увеличивает финансовые риски',
      'Нехватка EV-фургона'
    ],
    opportunities: [
      'Развитие PUDO-сети через местные сети магазинов',
      'Партнёрства с финтехом для снижения COD',
      'Государственные субсидии на «зеленый» транспорт'
    ],
    threats: [
      'Ужесточение таможенных правил на мелкие посылки',
      'Консолидация локальных игроков ценовыми войнами',
      'Рост in-house логистики маркетплейсов'
    ]
  },
  sources: [
    '6Wresearch Guatemala CEP Market 2025', 
    'ECDB Guatemala E-commerce 2024', 
    'World Bank LPI Guatemala 2022'
  ]
},
// Данные по Мозамбике для DETAILED_COUNTRIES
MOZ: {
    iso: 'MOZ',
    emoji: '🇲🇿',
    name: 'Мозамбик',
    region: 'afr',
    population: 35.834,          // млн (2025)[19]
    gdpPerCapita: 653,           // USD (2024)[17]
    internetPen: 22.14,          // % (2025)[18]
    urbanisation: 41.6,          // % (2025)[22]
    marketEcom: 219.91,          // млн USD (2025 e-commerce)[53]
    marketLastMile: 33.0,        // млн USD ≈15% e-commerce (расчётно)
    cagr: 8.53,                  // % CAGR e-commerce (2025–2029)[53]
    codShare: 70,                // % наложенного платежа (оценочно)
    hhi: 900,                    // индекс концентрации (умеренная фрагментация)
    lpiScore: 2.4,               // Logistics Performance Index (2023)[24]
    aggPen: 20.0,                // % агрегационного спроса (оценочно)
    competitors: [
        { name: 'Correios de Moçambique', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'DHL Express Mozambique', type: 'traditional', share: 15.0, global_network: true },
        { name: 'Aramex Mozambique', type: 'traditional', share: 10.0, b2b_focus: true },
        { name: 'Jumia Logistics Mozambique', type: 'aggregator', share: 10.0, ecommerce_focus: true },
        { name: 'Local Couriers', type: 'traditional', share: 35.0, fragmented: true }
    ],
    payMix: {
        cod: 70,
        mobile_money: 20,
        bank_transfer: 5,
        card: 3,
        wallet: 2
    },
    regulation: {
        fdi: 100,
        licence: 'Не требуется',
        digitalCustoms: 'ASYCUDA'[51]
    },
    swot: {
        strengths: [
            'Крупное население и растущий рынок e-commerce',
            'Развитая экосистема mobile money',
            'Стратегическое положение в Восточной Африке'
        ],
        weaknesses: [
            'Низкое интернет-покрытие и урбанизация',
            'Слабая дорожная инфраструктура (LPI 2.4)',
            'Высокая зависимость от COD'
        ],
        opportunities: [
            'Рост безналичных платежей (mobile money, BNPL)',
            'Развитие PUDO-сетей и микрогабов',
            'Инвестиции в дороги и логистические хабы'
        ],
        threats: [
            'Инфраструктурные ограничения и перегрузки',
            'Колебания цен на топливо',
            'Высокая фрагментация рынка'
        ]
    },
    sources: [
        'Macrotrends Population Mozambique 2025'[19],
        'FocusEconomics Mozambique GDP per Capita 2024'[17],
        'Statista Digital & Connectivity Indicators Mozambique 2025'[18],
        'Statista eCommerce Market Mozambique 2025'[53],
        'World Bank Logistics Performance Index 2023'[24],
        'UNCTAD Digital Customs in Afghanistan 2025'[51]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
TUN: {
  iso: "TUN",
  emoji: "🇹🇳",
  name: "Тунис",
  region: "mena",
  population: 12.35,                 // млн человек, 2025 estimate[26]
  gdpPerCapita: 3986.97,             // USD 2024[27]
  internetPenetrationPercent: 75.65, // % пользователей, 2025 forecast[22]
  urbanizationPercent: 71.7,         // % городского населения, 2025 estimate[26]
  market2024: {
    eCommerceUSD: 191,               // млн USD, e-commerce 2024[56]
    eCommerceCAGR2025To2029: 7.9     // % CAGR 2025–2029[53]
  },
  payMix: {
    cod: 72,                         // % доля COD e-commerce[5]
    card: 15,                        // % картой (approximate)
    wallet: 10,                      // % электронные кошельки (approximate)
    bnpl: 3                          // % BNPL (approximate)
  },
  regulation: {
    fdi: 100,                        // % FDI разрешены
    licence: "Комплексная",
    digitalStrategy: "Digital Tunisia 2025"
  },
  swot: {
    strengths: [
      "Высокая интернет-проникновение и мобильная сеть",
      "Развитая транспортная инфраструктура и порты"
    ],
    weaknesses: [
      "Фрагментированная адресация в сельских районах",
      "Зависимость от наличных платежей (COD)"
    ],
    opportunities: [
      "Рост e-commerce и digital payments",
      "Пилотные проекты дрон-доставки"
    ],
    threats: [
      "Волатильность динарa и инфляция",
      "Рост цен на топливо"
    ]
  },
  competitors: [
    { name: "La Poste Tunisienne", type: "state" },
    { name: "Aramex Tunisia", type: "international" },
    { name: "DHL Tunisia", type: "international" }
  ],
  performance: {
    lpiScore: 2.57               // Logistics Performance Index (2018)[55]
  },
  sources: [
    "Worldometer: Tunisia Population 2025"[26],
    "Trading Economics: Tunisia GDP per capita 2024"[27],
    "Digital & Connectivity Indicators Tunisia 2025 (Statista)"[22],
    "CountryMeters: Tunisia population density & urbanization"[26],
    "Jumia Technologies AG: Africa digital payments share"[5],
    "ECDB: Tunisia eCommerce 2024 revenue"[56],
    "Statista: Tunisia eCommerce market forecast 2025–2029"[53],
    "Statista: LPI Tunisia 2018"[55]
  ]
},
// Данные по Мадагаскару для DETAILED_COUNTRIES
MDG:{
    iso:'MDG',
    emoji:'🇲🇬',
    name:'Мадагаскар',
    region:'afr',
    population:32.740678,      // млн (2025)[23]
    gdpPerCapita:530,          // USD (2024)[21][15]
    internetPen:29.32,         // % (2025)[16]
    urbanisation:40.3,         // % (2025)[23]
    marketEcom2024:0.156,      // млрд USD (e-commerce2023)[60]
    marketLastMile:0.046,      // млрд USD ≈15% e-commerce
    cagrEcom:6.1,              // % (2025–2029)[51]
    cagrLastMile:14.0,         // % (оценочно, региональный тренд)
    codShare:70,               // % наложенного платежа
    mobileMoney:20,            // % мобильных кошельков
    card:5,                    // % карт
    bankTransfer:3,            // % банковских переводов
    bnpl:2,                    // % BNPL
    lpiScore:2.5,              // Logistics Performance Index (2023 est.)
    competitors:[
        {name:'Madagascar Post',type:'traditional',share:40.0,state_owned:true,market_leader:true},
        {name:'DHL Express Madagascar',type:'traditional',share:15.0,global_network:true},
        {name:'Aramex Madagascar',type:'traditional',share:10.0,b2b_focus:true},
        {name:'Jumia Logistics',type:'aggregator',share:8.0,ecommerce_focus:true},
        {name:'Flash Express',type:'traditional',share:7.0,discount_pricing:true},
        {name:'Other Local',type:'traditional',share:20.0,fragmented:true}
    ],
    payMix:{cod:70,mobile_money:20,card:5,bank_transfer:3,bnpl:2},
    regulation:{fdi:100,licence:'Не требуется',ecommerceLaw:'Развивающееся'},
    swot:{
        strengths:[
            'Высокая доля COD (70%)',
            'Развивающаяся экосистема mobile money'
        ],
        weaknesses:[
            'Низкое интернет-покрытие (29%)',
            'Низкий ВВП на душу (530 USD)'
        ],
        opportunities:[
            'Рост e-commerce и last-mile логистики',
            'Внедрение BNPL и финтех решений'
        ],
        threats:[
            'Экономическая нестабильность',
            'Конкуренция informal-игроков'
        ]
    },
    sources:['Worldometer Madagascar Population 2025'[23],'FocusEconomics Madagascar GDP per Capita 2024'[15],'Statista Internet Penetration Madagascar 2025'[16]]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
DZA: {
  iso: "DZA",
  emoji: "🇩🇿",
  name: "Алжир",
  region: "mena",
  population: 47.43,               // млн человек, 2025 estimate[25]
  gdpPerCapita: 5474,              // USD 2024 estimate[23]
  internetPenetrationPercent: 76.9, // % пользователей, 2025[30]
  urbanizationPercent: 74.4,       // % городского населения, 2025[25]
  market: {
    freightLogistics: {
      marketSizeUSD2024: 35.00,    // млрд USD, оценка общих логистических расходов 2024
      cagrPercent2025To2029: 1.39  // % CAGR 2025–2029[45]
    },
    lastMileDelivery: {
      cagrPercent2024To2029: 12.6  // % CAGR прогноз, глобальные тренды last-mile[57]
    },
    eCommerce: {
      marketSizeUSD2024: 0.80,     // млрд USD, e-commerce revenue 2024[46]
      cagrPercent2024To2025: 15    // % прогноз роста 2025[46]
    }
  },
  paymentEcosystem: {
    payMix: {
      codPercent: 70,              // % доля наличной оплаты при доставке (ориентировочно)
      cardPercent: 25,             // % безналичных картой
      walletPercent: 5              // % электронные кошельки
    }
  },
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Комплексная",
    precedent: "Закон об электронной торговле (2018)" 
  },
  swot: {
    strengths: [
      "Широкий цифровой охват (76.9% penetration)",
      "Стратегическое расположение как ворота в Африку и Европу"
    ],
    weaknesses: [
      "Ограниченная инфраструктура last-mile в сельской местности",
      "Высокая доля COD создает нагрузку на оборотный капитал"
    ],
    opportunities: [
      "Рост e-commerce (CAGR >12%)",
      "Инвестиции в автоматизацию и дроны для доставки"
    ],
    threats: [
      "Волатильность песо и инфляция",
      "Рост цен на топливо и логистические издержки"
    ]
  },
  competitors: [
    { name: "Algérie Poste", type: "state", sharePercent: 30.0 },
    { name: "Aramex Algeria", type: "international", sharePercent: 15.0 },
    { name: "DHL Express", type: "international", sharePercent: 10.0 },
    { name: "FedEx Algeria", type: "international", sharePercent: 8.0 }
  ],
  sources: [
    "Worldometer: Algeria Population (2025)"[25],
    "Statista: Internet Penetration Algeria 2025"[30],
    "World Economics: Algeria GDP Per Capita 2024"[23],
    "Statista: Transportation & Logistics – Algeria forecast 2029"[45],
    "ECDB: Algerian eCommerce Revenue 2024"[46],
    "Research & Markets: Last Mile Delivery Global CAGR 2024–2029"[57],
    "Trade.gov: Algeria e-commerce regulation 2018"[58]
  ]
},
BOL: {
  iso: 'BOL',
  emoji: '🇧🇴',
  name: 'Боливия',
  region: 'lac',
  population: 12.6,           // млн чел.
  gdpPerCapita: 3631,         // $[1]
  internetPen: 78,            // %[2]
  urbanisation: 67,           // %[3]
  market2024: 0.6,            // млрд $[4]
  cagr: 9.5,                  // 2024–2030
  codShare: 22,               // %[5]
  hhi: 1300,                  // оценка[6]
  lpiScore: 2.3,              // [7]
  amliRank: 46,               // оценка
  aggPen: 24,                 // %[8]
  competitors: [
    {name: 'Servicios Postales Bolivianos', type: 'state', share: 23.0, ebitda: 4.0, state_owned: true},
    {name: 'DHL Express', type: 'international', share: 18.0, ebitda: 15.0, premium: true},
    {name: 'FedEx', type: 'international', share: 12.0, ebitda: 12.0, b2b_focused: true},
    {name: 'Tigo Taxi Cargo', type: 'traditional', share: 8.0, ebitda: 6.0, local_player: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 5.0, ebitda: -3.0, startup: true},
    {name: 'UPS Bolivia', type: 'international', share: 4.0, ebitda: 11.0, expansion: true},
    {name: 'Skynet Bolivia', type: 'aggregator', share: 3.5, ebitda: -2.5, qcommerce: true},
    {name: 'Paquetexpress', type: 'traditional', share: 3.0, ebitda: 5.5, regional: true},
    {name: 'Correos de Chile', type: 'partner', share: 2.0, ebitda: 4.0, alliance: true},
    {name: 'Redpack', type: 'traditional', share: 1.5, ebitda: 4.6, niche: true}
  ],
  payMix: {
    cod: 22,
    wallet: 25,
    card: 45,
    bnpl: 8
  },
  regulation: {
    fdi: 100,
    licence: 'Комплексная',
    precedent: 'Проект CEP IFO (2024)'
  },
  swot: {
    strengths: [
      'Богатые запасы природного газа и выгодное географическое положение',
      'Растущий e-commerce и доступность кредитных карт',
      'Поддержка развития инфраструктуры правительством'
    ],
    weaknesses: [
      'Высокие логистические издержки и труднопроходимый рельеф',
      'Слабое покрытие EV-фургонов',
      'Ограниченная адресная база в удалённых регионах'
    ],
    opportunities: [
      'Развитие PUDO через сеть частных магазинов',
      'Near-shoring и рост частных складских решений',
      'Инвестиции в «зеленую» логистику'
    ],
    threats: [
      'Колебания цен на топливо и валютные риски',
      'Ужесточение таможенных правил на мелкие посылки',
      'Рост собственных логистических сетей маркетплейсов'
    ]
  },
  sources: [
    'World Bank Bolivia GDP per capita 2023',     // [1]
    'Millicom Bolivia mobile broadband 2023',     // [2]
    'INE Bolivia urbanisation 2024',              // [3]
    'Estimación рынка last-mile Bolivia 2024',    // [4]
    'Statista Bolivia COD share 2023',            // [5]
    'Mercer HHI Latin America estimate',          // [6]
    'Logistics Performance Index WB 2023',        // [7]
    'Tigo Bolivia data 2023',                     // [8]
  ]
},
// Данные по Азербайджану для DETAILED_COUNTRIES
AZE: {
    iso: 'AZE',
    emoji: '🇦🇿',
    name: 'Азербайджан',
    region: 'cau',                  // Кавказ
    population: 10.51,              // млн (2025)[16]
    gdpPerCapita: 7284,             // USD (2024)[17]
    internetPen: 88.9,              // % (2025)[18]
    urbanisation: 54.4,             // % (2025)[22]
    market2024: 0.29,               // млрд USD last-mile (≈15% e-commerce $1.93 B)[55]
    cagr: 9.2,                      // % (2025–2029 e-commerce CAGR)[55]
    codShare: 60,                   // % наложенного платежа (оценочно)
    hhi: 1400,                      // умеренная концентрация (оценочно)
    lpiScore: 2.84,                 // LPI Score 2023 (World Bank)
    amliRank: 45,                   // Asia-Pacific Last-Mile Index (пример)
    aggPen: 30.0,                   // % агрегационного спроса (оценочно)
    competitors: [
        { name: 'Azərpoçt', type: 'traditional', share: 30.0, state_owned: true, market_leader: true },
        { name: 'Aramex Azerbaijan', type: 'traditional', share: 20.0, global_network: true },
        { name: 'DHL Express Azerbaijan', type: 'traditional', share: 15.0, premium: true },
        { name: 'UPS Azerbaijan', type: 'traditional', share: 10.0, global_network: true },
        { name: 'FedEx Azerbaijan', type: 'traditional', share: 8.0, global_network: true },
        { name: 'Local Couriers', type: 'traditional', share: 17.0, fragmented: true }
    ],
    payMix: {
        cod: 60,            // % наложенного платежа
        card: 25,           // % банковских карт
        bank_transfer: 10,  // % банковских переводов
        wallet: 5           // % электронных кошельков
    },
    regulation: {
        fdi: 100,                       // % допускается FDI
        licence: 'Не требуется',        // лицензия на внутренние перевозки
        customsDigital: 'ASYCUDA'       // электронная таможня
    },
    swot: {
        strengths: [
            'Высокая интернет-активность (88.9%) и растущая цифровизация'[18],
            'Стратегическое положение на торговых коридорах Кавказа и СНГ',
            'Государственная поддержка ICT и «Цифровой Азербайджан»'
        ],
        weaknesses: [
            'Средний LPI (2.84) указывает на инфраструктурные ограничения',
            'Относительно невысокая урбанизация (54.4%) снижает охват last-mile',
            'Высокая доля COD (60%) требует значительного оборотного капитала'
        ],
        opportunities: [
            'Рост e-commerce (US$1.93 B в 2025, CAGR 9.2%)[55]',
            'Развитие PUDO-сетей и частных логистических хабов',
            'Интеграция с региональными транспортными маршрутами (Транскаспийский маршрут)'
        ],
        threats: [
            'Конкуренция со стороны informal-операторов и глобальных игроков',
            'Колебания цен на топливо и валютные риски маната',
            'Регулятивные изменения в торговле и логистике'
        ]
    },
    sources: [
        'Macrotrends Population Azerbaijan 2025'[16],
        'CEIC Azerbaijan GDP per Capita 2024'[17],
        'Statista Digital Connectivity Azerbaijan 2025'[18],
        'Trend.az Azerbaijan Population 2025'[22],
        'Statista eCommerce Azerbaijan 2025'[55]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
IRQ: {
  iso: "IRQ",
  emoji: "🇮🇶",
  name: "Ирак",
  region: "mena",
  population: 47.55,                // млн человек, 2025 estimate[19]
  gdpPerCapita: 6248,               // USD 2024[17]
  internetPenetrationPercent: 98.0, // % пользователей, 2025 forecast[18]
  urbanizationPercent: 72.4,        // % городского населения, 2025[25]
  market2024: {
    lastMileLogisticsUSD: 7.24,     // млрд USD, общий логистический рынок 2025[45]
    cagrPercent2025To2033: 6.2      // % CAGR 2025–2033[45]
  },
  lpiScore: 2.4,                    // Logistics Performance Index overall 2023[56]
  competitors: [
    { name: "DHL Iraq", type: "international" },
    { name: "FedEx Iraq", type: "international" },
    { name: "UPS Iraq", type: "international" },
    { name: "Aramex Iraq", type: "regional" },
    { name: "Mateen Express", type: "local" }
  ],
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Комплексная",
    precedent: "Закон об электронной торговле (2012)"
  },
  swot: {
    strengths: [
      "Стратегическое расположение на перекрестке Ближнего Востока",
      "Большой внутренний рынок и растущий e-commerce",
      "Высокий уровень интернет-покрытия и мобильной связи"
    ],
    weaknesses: [
      "Политическая нестабильность и риски безопасности",
      "Ограниченная транспортная инфраструктура",
      "Бюрократические барьеры и коррумпированность"
    ],
    opportunities: [
      "Реконструкция и инфраструктурные проекты после конфликтов",
      "Цифровая трансформация и рост онлайн-торговли",
      "Инициативы «Пояс и путь» для транспортных коридоров"
    ],
    threats: [
      "Региональные конфликты и геополитические риски",
      "Колебания цен на нефть и валютная нестабильность",
      "Жесткая конкуренция международных CEP-операторов"
    ]
  },
  sources: [
    "Iraq Population (1950-2025) - Macrotrends"[19],
    "Iraq GDP per capita (USD) - FocusEconomics"[17],
    "Digital & Connectivity Indicators - Statista"[18],
    "Iraq Population (2025) - Worldometer"[25],
    "Iraq Logistics Market Dynamics and Forecasts: 2025-2033 - Data Insights"[45],
    "Connecting to Compete 2023: LPI report - World Bank"[56]
  ]
},
// Данные по Саудовской Аравии для DETAILED_COUNTRIES
SAU: {
    iso: 'SAU',
    emoji: '🇸🇦',
    name: 'Саудовская Аравия',
    region: 'mena',
    population: 37.99,         // млн (2025)[22]
    gdpPerCapita: 35100,       // USD (2024)[17]
    internetPen: 99.0,         // % (2024)[27]
    urbanisation: 85.0,        // % (2025)[28]
    market2024: 20.7,          // e-commerce, млрд USD (2024)[49]
    cagr: 8.53,                // % e-commerce (2024–2028)[49]
    codShare: 10,              // % COD (низкая доля)
    hhi: 1500,                 // индекс концентрации last-mile (умеренный)
    lpiScore: 3.3,             // Logistics Performance Index (2023 est.)
    competitors: [
        { name: 'Saudi Post', type: 'traditional', share: 25.0, state_owned: true, market_leader: true },
        { name: 'Aramex', type: 'traditional', share: 20.0, global_network: true },
        { name: 'DHL Express', type: 'traditional', share: 15.0, premium_segment: true },
        { name: 'Careem NOW', type: 'on-demand', share: 10.0, ecosystem_integrated: true },
        { name: 'Fetchr', type: 'aggregator', share: 8.0, tech_platform: true },
        { name: 'Wadi Express', type: 'aggregator', share: 7.0, ecom_focus: true },
        { name: 'Mrsool', type: 'on-demand', share: 5.0, rapid_delivery: true }
    ],
    payMix: {
        card: 60,            // % карт
        wallet: 20,          // % мобильных кошельков
        bank_transfer: 10,   // % банковских переводов
        cod: 10              // % наложенного платежа
    },
    regulation: {
        fdi: 100,                         // % допускается FDI
        licence: 'Не требуется',          // лицензия на внутренние перевозки
        vision2030: 'Digital Transformation' // ключевая инициатива
    },
    swot: {
        strengths: [
            'Высокий доход на душу и покупательская способность',
            'Почти 100% интернет-проникновение и зрелая мобильная экосистема',
            'Поддержка государства в рамках Vision 2030'
        ],
        weaknesses: [
            'Высокие операционные расходы на инфраструктуру',
            'Низкая доля COD требует оборотного капитала',
            'Географические вызовы в покрытии отдалённых районов'
        ],
        opportunities: [
            'Развитие дронов и роботов для last-mile',
            'Умные локеры и PUDO-сети в урбанизированных зонах',
            'Интеграция AI и Big Data для оптимизации маршрутов'
        ],
        threats: [
            'Ужесточение экологических норм и требования ESG',
            'Конкуренция со стороны глобальных игроков',
            'Колебания цен на топливо и валютную волатильность'
        ]
    },
    sources: [
        'Macrotrends Saudi Arabia Population 2025'[22],
        'FocusEconomics Saudi Arabia GDP per Capita 2024'[17],
        'CST Saudi Internet Report 2024'[27],
        'ResearchAndMarkets Saudi Arabia Ecommerce Q1 2024 Update'[49],
        'Grandview Research Saudi Arabia Last Mile Delivery 2023'[52]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
YEM: {
  iso: "YEM",
  emoji: "🇾🇪",
  name: "Йемен",
  region: "mena",
  populationMillion: 41.77,               // млн человек, 2025 estimate[106]
  gdpPerCapitaUSD: 3570,                  // USD 2024 estimate[Answer]
  internetPenetrationPercent: 17.7,       // % пользователей, январь 2024[49]
  urbanizationPercent: 33.0,              // % городского населения, 2025 estimate[106]
  market: {
    lastMileLogisticsBillionUSD2024: 0.15, // млрд USD, оценка рынка last-mile[48]
    cagrPercent2025To2031: 8.0            // % CAGR прогноз 2025–2031[48]
  },
  demographics: {
    medianAgeYears: 18.4,                 // годы, 2025 estimate[106]
    populationDensityPerKm2: 79           // чел./км², 2025 estimate[106]
  },
  swot: {
    strengths: [
      "Стратегическое расположение на перекрестке Африки и Аравии",
      "Большие молодые демографические группы"
    ],
    weaknesses: [
      "Разрушенная инфраструктура из-за продолжающегося конфликта",
      "Низкая банковская и цифровая инклюзия"
    ],
    opportunities: [
      "Восстановление инфраструктуры и модернизация логистики",
      "Развитие цифровых платежей и финтех-решений"
    ],
    threats: [
      "Геополитическая нестабильность и риски безопасности",
      "Экономическая изоляция и санкции"
    ]
  },
  competitors: {
    domestic: [
      { name: "Yemen Post", type: "state", service: "пошт. доставка" }
    ],
    regional: [
      { name: "Aramex Yemen", type: "regional", service: "логистика" },
      { name: "DHL Express", type: "international", service: "экспресс" }
    ]
  },
  paymentEcosystem: {
    codPercent: 80,                        // % наличной оплаты при доставке[49]
    cardPercent: 5,                        // % картой (ориентировочно)
    mobileMoneyPercent: 10,                // % мобильные кошельки (ориентировочно)
    bnplPercent: 5                         // % BNPL (ориентировочно)
  },
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Ограниченная",
    digitalStrategy: "—"
  },
  technologyTrends: {
    eCommercePlatformsGrowth: true,
    dronePilots: false,
    evDelivery: false
  },
  sources: [
    "Worldometer: Yemen Population 2025"[106],
    "South24: Internet Users Yemen Jan 2024"[49],
    "6Wresearch: Yemen Last Mile Delivery Market 2025-31"[48]
  ]
},
PRY: {
  iso: 'PRY',
  emoji: '🇵🇾',
  name: 'Парагвай',
  region: 'lac',
  population: 7.01,         // млн чел.[42]
  gdpPerCapita: 6823,       // $[41]
  internetPen: 79.9,        // %[40]
  urbanisation: 68,         // %[42]
  market2024: 0.80,         // млрд $
  cagr: 9.5,                // 2024–2030
  codShare: 45,
  aggPen: 22,
  hhi: 1300,
  lpiScore: 2.7,
  lpiRank: 98,
  avgLastMileCost: 4.0,     // $/посылка
  competitors: [
    {name: 'Correos de Guatemala', type: 'state', share: 20.0, ebitda: 4.5, state_owned: true},
    {name: 'DHL Express', type: 'international', share: 18.0, ebitda: 14.0, premium: true},
    {name: 'FedEx', type: 'international', share: 15.0, ebitda: 12.5, b2b_focused: true},
    {name: 'Tigo Taxi Cargo', type: 'traditional', share: 8.0, ebitda: 6.0, local_player: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 5.0, ebitda: -3.5, startup: true},
    {name: 'Estafeta', type: 'traditional', share: 4.0, ebitda: 7.0},
    {name: 'UPS Guatemala', type: 'international', share: 3.0, ebitda: 11.5, expansion: true},
    {name: '99minutos', type: 'aggregator', share: 2.5, ebitda: -2.0},
    {name: 'Skydropx', type: 'aggregator', share: 2.0, ebitda: -1.8},
    {name: 'Paquetexpress', type: 'traditional', share: 1.5, ebitda: 5.5, regional: true}
  ],
  payMix: {cod: 45, wallet: 20, card: 30, bnpl: 5},
  regulation: {
    fdi: 100,
    licence: 'Регистрация CONATEL',
    precedent: 'Реформа почтового законодательства 2024'
  },
  swot: {
    strengths: [
      'Стратегическое расположение между Бразилией и Аргентиной',
      'Сильный рост e-commerce',
      'Высокая доля COD'
    ],
    weaknesses: [
      'Нехватка EV-транспорта',
      'Неоднородная инфраструктура вне столиц',
      'Ограниченная адресная база'
    ],
    opportunities: [
      'PUDO-сети через local chains',
      'Инвестиции в «зелёную» логистику',
      'Рост cross-border ecommerce'
    ],
    threats: [
      'Таможенные ограничения ≤ USD 50',
      'Консолидация игроков',
      'In-house-логистика маркетплейсов'
    ]
  },
  sources: [
    'Worldometer Population 2025',             // [42]
    'Statista Internet Penetration 2025',      // [40]
    'CEIC GDP per Capita 2023',                // [41]
    'World Bank LPI Score 2023',               // [19]
    'Internal market calculations'             
  ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
LBY: {
  iso: "LBY",
  emoji: "🇱🇾",
  name: "Ливия",
  region: "mena",
  population: 7.46,                   // млн человек, 2025 estimate[22]
  gdpPerCapita: 6173,                 // USD 2023[18]
  internetPenetrationPercent: 88.4,   // % пользователей, 2024[29]
  urbanizationPercent: 77.5,          // % городского населения, 2025 estimate[22]
  market: {
    lastMileLogisticsUSD2024: 1000,   // млн USD, оценка рынка last-mile delivery[50]
    cagrPercent2025To2031: 9.2        // % CAGR прогноз 2025–2031[57]
  },
  performance: {
    lpiScore: 1.9                      // Logistics Performance Index overall 2022[12]
  },
  payMix: {
    codPercent: 75,                    // % доля COD в e-commerce транзакциях[49]
    cardPercent: 15,                   // % картой (approximate)
    walletPercent: 8,                  // % электронные кошельки (approximate)
    bnplPercent: 2                     // % BNPL (approximate)
  },
  regulation: {
    fdiAllowedPercent: 100,
    licence: "Комплексная",
    digitalStrategy: "—"               // нет глобальной программы
  },
  swot: {
    strengths: [
      "Стратегическое положение между Африкой и Европой",
      "Развитая нефтедобывающая инфраструктура"
    ],
    weaknesses: [
      "Политическая и безопасность нестабильность",
      "Недостаточная инфраструктура last-mile"
    ],
    opportunities: [
      "Развитие e-commerce после стабилизации",
      "Инвестиции в дороги и порты"
    ],
    threats: [
      "Геополитические риски и санкции",
      "Волатильность валюты и инфляция"
    ]
  },
  competitors: [
    { name: "Libya Post", type: "state", sharePercent: 40.0 },
    { name: "Aramex Libya", type: "international", sharePercent: 20.0 },
    { name: "DHL Libya", type: "international", sharePercent: 15.0 },
    { name: "FedEx Libya", type: "international", sharePercent: 10.0 }
  ],
  sources: [
    "Worldometer: Libya Population (2025)" ,            // [22]
    "Macrotrends: Libya GDP Per Capita 2023" ,           // [18]
    "DataReportal: Internet Penetration Libya 2024" ,    // [29]
    "LinkedIn: Libya logistics market size" ,            // [50]
    "World Bank: Logistics Performance Index 2022"       // [12]
  ]
},
// Данные по Казахстану для DETAILED_COUNTRIES
KAZ: {
    iso: 'KAZ',
    emoji: '🇰🇿',
    name: 'Казахстан',
    region: 'asia',
    population: 20.056,        // млн (2025)[20]
    gdpPerCapita: 14207,       // USD (2024)[21]
    internetPen: 92.87,        // % (2025)[19]
    urbanisation: 55.1,        // % (2025)[23]
    market2024: 1.03,          // млрд USD last-mile[60]
    cagr: 12.0,                // % прогноз 2024–2030
    codShare: 5,               // % (оценочно)
    hhi: 1100,                 // индекс концентрации (умеренная)
    aggPen: 35.0,              // % агрегационного спроса
    competitors: [
        { name: 'Kaspi Delivery', type: 'aggregator', share: 30.0, tech_platform: true, postomats: true },
        { name: 'DHL Express Kazakhstan', type: 'traditional', share: 15.0, global_network: true },
        { name: 'FedEx Kazakhstan', type: 'traditional', share: 12.0, ecommerce_focus: true },
        { name: 'Aramex Kazakhstan', type: 'traditional', share: 10.0, b2b_focus: true },
        { name: 'J&T Express Kazakhstan', type: 'traditional', share: 8.0, growth_focused: true },
        { name: 'Pony Express', type: 'traditional', share: 7.0, local_player: true },
        { name: 'Glovo', type: 'on-demand', share: 5.0, food_delivery: true }
    ],
    payMix: {
        card: 65,
        wallet: 15,
        bank_transfer: 10,
        bnpl: 5,
        cod: 5
    },
    regulation: {
        fdi: 100,
        licence: 'Не требуется',
        esgStandards: 'Нарастающие'
    },
    swot: {
        strengths: [
            'Стратегическое расположение между Европой и Азией',
            'Высокий уровень цифровизации (92.9 % интернет-покрытие)',
            'Масштабная сеть Kaspi Postomats'
        ],
        weaknesses: [
            'Высокая доля COD в некоторых сегментах',
            'Ограниченная инфраструктура в удаленных регионах',
            'Умеренная концентрация (HHI ~1 100)'
        ],
        opportunities: [
            'Автоматизация складской логистики и дроны',
            'Расширение сети PUDO и локеров',
            'Рост BNPL и мобильных платежей'
        ],
        threats: [
            'Интенсивная ценовая конкуренция',
            'Колебания цен на топливо',
            'Ужесточение экологических норм'
        ]
    },
    sources: [
        'Macrotrends Kazakhstan Population 2025'[20],
        'FocusEconomics Kazakhstan GDP per Capita 2024'[21],
        'Statista Internet Connectivity Kazakhstan 2025'[19],
        'Worldometer Kazakhstan Demographics 2025'[23],
        'Statista Retail Delivery Kazakhstan 2025'[60]
    ]
},
// Вставьте этот код в файл app.js внутри объекта DETAILED_COUNTRIES
SDN: {
  iso: "SDN",
  emoji: "🇸🇩",
  name: "Судан",
  region: "mena",
  populationMillion: 47.55,                 // млн человек, 2025 estimate
  internetPenetrationPercent: 28.7,         // % пользователей, 2025[73]
  urbanizationPercent: 35.3,                // % городского населения, 2023[74]
  gdpPerCapitaUSD: 1400,                    // USD 2024 estimate
  market: {
    eCommerceUSD2025: 631.54e6,             // млн USD, eCommerce market[51]
    eCommerceCAGR2025To2029: 11.4,          // % CAGR[51]
    retailDeliveryUSD2025: 230.77e6,        // млн USD, retail (grocery) delivery[75]
    retailDeliveryCAGR2025To2030: 10.8,     // % CAGR[75]
    freightLogistics: {
      marketSizeUSD2025: 22.18e9,           // 6Wresearch freight & logistics[50]
      cagrPercent2025To2030: 6.24           // %[50]
    }
  },
  payments: {
    codSharePercent: 70,                    // % наложенный платеж (estimated)
    cardPercent: 20,                        // % оплата картой
    walletsPercent: 8,                      // % электронные кошельки
    bnplPercent: 2                          // % BNPL
  },
  infrastructure: {
    posTerminalsThousand: 50,               // тыс. POS-терминалов
    internetUsersMillion: 14.6              // млн пользователей интернета[73]
  },
  regulation: {
    fdiAllowedPercent: 100,                 // % FDI разрешены
    licence: "Комплексная",
    digitalStrategy: "—"
  },
  swot: {
    strengths: [
      "Большой внутренний рынок с 47.5 млн населения",
      "Растущий e-commerce и мобильная связь"
    ],
    weaknesses: [
      "Низкая интернет-проницаемость (28.7 %)",
      "Ограниченная инфраструктура last-mile"
    ],
    opportunities: [
      "Рост онлайн-продаж (CAGR ~11 % до 2029)",
      "Инвестиции в логистику и финтех"
    ],
    threats: [
      "Политическая нестабильность",
      "Экономическая волатильность и инфляция"
    ]
  },
  competitors: [
    { name: "Sudan Post", type: "state", sharePercent: 35.0 },
    { name: "Salam Express", type: "private", sharePercent: 25.0 },
    { name: "Blue Nile Group", type: "private", sharePercent: 15.0 }
  ],
  technologyTrends: {
    mobileMoneyGrowth: true,
    dronePilots: false,
    evDelivery: false
  },
  sources: [
    "DataReportal: Digital 2025 Sudan"[73],
    "Statista: eCommerce Market Sudan 2025"[51],
    "Statista: Retail Delivery Sudan 2025"[75],
    "6Wresearch: Sudan Freight & Logistics Market 2025–2030"[50],
    "CEIC: Sudan Urbanization 2017"[74]
  ]
},
SLV: {
  iso: 'SLV',
  emoji: '🇸🇻',
  name: 'Сальвадор',
  region: 'lac',
  population: 6.34,           // млн чел.[2]
  gdpPerCapita: 5391,         // $[4]
  internetPen: 60,            // %[3]
  urbanisation: 79.2,         // %[2]
  market2024: 0.62,           // млрд $[1]
  cagr: 9.5,                  // 2024–2030[1]
  codShare: 42,               // %[1]
  hhi: 1250,                  // оценка
  lpiScore: 2.6,
  aggPen: 18,                 // %[5]
  competitors: [
    {name: 'DHL Express', type: 'international', share: 28.0, ebitda: 15.0, premium: true},
    {name: 'FedEx', type: 'international', share: 22.5, ebitda: 12.5, b2b_focused: true},
    {name: 'UPS', type: 'international', share: 15.0, ebitda: 11.5, expansion: true},
    {name: 'Correos de El Salvador', type: 'state', share: 20.0, ebitda: 5.0, state_owned: true},
    {name: 'Rappi Delivery', type: 'aggregator', share: 5.0, ebitda: -3.0, startup: true}
  ],
  payMix: {cod: 42, card: 30, wallet: 20, bnpl: 8},
  regulation: {
    fdi: 100,
    licence: 'SUTRAN registration',
    customsLimitUSD: 50
  },
  swot: {
    strengths: ['Рост e-commerce и PUDO-сети','100% FDI','Инвестиции в зелёную логистику'],
    weaknesses: ['Ограниченное покрытие rural','Высокая доля COD','Нехватка EV'],
    opportunities: ['PUDO через local chains','Green logistics','Cross-border e-commerce'],
    threats: ['Customs ≤ $50','M&A ценовые войны','in-house логистика']
  },
  sources: [
    '6Wresearch El Salvador CEP 2025',                   // [1]
    'Worldometer El Salvador Population',               // [2]
    'AfterShip El Salvador eCommerce 2025',             // [3]
    'USSEC El Salvador Country Profile 2024',            // [4]
    'Sensor Tower Food Delivery SV Q1 2023',             // [5]
    'Statista LPI El Salvador 2023',                     // [6]
    'CEIC El Salvador Fashion eCommerce 2024'            // [7]
  ]
},
// Вставьте этот объект в секцию const DETAILED_COUNTRIES = {
UZB: {
  iso: 'UZB',
  emoji: '🇺🇿',
  name: 'Узбекистан',
  region: 'ssca',
  population: 37.05,          // млн (2025)[145]
  gdpPerCapita: 3890,         // USD (2024)[119]
  internetPen: 83,            // % (2024)[131]
  urbanisation: 48.1,         // % (2025)[145]
  market2024: 0.079,          // млрд $ last-mile food delivery (meal+grocery)[159][161]
  cagr: 6.5,                  // % 2025–2030 online food delivery[163]
  codShare: 15,               // % estimate high e-commerce COD
  hhi: 1500,                  // умеренная фрагментация
  lpiScore: 2.4,              // LPI overall[100]
  amliRank: 55,               // AMLI-ранг (цель к 2030)[99]
  aggPen: 25,                 // % penetration агрегаторов
  competitors: [
    { name: 'Почта Узбекистана',     type: 'traditional', share: 40.0, ebitda: 2.0, state_owned: true },
    { name: 'DPD Uzbekistan',        type: 'traditional', share: 10.0, ebitda: 9.0 },
    { name: 'DHL Express',           type: 'traditional', share: 8.0,  ebitda: 14.0, premium: true },
    { name: 'FedEx',                 type: 'traditional', share: 7.0,  ebitda: 12.5, b2b_focused: true },
    { name: 'UPS',                   type: 'traditional', share: 5.0,  ebitda: 11.5, premium: true },
    { name: 'Glovo',                 type: 'aggregator',  share: 3.0,  ebitda: -2.5, startup: true },
    { name: 'Bolt Delivery',         type: 'aggregator',  share: 2.5,  ebitda: -1.0, qcommerce: true },
    { name: 'iVoy',                  type: 'aggregator',  share: 1.5,  ebitda: -3.0, niche: true },
    { name: 'Postomat Network',      type: 'aggregator',  share: 1.0,  ebitda: 0.0, digital: true },
    { name: 'OsonPay Logistics',     type: 'aggregator',  share: 0.5,  ebitda: -4.0, regional: true }
  ],
  payMix: { cod: 15, wallet: 30, card: 45, bnpl: 10 },
  regulation: {
    fdi: 100,                       // %
    licence: 'Комплексная',
    precedent: 'Запуск 5G (2023)'
  },
  swot: {
    strengths: [
      'Высокая интернет-проникновение и цифровая грамотность населения',
      'Стратегическое транзитное положение на Шёлковом пути',
      'Быстрый рост e-commerce и спроса на last-mile'
    ],
    weaknesses: [
      'Низкий уровень урбанизации и узкая инфраструктура в регионах',
      'Высокая доля COD усложняет денежный поток',
      'Слабая консолидация last-mile операторов'
    ],
    opportunities: [
      'Развитие сети постаматов и пунктов выдачи',
      'Внедрение цифровых платежных решений и BNPL',
      'Использование дронов и э-велосипедов для доставки'
    ],
    threats: [
      'Экономическая волатильность и санкции',
      'Рост цен на топливо и логистические расходы',
      'Вход международных агрегаторов после либерализации'
    ]
  },
  sources: [
    'Worldometer Uzbekistan Population 2025'[145],
    'TradingEconomics Uzbekistan GDP per Capita 2024'[119],
    'DataReportal Internet Uzbekistan 2024'[131],
    'Statista Online Food Delivery UZ 2025'[159],
    'Statista Grocery Delivery UZ 2025'[161],
    'World Bank LPI Uzbekistan 2016'[100]
  ]
},
// Данные по Кыргызстану для DETAILED_COUNTRIES
KGZ: {
    iso: 'KGZ',
    emoji: '🇰🇬',
    name: 'Кыргызстан',
    region: 'asia',
    population: 7.295,         // млн (2025)[25]
    gdpPerCapita: 2470,         // USD (2024)[23]
    internetPen: 98.0,          // % (2025)[18]
    urbanisation: 35.3,         // % (2025)[25]
    marketEcom: 0.3592,         // млрд USD e-commerce (2024)[41]
    marketLastMile: 0.0539,     // млрд USD ≈15% от e-commerce
    cagr: 14.3,                 // % (2024–2028 e-commerce)[41]
    codShare: 60,               // % наложенного платежа
    hhi: 1000,                  // оценочный индекс концентрации
    lpiScore: 2.3,              // Logistics Performance Index (2023)[66]
    competitors: [
        { name: 'Kyrgyz Post', type: 'traditional', state_owned: true, market_leader: true },
        { name: 'MegaExpress', type: 'traditional', share: 25.0 },
        { name: 'ACS Courier', type: 'traditional', share: 20.0 },
        { name: 'J&T Express Kyrgyzstan', type: 'traditional', share: 15.0 },
        { name: 'DHL Kyrgyzstan', type: 'traditional', share: 10.0, premium: true },
        { name: 'Pony Express', type: 'on-demand', share: 10.0 },
        { name: 'Other Local Couriers', type: 'traditional', share: 20.0, fragmented: true }
    ],
    payMix: { cod: 60, card: 20, wallet: 10, bnpl: 10, bank_transfer: 10 },
    regulation: { fdi: 100, licence: 'Не требуется', customsModernisation: true },
    swot: {
        strengths: [
            'Высокое интернет-покрытие (98%)[18]',
            'Быстрый рост e-commerce (+14.3%)[41]'
        ],
        weaknesses: [
            'Низкий LPI (2.3) ограничивает логистику[66]',
            'Низкая урбанизация (35.3%)[25]'
        ],
        opportunities: [
            'Инвестиции в склады и PUDO-сети',
            'Автоматизация last-mile (дроны, e-байки)'
        ],
        threats: [
            'Инфраструктурные барьеры и высокие цены на топливо',
            'Конкуренция informal-операторов'
        ]
    },
    sources: [
        'Worldometer Population Kyrgyzstan 2025'[25],
        'FocusEconomics Kyrgyzstan GDP per Capita 2024'[23],
        'Statista Digital Connectivity Kyrgyzstan 2025'[18],
        '24.kg “E-commerce market reached $359.2m in 2024”'[41],
        'AKIpress “LPI 2023: KGZ Score 2.3”'[66]
    ]
},
  BRA: {
    iso: 'BRA', emoji: '🇧🇷', name: 'Бразилия', region: 'lac',
    population: 212.6, gdpPerCapita: 8670, internetPen: 74.0, urbanisation: 87.1,
    market2024: 12.0, cagr: 11.0, codShare: 28, hhi: 1300, lpiScore: 2.9, amliRank: 38, aggPen: 45.8,
    competitors: [
      {name: 'Correios', type: 'traditional', share: 40.0, ebitda: 1.2, state_monopoly: true},
      {name: 'Loggi', type: 'aggregator', share: 9.0, ebitda: -2.1, venture_backed: true},
      {name: 'Total Express', type: 'traditional', share: 7.0, ebitda: 8.9, regional_leader: true},
      {name: 'Jamef', type: 'traditional', share: 5.8, ebitda: 6.4, b2b_focused: true},
      {name: 'Mercado Envios', type: 'aggregator', share: 5.2, ebitda: 4.1, platform_owned: true},
      {name: 'Sequoia Logística', type: 'traditional', share: 4.1, ebitda: 7.8, tech_enabled: true}
    ],
    payMix: {cod: 28, wallet: 25, card: 40, bnpl: 7},
    regulation: {fdi: 100, licence: 'Комплексная', precedent: 'Либерализация почтового сектора'},
    swot: {
      strengths: [
        'Крупнейшая база электронной коммерции в Латинской Америке',
        'Продвинутая система мгновенных платежей Pix',
        'Сильная дорожная сеть в юго-восточном регионе',
        'Развитые технологические хабы в Сан-Паулу и Рио'
      ],
      weaknesses: [
        'Налоговая сложность между штатами создает операционные вызовы',
        'Проблемы безопасности на дорогах в некоторых регионах',
        'Зависимость от пропускной способности Correios',
        'Высокие импортные пошлины влияют на трансграничную торговлю'
      ],
      opportunities: [
        'Локеры и пункты выдачи в фавелах и пригородах',
        'Потоки D2C трансграничной торговли через Майами',
        'Тестирование дронов в Амазонии',
        'Интеграция с Open Banking для финансовых услуг'
      ],
      threats: [
        'Меры бюджетной экономии могут сократить инфраструктурные расходы',
        'Забастовки в Correios нарушают цепочки поставок',
        'Волатильность цен на топливо влияет на рентабельность',
        'Политическая нестабильность создает неопределенность'
      ]
    },
    sources: ['ABComm Brazil 2024', 'Valor Econômico 2024', 'Banco Central do Brasil 2024']
  }
};

// Add enhanced stub countries with emojis
const ENHANCED_STUB_COUNTRIES = [
  // SEA stubs
  // SAS stubs  
  // SSA stubs
  // MENA stubs
  // LAC stubs
  // EEU stubs
];

// Populate countries data
Object.assign(DATA.countries, DETAILED_COUNTRIES);

// Create enhanced stub countries
ENHANCED_STUB_COUNTRIES.forEach(([iso, emoji, name, region]) => {
  if (!DATA.countries[iso]) {
    DATA.countries[iso] = {
      iso, emoji, name, region,
      population: 'н/д', gdpPerCapita: 'н/д', internetPen: 'н/д', urbanisation: 'н/д',
      market2024: 'н/д', cagr: 'н/д', codShare: 'н/д', hhi: 'н/д', lpiScore: 'н/д', 
      amliRank: 'н/д', aggPen: 'н/д',
      competitors: [
        {name: 'Местный лидер 1', type: 'traditional', share: 'н/д', ebitda: 'н/д'},
        {name: 'Местный лидер 2', type: 'traditional', share: 'н/д', ebitda: 'н/д'},
        {name: 'Агрегатор 1', type: 'aggregator', share: 'н/д', ebitda: 'н/д'},
        {name: 'Агрегатор 2', type: 'aggregator', share: 'н/д', ebitda: 'н/д'}
      ],
      payMix: {cod: 'н/д', wallet: 'н/д', card: 'н/д', bnpl: 'н/д'},
      regulation: {fdi: 'н/д', licence: 'н/д', precedent: 'н/д'},
      swot: {
        strengths: [
          'Развивающийся рынок электронной коммерции',
          'Молодое население с высоким принятием технологий',
          'Растущий средний класс увеличивает потребительский спрос'
        ],
        weaknesses: [
          'Ограниченная логистическая инфраструктура',
          'Высокая доля наложенного платежа',
          'Фрагментированный рынок с множеством мелких игроков'
        ],
        opportunities: [
          'Инвестиции в цифровую инфраструктуру',
          'Партнерства с международными платформами',
          'Развитие альтернативных методов доставки'
        ],
        threats: [
          'Регулятивная неопределенность',
          'Экономическая волатильность',
          'Конкуренция со стороны крупных международных игроков'
        ]
      },
      sources: ['Данные будут добавлены в следующих версиях энциклопедии']
    };
  }
});

// ===================== GLOBALS =====================
const COLORS = ['#1FB8CD','#FFC185','#B4413C','#ECEBD5','#5D878F','#DB4545','#D2BA4C','#964325','#944454','#13343B'];
let sidebarOpen = false;

// ===================== UTILS =====================
function formatNumber(value) {
  if (value === null || value === undefined || value === 'н/д') return 'н/д';
  return typeof value === 'number' ? value.toLocaleString('ru-RU') : value;
}

function safeGet(obj, key, defaultValue = 'н/д') {
  return obj && obj[key] !== undefined && obj[key] !== null ? obj[key] : defaultValue;
}

function getCompetitorIcon(type) {
  return type === 'traditional' ? '🏢' : '🔗';
}

function getCompetitorTypeLabel(type) {
  return type === 'traditional' ? 'Традиционный' : 'Агрегатор';
}

// ===================== ROUTING =====================
function parseHash() {
  const hash = window.location.hash.slice(1);
  if (!hash) return { view: 'world' };
  
  if (hash.startsWith('region=')) {
    const regionId = hash.split('=')[1];
    return { view: 'region', regionId };
  }
  
  if (hash.startsWith('country=')) {
    const countryIso = hash.split('=')[1];
    return { view: 'country', countryIso };
  }
  
  return { view: 'world' };
}

function navigateTo(view, param = null) {
  if (view === 'world') {
    window.location.hash = '';
  } else if (view === 'region') {
    window.location.hash = `region=${param}`;
  } else if (view === 'country') {
    window.location.hash = `country=${param}`;
  }
}

// ===================== SIDEBAR =====================
function renderSidebar() {
  const nav = document.getElementById('sidebar-nav');
  if (!nav) return;
  
  nav.innerHTML = `
    <li>
      <a href="#" class="nav-link" data-link="world">🌍 Обзор мира</a>
    </li>
  `;

  DATA.regions.forEach(region => {
    const li = document.createElement('li');
    const countriesHtml = region.countries.map(iso => {
      const country = DATA.countries[iso];
      return `<li><a href="#" class="nav-link" data-link="country-${iso}">${country?.emoji || '🏳️'} ${country ? country.name : iso}</a></li>`;
    }).join('');
    
    li.innerHTML = `
      <a href="#" class="nav-link region-link" data-link="toggle-${region.id}">
        ${region.emoji} ${region.name}
        <span class="toggle-icon">▼</span>
      </a>
      <ul class="nested hidden" id="region-${region.id}">
        <li><a href="#" class="nav-link" data-link="region-${region.id}">📊 Обзор региона</a></li>
        ${countriesHtml}
      </ul>
    `;
    nav.appendChild(li);
  });
  
  // Add click handling
  nav.addEventListener('click', handleSidebarClick);
}

function handleSidebarClick(e) {
  const link = e.target.closest('.nav-link');
  if (!link) return;
  
  e.preventDefault();
  const dataLink = link.dataset.link;
  
  if (dataLink === 'world') {
    navigateTo('world');
  } else if (dataLink.startsWith('toggle-')) {
    const regionId = dataLink.split('-')[1];
    toggleRegion(regionId);
  } else if (dataLink.startsWith('region-')) {
    const regionId = dataLink.split('-')[1];
    navigateTo('region', regionId);
  } else if (dataLink.startsWith('country-')) {
    const countryIso = dataLink.split('-')[1];
    navigateTo('country', countryIso);
  }
}

function toggleRegion(regionId) {
  const nested = document.getElementById(`region-${regionId}`);
  if (!nested) return;
  
  nested.classList.toggle('hidden');
  
  const icon = document.querySelector(`a.region-link[data-link='toggle-${regionId}'] .toggle-icon`);
  if (icon) {
    icon.textContent = nested.classList.contains('hidden') ? '▼' : '▲';
  }
}

function updateSidebarActive(view, identifier) {
  // Clear all active states
  document.querySelectorAll('#sidebar-nav .nav-link').forEach(l => l.classList.remove('active'));
  
  if (view === 'world') {
    const worldLink = document.querySelector('a.nav-link[data-link="world"]');
    if (worldLink) worldLink.classList.add('active');
  } else if (view === 'region') {
    const regionLink = document.querySelector(`a.nav-link[data-link="region-${identifier}"]`);
    if (regionLink) regionLink.classList.add('active');
    
    // Ensure region is expanded
    const nested = document.getElementById(`region-${identifier}`);
    if (nested && nested.classList.contains('hidden')) {
      toggleRegion(identifier);
    }
  } else if (view === 'country') {
    const countryLink = document.querySelector(`a.nav-link[data-link="country-${identifier}"]`);
    if (countryLink) countryLink.classList.add('active');
    
    // Expand the region containing this country
    const country = DATA.countries[identifier];
    if (country) {
      const nested = document.getElementById(`region-${country.region}`);
      if (nested && nested.classList.contains('hidden')) {
        toggleRegion(country.region);
      }
    }
  }
}

function toggleSidebar() {
  sidebarOpen = !sidebarOpen;
  const sidebar = document.getElementById('sidebar');
  if (sidebar) {
    sidebar.classList.toggle('show', sidebarOpen);
  }
}

// ===================== TABLE UTILITIES =====================
function makeSortable(tableId) {
  const table = document.getElementById(tableId);
  if (!table) return;

  const headers = table.querySelectorAll('th[data-sort]');
  headers.forEach(header => {
    header.classList.add('sortable');
    header.addEventListener('click', () => {
      const sortKey = header.dataset.sort;
      const tbody = table.querySelector('tbody');
      const rows = Array.from(tbody.querySelectorAll('tr'));
      
      const isAsc = header.classList.contains('sort-asc');
      headers.forEach(h => h.classList.remove('sort-asc', 'sort-desc'));
      
      rows.sort((a, b) => {
        let aVal = a.dataset[sortKey] || '';
        let bVal = b.dataset[sortKey] || '';
        
        const aNum = parseFloat(aVal);
        const bNum = parseFloat(bVal);
        
        if (!isNaN(aNum) && !isNaN(bNum)) {
          return isAsc ? bNum - aNum : aNum - bNum;
        } else {
          return isAsc ? bVal.localeCompare(aVal) : aVal.localeCompare(bVal);
        }
      });
      
      header.classList.add(isAsc ? 'sort-desc' : 'sort-asc');
      rows.forEach(row => tbody.appendChild(row));
    });
  });
}

function attachSearchFilter(inputId, tableId) {
  const input = document.getElementById(inputId);
  const table = document.getElementById(tableId);
  if (!input || !table) return;
  
  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    const rows = table.querySelectorAll('tbody tr');
    
    rows.forEach(row => {
      const text = row.textContent.toLowerCase();
      row.style.display = text.includes(term) ? '' : 'none';
    });
  });
}

// ===================== CHART UTILITIES =====================
function createBubbleChart(containerId, data, title) {
  const ctx = document.getElementById(containerId);
  if (!ctx) return;

  const chartData = data.map(item => ({
    x: parseFloat(item.market2024) || 0,
    y: parseFloat(item.cagr) || 0,
    r: Math.max(5, Math.sqrt(parseFloat(item.codShare) || 20) * 2),
    label: item.name,
    iso: item.iso
  }));

  return new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: 'Страны',
        data: chartData,
        backgroundColor: COLORS[0],
        borderColor: COLORS[1],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: title
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const point = context.raw;
              return `${point.label}: Рынок ${formatNumber(point.x)}млрд$, CAGR ${formatNumber(point.y)}%`;
            }
          }
        }
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Размер рынка (млрд $)'
          }
        },
        y: {
          title: {
            display: true,
            text: 'CAGR (%)'
          }
        }
      },
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const dataIndex = elements[0].index;
          const point = chartData[dataIndex];
          if (point.iso) {
            navigateTo('country', point.iso);
          }
        }
      }
    }
  });
}

function createBarChart(containerId, competitors, title) {
  const ctx = document.getElementById(containerId);
  if (!ctx || !competitors || competitors.length === 0) return;

  const validCompetitors = competitors.filter(c => c.share !== 'н/д' && c.share !== null);
  const top8 = validCompetitors.slice(0, 8);
  
  if (top8.length === 0) return;
  
  return new Chart(ctx, {
    type: 'bar',
    data: {
      labels: top8.map(p => p.name),
      datasets: [{
        label: 'Доля рынка (%)',
        data: top8.map(p => p.share),
        backgroundColor: top8.map(p => p.type === 'traditional' ? COLORS[0] : COLORS[2])
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: title
        },
        legend: {
          display: false
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          title: {
            display: true,
            text: 'Доля рынка (%)'
          }
        }
      }
    }
  });
}

function createPieChart(containerId, payMix, title) {
  const ctx = document.getElementById(containerId);
  if (!ctx || !payMix) return;

  const labels = [];
  const data = [];
  
  Object.entries(payMix).forEach(([key, value]) => {
    if (value !== 'н/д' && value > 0) {
      labels.push(key.toUpperCase());
      data.push(value);
    }
  });

  if (data.length === 0) return;

  return new Chart(ctx, {
    type: 'pie',
    data: {
      labels: labels,
      datasets: [{
        data: data,
        backgroundColor: COLORS.slice(0, data.length)
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        title: {
          display: true,
          text: title
        }
      }
    }
  });
}

// ===================== VIEWS =====================
function renderWorldView() {
  updateSidebarActive('world');
  document.getElementById('breadcrumb-content').textContent = 'Обзор мира';
  
  const topByCAGR = Object.values(DATA.countries)
    .filter(c => c.cagr !== 'н/д')
    .sort((a, b) => b.cagr - a.cagr)
    .slice(0, 10);
    
  const topByMarket = Object.values(DATA.countries)
    .filter(c => c.market2024 !== 'н/д')
    .sort((a, b) => b.market2024 - a.market2024)
    .slice(0, 10);
  
  const allCountries = Object.values(DATA.countries);
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="card">
      <div class="card__header">
        <h2>🌍 Глобальная статистика логистики последней мили</h2>
      </div>
      <div class="card__body">
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-value">${formatNumber(DATA.world.market2024)}B</span>
            <div class="metric-label">Размер рынка 2024 (USD)</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${formatNumber(DATA.world.avgCAGR)}%</span>
            <div class="metric-label">Средний CAGR 2024-29</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${DATA.world.regions}</span>
            <div class="metric-label">Покрытых регионов</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${DATA.world.countries}</span>
            <div class="metric-label">Изученных стран</div>
          </div>
        </div>
      </div>
    </div>

    <div class="comparison-tables">
      <div class="card">
        <div class="card__header">
          <h3>🚀 Топ-10 по темпам роста (CAGR)</h3>
        </div>
        <div class="card__body">
          <table class="table">
            <thead>
              <tr>
                <th>Страна</th>
                <th>CAGR (%)</th>
                <th>Рынок (млрд $)</th>
              </tr>
            </thead>
            <tbody>
              ${topByCAGR.map(country => `
                <tr>
                  <td><a href="#" onclick="navigateTo('country', '${country.iso}'); return false;">${country.emoji} ${country.name}</a></td>
                  <td><span class="status status--success">${formatNumber(country.cagr)}%</span></td>
                  <td>${formatNumber(country.market2024)}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <div class="card">
        <div class="card__header">
          <h3>💰 Топ-10 по размеру рынка (US$)</h3>
        </div>
        <div class="card__body">
          <table class="table">
            <thead>
              <tr>
                <th>Страна</th>
                <th>Рынок (млрд $)</th>
                <th>CAGR (%)</th>
              </tr>
            </thead>
            <tbody>
              ${topByMarket.map(country => `
                <tr>
                  <td><a href="#" onclick="navigateTo('country', '${country.iso}'); return false;">${country.emoji} ${country.name}</a></td>
                  <td><span class="status status--info">${formatNumber(country.market2024)}B</span></td>
                  <td>${formatNumber(country.cagr)}%</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__header">
        <h3>🗺️ Интерактивная диаграмма регионов</h3>
        <p>Размер рынка vs CAGR (размер пузыря = количество стран)</p>
      </div>
      <div class="card__body">
        <div class="chart-container">
          <canvas id="regions-bubble-chart"></canvas>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__header">
        <h3>📊 Сводная таблица всех стран</h3>
      </div>
      <div class="card__body">
        <div class="search-container">
          <input id="master-search" class="form-control search-input" placeholder="Поиск по странам..." />
        </div>
        <div class="master-table-container">
          <table class="table master-table" id="master-table">
            <thead>
              <tr>
                <th data-sort="name">Страна</th>
                <th data-sort="region">Регион</th>
                <th data-sort="market2024">Рынок 2024 (млрд $)</th>
                <th data-sort="cagr">CAGR (%)</th>
                <th data-sort="codShare">COD (%)</th>
                <th data-sort="hhi">HHI</th>
                <th data-sort="lpiScore">LPI Score</th>
              </tr>
            </thead>
            <tbody>
              ${allCountries.map(country => {
                const region = DATA.regions.find(r => r.id === country.region);
                return `
                  <tr data-name="${country.name}" data-region="${region ? region.name : ''}" 
                      data-market2024="${country.market2024}" data-cagr="${country.cagr}" 
                      data-codshare="${country.codShare}" data-hhi="${country.hhi}" 
                      data-lpiscore="${country.lpiScore}">
                    <td><a href="#" onclick="navigateTo('country', '${country.iso}'); return false;">${country.emoji} ${country.name}</a></td>
                    <td><a href="#" onclick="navigateTo('region', '${country.region}'); return false;">${region ? region.emoji + ' ' + region.name : 'н/д'}</a></td>
                    <td>${formatNumber(country.market2024)}</td>
                    <td>${formatNumber(country.cagr)}</td>
                    <td>${formatNumber(country.codShare)}</td>
                    <td>${formatNumber(country.hhi)}</td>
                    <td>${formatNumber(country.lpiScore)}</td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    // Create regions bubble chart
    const regionData = DATA.regions.map(region => ({
      x: region.cagr,
      y: region.market2024,
      r: Math.sqrt(region.countries.length) * 8,
      label: region.name,
      id: region.id
    }));

    new Chart(document.getElementById('regions-bubble-chart'), {
      type: 'bubble',
      data: {
        datasets: [{
          label: 'Регионы',
          data: regionData,
          backgroundColor: COLORS[0],
          borderColor: COLORS[1],
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            callbacks: {
              label: function(context) {
                const point = context.raw;
                return `${point.label}: CAGR ${formatNumber(point.x)}%, Рынок ${formatNumber(point.y)}млрд$`;
              }
            }
          }
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'CAGR (%)'
            }
          },
          y: {
            title: {
              display: true,
              text: 'Размер рынка (млрд $)'
            }
          }
        },
        onClick: (event, elements) => {
          if (elements.length > 0) {
            const dataIndex = elements[0].index;
            const point = regionData[dataIndex];
            navigateTo('region', point.id);
          }
        }
      }
    });

    makeSortable('master-table');
    attachSearchFilter('master-search', 'master-table');
  }, 100);
}

function renderRegionView(regionId) {
  const region = DATA.regions.find(r => r.id === regionId);
  if (!region) {
    render404();
    return;
  }

  updateSidebarActive('region', regionId);
  document.getElementById('breadcrumb-content').innerHTML = `<a href="#" onclick="navigateTo('world'); return false;">🌍 Мир</a> / ${region.emoji} ${region.name}`;
  
  const countries = region.countries.map(iso => DATA.countries[iso]).filter(Boolean);
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="card">
      <div class="card__header">
        <h2>${region.emoji} ${region.name}</h2>
        <p>Региональный обзор логистики последней мили</p>
      </div>
      <div class="card__body">
        <div class="metrics-grid">
          <div class="metric-card">
            <span class="metric-value">${formatNumber(region.market2024)}B</span>
            <div class="metric-label">Размер рынка (USD)</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${formatNumber(region.cagr)}%</span>
            <div class="metric-label">CAGR 2024-29</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${formatNumber(region.avgCOD)}%</span>
            <div class="metric-label">Средняя доля COD</div>
          </div>
          <div class="metric-card">
            <span class="metric-value">${formatNumber(region.avgHHI)}</span>
            <div class="metric-label">Средний HHI</div>
          </div>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__header">
        <h3>📈 Страны региона: размер рынка vs CAGR</h3>
        <p>Размер пузыря = доля COD</p>
      </div>
      <div class="card__body">
        <div class="chart-container">
          <canvas id="region-bubble-chart"></canvas>
        </div>
      </div>
    </div>

    <div class="card">
      <div class="card__header">
        <h3>🏁 Страны региона</h3>
      </div>
      <div class="card__body">
        <div class="search-container">
          <input id="country-search" class="form-control search-input" placeholder="Поиск страны..." />
        </div>
        <table class="table" id="countries-table">
          <thead>
            <tr>
              <th data-sort="name">Страна</th>
              <th data-sort="market2024">Рынок (млрд $)</th>
              <th data-sort="cagr">CAGR (%)</th>
              <th data-sort="codShare">COD (%)</th>
              <th data-sort="hhi">HHI</th>
              <th data-sort="lpiScore">LPI Score</th>
            </tr>
          </thead>
          <tbody>
            ${countries.map(country => `
              <tr data-name="${country.name}" data-market2024="${country.market2024}" 
                  data-cagr="${country.cagr}" data-codshare="${country.codShare}" 
                  data-hhi="${country.hhi}" data-lpiscore="${country.lpiScore}">
                <td><a href="#" onclick="navigateTo('country', '${country.iso}'); return false;">${country.emoji} ${country.name}</a></td>
                <td>${formatNumber(country.market2024)}</td>
                <td>${formatNumber(country.cagr)}</td>
                <td>${formatNumber(country.codShare)}</td>
                <td>${formatNumber(country.hhi)}</td>
                <td>${formatNumber(country.lpiScore)}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  `;

  setTimeout(() => {
    createBubbleChart('region-bubble-chart', countries, `Страны региона ${region.name}`);
    makeSortable('countries-table');
    attachSearchFilter('country-search', 'countries-table');
  }, 100);
}

function renderCountryView(countryIso) {
  const country = DATA.countries[countryIso];
  if (!country) {
    render404();
    return;
  }

  updateSidebarActive('country', countryIso);
  const region = DATA.regions.find(r => r.id === country.region);
  document.getElementById('breadcrumb-content').innerHTML = `<a href="#" onclick="navigateTo('world'); return false;">🌍 Мир</a> / <a href="#" onclick="navigateTo('region', '${region.id}'); return false;">${region.emoji} ${region.name}</a> / ${country.emoji} ${country.name}`;
  
  const traditionalCompetitors = country.competitors.filter(c => c.type === 'traditional');
  const aggregatorCompetitors = country.competitors.filter(c => c.type === 'aggregator');
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="card">
      <div class="card__header">
        <h2>${country.emoji} ${country.name}</h2>
        <p>Регион: ${region ? region.emoji + ' ' + region.name : 'н/д'}</p>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>📊 Общий снимок</h3>
      </div>
      <div class="card__body">
        <div class="section-grid">
          <div><strong>Население:</strong> ${formatNumber(country.population)} млн</div>
          <div><strong>ВВП на душу населения:</strong> $${formatNumber(country.gdpPerCapita)}</div>
          <div><strong>Проникновение интернета:</strong> ${formatNumber(country.internetPen)}%</div>
          <div><strong>Урбанизация:</strong> ${formatNumber(country.urbanisation)}%</div>
          <div><strong>LPI Score:</strong> ${formatNumber(country.lpiScore)}</div>
          <div><strong>AMLI Rank:</strong> ${formatNumber(country.amliRank)}</div>
        </div>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>📈 Рыночные метрики</h3>
      </div>
      <div class="card__body">
        <div class="section-grid">
          <div><strong>Размер рынка 2024:</strong> <span class="status status--info">$${formatNumber(country.market2024)} млрд</span></div>
          <div><strong>CAGR 2024-29:</strong> <span class="status status--success">${formatNumber(country.cagr)}%</span></div>
          <div><strong>Доля COD:</strong> <span class="status status--warning">${formatNumber(country.codShare)}%</span></div>
          <div><strong>HHI индекс:</strong> ${formatNumber(country.hhi)}</div>
          <div><strong>Проникновение агрегаторов:</strong> ${formatNumber(country.aggPen)}%</div>
        </div>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>🏢 Конкурентная среда</h3>
        <p>Расширенный анализ всех ключевых игроков</p>
      </div>
      <div class="card__body">
        ${country.competitors && country.competitors.length > 0 ? `
          <div class="chart-container">
            <canvas id="players-chart"></canvas>
          </div>
          
          <div class="competitors-analysis">
            <div class="traditional-competitors">
              <h4>🏢 Традиционные компании</h4>
              <div class="competitors-grid">
                ${traditionalCompetitors.map(player => `
                  <div class="competitor-card">
                    <div class="competitor-header">
                      <h5>${getCompetitorIcon(player.type)} ${player.name}</h5>
                      <span class="status status--info">${formatNumber(player.share)}%</span>
                    </div>
                    <div class="competitor-details">
                      <p><strong>Тип:</strong> ${getCompetitorTypeLabel(player.type)}</p>
                      <p><strong>EBITDA:</strong> ${formatNumber(player.ebitda)}%</p>
                      ${player.market_leader ? '<span class="status status--success">Лидер рынка</span>' : ''}
                      ${player.local_player ? '<span class="status status--info">Местный игрок</span>' : ''}
                      ${player.premium ? '<span class="status status--warning">Премиум</span>' : ''}
                      ${player.b2b_focused ? '<span class="status status--secondary">B2B фокус</span>' : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
            
            <div class="aggregator-competitors">
              <h4>🔗 Агрегаторы</h4>
              <div class="competitors-grid">
                ${aggregatorCompetitors.map(player => `
                  <div class="competitor-card">
                    <div class="competitor-header">
                      <h5>${getCompetitorIcon(player.type)} ${player.name}</h5>
                      <span class="status status--info">${formatNumber(player.share)}%</span>
                    </div>
                    <div class="competitor-details">
                      <p><strong>Тип:</strong> ${getCompetitorTypeLabel(player.type)}</p>
                      <p><strong>EBITDA:</strong> ${formatNumber(player.ebitda)}%</p>
                      ${player.regional ? '<span class="status status--info">Региональный</span>' : ''}
                      ${player.tech_focused ? '<span class="status status--success">Технологичный</span>' : ''}
                      ${player.startup ? '<span class="status status--warning">Стартап</span>' : ''}
                      ${player.platform_owned ? '<span class="status status--secondary">Платформа</span>' : ''}
                    </div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        ` : '<p>Данные об игроках будут добавлены в следующих версиях</p>'}
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>💳 Структура платежей</h3>
      </div>
      <div class="card__body">
        <div class="chart-container">
          <canvas id="payment-chart"></canvas>
        </div>
        <div class="payment-breakdown">
          <div class="payment-item">
            <span class="payment-label">💵 Наложенный платеж (COD):</span>
            <span class="status status--warning">${formatNumber(country.payMix.cod)}%</span>
          </div>
          <div class="payment-item">
            <span class="payment-label">📱 Цифровые кошельки:</span>
            <span class="status status--info">${formatNumber(country.payMix.wallet)}%</span>
          </div>
          <div class="payment-item">
            <span class="payment-label">💳 Банковские карты:</span>
            <span class="status status--success">${formatNumber(country.payMix.card)}%</span>
          </div>
          <div class="payment-item">
            <span class="payment-label">📅 Купи сейчас, плати потом:</span>
            <span class="status status--secondary">${formatNumber(country.payMix.bnpl)}%</span>
          </div>
        </div>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>⚖️ Регулятивная среда</h3>
      </div>
      <div class="card__body">
        <table class="regulation-table">
          <tr>
            <th>Лимит прямых иностранных инвестиций</th>
            <td><span class="status status--info">${formatNumber(country.regulation.fdi)}%</span></td>
          </tr>
          <tr>
            <th>Требования к лицензированию</th>
            <td>${safeGet(country.regulation, 'licence')}</td>
          </tr>
          <tr>
            <th>Недавние регулятивные прецеденты</th>
            <td>${safeGet(country.regulation, 'precedent')}</td>
          </tr>
        </table>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>📋 SWOT-анализ (расширенный)</h3>
        <p>Подробный анализ сильных и слабых сторон, возможностей и угроз</p>
      </div>
      <div class="card__body">
        <div class="swot-grid">
          <div class="swot-quadrant swot-strengths">
            <h4>💪 Сильные стороны</h4>
            <ul>
              ${(country.swot.strengths || []).map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="swot-quadrant swot-weaknesses">
            <h4>⚠️ Слабые стороны</h4>
            <ul>
              ${(country.swot.weaknesses || []).map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="swot-quadrant swot-opportunities">
            <h4>🚀 Возможности</h4>
            <ul>
              ${(country.swot.opportunities || []).map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
          <div class="swot-quadrant swot-threats">
            <h4>⚡ Угрозы</h4>
            <ul>
              ${(country.swot.threats || []).map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="card country-section">
      <div class="card__header">
        <h3>📚 Источники и ссылки</h3>
      </div>
      <div class="card__body">
        <ol class="sources-list">
          ${(country.sources || []).map(source => `<li>${source}</li>`).join('')}
        </ol>
      </div>
    </div>
  `;

  setTimeout(() => {
    if (country.competitors && country.competitors.length > 0) {
      createBarChart('players-chart', country.competitors, 'Доли рынка ключевых игроков');
    }
    
    createPieChart('payment-chart', country.payMix, 'Структура платежей');
  }, 100);
}

function render404() {
  document.getElementById('breadcrumb-content').textContent = '❌ Страница не найдена';
  
  const content = document.getElementById('app-content');
  content.innerHTML = `
    <div class="card">
      <div class="card__body">
        <h2>404 - Страница не найдена</h2>
        <p>Запрашиваемая страница не существует.</p>
        <button onclick="navigateTo('world')" class="btn btn--primary">🌍 Вернуться к обзору мира</button>
      </div>
    </div>
  `;
  
  updateSidebarActive('world');
}

// ===================== ROUTER =====================
function router() {
  try {
    const route = parseHash();
    
    switch (route.view) {
      case 'world':
        renderWorldView();
        break;
      case 'region':
        renderRegionView(route.regionId);
        break;
      case 'country':
        renderCountryView(route.countryIso);
        break;
      default:
        render404();
    }
  } catch (error) {
    console.error('Router error:', error);
    render404();
  }
}

// ===================== INITIALIZATION =====================
window.addEventListener('DOMContentLoaded', () => {
  try {
    renderSidebar();
    router();
    
    // Setup sidebar toggle
    const toggleBtn = document.getElementById('sidebarToggle');
    if (toggleBtn) {
      toggleBtn.addEventListener('click', toggleSidebar);
    }
    
    // Close sidebar on mobile when clicking outside
    document.addEventListener('click', (e) => {
      const sidebar = document.getElementById('sidebar');
      const toggle = document.getElementById('sidebarToggle');
      
      if (window.innerWidth < 992 && sidebarOpen && 
          sidebar && !sidebar.contains(e.target) && 
          toggle && !toggle.contains(e.target)) {
        toggleSidebar();
      }
    });

  } catch (error) {
    console.error('Initialization error:', error);
  }
}); // ← закрывает стрелочную функцию и аргументы addEventListener
}   // ← добавляет недостающую третью скобку, закрывающую анонимную функцию–обработчик

window.addEventListener('hashchange', router);

// Make functions globally available
window.navigateTo = navigateTo;
window.toggleRegion = toggleRegion;
