const CATEGORIES = {
  all: "Все",
  standing: "Стоя",
  balance: "Балансы",
  strength: "Силовые",
  seated: "Сидя",
  backbend: "Прогибы",
  inversion: "Перевёрнутые",
  restorative: "Восстановление",
};

const defaultCues = ["Сохранять ровное спокойное дыхание", "Не допускать боли и резких ощущений", "Сверять положение суставов с пояснениями преподавателя"];

const poses = [
  {id:"surya-namaskar", ru:"Сурья Намаскар", sa:"Sūrya Namaskāra", alias:"приветствие солнцу шивананда аштанга виньяса", cat:"standing", showWithoutPhoto:true, published:false, hold:"Последовательность"},
  {id:"padangusthasana", ru:"Падангуштхасана", sa:"Pādāṅguṣṭhāsana", alias:"наклон стоя захват больших пальцев", cat:"standing", image:"padangusthasana.jpg", photo:"44", cues:["Стопы параллельны, вес распределён равномерно", "Живот и грудная клетка движутся к ногам", "Шея свободна, коленные чашечки подтянуты"]},
  {id:"chaturanga", ru:"Чатуранга Дандасана", sa:"Caturaṅga Daṇḍāsana", alias:"низкая планка четыре опоры", cat:"strength", image:"chaturanga-dandasana.jpg", images:["chaturanga-start.jpg","chaturanga-dandasana.jpg"], photo:"67", cues:["Тело вытянуто одной линией", "Локти направлены назад и прижаты к корпусу", "Плечи не проваливаются ниже без контроля"]},
  {id:"urdhva-mukha", ru:"Урдхва Мукха Шванасана", sa:"Ūrdhva Mukha Śvānāsana", alias:"собака мордой вверх прогиб", cat:"backbend", image:"urdhva-mukha-svanasana.jpg", photo:"74", cues:["Опора на ладони и подъёмы стоп, бёдра над полом", "Грудная клетка раскрывается вперёд и вверх", "Плечи отведены от ушей"]},
  {id:"adho-mukha", ru:"Адхо Мукха Шванасана", sa:"Adho Mukha Śvānāsana", alias:"собака мордой вниз горка", cat:"standing", image:"adho-mukha-svanasana.jpg", photo:"75–76", cues:["Ладони раскрыты, пальцы активны", "Позвоночник вытягивается от таза к ладоням", "При необходимости колени можно согнуть ради длины спины"]},
  {id:"virabhadrasana-1", ru:"Вирабхадрасана I", sa:"Vīrabhadrāsana I", alias:"воин 1 первый", cat:"standing", image:"virabhadrasana-1.jpg", photo:"14"},
  {id:"virabhadrasana-2", ru:"Вирабхадрасана II", sa:"Vīrabhadrāsana II", alias:"воин 2 второй", cat:"standing", image:"virabhadrasana-2.jpg", photo:"15"},
  {id:"virabhadrasana-3", ru:"Вирабхадрасана III", sa:"Vīrabhadrāsana III", alias:"воин 3 третий баланс", cat:"balance", image:"virabhadrasana-3.jpg", photo:"17–18"},
  {id:"utthita-trikonasana", ru:"Уттхита Триконасана", sa:"Utthita Trikoṇāsana", alias:"вытянутый треугольник", cat:"standing", image:"utthita-trikonasana.jpg", photo:"4–5"},
  {id:"parivrtta-trikonasana", ru:"Паривритта Триконасана", sa:"Parivṛtta Trikoṇāsana", alias:"скрученный перевернутый треугольник", cat:"standing", image:"parivrtta-trikonasana.jpg", photo:"6–7"},
  {id:"utthita-parsvakonasana", ru:"Уттхита Паршваконасана", sa:"Utthita Pārśvakoṇāsana", alias:"вытянутый боковой угол", cat:"standing", image:"utthita-parsvakonasana.jpg", photo:"8–9"},
  {id:"parivrtta-parsvakonasana", ru:"Паривритта Паршваконасана", sa:"Parivṛtta Pārśvakoṇāsana", alias:"скрученный боковой угол", cat:"standing", image:"parivrtta-parsvakonasana.jpg", photo:"10–11"},
  {id:"ardha-chandrasana", ru:"Ардха Чандрасана", sa:"Ardha Candrāsana", alias:"полумесяц баланс", cat:"balance", image:"ardha-chandrasana.jpg", photo:"19"},
  {id:"parivrtta-ardha-chandra", ru:"Паривритта Ардха Чандрасана", sa:"Parivṛtta Ardha Candrāsana", alias:"скрученный полумесяц", cat:"balance", bookMissing:true},
  {id:"prasarita-padottanasana", ru:"Прасарита Падоттанасана", sa:"Prasārita Pādottānāsana", alias:"широкий наклон стоя", cat:"standing", image:"prasarita-padottanasana.jpg", photo:"33–34"},
  {id:"parsvottanasana", ru:"Паршвоттанасана", sa:"Pārśvottānāsana", alias:"пирамида интенсивное боковое вытяжение", cat:"standing", image:"parsvottanasana.jpg", photo:"26"},
  {id:"vrikshasana", ru:"Врикшасана", sa:"Vṛkṣāsana", alias:"дерево баланс", cat:"balance", image:"vrikshasana.jpg", photo:"2"},
  {id:"utthita-hasta", ru:"Уттхита Хаста Падангуштхасана", sa:"Utthita Hasta Pādāṅguṣṭhāsana", alias:"захват ноги стоя баланс", cat:"balance", image:"utthita-hasta-padangusthasana.jpg", photo:"23"},
  {id:"bakasana", ru:"Бакасана", sa:"Bakāsana", alias:"журавль ворона баланс на руках", cat:"strength", image:"bakasana.jpg", photo:"406–410", hold:"Не менее 15 секунд"},
  {id:"bhujapidasana", ru:"Бхуджапидасана", sa:"Bhujapīḍāsana", alias:"давление на плечи баланс", cat:"strength", image:"bhujapidasana.jpg", photo:"348"},
  {id:"paschimottanasana", ru:"Пашчимоттанасана", sa:"Paścimottānāsana", alias:"наклон сидя задняя поверхность", cat:"seated", image:"paschimottanasana.jpg", photo:"161", hold:"Не менее 30 секунд"},
  {id:"triang-mukha", ru:"Трианг Мукхаикапада Пашчимоттанасана", sa:"Triāṅga Mukhaikapāda Paścimottānāsana", alias:"наклон одна нога вирасана", cat:"seated", image:"triang-mukha.jpg", photo:"139"},
  {id:"virasana", ru:"Вирасана", sa:"Vīrāsana", alias:"герой сидя", cat:"seated", image:"virasana.jpg", photo:"89"},
  {id:"supta-virasana", ru:"Супта Вирасана", sa:"Supta Vīrāsana", alias:"герой лежа прогиб", cat:"backbend", image:"supta-virasana.jpg", photo:"96"},
  {id:"janu-sirsasana", ru:"Джану Ширшасана", sa:"Jānu Śīrṣāsana", alias:"голова к колену наклон", cat:"seated", image:"janu-sirsasana.jpg", photo:"127"},
  {id:"parivrtta-janu", ru:"Паривритта Джану Ширшасана", sa:"Parivṛtta Jānu Śīrṣāsana", alias:"скрученный наклон голова колено", cat:"seated", image:"parivrtta-janu-sirsasana.jpg", photo:"132"},
  {id:"marichyasana", ru:"Маричиасана", sa:"Marīcyāsana", alias:"поза мудреца маричи скрутка", cat:"seated", image:"marichyasana.jpg", photo:"144"},
  {id:"ardha-matsyendrasana", ru:"Ардха Матсиендрасана", sa:"Ardha Matsyendrāsana", alias:"половинная поза царя рыб скрутка", cat:"seated", image:"ardha-matsyendrasana.jpg", photo:"311–312"},
  {id:"baddha-konasana", ru:"Баддха Конасана", sa:"Baddha Koṇāsana", alias:"бабочка связанный угол", cat:"seated", image:"baddha-konasana.jpg", photo:"102", hold:"Не менее 30 секунд"},
  {id:"agni-stambhasana", ru:"Агни Стамбхасана", sa:"Agni Stambhāsana", alias:"поленья огня голубь", cat:"seated", bookMissing:true, hold:"Не менее 30 секунд"},
  {id:"padmasana", ru:"Падмасана / Ардха Падмасана", sa:"Padmāsana / Ardha Padmāsana", alias:"лотос полулотос", cat:"seated", image:"padmasana.jpg", photo:"104"},
  {id:"navasana", ru:"Навасана / Ардха Навасана", sa:"Nāvāsana / Ardha Nāvāsana", alias:"лодка половинная лодка пресс", cat:"strength", image:"navasana.jpg", photo:"78"},
  {id:"ashtavakrasana", ru:"Аштавакрасана", sa:"Aṣṭāvakrāsana", alias:"восемь углов баланс на руках", cat:"strength", image:"ashtavakrasana.jpg", photo:"342–343", hold:"Не менее 10 секунд"},
  {id:"mayurasana", ru:"Маюрасана", sa:"Mayūrāsana", alias:"павлин баланс", cat:"strength", image:"mayurasana.jpg", photo:"354"},
  {id:"urdhva-prasarita", ru:"Урдхва Прасарита Падасана", sa:"Ūrdhva Prasārita Pādāsana", alias:"подъем ног 90 45 30", cat:"strength", image:"urdhva-prasarita-padasana.jpg", photo:"276–279"},
  {id:"jathara-parivartanasana", ru:"Джатхара Паривартанасана", sa:"Jaṭhara Parivartanāsana", alias:"скрутка лежа прямые ноги", cat:"seated", image:"jathara-parivartanasana.jpg", photo:"274–275"},
  {id:"bhujangasana", ru:"Бхуджангасана", sa:"Bhujaṅgāsana", alias:"кобра прогиб", cat:"backbend", image:"bhujangasana.jpg", photo:"73"},
  {id:"dhanurasana", ru:"Дханурасана", sa:"Dhanurāsana", alias:"лук прогиб", cat:"backbend", image:"dhanurasana.jpg", photo:"63"},
  {id:"shalabhasana", ru:"Шалабхасана", sa:"Śalabhāsana", alias:"саранча прогиб", cat:"backbend", image:"shalabhasana.jpg", photo:"60"},
  {id:"ushtrasana", ru:"Уштрасана", sa:"Uṣṭrāsana", alias:"верблюд прогиб", cat:"backbend", image:"ushtrasana.jpg", photo:"41"},
  {id:"urdhva-dhanurasana", ru:"Урдхва Дханурасана", sa:"Ūrdhva Dhanurāsana", alias:"мост колесо прогиб", cat:"backbend", image:"urdhva-dhanurasana.jpg", photo:"482"},
  {id:"salamba-sarvangasana", ru:"Саламба Сарвангасана", sa:"Sālamba Sarvāṅgāsana", alias:"стойка на плечах березка", cat:"inversion", image:"salamba-sarvangasana.jpg", photo:"223–234"},
  {id:"halasana", ru:"Халасана", sa:"Halāsana", alias:"плуг перевернутая", cat:"inversion", image:"halasana.jpg", photo:"244"},
  {id:"karnapidasana", ru:"Карнапидасана", sa:"Karṇapīḍāsana", alias:"давление коленями на уши", cat:"inversion", image:"karnapidasana.jpg", photo:"246"},
  {id:"salamba-sirsasana", ru:"Саламба Ширшасана", sa:"Sālamba Śīrṣāsana", alias:"стойка на голове", cat:"inversion", image:"salamba-sirsasana.jpg", photo:"184–190"},
  {id:"shavasana", ru:"Шавасана", sa:"Śavāsana", alias:"поза трупа отдых расслабление", cat:"restorative", image:"shavasana.jpg", photo:"592"},
  {id:"padahastasana", ru:"Падахастасана", sa:"Pādahastāsana", alias:"ладони под стопами наклон", cat:"standing", image:"padahastasana.jpg", photo:"46"},
  {id:"ardha-baddha-padmottanasana", ru:"Ардха Баддха Падмоттанасана", sa:"Ardha Baddha Padmottānāsana", alias:"полулотос наклон стоя", cat:"balance", image:"ardha-baddha-padmottanasana.jpg", photo:"52"},
  {id:"krounchasana", ru:"Кроунчасана", sa:"Krauñcāsana", alias:"цапля", cat:"seated", image:"krounchasana.jpg", photo:"141–142"},
  {id:"eka-pada-sirsasana", ru:"Эка Пада Ширшасана", sa:"Eka Pāda Śīrṣāsana", alias:"нога за головой", cat:"seated", image:"eka-pada-sirsasana.jpg", photo:"371"},
  {id:"eka-pada-yoga-dandasana", ru:"Эка Пада Йога Дандасана", sa:"Eka Pāda Yoga Daṇḍāsana", alias:"йогический посох одна нога", cat:"seated", image:"eka-pada-yoga-dandasana.jpg", photo:"456"},
  {id:"hanumanasana", ru:"Хануманасана", sa:"Hanumānāsana", alias:"продольный шпагат", cat:"seated", image:"hanumanasana.jpg", photo:"475–476", hold:"Не менее 20 секунд"},
  {id:"upavistha-konasana", ru:"Упавиштха Конасана", sa:"Upaviṣṭha Koṇāsana", alias:"широкий угол сидя поперечный шпагат", cat:"seated", image:"upavistha-konasana.jpg", photo:"151"},
  {id:"kurmasana", ru:"Курмасана", sa:"Kūrmāsana", alias:"черепаха", cat:"seated", image:"kurmasana.jpg", photo:"363–364"},
  {id:"yoga-nidrasana", ru:"Йога Нидрасана", sa:"Yoga Nidrāsana", alias:"йогический сон ноги за головой", cat:"seated", image:"yoga-nidrasana.jpg", photo:"391"},
  {id:"vasisthasana", ru:"Васиштхасана", sa:"Vasiṣṭhāsana", alias:"боковая планка прямые ноги", cat:"strength", image:"vasisthasana.jpg", photo:"398"},
  {id:"vishvamitrasana", ru:"Вишвамитрасана", sa:"Viśvāmitrāsana", alias:"баланс мудрец", cat:"strength", image:"vishvamitrasana.jpg", photo:"403"},
  {id:"tittibhasana", ru:"Титтибхасана", sa:"Ṭiṭṭibhāsana", alias:"светлячок прямые ноги", cat:"strength", image:"tittibhasana.jpg", photo:"395"},
  {id:"parsva-bakasana", ru:"Паршва Бакасана", sa:"Pārśva Bakāsana", alias:"боковой журавль", cat:"strength", image:"parsva-bakasana.jpg", photo:"412"},
  {id:"eka-pada-galavasana", ru:"Эка Пада Галавасана", sa:"Eka Pāda Gālavāsana", alias:"летящий голубь баланс", cat:"strength", image:"eka-pada-galavasana.jpg", photo:"431–433"},
  {id:"pincha-mayurasana", ru:"Пинча Маюрасана", sa:"Piñcha Mayūrāsana", alias:"стойка на предплечьях перо павлина", cat:"inversion", image:"pincha-mayurasana.jpg", photo:"357", hold:"Стена допускается"},
  {id:"niralamba-sarvangasana", ru:"Нираламба Сарвангасана", sa:"Nirālamba Sarvāṅgāsana", alias:"стойка на плечах без опоры", cat:"inversion", image:"niralamba-sarvangasana.jpg", photo:"236"},
  {id:"adho-mukha-vrikshasana", ru:"Адхо Мукха Врикшасана", sa:"Adho Mukha Vṛkṣāsana", alias:"стойка на руках дерево вниз", cat:"inversion", image:"adho-mukha-vrikshasana.jpg", photo:"359"},
];

const MY_PHOTOS = {
  "padangusthasana": [{src:"05-padangusthasana.jpg", label:"Основной вариант"}],
  "chaturanga": [{src:"06-chaturanga-dandasana.jpg", label:"Основной вариант"}],
  "adho-mukha": [{src:"08-adho-mukha-svanasana.jpg", label:"Основной вариант"}],
  "virabhadrasana-1": [
    {src:"01-virabhadrasana-i-heel-down.jpg", label:"Пятка на полу"},
    {src:"01-virabhadrasana-i-beginner-variation.jpg", label:"Вариант для новичков"},
  ],
  "virabhadrasana-2": [{src:"02-virabhadrasana-ii.jpg", label:"Основной вариант"}],
  "virabhadrasana-3": [{src:"11-virabhadrasana-iii.jpg", label:"Руки вытянуты"}],
  "utthita-trikonasana": [{src:"09-utthita-trikonasana.jpg", label:"Основной вариант"}],
  "parivrtta-trikonasana": [{src:"10-parivrtta-trikonasana.jpg", label:"Основной вариант"}],
  "utthita-parsvakonasana": [{src:"03-utthita-parsvakonasana.jpg", label:"Основной вариант"}],
  "parivrtta-parsvakonasana": [{src:"04-parivrtta-parsvakonasana-variation.jpg", label:"Ладонь на полу"}],
  "parsvottanasana": [{src:"15-parsvottanasana-review.jpg", label:"Ладони на полу"}],
  "ardha-chandrasana": [{src:"12-ardha-chandrasana.jpg", label:"Основной вариант"}],
  "prasarita-padottanasana": [
    {src:"14-prasarita-padottanasana-toes.jpg", label:"Захват больших пальцев стоп"},
    {src:"14-prasarita-padottanasana-clasp.jpg", label:"Руки в замке за спиной"},
  ],
  "vrikshasana": [{src:"16-vrikshasana.jpg", label:"Руки вытянуты вверх · глаза открыты"}],
  "utthita-hasta": [{src:"17-utthita-hasta-padangusthasana.jpg", label:"Нога вытянута вперёд"}],
  "bakasana": [{src:"18-bakasana.jpg", label:"Основной вариант"}],
  "bhujapidasana": [{src:"19-bhujapidasana.jpg", label:"Стопы скрещены"}],
  "tittibhasana": [{src:"20-tittibhasana.jpg", label:"Основной вариант"}],
  "paschimottanasana": [{src:"21-paschimottanasana.jpg", label:"Захват стоп"}],
  "triang-mukha": [{src:"22-triang-mukhaikapada-paschimottanasana.jpg", label:"Наклон к прямой ноге"}],
  "baddha-konasana": [{src:"23-baddha-konasana.jpg", label:"Основной вариант"}],
  "padmasana": [
    {src:"24-padmasana.jpg", label:"Падмасана"},
    {src:"24-ardha-padmasana.jpg", label:"Ардха Падмасана"},
  ],
  "ashtavakrasana": [{src:"25-ashtavakrasana.jpg", label:"Основной вариант"}],
  "navasana": [
    {src:"26-navasana.jpg", label:"Ноги прямые"},
    {src:"26-ardha-navasana.jpg", label:"Ноги согнуты"},
  ],
  "janu-sirsasana": [{src:"27-janu-sirsasana.jpg", label:"Основной вариант"}],
  "urdhva-mukha": [{src:"28-urdhva-mukha-svanasana.jpg", label:"Опора на подъёмы стоп"}],
  "bhujangasana": [{src:"29-bhujangasana.jpg", label:"Локти согнуты"}],
  "dhanurasana": [{src:"30-dhanurasana.jpg", label:"Основной вариант"}],
  "shalabhasana": [{src:"31-shalabhasana.jpg", label:"Руки вытянуты назад"}],
  "ushtrasana": [{src:"32-ushtrasana.jpg", label:"Ладони на пятках"}],
  "urdhva-dhanurasana": [{src:"33-urdhva-dhanurasana.jpg", label:"Основной вариант"}],
  "salamba-sarvangasana": [{src:"34-salamba-sarvangasana.jpg", label:"Опора руками под спину"}],
  "halasana": [{src:"35-halasana.jpg", label:"Руки вытянуты за спиной"}],
  "karnapidasana": [{src:"36-karnapidasana.jpg", label:"Колени возле ушей"}],
  "salamba-sirsasana": [{src:"37-salamba-sirsasana.jpg", label:"Опора на голову и предплечья"}],
  "hanumanasana": [{src:"38-hanumanasana.jpg", label:"Основной вариант"}],
  "pincha-mayurasana": [
    {src:"39-pincha-mayurasana-straight.jpg", label:"Ноги прямые"},
    {src:"39-pincha-mayurasana-bent.jpg", label:"Ноги согнуты"},
  ],
  "vasisthasana": [
    {src:"40-vasisthasana-front.jpg", label:"Захват поднятой стопы · вид спереди"},
    {src:"40-vasisthasana-side.jpg", label:"Захват поднятой стопы · вид сбоку"},
  ],
  "vishvamitrasana": [{src:"41-vishvamitrasana.jpg", label:"Вариант с захватом стопы"}],
  "parivrtta-ardha-chandra": [{src:"42-parivrtta-ardha-chandrasana.jpg", label:"Скрученный полумесяц"}],
  "kurmasana": [{src:"43-kurmasana.jpg", label:"Стопы вместе, пальцы в замке за спиной"}],
  "yoga-nidrasana": [{src:"44-yoga-nidrasana.jpg", label:"Ноги за головой"}],
  "upavistha-konasana": [
    {src:"45-upavistha-konasana.jpg", label:"Основной вариант"},
    {src:"45-upavistha-konasana-side.jpg", label:"Боковой наклон"},
  ],
  "padahastasana": [{src:"46-padahastasana.jpg", label:"Ладони под стопами"}],
  "ardha-baddha-padmottanasana": [{src:"47-ardha-baddha-padmottanasana.jpg", label:"Полулотос, захват и ладонь на полу"}],
  "eka-pada-sirsasana": [{src:"48-eka-pada-sirsasana.jpg", label:"Нога за головой"}],
  "adho-mukha-vrikshasana": [{src:"49-adho-mukha-vrikshasana.jpg", label:"Стойка на руках"}],
  "krounchasana": [{src:"50-krounchasana.jpg", label:"Вытянутая нога вверх"}],
  "virasana": [{src:"51-virasana.jpg", label:"Руки вытянуты вверх"}],
  "supta-virasana": [{src:"52-supta-virasana.jpg", label:"Руки вытянуты за головой"}],
  "marichyasana": [
    {src:"53-marichyasana-twist.jpg", label:"Скрутка с замком рук"},
    {src:"53-marichyasana-forward.jpg", label:"Наклон с замком рук"},
  ],
  "ardha-matsyendrasana": [{src:"54-ardha-matsyendrasana.jpg", label:"Скрутка с замком рук"}],
  "parivrtta-janu": [{src:"55-parivrtta-janu-sirsasana.jpg", label:"Боковой скрученный наклон"}],
  "eka-pada-galavasana": [{src:"56-eka-pada-galavasana.jpg", label:"Полная форма — задняя нога выпрямлена"}],
  "niralamba-sarvangasana": [{src:"57-niralamba-sarvangasana.jpg", label:"Без опоры руками — ноги выпрямлены"}],
  "shavasana": [{src:"58-shavasana.jpg", label:"Положение для глубокого расслабления"}],
  "parsva-bakasana": [{src:"59-parsva-bakasana.jpg", label:"Колени вместе, скрутка в сторону"}],
  "agni-stambhasana": [
    {src:"60-agni-stambhasana-1.jpg", label:"Доступный вариант · корпус вертикально"},
    {src:"60-agni-stambhasana-2.jpg", label:"Доступный вариант с наклоном вперёд"}
  ],
};

const state = {
  query: "",
  category: "all",
  selected: "padangusthasana",
  mode: "mine",
  missingOnly: false,
  variantByPose: {},
  favoritesOnly: false,
  favorites: new Set(JSON.parse(localStorage.getItem("asana-favorites") || "[]")),
};

const cardsEl = document.querySelector("#cards");
const detailEl = document.querySelector("#detail");
const filtersEl = document.querySelector("#filters");
const searchEl = document.querySelector("#search");
const resultCountEl = document.querySelector("#resultCount");
const favoritesOnlyEl = document.querySelector("#favoritesOnly");
const missingOnlyEl = document.querySelector("#missingOnly");
const modeSwitchEl = document.querySelector("#modeSwitch");
const lightboxEl = document.querySelector("#lightbox");

function openLightbox(image) {
  const target = lightboxEl.querySelector("img");
  target.src = image.src;
  target.alt = image.alt;
  lightboxEl.classList.add("open");
  lightboxEl.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeLightbox() {
  lightboxEl.classList.remove("open");
  lightboxEl.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
}

function normalize(value) {
  return value.toLocaleLowerCase("ru").replaceAll("ё", "е").replace(/[^a-zа-я0-9]+/gi, " ").trim();
}

function filteredPoses() {
  const query = normalize(state.query);
  return poses.filter((pose) => {
    const isPublished = pose.published !== false;
    const hasMyPhoto = Boolean(MY_PHOTOS[pose.id]?.length);
    const categoryMatch = state.category === "all" || pose.cat === state.category;
    const favoriteMatch = !state.favoritesOnly || state.favorites.has(pose.id);
    const haystack = normalize(`${pose.ru} ${pose.sa} ${pose.alias}`);
    const queryMatch = !query || query.split(" ").every((part) => haystack.includes(part));
    return isPublished && (hasMyPhoto || pose.showWithoutPhoto) && categoryMatch && favoriteMatch && queryMatch;
  });
}

function renderFilters() {
  filtersEl.innerHTML = Object.entries(CATEGORIES).map(([id, label]) =>
    `<button class="filter ${state.category === id ? "active" : ""}" type="button" data-category="${id}">${label}</button>`
  ).join("");
}

function renderModeSwitch() {
  modeSwitchEl.querySelectorAll("[data-mode]").forEach((button) => button.classList.toggle("active", button.dataset.mode === state.mode));
}

function currentVisual(pose) {
  const variants = MY_PHOTOS[pose.id] || [];
  const index = Math.min(state.variantByPose[pose.id] || 0, Math.max(variants.length - 1, 0));
  return variants[index] ? { ...variants[index], path:`/assets/mine/${variants[index].src}`, mine:true } : null;
}

function cardImage(pose) {
  const visual = currentVisual(pose);
  if (visual) return `<img src="${visual.path}" alt="${pose.ru}" loading="lazy" style="--photo-focus:${visual.focus || "50% 50%"}" />`;
  if (pose.showWithoutPhoto) return `<div class="placeholder-art sequence-art" aria-label="Последовательность Сурья Намаскар"><span>☀</span></div><span class="source-dot sequence">Последовательность</span>`;
  return `<div class="placeholder-art" aria-label="Изображение будет добавлено"><span>${pose.ru.slice(0, 1)}</span></div>`;
}

function renderCards() {
  const items = filteredPoses();
  const withMyPhoto = poses.filter((pose) => pose.published !== false && (MY_PHOTOS[pose.id]?.length || pose.showWithoutPhoto)).length;
  resultCountEl.textContent = `Показано ${items.length} из ${withMyPhoto} опубликованных поз`;
  favoritesOnlyEl.classList.toggle("active", state.favoritesOnly);
  favoritesOnlyEl.textContent = state.favoritesOnly ? "★ Показаны избранные" : "☆ Только избранные";
  missingOnlyEl.classList.toggle("active", state.missingOnly);
  missingOnlyEl.textContent = state.missingOnly ? "● Показаны без моих фото" : "○ Только без моих фото";
  if (!items.length) {
    cardsEl.innerHTML = document.querySelector("#emptyTemplate").innerHTML;
    return;
  }
  cardsEl.innerHTML = items.map((pose) => `
    <article class="pose-card ${state.selected === pose.id ? "selected" : ""}" data-pose="${pose.id}" tabindex="0" role="button" aria-label="Открыть ${pose.ru}">
      <div class="card-image">
        ${cardImage(pose)}
        ${(MY_PHOTOS[pose.id]?.length || 0) > 1 ? `<span class="variant-count">1/${MY_PHOTOS[pose.id].length}</span>` : ""}
        <button class="favorite ${state.favorites.has(pose.id) ? "on" : ""}" type="button" data-favorite="${pose.id}" aria-label="Добавить в избранное">${state.favorites.has(pose.id) ? "★" : "☆"}</button>
      </div>
      <div class="card-copy">
        <span class="card-category">${CATEGORIES[pose.cat]}</span>
        <h2>${pose.ru}</h2>
        <p>${pose.sa}</p>
      </div>
    </article>`).join("");
}

function renderDetail(openOnMobile = false) {
  const pose = poses.find((item) => item.id === state.selected) || poses[0];
  const guide = window.POSE_GUIDES?.[pose.id] || "Входите в позу постепенно, сохраняйте ровное дыхание и выбирайте доступную амплитуду без боли.";
  const visual = currentVisual(pose);
  const myVariants = MY_PHOTOS[pose.id] || [];
  const variantIndex = Math.min(state.variantByPose[pose.id] || 0, Math.max(myVariants.length - 1, 0));
  const notes = localStorage.getItem(`asana-note:${pose.id}`) || "";
  const hero = visual
    ? `<img src="${visual.path}" alt="${pose.ru}" />`
    : `<div class="placeholder-art"><span>${pose.ru.slice(0, 1)}</span></div>`;
  const galleryControls = myVariants.length > 1 ? `
    <button class="detail-gallery-arrow previous" type="button" data-gallery-step="-1" aria-label="Предыдущее фото">‹</button>
    <button class="detail-gallery-arrow next" type="button" data-gallery-step="1" aria-label="Следующее фото">›</button>
    <div class="detail-gallery-status" aria-live="polite"><span>${variantIndex + 1} / ${myVariants.length}</span><small>${myVariants[variantIndex].label}</small></div>
    <div class="swipe-hint" aria-hidden="true">↔ Листайте фото пальцем</div>` : "";
  detailEl.innerHTML = `
    <div class="detail-hero">${hero}${galleryControls}<button class="close-detail" type="button" aria-label="Закрыть">×</button></div>
    <div class="detail-body">
      <div class="detail-topline"><span class="local-label">Техника выполнения</span><button class="text-button detail-favorite" type="button">${state.favorites.has(pose.id) ? "★ В избранном" : "☆ В избранное"}</button></div>
      <div class="detail-title-row"><h2>${pose.ru}</h2><button class="copy-title" type="button" data-copy-title="${pose.ru}" aria-label="Скопировать название">Копировать</button></div><p class="sanskrit">${pose.sa}</p>
      ${state.mode === "mine" && myVariants.length > 1 ? `<div class="variant-picker">${myVariants.map((item, index) => `<button type="button" data-variant="${index}" class="${(state.variantByPose[pose.id] || 0) === index ? "active" : ""}">${item.label}</button>`).join("")}</div>` : ""}
      ${pose.hold ? `<span class="hold">⏱ ${pose.hold}</span>` : ""}
      <section class="detail-section"><h3>Как выполнить</h3><p class="guide-copy">${guide}</p></section>
      <section class="detail-section"><h3>На что смотреть</h3><ul>${(pose.cues || defaultCues).map((cue) => `<li>${cue}</li>`).join("")}</ul></section>
      <section class="detail-section safety-note"><h3>Важно</h3><p class="guide-copy">Практикуйте в доступной амплитуде и прекращайте движение при боли. Сложные балансы и перевёрнутые позы осваивайте с преподавателем.</p></section>
    </div>`;
  if (openOnMobile) {
    detailEl.classList.add("open");
    document.body.classList.add("detail-open");
  }
}

function saveFavorites() {
  localStorage.setItem("asana-favorites", JSON.stringify([...state.favorites]));
}

function changeDetailVariant(step) {
  const variants = MY_PHOTOS[state.selected] || [];
  if (variants.length < 2) return;
  const current = state.variantByPose[state.selected] || 0;
  state.variantByPose[state.selected] = (current + step + variants.length) % variants.length;
  renderCards();
  renderDetail(true);
}

filtersEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  state.category = button.dataset.category;
  renderFilters(); renderCards();
});

searchEl.addEventListener("input", () => { state.query = searchEl.value; renderCards(); });
favoritesOnlyEl.addEventListener("click", () => { state.favoritesOnly = !state.favoritesOnly; renderCards(); });
missingOnlyEl.addEventListener("click", () => { state.missingOnly = !state.missingOnly; renderCards(); });
modeSwitchEl.addEventListener("click", (event) => {
  const button = event.target.closest("[data-mode]");
  if (!button) return;
  state.mode = button.dataset.mode;
  state.missingOnly = false;
  renderModeSwitch(); renderCards(); renderDetail();
});

cardsEl.addEventListener("click", (event) => {
  const favorite = event.target.closest("[data-favorite]");
  if (favorite) {
    event.stopPropagation();
    const id = favorite.dataset.favorite;
    state.favorites.has(id) ? state.favorites.delete(id) : state.favorites.add(id);
    saveFavorites(); renderCards();
    if (state.selected === id) renderDetail();
    return;
  }
  const card = event.target.closest("[data-pose]");
  if (!card) return;
  if (window.getSelection()?.toString().trim()) return;
  state.selected = card.dataset.pose;
  const previewIndex = Number(card.dataset.previewIndex);
  if (Number.isInteger(previewIndex)) state.variantByPose[state.selected] = previewIndex;
  renderCards(); renderDetail(true);
});

let hoverTimer = null;
let hoverCard = null;

function showCardVariant(card, index) {
  const variants = MY_PHOTOS[card.dataset.pose] || [];
  if (!variants[index]) return;
  const image = card.querySelector(".card-image img");
  const count = card.querySelector(".variant-count");
  if (image) {
    image.src = `/assets/mine/${variants[index].src}`;
    image.alt = `${card.querySelector("h2")?.textContent || "Асана"}, ${variants[index].label}`;
    image.style.setProperty("--photo-focus", variants[index].focus || "50% 50%");
  }
  if (count) count.textContent = `${index + 1}/${variants.length}`;
  card.dataset.previewIndex = String(index);
}

function stopCardPreview(card = hoverCard) {
  if (hoverTimer) clearInterval(hoverTimer);
  hoverTimer = null;
  if (card?.isConnected) showCardVariant(card, state.variantByPose[card.dataset.pose] || 0);
  hoverCard = null;
}

cardsEl.addEventListener("mouseover", (event) => {
  const card = event.target.closest("[data-pose]");
  if (!card || card.contains(event.relatedTarget)) return;
  const variants = MY_PHOTOS[card.dataset.pose] || [];
  if (variants.length < 2) return;
  stopCardPreview();
  hoverCard = card;
  let index = state.variantByPose[card.dataset.pose] || 0;
  card.dataset.previewIndex = String(index);
  hoverTimer = setInterval(() => {
    index = (index + 1) % variants.length;
    showCardVariant(card, index);
  }, 900);
});

cardsEl.addEventListener("mouseout", (event) => {
  const card = event.target.closest("[data-pose]");
  if (!card || card.contains(event.relatedTarget)) return;
  stopCardPreview(card);
});

cardsEl.addEventListener("keydown", (event) => {
  if ((event.key === "Enter" || event.key === " ") && event.target.matches("[data-pose]")) event.target.click();
});

detailEl.addEventListener("click", (event) => {
  const image = event.target.closest(".detail-hero img");
  if (image) {
    if (Date.now() < suppressImageClickUntil) return;
    openLightbox(image);
    return;
  }
  const galleryArrow = event.target.closest("[data-gallery-step]");
  if (galleryArrow) {
    changeDetailVariant(Number(galleryArrow.dataset.galleryStep));
    return;
  }
  const detailMode = event.target.closest("[data-detail-mode]");
  if (detailMode) {
    state.mode = detailMode.dataset.detailMode;
    state.missingOnly = false;
    renderModeSwitch(); renderCards(); renderDetail(true);
    return;
  }
  const variant = event.target.closest("[data-variant]");
  if (variant) {
    state.variantByPose[state.selected] = Number(variant.dataset.variant);
    renderCards(); renderDetail(true);
    return;
  }
  const copyTitle = event.target.closest("[data-copy-title]");
  if (copyTitle) {
    navigator.clipboard.writeText(copyTitle.dataset.copyTitle).then(() => {
      copyTitle.textContent = "Скопировано";
      setTimeout(() => { if (copyTitle.isConnected) copyTitle.textContent = "Копировать"; }, 1200);
    });
    return;
  }
  if (event.target.closest(".close-detail")) {
    detailEl.classList.remove("open"); document.body.classList.remove("detail-open");
  }
  if (event.target.closest(".detail-favorite")) {
    state.favorites.has(state.selected) ? state.favorites.delete(state.selected) : state.favorites.add(state.selected);
    saveFavorites(); renderCards(); renderDetail(true);
  }
});

let detailTouchStart = null;
let suppressImageClickUntil = 0;

detailEl.addEventListener("touchstart", (event) => {
  if (!event.target.closest(".detail-hero") || (MY_PHOTOS[state.selected] || []).length < 2) return;
  const touch = event.changedTouches[0];
  detailTouchStart = { x: touch.clientX, y: touch.clientY };
}, { passive: true });

detailEl.addEventListener("touchend", (event) => {
  if (!detailTouchStart) return;
  const touch = event.changedTouches[0];
  const deltaX = touch.clientX - detailTouchStart.x;
  const deltaY = touch.clientY - detailTouchStart.y;
  detailTouchStart = null;
  if (Math.abs(deltaX) < 45 || Math.abs(deltaX) <= Math.abs(deltaY)) return;
  suppressImageClickUntil = Date.now() + 500;
  changeDetailVariant(deltaX < 0 ? 1 : -1);
}, { passive: true });

let noteTimer;
detailEl.addEventListener("input", (event) => {
  if (!event.target.matches(".notes")) return;
  clearTimeout(noteTimer);
  const status = detailEl.querySelector(".note-status");
  status.textContent = "Сохраняю…";
  noteTimer = setTimeout(() => {
    localStorage.setItem(`asana-note:${state.selected}`, event.target.value);
    status.textContent = "Сохранено на этом компьютере";
  }, 350);
});

document.addEventListener("keydown", (event) => {
  if (event.key === "/" && document.activeElement !== searchEl) { event.preventDefault(); searchEl.focus(); }
  if (event.key === "Escape") { closeLightbox(); detailEl.classList.remove("open"); document.body.classList.remove("detail-open"); }
  if (detailEl.classList.contains("open") && !lightboxEl.classList.contains("open") && (event.key === "ArrowLeft" || event.key === "ArrowRight")) {
    event.preventDefault();
    changeDetailVariant(event.key === "ArrowRight" ? 1 : -1);
  }
});

lightboxEl.addEventListener("click", (event) => {
  if (event.target === lightboxEl || event.target.closest(".lightbox-close")) closeLightbox();
});

renderFilters();
renderModeSwitch();
renderCards();
renderDetail();
