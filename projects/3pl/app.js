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
  ['IND', '🇮🇳', 'Индия', 'sas'], ['BGD', '🇧🇩', 'Бангладеш', 'sas'], ['PAK', '🇵🇰', 'Пакистан', 'sas'], 
  ['LKA', '🇱🇰', 'Шри-Ланка', 'sas'], ['NPL', '🇳🇵', 'Непал', 'sas'], ['BTN', '🇧🇹', 'Бутан', 'sas'], 
  ['MDV', '🇲🇻', 'Мальдивы', 'sas'], ['AFG', '🇦🇫', 'Афганистан', 'sas'],
  // SSA stubs
  ['KEN', '🇰🇪', 'Кения', 'ssa'], ['GHA', '🇬🇭', 'Гана', 'ssa'], ['UGA', '🇺🇬', 'Уганда', 'ssa'], ['TZA', '🇹🇿', 'Танзания', 'ssa'],
  ['RWA', '🇷🇼', 'Руанда', 'ssa'], ['ETH', '🇪🇹', 'Эфиопия', 'ssa'], ['ZMB', '🇿🇲', 'Замбия', 'ssa'], ['MOZ', '🇲🇿', 'Мозамбик', 'ssa'], ['MDG', '🇲🇬', 'Мадагаскар', 'ssa'],
  // MENA stubs
  ['EGY', '🇪🇬', 'Египет', 'mena'], ['MAR', '🇲🇦', 'Марокко', 'mena'], ['JOR', '🇯🇴', 'Иордания', 'mena'], ['LBN', '🇱🇧', 'Ливан', 'mena'],
  ['TUN', '🇹🇳', 'Тунис', 'mena'], ['DZA', '🇩🇿', 'Алжир', 'mena'], ['IRQ', '🇮🇶', 'Ирак', 'mena'], ['YEM', '🇾🇪', 'Йемен', 'mena'], 
  ['LBY', '🇱🇾', 'Ливия', 'mena'], ['SDN', '🇸🇩', 'Судан', 'mena'],
  // LAC stubs
  ['MEX', '🇲🇽', 'Мексика', 'lac'], ['COL', '🇨🇴', 'Колумбия', 'lac'], ['ARG', '🇦🇷', 'Аргентина', 'lac'], ['PER', '🇵🇪', 'Перу', 'lac'],
  ['CHL', '🇨🇱', 'Чили', 'lac'], ['ECU', '🇪🇨', 'Эквадор', 'lac'], ['GTM', '🇬🇹', 'Гватемала', 'lac'], ['BOL', '🇧🇴', 'Боливия', 'lac'], ['PRY', '🇵🇾', 'Парагвай', 'lac'],
  // EEU stubs
  ['RUS', '🇷🇺', 'Россия', 'eeu'], ['UKR', '🇺🇦', 'Украина', 'eeu'], ['POL', '🇵🇱', 'Польша', 'eeu'], ['ROU', '🇷🇴', 'Румыния', 'eeu'],
  ['HUN', '🇭🇺', 'Венгрия', 'eeu'], ['BGR', '🇧🇬', 'Болгария', 'eeu'], ['HRV', '🇭🇷', 'Хорватия', 'eeu'], ['SRB', '🇷🇸', 'Сербия', 'eeu']
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
});

window.addEventListener('hashchange', router);

// Make functions globally available
window.navigateTo = navigateTo;
window.toggleRegion = toggleRegion;
