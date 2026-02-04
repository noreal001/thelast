// Данные брендов
const uniqueBrands = [
    "Tom Ford", "Chanel", "Dior", "Gucci", "Hermès", "Yves Saint Laurent", 
    "Bvlgari", "Versace", "Armani", "Dolce & Gabbana", "Calvin Klein",
    "Hugo Boss", "Paco Rabanne", "Issey Miyake", "Kenzo", "Montblanc",
    "Burberry", "Ralph Lauren", "Lacoste", "Davidoff", "Azzaro"
];

// Данные нот (от А до Я)
const fragranceNotes = [
    "Абрикос", "Амбра", "Анис", "Апельсин", "Апельсиновый цвет",
    "Базилик", "Бергамот", "Бобы тонка",
    "Ваниль", "Ветивер", "Вишня",
    "Гардения", "Гвоздика", "Герань", "Грейпфрут",
    "Жасмин", "Жожоба",
    "Иланг-иланг", "Имбирь", "Ирис",
    "Какао", "Кедр", "Кипарис", "Кориандр", "Корица", "Кумкват",
    "Лаванда", "Лайм", "Ландыш", "Лимон", "Липа",
    "Манго", "Мандарин", "Мед", "Мимоза", "Миндаль", "Можжевельник", "Мускат",
    "Нарцисс", "Нероли",
    "Орхидея", "Олива",
    "Пачули", "Персик", "Пион", "Полынь",
    "Роза", "Розмарин", "Ромашка",
    "Сандал", "Слива", "Смола", "Сосна",
    "Табак", "Тимьян", "Тубероза",
    "Уд", "Укроп",
    "Фенхель", "Фиалка", "Фикус", "Фисташка",
    "Хвоя", "Хурма",
    "Цветок апельсина", "Цитрон",
    "Чай", "Черная смородина", "Черный перец",
    "Шалфей", "Шафран", "Шелк",
    "Эвкалипт",
    "Яблоко", "Ягоды можжевельника", "Ясень"
];

// Объёмы для флаконов
const volumes = [
    "1 мл", "2 мл", "3 мл", "5 мл", "10 мл", "15 мл", "20 мл", "30 мл", "50 мл", "100 мл"
];

// Данные товаров по брендам
const productsByBrand = {
    "Tom Ford": [
        {
            id: 101,
            name: "Lost Cherry",
            brand: "Tom Ford",
            description: "Соблазнительный аромат с нотами вишни, горького миндаля и ванили.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 400 ₽",
            priceTo: "24 000 ₽"
        },
        {
            id: 102,
            name: "Electric Cherry",
            brand: "Tom Ford",
            description: "Энергичный и свежий аромат с нотами вишни и цитрусов.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "9 200 ₽",
            priceTo: "26 000 ₽"
        },
        {
            id: 103,
            name: "Oud Wood",
            brand: "Tom Ford",
            description: "Роскошный аромат с нотами уд, сандала и ванили.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "10 000 ₽",
            priceTo: "28 000 ₽"
        },
        {
            id: 104,
            name: "Tobacco Vanille",
            brand: "Tom Ford",
            description: "Теплый и пряный аромат с нотами табака и ванили.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "9 500 ₽",
            priceTo: "27 000 ₽"
        },
        {
            id: 105,
            name: "Black Orchid",
            brand: "Tom Ford",
            description: "Таинственный аромат с нотами черной орхидеи и трюфеля.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "9 000 ₽",
            priceTo: "25 000 ₽"
        },
        {
            id: 106,
            name: "Neroli Portofino",
            brand: "Tom Ford",
            description: "Свежий цитрусовый аромат с нотами нероли.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "9 800 ₽",
            priceTo: "27 500 ₽"
        }
    ],
    
    "Chanel": [
        {
            id: 201,
            name: "Chanel No 5",
            brand: "Chanel",
            description: "Классический женский аромат, символ элегантности.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "7 500 ₽",
            priceTo: "22 000 ₽"
        },
        {
            id: 202,
            name: "Bleu de Chanel",
            brand: "Chanel",
            description: "Современный мужской аромат с древесными нотами.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 200 ₽",
            priceTo: "24 000 ₽"
        },
        {
            id: 203,
            name: "Coco Mademoiselle",
            brand: "Chanel",
            description: "Свежий и женственный аромат с цитрусовыми нотами.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 000 ₽",
            priceTo: "23 500 ₽"
        },
        {
            id: 204,
            name: "Gabrielle",
            brand: "Chanel",
            description: "Солнечный цветочный аромат с нотами жасмина.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 500 ₽",
            priceTo: "24 500 ₽"
        },
        {
            id: 205,
            name: "Chance Eau Tendre",
            brand: "Chanel",
            description: "Нежный цветочный аромат для романтичных натур.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "7 800 ₽",
            priceTo: "22 500 ₽"
        }
    ],
    
    "Dior": [
        {
            id: 301,
            name: "J'adore",
            brand: "Dior",
            description: "Роскошный цветочный аромат для уверенных женщин.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 000 ₽",
            priceTo: "23 000 ₽"
        },
        {
            id: 302,
            name: "Sauvage",
            brand: "Dior",
            description: "Дикий и чувственный мужской аромат.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 500 ₽",
            priceTo: "25 000 ₽"
        },
        {
            id: 303,
            name: "Miss Dior",
            brand: "Dior",
            description: "Романтичный цветочный аромат с нотками пачули.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "7 800 ₽",
            priceTo: "22 500 ₽"
        },
        {
            id: 304,
            name: "Dior Homme",
            brand: "Dior",
            description: "Утонченный мужской аромат с ирисовыми нотами.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 300 ₽",
            priceTo: "24 000 ₽"
        },
        {
            id: 305,
            name: "Poison",
            brand: "Dior",
            description: "Загадочный и соблазнительный аромат.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 700 ₽",
            priceTo: "25 500 ₽"
        }
    ],
    
    "Gucci": [
        {
            id: 401,
            name: "Guilty",
            brand: "Gucci",
            description: "Смелый и чувственный аромат.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "7 800 ₽",
            priceTo: "22 000 ₽"
        },
        {
            id: 402,
            name: "Bloom",
            brand: "Gucci",
            description: "Цветочный аромат с нотами жасмина и туберозы.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 200 ₽",
            priceTo: "23 500 ₽"
        },
        {
            id: 403,
            name: "Gucci Guilty Absolute",
            brand: "Gucci",
            description: "Древесный мужской аромат с нотами кожи.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "8 000 ₽",
            priceTo: "23 000 ₽"
        },
        {
            id: 404,
            name: "Bamboo",
            brand: "Gucci",
            description: "Свежий аромат с нотами бергамота и иланг-иланга.",
            image: "https://i.postimg.cc/Gtc0cKb5/Generated-Image-January-31-2026-8-54PM-Photoroom.png",
            priceFrom: "7 900 ₽",
            priceTo: "22 800 ₽"
        }
    ]
};

// Данные для флаконов с указанием объема
const bottlesData = [
    {
        id: 1,
        name: "Флакон 1 мл",
        brand: "Premium",
        description: "Миниатюрный флакон для пробников.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "10 ₽",
        priceTo: "15 ₽",
        volume: 1
    },
    {
        id: 2,
        name: "Флакон 2 мл",
        brand: "Premium",
        description: "Небольшой флакон для дорожной косметички.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "15 ₽",
        priceTo: "20 ₽",
        volume: 2
    },
    {
        id: 3,
        name: "Флакон 5 мл",
        brand: "Premium",
        description: "Стандартный пробник.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "25 ₽",
        priceTo: "30 ₽",
        volume: 5
    },
    {
        id: 4,
        name: "Флакон 10 мл",
        brand: "Premium",
        description: "Небольшой флакон для частого использования.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "40 ₽",
        priceTo: "50 ₽",
        volume: 10
    },
    {
        id: 5,
        name: "Флакон 30 мл",
        brand: "Premium",
        description: "Стандартный объем с дозатором.",
        image: "https://i.postimg.cc/h4QBRTwv/15.jpg",
        priceFrom: "80 ₽",
        priceTo: "100 ₽",
        volume: 30
    },
    {
        id: 6,
        name: "Флакон 50 мл",
        brand: "Premium",
        description: "Большой объем для регулярного использования.",
        image: "https://i.postimg.cc/h4QBRTwv/15.jpg",
        priceFrom: "100 ₽",
        priceTo: "120 ₽",
        volume: 50
    },
    {
        id: 7,
        name: "Флакон 100 мл",
        brand: "Premium",
        description: "Большой экономичный объем.",
        image: "https://i.postimg.cc/h4QBRTwv/15.jpg",
        priceFrom: "150 ₽",
        priceTo: "180 ₽",
        volume: 100
    },
    {
        id: 8,
        name: "Флакон 3 мл",
        brand: "Premium",
        description: "Компактный флакон для пробников.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "20 ₽",
        priceTo: "25 ₽",
        volume: 3
    },
    {
        id: 9,
        name: "Флакон 15 мл",
        brand: "Premium",
        description: "Средний объем для тестирования ароматов.",
        image: "https://i.postimg.cc/h4QBRTwv/15.jpg",
        priceFrom: "60 ₽",
        priceTo: "75 ₽",
        volume: 15
    },
    {
        id: 10,
        name: "Флакон 20 мл",
        brand: "Premium",
        description: "Удобный объем для путешествий.",
        image: "https://i.postimg.cc/h4QBRTwv/15.jpg",
        priceFrom: "70 ₽",
        priceTo: "85 ₽",
        volume: 20
    }
];

// Данные для раствора
const solutionData = [
    {
        id: 1001,
        name: "Парфюмерная вода",
        brand: "Premium",
        description: "Высококачественная парфюмерная вода для создания ароматов.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "500 ₽",
        priceTo: "800 ₽"
    },
    {
        id: 1002,
        name: "Спиртовая основа",
        brand: "Premium",
        description: "Чистая спиртовая основа для парфюмерии.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "300 ₽",
        priceTo: "500 ₽"
    },
    {
        id: 1003,
        name: "Дистиллированная вода",
        brand: "Premium",
        description: "Очищенная вода для создания парфюмерии.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "200 ₽",
        priceTo: "300 ₽"
    }
];

// Данные для аксессуаров
const accessoriesData = [
    {
        id: 2001,
        name: "Принтер для этикеток",
        brand: "Premium",
        description: "Профессиональный принтер для печати этикеток на флаконах.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "5 000 ₽",
        priceTo: "5 000 ₽"
    },
    {
        id: 2002,
        name: "Набор этикеток",
        brand: "Premium",
        description: "100 профессиональных этикеток для флаконов.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "200 ₽",
        priceTo: "200 ₽"
    },
    {
        id: 2003,
        name: "Дозаторы для флаконов",
        brand: "Premium",
        description: "Набор из 10 дозаторов для флаконов разного объема.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "150 ₽",
        priceTo: "150 ₽"
    },
    {
        id: 2004,
        name: "Коробки для упаковки",
        brand: "Premium",
        description: "50 картонных коробок для упаковки флаконов.",
        image: "https://i.postimg.cc/vBkw6Z4C/001.jpg",
        priceFrom: "300 ₽",
        priceTo: "300 ₽"
    }
];

// Текущие фильтры
let currentBrand = null;
let currentNote = null;
let currentVolume = "all";

// Переменные для свайпа
let touchStartX = 0;
let touchEndX = 0;
let isSwiping = false;
const SWIPE_THRESHOLD = 50;

// Порядок вкладок для свайпа
const tabsOrder = ['scents', 'bottles', 'solution', 'accessories'];

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM загружен, инициализация...');
    
    // ===== ИНИЦИАЛИЗАЦИЯ СВАЙПА =====
    initSwipeNavigation();
    
    // ===== ФУНКЦИЯ ОБНОВЛЕНИЯ ВЫСОТЫ =====
    function updateHeights() {
        const mainNav = document.querySelector('.main-nav');
        const innerNavContainer = document.querySelector('.inner-nav-container');
        const mainContent = document.querySelector('.main-content');
        
        if (mainNav && innerNavContainer && mainContent) {
            const mainNavHeight = mainNav.offsetHeight;
            const innerNavHeight = innerNavContainer.offsetHeight;
            
            // Обновляем top для внутренней навигации
            innerNavContainer.style.top = mainNavHeight + 'px';
            
            // Обновляем margin-top для основного контента
            mainContent.style.marginTop = mainNavHeight + 'px';
            
            // Обновляем все контейнеры товаров
            document.querySelectorAll('.products-container').forEach(container => {
                container.style.marginTop = innerNavHeight + 10 + 'px';
            });
        }
    }
    
    // ===== ОСНОВНАЯ НАВИГАЦИЯ =====
    const navDots = document.querySelectorAll('.nav-dot');
    const navLabels = document.querySelectorAll('.nav-label');
    const cards = document.querySelectorAll('.card');
    
    function switchMainTab(tab) {
        if (tab !== 'scents' && tab !== 'bottles' && tab !== 'solution' && tab !== 'accessories') return;
        
        console.log('Переключаем основную вкладку на:', tab);
        
        // Закрываем все выпадающие меню
        closeAllDropdowns();
        
        // Обновляем навигационные точки
        navDots.forEach(dot => {
            dot.classList.remove('active');
            if (dot.getAttribute('data-tab') === tab) {
                dot.classList.add('active');
            }
        });
        
        // Обновляем навигационные лейблы
        navLabels.forEach(label => {
            label.classList.remove('active');
            if (label.getAttribute('data-tab') === tab) {
                label.classList.add('active');
            }
        });
        
        // Обновляем карточки
        cards.forEach(card => {
            card.classList.remove('active');
            if (card.getAttribute('data-tab') === tab) {
                card.classList.add('active');
            }
        });
        
        // Обновляем высоты
        setTimeout(updateHeights, 100);
        
        // Показываем активный контент
        if (tab === 'scents') {
            // Загружаем списки для выпадающих меню
            loadBrandsDropdown();
            loadNotesDropdown();
            // Загружаем ВСЕ товары ароматов
            loadAllScents();
        } else if (tab === 'bottles') {
            // Загружаем список объёмов
            loadVolumesDropdown();
            // Загружаем ВСЕ флаконы
            loadAllBottles();
        } else if (tab === 'solution') {
            // Загружаем раствор
            loadSolution();
        } else if (tab === 'accessories') {
            // Загружаем аксессуары
            loadAccessories();
        }
    }
    
    // Обработчики для основной навигации
    navDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const tab = dot.getAttribute('data-tab');
            switchMainTab(tab);
        });
    });
    
    navLabels.forEach(label => {
        label.addEventListener('click', () => {
            const tab = label.getAttribute('data-tab');
            switchMainTab(tab);
        });
    });
    
    // ===== ВЫПАДАЮЩИЕ МЕНЮ =====
    const dropdownBtns = document.querySelectorAll('.dropdown-btn');
    const dropdowns = document.querySelectorAll('.dropdown-menu');
    
    // Закрытие всех выпадающих меню
    function closeAllDropdowns() {
        dropdowns.forEach(dropdown => {
            dropdown.classList.remove('active');
        });
        
        dropdownBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Скрываем оверлей на мобильных
        const overlay = document.querySelector('.dropdown-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
    
    // Создание оверлея для мобильных
    function createDropdownOverlay() {
        const overlay = document.createElement('div');
        overlay.className = 'dropdown-overlay';
        overlay.addEventListener('click', closeAllDropdowns);
        document.body.appendChild(overlay);
        return overlay;
    }
    
    // Показать оверлей
    function showDropdownOverlay() {
        const overlay = document.querySelector('.dropdown-overlay') || createDropdownOverlay();
        overlay.classList.add('active');
    }
    
    // Скрыть оверлей
    function hideDropdownOverlay() {
        const overlay = document.querySelector('.dropdown-overlay');
        if (overlay) {
            overlay.classList.remove('active');
        }
    }
    
    // Обработчики для выпадающих меню
    dropdownBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            
            const dropdownId = this.getAttribute('data-dropdown');
            const dropdown = document.getElementById(dropdownId);
            
            if (!dropdown) return;
            
            // Если меню уже открыто, закрываем его
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                this.classList.remove('active');
                hideDropdownOverlay();
            } else {
                // Закрываем все другие меню
                closeAllDropdowns();
                
                // Открываем нужное меню
                dropdown.classList.add('active');
                this.classList.add('active');
                
                // Показываем оверлей на мобильных
                if (window.innerWidth <= 1000) {
                    showDropdownOverlay();
                }
            }
        });
    });
    
    // Закрытие меню при клике вне их
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.dropdown-menu') && !e.target.closest('.dropdown-btn')) {
            closeAllDropdowns();
            hideDropdownOverlay();
        }
    });
    
    // Обработчики для кнопок "Бренд" и "Ноты"
    document.querySelectorAll('.card[data-tab="scents"] .inner-nav-btn').forEach(btn => {
        btn.addEventListener('click', function(e) {
            // Убираем активный класс со всех кнопок ароматов
            document.querySelectorAll('.card[data-tab="scents"] .inner-nav-btn').forEach(b => {
                b.classList.remove('active');
            });
            // Добавляем активный класс нажатой кнопке
            this.classList.add('active');
        });
    });
    
    // ===== ЗАГРУЗКА ВЫПАДАЮЩИХ МЕНЮ =====
    
    // Загрузка брендов в выпадающее меню
    function loadBrandsDropdown() {
        const brandsList = document.getElementById('brands-list');
        if (!brandsList) return;
        
        // Очищаем список
        brandsList.innerHTML = '';
        
        // Добавляем опцию "Все бренды"
        const allBrandsItem = document.createElement('div');
        allBrandsItem.className = `dropdown-item all-option ${!currentBrand ? 'selected' : ''}`;
        allBrandsItem.textContent = 'Все бренды';
        allBrandsItem.addEventListener('click', () => {
            selectBrand(null);
            closeAllDropdowns();
            hideDropdownOverlay();
        });
        brandsList.appendChild(allBrandsItem);
        
        // Сортируем бренды по алфавиту
        const sortedBrands = [...uniqueBrands].sort((a, b) => a.localeCompare(b));
        
        // Добавляем бренды
        sortedBrands.forEach(brand => {
            const item = document.createElement('div');
            item.className = `dropdown-item ${currentBrand === brand ? 'selected' : ''}`;
            item.textContent = brand;
            item.addEventListener('click', () => {
                selectBrand(brand);
                closeAllDropdowns();
                hideDropdownOverlay();
            });
            brandsList.appendChild(item);
        });
        
        // Поиск по брендам
        const brandSearch = document.getElementById('brand-search');
        if (brandSearch) {
            brandSearch.value = ''; // Очищаем поиск
            brandSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const items = brandsList.querySelectorAll('.dropdown-item');
                
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(searchTerm) || searchTerm === '') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }
    
    // Загрузка нот в выпадающее меню
    function loadNotesDropdown() {
        const notesList = document.getElementById('notes-list');
        if (!notesList) return;
        
        // Очищаем список
        notesList.innerHTML = '';
        
        // Добавляем опцию "Все ноты"
        const allNotesItem = document.createElement('div');
        allNotesItem.className = `dropdown-item all-option ${!currentNote ? 'selected' : ''}`;
        allNotesItem.textContent = 'Все ноты';
        allNotesItem.addEventListener('click', () => {
            selectNote(null);
            closeAllDropdowns();
            hideDropdownOverlay();
        });
        notesList.appendChild(allNotesItem);
        
        // Сортируем ноты по алфавиту
        const sortedNotes = [...fragranceNotes].sort((a, b) => a.localeCompare(b));
        
        // Добавляем ноты
        sortedNotes.forEach(note => {
            const item = document.createElement('div');
            item.className = `dropdown-item ${currentNote === note ? 'selected' : ''}`;
            item.textContent = note;
            item.addEventListener('click', () => {
                selectNote(note);
                closeAllDropdowns();
                hideDropdownOverlay();
            });
            notesList.appendChild(item);
        });
        
        // Поиск по нотам
        const noteSearch = document.getElementById('note-search');
        if (noteSearch) {
            noteSearch.value = ''; // Очищаем поиск
            noteSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const items = notesList.querySelectorAll('.dropdown-item');
                
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(searchTerm) || searchTerm === '') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }
    
    // Загрузка объёмов в выпадающее меню
    function loadVolumesDropdown() {
        const volumesList = document.getElementById('volumes-list');
        if (!volumesList) return;
        
        // Очищаем список
        volumesList.innerHTML = '';
        
        // Добавляем опцию "Все объёмы"
        const allVolumesItem = document.createElement('div');
        allVolumesItem.className = `dropdown-item all-option ${currentVolume === 'all' ? 'selected' : ''}`;
        allVolumesItem.textContent = 'Все объёмы';
        allVolumesItem.addEventListener('click', () => {
            selectVolume('all');
            closeAllDropdowns();
            hideDropdownOverlay();
        });
        volumesList.appendChild(allVolumesItem);
        
        // Добавляем объёмы
        volumes.forEach(volume => {
            const item = document.createElement('div');
            item.className = `dropdown-item ${currentVolume === volume ? 'selected' : ''}`;
            item.textContent = volume;
            item.addEventListener('click', () => {
                selectVolume(volume);
                closeAllDropdowns();
                hideDropdownOverlay();
            });
            volumesList.appendChild(item);
        });
        
        // Поиск по объёмам
        const volumeSearch = document.getElementById('volume-search');
        if (volumeSearch) {
            volumeSearch.value = ''; // Очищаем поиск
            volumeSearch.addEventListener('input', function() {
                const searchTerm = this.value.toLowerCase();
                const items = volumesList.querySelectorAll('.dropdown-item');
                
                items.forEach(item => {
                    const text = item.textContent.toLowerCase();
                    if (text.includes(searchTerm) || searchTerm === '') {
                        item.style.display = 'block';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        }
    }
    
    // Выбор бренда
    function selectBrand(brand) {
        currentBrand = brand;
        loadBrandsDropdown();
        if (brand) {
            loadScentsByBrand(brand);
        } else {
            loadAllScents();
        }
    }
    
    // Выбор ноты
    function selectNote(note) {
        currentNote = note;
        loadNotesDropdown();
        if (note) {
            loadScentsByNote(note);
        } else {
            loadAllScents();
        }
    }
    
    // Выбор объёма
    function selectVolume(volume) {
        currentVolume = volume;
        loadVolumesDropdown();
        if (volume === 'all') {
            loadAllBottles();
        } else {
            loadBottlesByVolume(volume);
        }
    }
    
    // ===== ЗАГРУЗКА ТОВАРОВ =====
    
    // Загрузка ВСЕХ ароматов (по умолчанию)
    function loadAllScents() {
        const scentsGrid = document.getElementById('scents-grid');
        if (!scentsGrid) return;
        
        // Очищаем сетку
        scentsGrid.innerHTML = '';
        
        // Собираем все товары из всех брендов
        let allProducts = [];
        Object.values(productsByBrand).forEach(brandProducts => {
            allProducts = allProducts.concat(brandProducts);
        });
        
        // Загружаем товары
        allProducts.forEach(product => {
            const productCard = createProductCard(product);
            scentsGrid.appendChild(productCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (allProducts.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Ароматы не найдены</p>
                <p>Для данного раздела пока нет товаров</p>
            `;
            scentsGrid.appendChild(noProducts);
        }
    }
    
    // Загрузка ароматов по бренду
    function loadScentsByBrand(brand) {
        const scentsGrid = document.getElementById('scents-grid');
        if (!scentsGrid) return;
        
        // Очищаем сетку
        scentsGrid.innerHTML = '';
        
        if (productsByBrand[brand]) {
            // Загружаем товары
            productsByBrand[brand].forEach(product => {
                const productCard = createProductCard(product);
                scentsGrid.appendChild(productCard);
            });
            
            // Если товаров нет, показываем сообщение
            if (productsByBrand[brand].length === 0) {
                const noProducts = document.createElement('div');
                noProducts.className = 'no-products';
                noProducts.innerHTML = `
                    <p>Ароматы не найдены</p>
                    <p>Для данного бренда пока нет товаров</p>
                `;
                scentsGrid.appendChild(noProducts);
            }
        }
    }
    
    // Загрузка ароматов по ноте
    function loadScentsByNote(note) {
        const scentsGrid = document.getElementById('scents-grid');
        if (!scentsGrid) return;
        
        // Очищаем сетку
        scentsGrid.innerHTML = '';
        
        // Собираем все товары из всех брендов
        let allProducts = [];
        Object.values(productsByBrand).forEach(brandProducts => {
            allProducts = allProducts.concat(brandProducts);
        });
        
        // Фильтруем товары по нотам
        const filteredProducts = allProducts.filter(product => 
            product.description.toLowerCase().includes(note.toLowerCase())
        );
        
        // Загружаем товары
        filteredProducts.forEach(product => {
            const productCard = createProductCard(product);
            scentsGrid.appendChild(productCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (filteredProducts.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Ароматы не найдены</p>
                <p>Для данной ноты пока нет товаров</p>
            `;
            scentsGrid.appendChild(noProducts);
        }
    }
    
    // Загрузка ВСЕХ флаконов (по умолчанию)
    function loadAllBottles() {
        const volumesGrid = document.getElementById('volumes-grid');
        if (!volumesGrid) return;
        
        // Очищаем сетку
        volumesGrid.innerHTML = '';
        
        // Загружаем флаконы
        bottlesData.forEach(bottle => {
            const bottleCard = createProductCard(bottle);
            volumesGrid.appendChild(bottleCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (bottlesData.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Флаконы не найдены</p>
                <p>Для данного раздела пока нет товаров</p>
            `;
            volumesGrid.appendChild(noProducts);
        }
    }
    
    // Загрузка флаконов по объёму
    function loadBottlesByVolume(volume) {
        const volumesGrid = document.getElementById('volumes-grid');
        if (!volumesGrid) return;
        
        // Очищаем сетку
        volumesGrid.innerHTML = '';
        
        // Извлекаем число из строки объёма (например, "1 мл" -> 1)
        const volumeNum = parseInt(volume);
        
        // Фильтруем флаконы по объёму
        const filteredBottles = bottlesData.filter(bottle => {
            return bottle.volume === volumeNum;
        });
        
        // Загружаем флаконы
        filteredBottles.forEach(bottle => {
            const bottleCard = createProductCard(bottle);
            volumesGrid.appendChild(bottleCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (filteredBottles.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Флаконы не найдены</p>
                <p>Для данного объема пока нет товаров</p>
            `;
            volumesGrid.appendChild(noProducts);
        }
    }
    
    // Загрузка раствора
    function loadSolution() {
        const solutionGrid = document.getElementById('solution-grid');
        if (!solutionGrid) return;
        
        // Очищаем сетку
        solutionGrid.innerHTML = '';
        
        // Загружаем товары
        solutionData.forEach(product => {
            const productCard = createProductCard(product);
            solutionGrid.appendChild(productCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (solutionData.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Товары не найдены</p>
                <p>Для данного раздела пока нет товаров</p>
            `;
            solutionGrid.appendChild(noProducts);
        }
    }
    
    // Загрузка аксессуары
    function loadAccessories() {
        const accessoriesGrid = document.getElementById('accessories-grid');
        if (!accessoriesGrid) return;
        
        // Очищаем сетку
        accessoriesGrid.innerHTML = '';
        
        // Загружаем аксессуары
        accessoriesData.forEach(accessory => {
            const accessoryCard = createProductCard(accessory);
            accessoriesGrid.appendChild(accessoryCard);
        });
        
        // Если товаров нет, показываем сообщение
        if (accessoriesData.length === 0) {
            const noProducts = document.createElement('div');
            noProducts.className = 'no-products';
            noProducts.innerHTML = `
                <p>Аксессуары не найдены</p>
                <p>Для данного раздела пока нет товаров</p>
            `;
            accessoriesGrid.appendChild(noProducts);
        }
    }
    
    // Создание карточки товара (без слова "Цена")
    function createProductCard(product) {
        const card = document.createElement('div');
        card.className = 'product-card';
        
        // Проверяем, одинаковая ли цена
        const isSamePrice = product.priceFrom === product.priceTo;
        
        card.innerHTML = `
            <div class="product-image-container">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="product-img" loading="lazy">
                </div>
            </div>
            <div class="product-content">
                <div class="product-brand">${product.brand}</div>
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="price-container">
                    <div class="price-range">
                        ${isSamePrice ? 
                            `<span class="price">${product.priceFrom}</span>` : 
                            `<span class="price price-from">${product.priceFrom}</span>
                             <span style="color: var(--gray-dark);">-</span>
                             <span class="price price-to">${product.priceTo}</span>`
                        }
                    </div>
                </div>
            </div>
        `;
        
        return card;
    }
    
    // ===== ИНИЦИАЛИЗАЦИЯ =====
    switchMainTab('scents');
    
    // Обновляем высоты при загрузке
    setTimeout(() => {
        updateHeights();
        loadBrandsDropdown();
        loadNotesDropdown();
        loadVolumesDropdown();
    }, 100);
    
    // Обновляем высоты при изменении размера окна
    window.addEventListener('resize', updateHeights);
    
    console.log('Инициализация завершена');
});

// ===== ФУНКЦИИ ДЛЯ СВАЙПА =====

function initSwipeNavigation() {
    const appContainer = document.querySelector('.app-container');
    if (!appContainer) return;
    
    // Создаем индикаторы свайпа
    createSwipeIndicators();
    
    // Обработчик начала касания
    appContainer.addEventListener('touchstart', handleTouchStart, { passive: true });
    
    // Обработчик движения пальцем
    appContainer.addEventListener('touchmove', handleTouchMove, { passive: true });
    
    // Обработчик окончания касания
    appContainer.addEventListener('touchend', handleTouchEnd);
    
    // Также добавляем поддержку мыши для десктопа
    appContainer.addEventListener('mousedown', handleMouseStart);
    appContainer.addEventListener('mousemove', handleMouseMove);
    appContainer.addEventListener('mouseup', handleMouseEnd);
    appContainer.addEventListener('mouseleave', handleMouseEnd);
}

function createSwipeIndicators() {
    const mainContent = document.querySelector('.main-content');
    if (!mainContent) return;
    
    // Индикатор для свайпа влево
    const leftIndicator = document.createElement('div');
    leftIndicator.className = 'swipe-indicator left';
    leftIndicator.innerHTML = '<i class="fas fa-chevron-left"></i>';
    
    // Индикатор для свайпа вправо
    const rightIndicator = document.createElement('div');
    rightIndicator.className = 'swipe-indicator right';
    rightIndicator.innerHTML = '<i class="fas fa-chevron-right"></i>';
    
    mainContent.appendChild(leftIndicator);
    mainContent.appendChild(rightIndicator);
}

function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
    isSwiping = true;
    
    // Показываем индикаторы
    showSwipeIndicators();
}

function handleTouchMove(e) {
    if (!isSwiping) return;
    
    const touchCurrentX = e.touches[0].clientX;
    const diffX = touchCurrentX - touchStartX;
    
    // Показываем индикатор в зависимости от направления
    updateSwipeIndicators(diffX);
}

function handleTouchEnd(e) {
    if (!isSwiping) return;
    
    touchEndX = e.changedTouches[0].clientX;
    handleSwipe();
    
    isSwiping = false;
    hideSwipeIndicators();
}

function handleMouseStart(e) {
    touchStartX = e.clientX;
    isSwiping = true;
    
    // Показываем индикаторы
    showSwipeIndicators();
}

function handleMouseMove(e) {
    if (!isSwiping) return;
    
    const mouseCurrentX = e.clientX;
    const diffX = mouseCurrentX - touchStartX;
    
    // Показываем индикатор в зависимости от направления
    updateSwipeIndicators(diffX);
}

function handleMouseEnd(e) {
    if (!isSwiping) return;
    
    touchEndX = e.clientX;
    handleSwipe();
    
    isSwiping = false;
    hideSwipeIndicators();
}

function handleSwipe() {
    const diffX = touchEndX - touchStartX;
    
    // Если свайп недостаточно длинный, игнорируем
    if (Math.abs(diffX) < SWIPE_THRESHOLD) return;
    
    // Определяем текущую активную вкладку
    const activeTab = document.querySelector('.card.active').getAttribute('data-tab');
    const currentIndex = tabsOrder.indexOf(activeTab);
    
    if (currentIndex === -1) return;
    
    // Свайп вправо (палец двигается слева направо) -> следующая вкладка
    if (diffX > 0) {
        if (currentIndex < tabsOrder.length - 1) {
            const nextTab = tabsOrder[currentIndex + 1];
            switchTabBySwipe(nextTab);
        }
    }
    // Свайп влево (палец двигается справа налево) -> предыдущая вкладка
    else {
        if (currentIndex > 0) {
            const prevTab = tabsOrder[currentIndex - 1];
            switchTabBySwipe(prevTab);
        }
    }
}

function switchTabBySwipe(tab) {
    // Находим элементы для переключения
    const navDot = document.querySelector(`.nav-dot[data-tab="${tab}"]`);
    const navLabel = document.querySelector(`.nav-label[data-tab="${tab}"]`);
    
    if (navDot && navLabel) {
        // Имитируем клик по навигационной точке
        navDot.click();
    }
}

function showSwipeIndicators() {
    const indicators = document.querySelectorAll('.swipe-indicator');
    indicators.forEach(indicator => {
        indicator.classList.add('show');
    });
}

function hideSwipeIndicators() {
    const indicators = document.querySelectorAll('.swipe-indicator');
    indicators.forEach(indicator => {
        indicator.classList.remove('show');
    });
}

function updateSwipeIndicators(diffX) {
    const leftIndicator = document.querySelector('.swipe-indicator.left');
    const rightIndicator = document.querySelector('.swipe-indicator.right');
    
    if (diffX > 50) {
        // Показываем правый индикатор (свайп вправо)
        rightIndicator.classList.add('show');
        leftIndicator.classList.remove('show');
    } else if (diffX < -50) {
        // Показываем левый индикатор (свайп влево)
        leftIndicator.classList.add('show');
        rightIndicator.classList.remove('show');
    } else {
        // Свайп слишком короткий, скрываем оба индикатора
        leftIndicator.classList.remove('show');
        rightIndicator.classList.remove('show');
    }
}
