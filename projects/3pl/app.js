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
  ['SGP', '🇸🇬', 'Сингапур', 'sea'], ['KHM', '🇰🇭', 'Камбоджа', 'sea'], ['LAO', '🇱🇦', 'Лаос', 'sea'], 
  ['MMR', '🇲🇲', 'Мьянма', 'sea'], ['BRN', '🇧🇳', 'Бруней', 'sea'], ['MYS', '🇲🇾', 'Малайзия', 'sea'],
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
