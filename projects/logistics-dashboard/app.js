// Встроенные данные для дашборда
const RUSSIA_DATA = {
  "regions": [
    {"name": "Москва и Московская область", "sent": 507892, "received": 623445, "balance": -115553},
    {"name": "Санкт-Петербург и Ленинградская область", "sent": 156443, "received": 187332, "balance": -30889},
    {"name": "Краснодарский край", "sent": 98234, "received": 89567, "balance": 8667},
    {"name": "Свердловская область", "sent": 67891, "received": 61234, "balance": 6657},
    {"name": "Новосибирская область", "sent": 54123, "received": 48900, "balance": 5223},
    {"name": "Ростовская область", "sent": 45678, "received": 52876, "balance": -7198},
    {"name": "Республика Татарстан", "sent": 43210, "received": 46789, "balance": -3579},
    {"name": "Самарская область", "sent": 41234, "received": 38901, "balance": 2333},
    {"name": "Челябинская область", "sent": 38765, "received": 35432, "balance": 3333},
    {"name": "Пермский край", "sent": 36789, "received": 33456, "balance": 3333},
    {"name": "Нижегородская область", "sent": 35432, "received": 32109, "balance": 3323},
    {"name": "Волгоградская область", "sent": 32109, "received": 29876, "balance": 2233},
    {"name": "Воронежская область", "sent": 29876, "received": 27543, "balance": 2333},
    {"name": "Красноярский край", "sent": 27543, "received": 25210, "balance": 2333},
    {"name": "Тюменская область", "sent": 25210, "received": 22877, "balance": 2333}
  ],
  "insights": [
    "Московская область генерирует 35% всех отправлений и получает 43% всех заказов",
    "Межрегиональные маршруты составляют 80% всего объема перевозок",
    "Крупнейший коридор: Москва ↔ Санкт-Петербург (99,326 заказов)",
    "Внутригородские перевозки составляют менее 3% от общего объема"
  ]
};

const UZBEKISTAN_DATA = {
  "regions": [
    {"name": "Ташкент-Сити", "population": 2960000, "expected_orders": 61775},
    {"name": "Ташкентская область", "population": 2990000, "expected_orders": 62401},
    {"name": "Самаркандская", "population": 4120000, "expected_orders": 85984},
    {"name": "Ферганская", "population": 3980000, "expected_orders": 83063},
    {"name": "Кашкадарьинская", "population": 3480000, "expected_orders": 72628},
    {"name": "Андижанская", "population": 3320000, "expected_orders": 69329},
    {"name": "Наманганская", "population": 3000000, "expected_orders": 62610},
    {"name": "Сурхандарьинская", "population": 2810000, "expected_orders": 58665},
    {"name": "Бухарская", "population": 1900000, "expected_orders": 39653},
    {"name": "Хорезмская", "population": 1800000, "expected_orders": 37565},
    {"name": "Джизакская", "population": 1400000, "expected_orders": 29218},
    {"name": "Сырдарьинская", "population": 850000, "expected_orders": 17740},
    {"name": "Навоийская", "population": 1000000, "expected_orders": 20870},
    {"name": "Каракалпакстан", "population": 1900000, "expected_orders": 39653}
  ],
  "methodology": [
    "Базовый коэффициент: 0.02087 заказов на человека в месяц",
    "Источник: анализ российских данных (0.83M заказов на 142M человек)",
    "Формула: Ожидаемые заказы = Население × 0.02087",
    "Предпосылка: одинаковая плотность интернет-торговли"
  ],
  "insights": [
    "Ташкент (город + область) концентрирует ~20% всего трафика",
    "Самарканд и Фергана формируют 17% совокупного объема",
    "Прогнозируемая доля внутриобластных перевозок: 12-14%",
    "Потенциальные коридоры: Ташкент-Самарканд, Ташкент-Фергана"
  ]
};

// Глобальные переменные для хранения диаграмм
let charts = {};

// Состояние фильтрации
let filterState = {
  russia: null,
  uzbekistan: null
};

// Цветовые палитры
const COLORS = {
  russia: ['#1FB8CD', '#FFC185', '#B4413C', '#ECEBD5', '#5D878F', '#DB4545', '#D2BA4C', '#964325', '#944454', '#13343B'],
  uzbekistan: ['#4CAF50', '#66BB6A', '#81C784', '#A5D6A7', '#C8E6C9', '#E8F5E8', '#2E7D32', '#388E3C', '#43A047', '#4CAF50']
};

// Инициализация приложения
document.addEventListener('DOMContentLoaded', function() {
  // Добавляем небольшую задержку для загрузки библиотек
  setTimeout(() => {
    initializeTabs();
    initializeContent();
    renderCharts();
    populateInsights();
  }, 500);
});

// Инициализация вкладок
function initializeTabs() {
  const tabButtons = document.querySelectorAll('.tab-button');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      const targetTab = this.id.replace('tab-', '');
      switchTab(targetTab);
    });
  });
}

// Переключение вкладок
function switchTab(activeTab) {
  // Обновляем состояние кнопок
  document.querySelectorAll('.tab-button').forEach(button => {
    const isActive = button.id === `tab-${activeTab}`;
    button.setAttribute('aria-selected', isActive);
    button.className = isActive ? 'tab-button btn btn--primary' : 'tab-button btn btn--secondary';
  });
  
  // Показываем/скрываем панели
  document.querySelectorAll('.panel').forEach(panel => {
    panel.classList.toggle('hidden', !panel.id.includes(activeTab));
  });
}

// Инициализация контента
function initializeContent() {
  // Методология для Узбекистана
  const methodologyList = document.getElementById('methodology-list');
  if (methodologyList) {
    methodologyList.innerHTML = '';
    UZBEKISTAN_DATA.methodology.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      methodologyList.appendChild(li);
    });
  }
}

// Создание диаграммы-пузырей вместо treemap
function createBubbleChart(canvasId, data, country) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;
  
  const chartData = data.slice(0, 10).map((region, index) => ({
    x: index + 1,
    y: country === 'russia' ? region.sent : region.expected_orders,
    r: Math.sqrt(country === 'russia' ? region.sent : region.expected_orders) / 50,
    label: region.name
  }));
  
  const chart = new Chart(ctx, {
    type: 'bubble',
    data: {
      datasets: [{
        label: country === 'russia' ? 'Отправлено заказов' : 'Ожидаемые заказы',
        data: chartData,
        backgroundColor: COLORS[country].map((color, idx) => color + '80'),
        borderColor: COLORS[country],
        borderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              const point = context.raw;
              return `${point.label}: ${point.y.toLocaleString('ru-RU')}`;
            }
          }
        }
      },
      scales: {
        x: {
          display: false
        },
        y: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toLocaleString('ru-RU');
            }
          }
        }
      },
      onClick: (event, activeElements) => {
        if (activeElements.length > 0) {
          const element = activeElements[0];
          const regionName = chartData[element.index].label;
          handleRegionClick(regionName, country);
        }
      }
    }
  });
  
  return chart;
}

// Создание горизонтальной bar диаграммы
function createHorizontalBarChart(canvasId, data, label, color) {
  const ctx = document.getElementById(canvasId);
  if (!ctx) return null;
  
  const chart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: data.labels,
      datasets: [{
        label: label,
        data: data.values,
        backgroundColor: color + '80',
        borderColor: color,
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      indexAxis: 'y',
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          callbacks: {
            label: function(context) {
              return `${label}: ${context.parsed.x.toLocaleString('ru-RU')}`;
            }
          }
        }
      },
      scales: {
        x: {
          beginAtZero: true,
          ticks: {
            callback: function(value) {
              return value.toLocaleString('ru-RU');
            }
          }
        },
        y: {
          ticks: {
            maxTicksLimit: 10
          }
        }
      }
    }
  });
  
  return chart;
}

// Обработка клика по региону
function handleRegionClick(regionName, country) {
  filterState[country] = filterState[country] === regionName ? null : regionName;
  
  if (country === 'russia') {
    updateRussiaCharts();
  } else {
    updateUzbekistanCharts();
  }
}

// Отрисовка всех диаграмм
function renderCharts() {
  renderRussiaCharts();
  renderUzbekistanCharts();
}

// Отрисовка диаграмм России
function renderRussiaCharts() {
  // Проверяем, что Chart.js загружен
  if (typeof Chart === 'undefined') {
    console.error('Chart.js не загружен');
    return;
  }
  
  // Bubble chart вместо treemap
  charts.russiaTreemap = createBubbleChart('russia-treemap', RUSSIA_DATA.regions, 'russia');
  
  // Топ-10 отправителей
  const topSenders = RUSSIA_DATA.regions
    .slice()
    .sort((a, b) => b.sent - a.sent)
    .slice(0, 10);
  
  charts.russiaSenders = createHorizontalBarChart('russia-senders', {
    labels: topSenders.map(r => r.name.length > 30 ? r.name.substring(0, 30) + '...' : r.name),
    values: topSenders.map(r => r.sent)
  }, 'Отправлено заказов', COLORS.russia[0]);
  
  // Топ-10 получателей
  const topReceivers = RUSSIA_DATA.regions
    .slice()
    .sort((a, b) => b.received - a.received)
    .slice(0, 10);
  
  charts.russiaReceivers = createHorizontalBarChart('russia-receivers', {
    labels: topReceivers.map(r => r.name.length > 30 ? r.name.substring(0, 30) + '...' : r.name),
    values: topReceivers.map(r => r.received)
  }, 'Получено заказов', COLORS.russia[1]);
}

// Отрисовка диаграмм Узбекистана
function renderUzbekistanCharts() {
  // Проверяем, что Chart.js загружен
  if (typeof Chart === 'undefined') {
    console.error('Chart.js не загружен');
    return;
  }
  
  // Bubble chart вместо treemap
  charts.uzbekistanTreemap = createBubbleChart('uzbekistan-treemap', UZBEKISTAN_DATA.regions, 'uzbekistan');
  
  // Топ-10 по населению
  const topPopulation = UZBEKISTAN_DATA.regions
    .slice()
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);
  
  charts.uzbekistanPopulation = createHorizontalBarChart('uzbekistan-population', {
    labels: topPopulation.map(r => r.name),
    values: topPopulation.map(r => r.population)
  }, 'Население', COLORS.uzbekistan[0]);
  
  // Топ-10 по заказам
  const topOrders = UZBEKISTAN_DATA.regions
    .slice()
    .sort((a, b) => b.expected_orders - a.expected_orders)
    .slice(0, 10);
  
  charts.uzbekistanOrders = createHorizontalBarChart('uzbekistan-orders', {
    labels: topOrders.map(r => r.name),
    values: topOrders.map(r => r.expected_orders)
  }, 'Ожидаемые заказы', COLORS.uzbekistan[1]);
}

// Обновление диаграмм России с фильтрацией
function updateRussiaCharts() {
  const filteredRegion = filterState.russia;
  
  if (filteredRegion && charts.russiaSenders && charts.russiaReceivers) {
    // Показываем только выбранный регион
    const region = RUSSIA_DATA.regions.find(r => r.name === filteredRegion);
    if (region) {
      charts.russiaSenders.data.labels = [region.name];
      charts.russiaSenders.data.datasets[0].data = [region.sent];
      charts.russiaReceivers.data.labels = [region.name];
      charts.russiaReceivers.data.datasets[0].data = [region.received];
      
      charts.russiaSenders.update();
      charts.russiaReceivers.update();
    }
  } else {
    // Перерисовываем все диаграммы
    if (charts.russiaSenders) charts.russiaSenders.destroy();
    if (charts.russiaReceivers) charts.russiaReceivers.destroy();
    renderRussiaCharts();
  }
}

// Обновление диаграмм Узбекистана с фильтрацией
function updateUzbekistanCharts() {
  const filteredRegion = filterState.uzbekistan;
  
  if (filteredRegion && charts.uzbekistanPopulation && charts.uzbekistanOrders) {
    // Показываем только выбранный регион
    const region = UZBEKISTAN_DATA.regions.find(r => r.name === filteredRegion);
    if (region) {
      charts.uzbekistanPopulation.data.labels = [region.name];
      charts.uzbekistanPopulation.data.datasets[0].data = [region.population];
      charts.uzbekistanOrders.data.labels = [region.name];
      charts.uzbekistanOrders.data.datasets[0].data = [region.expected_orders];
      
      charts.uzbekistanPopulation.update();
      charts.uzbekistanOrders.update();
    }
  } else {
    // Перерисовываем все диаграммы
    if (charts.uzbekistanPopulation) charts.uzbekistanPopulation.destroy();
    if (charts.uzbekistanOrders) charts.uzbekistanOrders.destroy();
    renderUzbekistanCharts();
  }
}

// Заполнение инсайтов
function populateInsights() {
  // Инсайты для России
  const russiaInsightsList = document.getElementById('russia-insights');
  if (russiaInsightsList) {
    russiaInsightsList.innerHTML = '';
    RUSSIA_DATA.insights.forEach(insight => {
      const li = document.createElement('li');
      li.textContent = insight;
      russiaInsightsList.appendChild(li);
    });
  }
  
  // Инсайты для Узбекистана
  const uzbekistanInsightsList = document.getElementById('uzbekistan-insights');
  if (uzbekistanInsightsList) {
    uzbekistanInsightsList.innerHTML = '';
    UZBEKISTAN_DATA.insights.forEach(insight => {
      const li = document.createElement('li');
      li.textContent = insight;
      uzbekistanInsightsList.appendChild(li);
    });
  }
}