import { createContext, useContext, useMemo, useState } from "react";
import { LoadCart, LoadLiced } from "./LocaleStorege";

const GlobalContext = createContext();



export const GlobalProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(LoadCart());
  const [likedProducts, setLikedProducts] = useState(LoadLiced())
  const [CorrectPromocode, setCorrectPromocode] = useState('Aloha')

const data = useMemo(() => [
    // 1. Lampa Classic
    {
        id: 1,
        stars: 4,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Classic',
        price: 350,
        oldPrice: 700,
        date: '2025-11-01',
        room: 'Living Room',
        quantity: 1,
        comments: [
            { user: { name: 'Алексей И.', avatar: 'https://i.pravatar.cc/40?img=1' }, text: "Надежный, проверенный дизайн. Единственный минус – немного сложно менять лампочку." },
            { user: { name: 'Мария С.', avatar: 'https://i.pravatar.cc/40?img=2' }, text: "Отличная классическая модель! Идеально вписалась в интерьер гостиной. За такую цену – находка." },
            { user: { name: 'Игорь К.', avatar: 'https://i.pravatar.cc/40?img=3' }, text: "Доставка быстрая, упаковка целая. Есть небольшой люфт в креплении, но не критично." }
        ]
    },
    // 2. Lampa Modern
    {
        id: 2,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'alt',
        discount: '-50',
        name: 'Lampa Modern',
        price: 980,
        date: '2025-11-03',
        room: 'Bedroom',
        quantity: 1,
        comments: [
            { user: { name: 'Елена П.', avatar: 'https://i.pravatar.cc/40?img=4' }, text: "Просто восторг! Современный дизайн, очень стильно. Легко протирать от пыли." },
            { user: { name: 'Дмитрий В.', avatar: 'https://i.pravatar.cc/40?img=5' }, text: "Очень качественное исполнение. Стал акцентом в спальне. 5 звёзд без сомнений." },
            { user: { name: 'Ольга Р.', avatar: 'https://i.pravatar.cc/40?img=6' }, text: "Немного сложная инструкция по сборке, но сам светильник шикарный." },
            { user: { name: 'Сергей Л.', avatar: 'https://i.pravatar.cc/40?img=7' }, text: "Купил две штуки, свет мягкий, приятный. Создает уютную атмосферу." }
        ]
    },
    // 3. Lampa Retro (Изменен IMG)
    {
        id: 3,
        stars: 2,
        img: 'https://i.postimg.cc/B61gccYN/cea62cb63097d74a9f45d2110909ec266f8b0923.jpg',
        status: 'sale',
        discount: '-50',
        name: 'Lampa Retro',
        price: 150,
        oldPrice: 300,
        date: '2025-10-28',
        room: 'Dinning',
        quantity: 1,
        comments: [
            { user: { name: 'Николай Г.', avatar: 'https://i.pravatar.cc/40?img=8' }, text: "Ужасное качество. Пластик выглядит как дешёвая имитация металла. Не стоит этих денег." },
            { user: { name: 'Анна Ф.', avatar: 'https://i.pravatar.cc/40?img=9' }, text: "Пришёл с трещиной на абажуре. Очень расстроена, пришлось оформлять возврат." }
        ]
    },
    // 4. Lampa Nordic
    {
        id: 4,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Nordic',
        price: 4999,
        date: '2025-11-05',
        room: 'Outdoor',
        quantity: 1,
        comments: [
            { user: { name: 'Ксения З.', avatar: 'https://i.pravatar.cc/40?img=13' }, text: "Настоящее скандинавское чудо! Прочный, водонепроницаемый, отлично пережил уже несколько дождей." },
            { user: { name: 'Павел Н.', avatar: 'https://i.pravatar.cc/40?img=14' }, text: "Дает очень мягкий, рассеянный свет. Идеально для летних вечеров на террасе." },
            { user: { name: 'Марина Т.', avatar: 'https://i.pravatar.cc/40?img=15' }, text: "Цена кусается, но качество того стоит. Премиальный вид." },
            { user: { name: 'Виталий Р.', avatar: 'https://i.pravatar.cc/40?img=16' }, text: "Профессиональный светильник. Работает как часы. Монтаж легкий." },
            { user: { name: 'София В.', avatar: 'https://i.pravatar.cc/40?img=17' }, text: "Я в восторге! Смотрится дорого и очень эффектно." }
        ]
    },
    // 5. Lampa Mini (Изменен IMG)
    {
        id: 5,
        stars: 4,
        img: 'https://i.postimg.cc/vTt53PWx/e663ed234834f812776cff5890f2fd6fb241c989.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Mini',
        price: 50,
        date: '2025-11-02',
        room: 'Bathroom',
        quantity: 1,
        comments: [
            { user: { name: 'Галина М.', avatar: 'https://i.pravatar.cc/40?img=18' }, text: "Отлично для маленькой ванной. Компактный и дает достаточно света." },
            { user: { name: 'Роман Д.', avatar: 'https://i.pravatar.cc/40?img=19' }, text: "Самый бюджетный, но вполне рабочий вариант. Доволен покупкой." },
            { user: { name: 'Лиза Ж.', avatar: 'https://i.pravatar.cc/40?img=20' }, text: "Простой, но стильный. Идеально для подсветки зеркала." }
        ]
    },
    // 6. Lampa Soft
    {
        id: 6,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'alt',
        discount: '-50',
        name: 'Lampa Soft',
        price: 640,
        oldPrice: 1280,
        date: '2025-10-30',
        room: 'Bedroom',
        quantity: 1,
        comments: [
            { user: { name: 'Наталья Ю.', avatar: 'https://i.pravatar.cc/40?img=21' }, text: "Свет действительно очень мягкий, как я и хотела. Идеально для чтения перед сном." },
            { user: { name: 'Денис П.', avatar: 'https://i.pravatar.cc/40?img=22' }, text: "Создает расслабляющую атмосферу. Никаких резких теней. Шикарно." },
            { user: { name: 'Виктория Ф.', avatar: 'https://i.pravatar.cc/40?img=23' }, text: "Очень красивый плафон, рассеивает свет равномерно. Пять баллов." }
        ]
    },
    // 7. Lampa Glass
    {
        id: 7,
        stars: 5,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'sale',
        discount: '-50',
        name: 'Lampa Glass',
        price: 1800,
        date: '2025-11-04',
        room: 'Living Room',
        quantity: 1,
        comments: [
            { user: { name: 'Максим Б.', avatar: 'https://i.pravatar.cc/40?img=24' }, text: "Стекло очень толстое и качественное. Настоящий хрустальный блеск!" },
            { user: { name: 'Светлана К.', avatar: 'https://i.pravatar.cc/40?img=25' }, text: "Вживую выглядит даже лучше, чем на фото. Главный акцент в комнате." },
            { user: { name: 'Егор Л.', avatar: 'https://i.pravatar.cc/40?img=26' }, text: "Очень элегантно. Да, дорого, но это инвестиция в красоту." },
            { user: { name: 'Алина З.', avatar: 'https://i.pravatar.cc/40?img=27' }, text: "Пришла быстро и без повреждений. Магазину спасибо за надежную упаковку." }
        ]
    },
    // 8. Lampa Metal (Изменен IMG)
    {
        id: 8,
        stars: 3,
        img: 'https://i.postimg.cc/Bvjc4BGd/80174d32bf1e0489573e6447b942b7f3e359ecb6.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Metal',
        price: 450,
        oldPrice: 900,
        date: '2025-10-29',
        room: 'Dinning',
        quantity: 1,
        comments: [
            { user: { name: 'Вадим Е.', avatar: 'https://i.pravatar.cc/40?img=28' }, text: "Крепкий, увесистый. Выглядит брутально, как я и хотел. Но был один скол на корпусе." },
            { user: { name: 'Лариса Д.', avatar: 'https://i.pravatar.cc/40?img=29' }, text: "Индустриальный стиль на любителя. Мне нравится, мужу — не очень. На любителя." },
            { user: { name: 'Борис Н.', avatar: 'https://i.pravatar.cc/40?img=30' }, text: "Ожидал, что будет более матовый, но он глянцевый. Пришлось перекрашивать." }
        ]
    },
    // 9. Lampa Sky
    {
        id: 9,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Sky',
        price: 1500,
        date: '2025-11-06',
        room: 'Outdoor',
        quantity: 1,
        comments: [
            { user: { name: 'Екатерина Б.', avatar: 'https://i.pravatar.cc/40?img=31' }, text: "Светит очень мощно. Отличный вариант для освещения большого двора." },
            { user: { name: 'Федор Р.', avatar: 'https://i.pravatar.cc/40?img=32' }, text: "Действительно, эффект «неба». Очень необычный и красивый свет." },
            { user: { name: 'Ирина Л.', avatar: 'https://i.pravatar.cc/40?img=33' }, text: "Легко монтировать, все провода подписаны. Качественный уличный свет." },
            { user: { name: 'Кирилл В.', avatar: 'https://i.pravatar.cc/40?img=34' }, text: "Пять звезд! Лучшее соотношение цены и качества среди уличных светильников." },
            { user: { name: 'Алла К.', avatar: 'https://i.pravatar.cc/40?img=35' }, text: "Заказала три штуки. Смотрятся как единый ансамбль. Очень довольна." },
            { user: { name: 'Георгий М.', avatar: 'https://i.pravatar.cc/40?img=36' }, text: "Надеюсь, прослужит долго. Пока что без нареканий, работает стабильно." }
        ]
    },
    // 10. Lampa Art
    {
        id: 10,
        stars: 4,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Art',
        price: 2500,
        oldPrice: 5000,
        date: '2025-10-31',
        room: 'Bathroom',
        quantity: 1,
        comments: [
            { user: { name: 'Олег Н.', avatar: 'https://i.pravatar.cc/40?img=37' }, text: "Это не просто лампа, это арт-объект! Ванная комната преобразилась." },
            { user: { name: 'Яна С.', avatar: 'https://i.pravatar.cc/40?img=38' }, text: "Смелый дизайн, смотрится потрясающе. Дороговато, но оно того стоит." },
            { user: { name: 'Артем Д.', avatar: 'https://i.pravatar.cc/40?img=39' }, text: "Влагозащита на уровне, никаких проблем в ванной. Функциональность и красота." },
            { user: { name: 'Полина Т.', avatar: 'https://i.pravatar.cc/40?img=40' }, text: "Минус звезда за долгую доставку. Сам светильник безупречен." }
        ]
    },
    // 11. Lampa Simple
    {
        id: 11,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'alt',
        discount: '-50',
        name: 'Lampa Simple',
        price: 490,
        date: '2025-11-07',
        room: 'Bedroom',
        quantity: 1,
        comments: [
            { user: { name: 'Глеб П.', avatar: 'https://i.pravatar.cc/40?img=41' }, text: "Идеальная простота. Не отвлекает, дает ровный свет. То, что нужно для спальни." },
            { user: { name: 'Вера Л.', avatar: 'https://i.pravatar.cc/40?img=42' }, text: "Быстро установили, работает тихо, не мерцает. Очень довольна." }
        ]
    },
    // 12. Lampa Line (Изменен IMG)
    {
        id: 12,
        stars: 5,
        img: 'https://i.postimg.cc/B61gccYN/cea62cb63097d74a9f45d2110909ec266f8b0923.jpg',
        status: 'sale',
        discount: '-50',
        name: 'Lampa Line',
        price: 1100,
        oldPrice: 2200,
        date: '2025-10-27',
        room: 'Dinning',
        quantity: 1,
        comments: [
            { user: { name: 'Макар Г.', avatar: 'https://i.pravatar.cc/40?img=43' }, text: "Линейный дизайн очень круто смотрится над столом. Современная классика." },
            { user: { name: 'Юлия Т.', avatar: 'https://i.pravatar.cc/40?img=44' }, text: "Рассеивает свет равномерно, нет темных пятен. Очень стильно и функционально." },
            { user: { name: 'Денис Ф.', avatar: 'https://i.pravatar.cc/40?img=45' }, text: "Регулируется по высоте, что очень удобно. Однозначно рекомендую!" },
            { user: { name: 'Анна М.', avatar: 'https://i.pravatar.cc/40?img=46' }, text: "Выглядит дорого, а по акции цена была просто сказка!" },
            { user: { name: 'Иван К.', avatar: 'https://i.pravatar.cc/40?img=47' }, text: "Сложно повесить ровно, но после установки выглядит потрясающе." }
        ]
    },
    // 13. Lampa White
    {
        id: 13,
        stars: 4,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa White',
        price: 750,
        date: '2025-11-08',
        room: 'Living Room',
        quantity: 1,
        comments: [
            { user: { name: 'Семён З.', avatar: 'https://i.pravatar.cc/40?img=48' }, text: "Чистый белый цвет, не желтит. Отлично сливается с потолком." },
            { user: { name: 'Лидия П.', avatar: 'https://i.pravatar.cc/40?img=49' }, text: "Минимализм в лучшем виде. Яркий и компактный." },
            { user: { name: 'Евгений В.', avatar: 'https://i.pravatar.cc/40?img=50' }, text: "Хорошая цена за такое качество. Пришел идеально чистым." }
        ]
    },
    // 14. Lampa Deco
    {
        id: 14,
        stars: 5,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Deco',
        price: 1300,
        date: '2025-11-09',
        room: 'Bathroom',
        quantity: 1,
        comments: [
            { user: { name: 'Алла Ч.', avatar: 'https://i.pravatar.cc/40?img=51' }, text: "Обожаю стиль ар-деко! Эта лампа – изюминка моей ванной." },
            { user: { name: 'Роман К.', avatar: 'https://i.pravatar.cc/40?img=52' }, text: "Детализация на высшем уровне. Выглядит очень дорого и изысканно." },
            { user: { name: 'Ева Л.', avatar: 'https://i.pravatar.cc/40?img=53' }, text: "Стильная, необычная, привлекает внимание. Очень довольна покупкой." }
        ]
    },
    // 15. Lampa Base (Изменен IMG)
    {
        id: 15,
        stars: 4,
        img: 'https://i.postimg.cc/Bvjc4BGd/80174d32bf1e0489573e6447b942b7f3e359ecb6.jpg',
        status: 'alt',
        discount: '-50',
        name: 'Lampa Base',
        price: 290,
        oldPrice: 580,
        date: '2025-10-26',
        room: 'Outdoor',
        quantity: 1,
        comments: [
            { user: { name: 'Геннадий М.', avatar: 'https://i.pravatar.cc/40?img=54' }, text: "Базовый уличный светильник. Работает, не ломается. Прост и надежен." },
            { user: { name: 'Татьяна З.', avatar: 'https://i.pravatar.cc/40?img=55' }, text: "Функционально и недорого. Хорошо освещает входную группу." }
        ]
    },
    // 16. Lampa Pure
    {
        id: 16,
        stars: 3,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'sale',
        discount: '-50',
        name: 'Lampa Pure',
        price: 600,
        date: '2025-11-10',
        room: 'Living Room',
        quantity: 1,
        comments: [
            { user: { name: 'Михаил Т.', avatar: 'https://i.pravatar.cc/40?img=56' }, text: "Свет хороший, но пластик корпуса выглядит дешево. Ожидал большего за эту цену." },
            { user: { name: 'Кристина Д.', avatar: 'https://i.pravatar.cc/40?img=57' }, text: "Установка заняла много времени. Инструкция не очень понятная." },
            { user: { name: 'Антон П.', avatar: 'https://i.pravatar.cc/40?img=58' }, text: "Купил по скидке, поэтому не жалею. Полную цену платить бы не стал." }
        ]
    },
    // 17. Lampa Gold (Изменен IMG)
    {
        id: 17,
        stars: 5,
        img: 'https://i.postimg.cc/vTt53PWx/e663ed234834f812776cff5890f2fd6fb241c989.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Gold',
        price: 3200,
        oldPrice: 6400,
        date: '2025-11-11',
        room: 'Dinning',
        quantity: 1,
        comments: [
            { user: { name: 'Жанна В.', avatar: 'https://i.pravatar.cc/40?img=59' }, text: "Роскошь! Золотое покрытие выглядит очень богато и не стирается." },
            { user: { name: 'Валентин К.', avatar: 'https://i.pravatar.cc/40?img=60' }, text: "Преобразил всю столовую. Главный предмет гордости!" },
            { user: { name: 'Людмила Ф.', avatar: 'https://i.pravatar.cc/40?img=61' }, text: "Теплый, уютный свет. Идеально для ужинов. Спасибо!" },
            { user: { name: 'Аркадий Б.', avatar: 'https://i.pravatar.cc/40?img=62' }, text: "Дорого, но это премиум-класс. Видно сразу." }
        ]
    },
    // 18. Lampa Crystal
    {
        id: 18,
        stars: 4,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Crystal',
        price: 4800,
        date: '2025-11-12',
        room: 'Outdoor',
        quantity: 1,
        comments: [
            { user: { name: 'Рита З.', avatar: 'https://i.pravatar.cc/40?img=63' }, text: "Невероятно красиво переливается на солнце. Действительно, как хрусталь." },
            { user: { name: 'Илья Л.', avatar: 'https://i.pravatar.cc/40?img=64' }, text: "Немного опасаюсь за его прочность на улице, но выглядит шикарно." },
            { user: { name: 'Софья Д.', avatar: 'https://i.pravatar.cc/40?img=65' }, text: "Изящный и элегантный. Очень довольна, что рискнула купить." }
        ]
    },
    // 19. Lampa Tube (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 19,
        stars: 5,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'alt',
        discount: '-20',
        name: 'Lampa Tube',
        price: 590,
        date: '2025-11-13',
        room: 'Corridor',
        quantity: 1,
        comments: [
            { user: { name: 'Василий Т.', avatar: 'https://i.pravatar.cc/40?img=66' }, text: "Компактная трубка, идеальна для коридора. Не занимает место." },
            { user: { name: 'Надежда Р.', avatar: 'https://i.pravatar.cc/40?img=67' }, text: "Светит очень ярко и ровно. Заменила старые светильники." },
            { user: { name: 'Богдан Ф.', avatar: 'https://i.pravatar.cc/40?img=68' }, text: "Быстрая установка, отличное качество материалов." }
        ]
    },
    // 20. Lampa Sphere (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 20,
        stars: 4,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-10',
        name: 'Lampa Sphere',
        price: 1990,
        date: '2025-11-14',
        room: 'Living Room',
        quantity: 1,
        comments: [
            { user: { name: 'Ирина А.', avatar: 'https://i.pravatar.cc/40?img=69' }, text: "Необычная форма, как будто парит в воздухе. Очень современно." },
            { user: { name: 'Захар П.', avatar: 'https://i.pravatar.cc/40?img=70' }, text: "Цена высокая, но смотрится как из дизайнерского журнала. В восторге!" },
            { user: { name: 'Дарина В.', avatar: 'https://i.pravatar.cc/40?img=71' }, text: "Дает очень мягкий и теплый свет. Создает уют." },
            { user: { name: 'Георгий Р.', avatar: 'https://i.pravatar.cc/40?img=72' }, text: "Долго ждал доставку, но это того стоило. Рекомендую!" }
        ]
    },
    // 21. Lampa Loft (НОВЫЙ ЭЛЕМЕНТ, Изменен IMG)
    {
        id: 21,
        stars: 3,
        img: 'https://i.postimg.cc/B61gccYN/cea62cb63097d74a9f45d2110909ec266f8b0923.jpg',
        status: 'sale',
        discount: '-40',
        name: 'Lampa Loft',
        price: 250,
        oldPrice: 420,
        date: '2025-11-15',
        room: 'Kitchen',
        quantity: 1,
        comments: [
            { user: { name: 'Андрей М.', avatar: 'https://i.pravatar.cc/40?img=73' }, text: "Отличный индустриальный вид, но пришла с небольшими царапинами." },
            { user: { name: 'Ксения Е.', avatar: 'https://i.pravatar.cc/40?img=74' }, text: "За такую цену – нормально. Для кухни в стиле лофт – самое то." }
        ]
    },
    // 22. Lampa Slim (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 22,
        stars: 5,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-30',
        name: 'Lampa Slim',
        price: 1200,
        date: '2025-11-16',
        room: 'Office',
        quantity: 1,
        comments: [
            { user: { name: 'Евгений Н.', avatar: 'https://i.pravatar.cc/40?img=75' }, text: "Супер тонкий, почти незаметен на потолке. Идеальный свет для работы." },
            { user: { name: 'Наталья Г.', avatar: 'https://i.pravatar.cc/40?img=76' }, text: "Не мерцает, глаза не устают. Очень довольна покупкой для домашнего офиса." },
            { user: { name: 'Олег И.', avatar: 'https://i.pravatar.cc/40?img=77' }, text: "Монтаж на клипсы, очень просто. Выглядит очень технологично." },
            { user: { name: 'Зинаида В.', avatar: 'https://i.pravatar.cc/40?img=78' }, text: "Лучший офисный светильник, который я покупала. Спасибо!" },
            { user: { name: 'Павел С.', avatar: 'https://i.pravatar.cc/40?img=79' }, text: "Пришел в целости и сохранности. Доставка курьером." }
        ]
    },
    // 23. Lampa Cube (НОВЫЙ ЭЛЕМЕНТ, Изменен IMG)
    {
        id: 23,
        stars: 4,
        img: 'https://i.postimg.cc/Bvjc4BGd/80174d32bf1e0489573e6447b942b7f3e359ecb6.jpg',
        status: 'alt',
        discount: '-15',
        name: 'Lampa Cube',
        price: 850,
        date: '2025-11-17',
        room: 'Corridor',
        quantity: 1,
        comments: [
            { user: { name: 'Родион М.', avatar: 'https://i.pravatar.cc/40?img=80' }, text: "Необычная кубическая форма, дает интересные тени. Очень стильно." },
            { user: { name: 'Лилия Р.', avatar: 'https://i.pravatar.cc/40?img=81' }, text: "Отличный акцентный свет. Немного сложно протирать углы." },
            { user: { name: 'Вячеслав Г.', avatar: 'https://i.pravatar.cc/40?img=82' }, text: "Качественный металл, тяжелый, чувствуется надежность." }
        ]
    },
    // 24. Lampa Wood (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 24,
        stars: 5,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'new',
        discount: '-25',
        name: 'Lampa Wood',
        price: 2800,
        date: '2025-11-18',
        room: 'Dinning',
        quantity: 1,
        comments: [
            { user: { name: 'Ксения П.', avatar: 'https://i.pravatar.cc/40?img=83' }, text: "Натуральное дерево, очень приятный запах. Экологично и красиво." },
            { user: { name: 'Борис Л.', avatar: 'https://i.pravatar.cc/40?img=84' }, text: "Идеально для интерьера в эко-стиле. Ручная работа." },
            { user: { name: 'Мария К.', avatar: 'https://i.pravatar.cc/40?img=85' }, text: "Теплый свет, красивая текстура дерева. Полностью соответствует описанию." },
            { user: { name: 'Денис Т.', avatar: 'https://i.pravatar.cc/40?img=86' }, text: "Смотрится очень уютно. Дороговато, но это оправдано." }
        ]
    },
    // 25. Lampa Industrial (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 25,
        stars: 3,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'alt',
        discount: '-10',
        name: 'Lampa Industrial',
        price: 790,
        date: '2025-11-19',
        room: 'Kitchen',
        quantity: 1,
        comments: [
            { user: { name: 'Виталий Ж.', avatar: 'https://i.pravatar.cc/40?img=87' }, text: "Стиль цех, то что нужно для моей кухни. Грубовато, но это фишка." },
            { user: { name: 'Юлия П.', avatar: 'https://i.pravatar.cc/40?img=88' }, text: "Пришла с небольшой вмятиной, но в целом работает. Три звезды за упаковку." }
        ]
    },
    // 26. Lampa Sun (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 26,
        stars: 5,
        img: 'https://i.postimg.cc/RF73hXzy/ad39442a09e9f258591ca60c51fbb83b2fe3c83b.jpg',
        status: 'new',
        discount: '-50',
        name: 'Lampa Sun',
        price: 5000,
        oldPrice: 10000,
        date: '2025-11-20',
        room: 'Outdoor',
        quantity: 1,
        comments: [
            { user: { name: 'Альберт Р.', avatar: 'https://i.pravatar.cc/40?img=89' }, text: "Светит как солнце! Мощность невероятная. Освещает весь участок." },
            { user: { name: 'Лина С.', avatar: 'https://i.pravatar.cc/40?img=90' }, text: "Премиальное качество, надежная защита от воды. Стоит своих денег." },
            { user: { name: 'Петр В.', avatar: 'https://i.pravatar.cc/40?img=91' }, text: "Лучший уличный прожектор, что я видел. Дорого, но эффективно." },
            { user: { name: 'Стефания Б.', avatar: 'https://i.pravatar.cc/40?img=92' }, text: "Купила по рекомендации дизайнера. Выглядит футуристично и работает отлично." }
        ]
    },
    // 27. Lampa Kids (НОВЫЙ ЭЛЕМЕНТ, Изменен IMG)
    {
        id: 27,
        stars: 5,
        img: 'https://i.postimg.cc/vTt53PWx/e663ed234834f812776cff5890f2fd6fb241c989.jpg',
        status: 'alt',
        discount: '-10',
        name: 'Lampa Kids',
        price: 550,
        date: '2025-11-21',
        room: 'Kids Room',
        quantity: 1,
        comments: [
            { user: { name: 'Мама Лена', avatar: 'https://i.pravatar.cc/40?img=93' }, text: "Очень милый дизайн! Ребенку понравился. Свет мягкий, не бьет в глаза." },
            { user: { name: 'Папа Саша', avatar: 'https://i.pravatar.cc/40?img=94' }, text: "Надежный пластик, не пахнет, соответствует всем нормам безопасности." },
            { user: { name: 'Бабушка Валя', avatar: 'https://i.pravatar.cc/40?img=95' }, text: "Отличный ночник и светильник в одном. Купили внучке." },
            { user: { name: 'Игорь и Оля', avatar: 'https://i.pravatar.cc/40?img=96' }, text: "Много режимов, ребенок сам выбирает цвет. Очень интерактивно." },
            { user: { name: 'Детский мир', avatar: 'https://i.pravatar.cc/40?img=97' }, text: "Лучшее решение для детской. Смело берите!" },
            { user: { name: 'Тетя Катя', avatar: 'https://i.pravatar.cc/40?img=98' }, text: "Подарила племяннику, он в восторге!" }
        ]
    },
    // 28. Lampa Minimal (НОВЫЙ ЭЛЕМЕНТ)
    {
        id: 28,
        stars: 4,
        img: 'https://i.postimg.cc/D0ryVJyw/3517f37e33f1e0c5a7b0e2f947e18bbaa1f98631.jpg',
        status: 'new',
        discount: '-5',
        name: 'Lampa Minimal',
        price: 1500,
        date: '2025-11-22',
        room: 'Office',
        quantity: 1,
        comments: [
            { user: { name: 'Максим Т.', avatar: 'https://i.pravatar.cc/40?img=99' }, text: "Стильный минимализм, ничего лишнего. Доволен, но хотелось бы мощнее." },
            { user: { name: 'Ксения Б.', avatar: 'https://i.pravatar.cc/40?img=100' }, text: "Идеально для рабочего стола. Удобная регулировка яркости." }
        ]
    }
], []);

  return(
    <GlobalContext.Provider value={{cartItems, setCartItems, data, likedProducts, setLikedProducts, CorrectPromocode, setCorrectPromocode}}>
        {children}
    </GlobalContext.Provider>
  )
};

export const useGlobal = () => useContext(GlobalContext);
