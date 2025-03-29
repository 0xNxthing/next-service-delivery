export const categories = [
	{
		name: 'Торты',
	},
	{
		name: 'Пирожные',
	},
	{
		name: 'Чизкейки',
	},
	{
		name: 'Капкейки',
	},
	{
		name: 'Макаруны',
	},
	{
		name: 'Моти',
	},
];

export const ingredients = [
	{
		name: 'Шоколадные',
	},
	{
		name: 'Фруктовые',
	},
	{
		name: 'Ореховые',
	},
	{
		name: 'Карамельные',
	},
	{
		name: 'Без сахара',
	},
];

export const products = [
	{
		name: 'Торт «Шоколадный»',
		price: 749,
		imageUrl: '/pies/pie-1.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }, { id: 4 }],
		},
		description:
			'Изысканный торт для настоящих лакомок. В его основе — пышные шоколадные коржи и обволакивающий сливочно-шоколадный крем.',
		structure:
			'Сахар, сыр творожный сливочный м.д.ж в сухом веществе 65%, сливки питьевые м.д.ж. 33%, мука пшеничная хлебопекарная высшего сорта, сахарная пудра, ядра арахисы жареные дробленые, горький шоколад, шоколад молочный, сахарная пудра, вода питьевая, экстракт ванили, желток яичный пастеризованный, белок яичный пастеризованный, масло сладко-сливочное несоленое м.д.ж. 72,5%, арахисовая паста, вода питьевая, какао-порошок, патока крахмальная карамельная, кофе жареный молотый, соль пищевая.',
	},
	{
		name: 'Торт «Венгерский»',
		price: 999,
		imageUrl: '/pies/pie-2.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }, { id: 5 }],
		},
		description:
			'Легендарный венгерский торт, перед которым не устоит ни один поклонник классических сладостей.',
		structure:
			'Крем, корж, глазурь, сливки питьевые нормализованные ультрапастеризованные м.д.ж. 33%, масло сладко-сливочное несоленое м.д.ж. 82,5%, шоколад темный.',
	},
	{
		name: 'Торт «Брауни»',
		price: 699,
		imageUrl: '/pies/pie-3.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 1 }, { id: 5 }],
		},
		description:
			'Изысканный супершоколадный десерт, приготовленный по мотивам классического брауни.',
		structure:
			'Кокосовый напиток (мякоть кокоса, вода питьевая), какао бобы, финики сушеные, масло какао, семена чиа.',
	},
	{
		name: 'Торт «Вкусновение»',
		price: 549,
		imageUrl: '/pies/pie-4.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 1 }],
		},
		description:
			'Воздушные, нежные бисквитные коржи с прослойкой из легкого сливочного крема, политые темным шоколадом.',
		structure:
			'Мука пшеничная высшего сорта, масло сладко-сливочное несолёное м. д. ж. 72,5 %, сахар, яйцо куриное пищевое, молоко питьевое нормализованное м. д. ж. 3,2 %, сливки м. д. ж. 33 %, шоколад горький 65 % какао, ванильный сахар, крахмал кукурузный.',
	},
	{
		name: 'Торт «Бонфуа»',
		price: 1099,
		imageUrl: '/pies/pie-5.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 3 }],
		},
		description:
			'Тонкий белый бисквит, шелковистый крем на основе творожного сыра и цельная клубника.',
		structure:
			'Клубника замороженная, вода питьевая, сыр творожный м.д.ж в сухом веществе 72%, сливки питьевые ультрапастеризованные м.д.ж. 33%, сахар, сахарная пудра, меланж яичный жидкий пастеризованный, мука пшеничная хлебопекарная высшего сорта, желатин пищевой (говяжий), пюре лимонное замороженное (мякоть лимона).',
	},
	{
		name: 'Торт «Воздушно-ореховый»',
		price: 649,
		imageUrl: '/pies/pie-6.png',
		categoryId: 1,
		ingredients: {
			connect: [{ id: 3 }, { id: 5 }],
		},
		description:
			'Достойный претендент на звание самого воздушного торта! Его секрет — невесомые меренговые коржи.',
		structure:
			'Белок яйца куриного пищевого, сахар, ядра ореха кешью, мука пшеничная хлебопекарная в/с, сыр творожный "Крем чиз" м.д.ж. в сухом веществе 72% , крем сливочный ультрапастеризованный м.д.ж. 35% (сливки нормализованные, стабилизатор - каррагинан), абрикос сушеный (курага).',
	},
	{
		name: 'Пирожное «Ягодные лодочки»',
		price: 299,
		imageUrl: '/cakes/cake-1.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 1 }, { id: 2 }],
		},
		description:
			'Изящные песочные лодочки с нежным декором и начинкой из плотного сырно-сливочного мусса.',
		structure:
			'Сыр творожный сливочный м.д.ж. в сухом веществе 65%, мука пшеничная хлебопекарная высшего сорта, малина быстрозамороженная, меланж яичный пастеризованный, сахар, масло сладко-сливочное несолёное м.д.ж. 82,5%, крем сливочный м.д.ж. 33%, смородина быстрозамороженная, вода питьевая, шоколад молочный, сахарная пудра, желатин пищевой говяжий, регулятор кислотности - лимонная кислота, соль пищевая.',
	},
	{
		name: 'Пирожное «Муравейные шарики»',
		price: 249,
		imageUrl: '/cakes/cake-2.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 4 }],
		},
		description:
			'Сливочно-медовые, рассыпчатые, тающие во рту сладкие шарики испечены по рецепту классического торта «Муравейник».',
		structure:
			'Молоко сгущённое варёное с сахаром м.д.ж. 8,5%, мука пшеничная хлебопекарная высшего сорта, масло сладко-сливочное несолёное м.д.ж. 72,5%, сахар, сметана м.д.ж. 30%, крахмал кукурузный, мёд цветочный натуральный, меланж яичный пастеризованный, разрыхлитель - гидрокарбонат натрия (сода пищевая), соль пищевая.',
	},
	{
		name: 'Пирожное «Черная смородина»',
		price: 199,
		imageUrl: '/cakes/cake-3.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 1 }, { id: 2 }],
		},
		description: 'Традиционное японское пирожное с необычной текстурой сливочной тянучки.',
		structure:
			'Творожный сыр м.д.ж. в сухом веществе 60% (пастеризованное коровье молоко, соль пищевая, молокосвертывающий ферментный препарат микробного происхождения), мука клейкая рисовая, сахар, пюре из чёрной смородины (чёрная смородина свежая, сахар), вода питьевая,белый шоколад (сахар, масло какао, сухое молоко цельное, эмульгатор-лецитины (соевый), натуральный ароматизатор-ваниль), крахмал кукурузный.',
	},
	{
		name: 'Пирожное «Картошка»',
		price: 219,
		imageUrl: '/cakes/cake-4.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 1 }],
		},
		description:
			'Классическое пирожное со вкусом детства: плотное, насыщенно-шоколадное, с нежнейшим масляным кремом.',
		structure:
			'Яйцо куриное пищевое, сахар, мука пшеничная высшего сорта, масло сладко-сливочное несолёное «Крестьянское» м. д. ж. 72,5 %, молоко питьевое нормализованное м. д. ж. 3,2 %, какао-порошок.',
	},
	{
		name: 'Пирожное «Мини-муравьешкино»',
		price: 419,
		imageUrl: '/cakes/cake-5.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 4 }],
		},
		description: 'То самое сочетание крема из варёной сгущёнки и палочек из песочного теста!',
		structure:
			'Молоко сгущенное с сахаром вареное м.д.ж. 8,5%, мука пшеничная хлебопекарная высшего сорта, масло сладко-сливочное несоленое с м.д.ж. 72,5%, сахар, меланж яичный жидкий, сметана м.д.ж. 15%, мёд натуральный цветочный, вода питьевая, разрыхлитель теста, регулятор, разрыхлитель-гидрокарбонат натрия, соль пищевая.',
	},
	{
		name: 'Пирожное «Шу с брусникой»',
		price: 289,
		imageUrl: '/cakes/cake-6.png',
		categoryId: 2,
		ingredients: {
			connect: [{ id: 4 }],
		},
		description:
			'Шу — классическое французское пирожное из воздушного заварного теста со сладкой хрустящей оболочкой из кракелина.',
		structure:
			'Молоко питьевое ультрапастеризованное м.д.ж. 3,2%, сливки питьевые ультрапастеризованные м.д.ж. 33%, сахар, меланж яичный жидкий пастеризованный, мука пшеничная хлебопекарная высшего сорта, сгущенное молоко с сахаром м.д.ж. 8,5%, сливки питьевые ультрапастеризованные м.д.ж. 20%, брусника быстрозамороженная, вода питьевая, масло сладко-сливочное несолёное м.д.ж. 72,5%, масло сладко-сливочное несолёное м.д.ж. 82,5%, желток яичный жидкий пастеризованный, белок яичный жидкий пастеризованный, желатин пищевой, соль пищевая, желирующий агент - пектины.',
	},
	{
		name: 'Чизкейк «Нью-Йорк»',
		price: 219,
		imageUrl: '/cheesecakes/cheesecake-1.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 5 }],
		},
		description:
			'Классическое пирожное на основе коржа из песочного печенья, с нежным кремом из творога и свежих сливок.',
		structure:
			'Творог м.д.ж. 25%, печенье (мука пшеничная хлебопекарная высшего сорта, масло кокосовое рафинированное дезодорированное, пудра сахарная, крахмал кукурузный, сахар, вода питьевая, продукты яичные сухие), сахар, сливки нормализованные питьевые м. д. ж. 34%, меланж яичный, масло подсолнечное рафинированное дезодорированное, масло сливочное м. д. ж. 82,5%, крахмал кукурузный, соль пищевая, стабилизатор – камедь рожкового дерева, экстракт ванили.',
	},
	{
		name: 'Чизкейк «Шоколадная крошка»',
		price: 209,
		imageUrl: '/cheesecakes/cheesecake-2.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }, { id: 4 }],
		},
		description:
			'Волшебный творожно-сливочный чизкейк с шоколадной крошкой внутри, декорированный пеканом, карамельным и тёмным шоколадом.',
		structure:
			'Творог м.д.ж. 25%, печенье, соль пищевая, эмульгатор - лецитины, сахар, сливки питьевые м.д.ж. 34%, меланж яичный жидкий, шоколадная стружка, масло подсолнечное рафинированное дезодорированное, крахмал кукурузный, ядра ореха пекан сушеные, шоколад "карамельный", шоколад темный, масло сладко-сливочное несоленое м.д.ж. 82,5%, соль пищевая, стабилизатор - камедь рожкового дерева, экстракт ванили.',
	},
	{
		name: 'Чизкейк «Голубичный»',
		price: 219,
		imageUrl: '/cheesecakes/cheesecake-3.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 2 }],
		},
		description:
			'В этот нежный чизкейк с голубой матчей и прослойкой из цельных ягод невозможно не влюбиться.',
		structure:
			'Творог м.д.ж. 25%, печенье, сметана м.д.ж. 20% (сливки нормализованные пастеризованные, закваска), сахар, голубика замороженная, сливки питьевые м.д.ж. 34 % (сливки нормализованные), яичный меланж жидкий пастеризованный, масло подсолнечное рафинированное дезодорированное, масло сладко-сливочное несоленое м.д.ж. 82,5%, крахмал кукурузный, голубой чай матча, соль пищевая, стабилизатор - камедь рожкового дерева, экстракт ванили.',
	},
	{
		name: 'Чизкейк «Малина»',
		price: 199,
		imageUrl: '/cheesecakes/cheesecake-4.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 2 }],
		},
		description:
			'Лёгкий десерт из свежего творога на песочной полоске, напоминающий классический чизкейк и домашнюю запеканку одновременно.',
		structure:
			'Творог м. д. ж. 9 % (молоко пастеризованное, закваска), масло сливочное м. д. ж. 82,5 %, мука пшеничная хлебопекарная высшего сорта, меланж яичный жидкий пастеризованный, сливки нормализованные пастеризованные м. д. ж. 22 % , сахар, малина быстрозамороженная, крупа манная, молоко нормализованное пастеризованное м. д. ж. 3,2 %, крахмал кукурузный.',
	},
	{
		name: 'Чизкейк «Черная смородина»',
		price: 199,
		imageUrl: '/cheesecakes/cheesecake-5.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 2 }],
		},
		description:
			'Нежный десерт из свежего творога на тонком песочном корже с творожной основой и натуральной черной смородиной.',
		structure:
			'Творог м.д.ж.9% (молоко пастеризованное, закваска), масло сливочное м.д.ж. 82,5%, мука пшеничная хлебопекарная высшего сорта, меланж яичный жидкий пастеризованный, сливки нормализованные пастеризованные м.д.ж. 22% , сахар, ягоды черной смородины быстрозамороженные, крупа манная, молоко нормализованное пастеризованное м.д.ж. 3,2% , крахмал кукурузный.',
	},
	{
		name: 'Чизкейк «Крем-брюле»',
		price: 209,
		imageUrl: '/cheesecakes/cheesecake-6.png',
		categoryId: 3,
		ingredients: {
			connect: [{ id: 4 }],
		},
		description: 'Классический десерт на хрустящей песочной основе с плотным творожным кремом.',
		structure:
			'Творог м.д.ж. 25%, печенье, молоко цельное сгущенное с сахаром вареное м.д.ж. 8.5% (молоко нормализованное, сахар (сахароза)), сливки питьевые м.д.ж. 34% (сливки нормализованные), яичный меланж пастеризованный, сахар, масло подсолнечное рафинированное дезодорированное, крахмал кукурузный, масло сладко-сливочное несоленое м.д.ж. 82,5%, соль пищевая, стабилизатор - камедь рожкового дерева, экстракт ванили.',
	},
	{
		name: 'Капкейк «Морковный»',
		price: 359,
		imageUrl: '/cupcakes/cupcake-1.png',
		categoryId: 4,
		ingredients: {
			connect: [{ id: 3 }],
		},
		description:
			'Нежные морковные кексы, украшенные аппетитной шапочкой тающего сырно-сливочного крема.',
		structure:
			'Сыр мягкий м.д.ж. в сухом веществе 70%, сливки нормализованные ультрапастеризованный м.д.ж. 33%, масло сладко-сливочное несоленое м.д.ж. 72,5% (сливки пастеризованные), морковь столовая свежая, мука пшеничная хлебопекарная высшего сорта, масло подсолнечное рафинированное дезодорированное, сахар, меланж яичный жидкий, ядра грецкого ореха, корица молотая, разрыхлитель - гидрокарбонат натрия (сода пищевая), соль пищевая.',
	},
	{
		name: 'Капкейк «Вишневый»',
		price: 249,
		imageUrl: '/cupcakes/cupcake-2.png',
		categoryId: 4,
		ingredients: {
			connect: [{ id: 1 }, { id: 2 }],
		},
		description:
			'Воздушные мини-кексы из белого и шоколадного бисквита с густым вишнёвым джемом внутри.',
		structure:
			'Сахар, мука пшеничная хлебопекарная высшего сорта, меланж яичный жидкий пастеризованный, масло подсолнечное рафинированное дезодорированное, джем вишневый, яблочное пюре, сахар, сироп глюкозно-фруктозный, регулятор кислотности - лимонная кислота, разрыхлитель - гидрокарбонат натрия, какао-порошок, загуститель - ксантантовая камедь, регулятор кислотности - лимонная кислота, ароматизатор натуральный – ваниль.',
	},
	{
		name: 'Капкейк «Сгущенное молоко»',
		price: 239,
		imageUrl: '/cupcakes/cupcake-3.png',
		categoryId: 4,
		ingredients: {
			connect: [{ id: 4 }],
		},
		description:
			'Воздушные мини-кексы с золотистым бисквитом и начинкой из густой варёной сгущёнки.',
		structure:
			'Сахар, мука пшеничная хлебопекарная высшего сорта, меланж яичный жидкий, масло подсолнечное рафинированное дезодорированное, молоко цельное сгущенное вареное с сахаром м.д.ж. 8,5%, вода питьевая, смесь кексовая, соль пищевая), регулятор кислотности - лимонная кислота, ароматизатор натуральный - ваниль.',
	},
	{
		name: 'Макарон «Соленая карамель»',
		price: 159,
		imageUrl: '/macs/mac-1.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 1 }, { id: 4 }],
		},
		description:
			'Изысканные мини-пирожные, выпеченные из миндальной муки. Их отличает тонкая, чуть хрустящая корочка и невероятная нежность.',
		structure:
			'Сахар, мука миндальная, белок яичный жидкий пастеризованный, шоколад белый карамель 30,4% какао-продуктов, молоко сухое цельное, лактоза, карамелизированный, сливки питьевые ультрапастеризованные м.д.ж. 33%, масло сладко-сливочное несоленое м.д.ж 82,5%, молоко питьевое ультрапастеризованное м.д.ж. 3,2%, вода очищенная питьевая, сироп глюкозы, соль морская.',
	},
	{
		name: 'Макарон «Манго и маракуйя»',
		price: 159,
		imageUrl: '/macs/mac-2.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 2 }, { id: 3 }],
		},
		description:
			'Изысканные мини-пирожные, выпеченные из миндальной муки. Тончайшая хрусткая корочка, тающая основа и яркая тропическая начинка.',
		structure:
			'Сахар, сахарная пудра, белый шоколад 30% какао-продуктов (сахар, какао-масло, сухое цельное молоко, сухое обезжиренное молоко, эмульгатор - соевый лецитин, ванильный экстракт), мука миндальная, пастеризованный яичный белок, сливки м.д.ж.33%, пюре маракуйи (сок и мякоть маракуйи, сахар), пюре манго (манго, сахар), молоко м.д.ж. 3,2%, краситель - бета каротин, краситель - растительный уголь.',
	},
	{
		name: 'Макарон «Тирамису»',
		price: 159,
		imageUrl: '/macs/mac-3.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }],
		},
		description:
			'Изысканные мини-пирожные, выпеченные из миндальной муки. Тончайшая хрусткая корочка, тающая основа и ароматный крем.',
		structure:
			'Сахар, мука миндальная, пастеризованный яичный белок, шоколад белый, натуральный ароматизатор "Ваниль", вода питьевая, сыр Маскарпоне м.д.ж. в сухом веществе 78%, сливки питьевые ультрапастеризованные м.д.ж. 34%, кофе жареный молотый, глюкозный сироп (из кукурузы), белок яичный сухой, красители (красный свекольный, сахарный колер I простой).',
	},
	{
		name: 'Макарон «Медовик»',
		price: 159,
		imageUrl: '/macs/mac-4.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }],
		},
		description:
			'Бескомпромиссно нежные мини-пирожные, выпеченные из миндальной муки. Тончайшая хрусткая корочка, тающая основа и ароматный крем.',
		structure:
			'Сахар, мука миндальная, пастеризованный яичный белок, белая шоколадная масса, сыр творожный м.д.ж. в сухом веществе 65%, вода питьевая, мед цветочный натуральный, молоко питьевое ультрапастеризованное м.д.ж. 3,2%, масло сладко-сливочное несоленое м.д.ж. 82,5%, йогурт сухой обезжиренный, глюкозный сироп, декстроза, белок яичный сухой, влагоудерживающий агент - сорбит, пюре фруктовое "Лимон", эмульгатор - лецитины, краситель - каротины, регулятор кислотности - лимонная кислота, ароматизатор "Йогурт".',
	},
	{
		name: 'Макарон «Кленовый пекан»',
		price: 159,
		imageUrl: '/macs/mac-5.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 1 }, { id: 3 }, { id: 4 }],
		},
		description:
			'Бескомпромиссно нежные мини-пирожные, выпеченные из миндальной муки. Тончайшая хрусткая корочка, тающая основа и выразительная начинка.',
		structure:
			'Сахар, мука миндальная, пастеризованный яичный белок, белый шоколад 30% какао-продуктов, вода питьевая, сливки питьевые ультрапастеризованные м.д.ж. 34%, кленовый сироп, грецкий орех, пекан, молоко питьевое ультрапастеризованное м.д.ж. 3,2%, сироп глюкозы (из пшеницы, кукурузы), эмульгатор - соевый лецитин, соль пищевая, глюкоза, влагоудерживающий агент-сорбит, ароматизатор натуральный Кленовый сироп, красители: каротины.',
	},
	{
		name: 'Макарон «Банан»',
		price: 159,
		imageUrl: '/macs/mac-6.png',
		categoryId: 5,
		ingredients: {
			connect: [{ id: 1 }, { id: 2 }, { id: 3 }],
		},
		description:
			'Изысканные мини-пирожные, выпеченные из миндальной муки. Тончайшая хрусткая корочка, тающая основа и ароматная начинка.',
		structure:
			'Сахар, мука миндальная, пастеризованный яичный белок, белый шоколад 30% какао-продуктов, вода питьевая, пюре банановое, масло сливочное м.д.ж. 82,5%, пюре лимона, молоко питьевое ультрапастеризованное м.д.ж. 3,2%, сироп глюкозы (из кукурузы, пшеницы), глюкоза, влагоудерживающий агент-сорбит, ароматизатор натуральный Банан, красители (каротины, красный свекольный, сахарный колер IV, полученный по "аммиачно-сульфитной" технологии).',
	},
	{
		name: 'Моти «Манго»',
		price: 179,
		imageUrl: '/motis/moti-1.png',
		categoryId: 6,
		ingredients: {
			connect: [{ id: 1 }, { id: 2 }, { id: 5 }],
		},
		description:
			'Традиционное японское пирожное с необычной текстурой сливочной тянучки. Тесто для него готовится из клейкой рисовой муки.',
		structure:
			'Сыр творожный м.д.ж. в сухом веществе 65%, патока крахмальная карамельная, белая шоколадная масса (сахар, масло какао, сухое цельное молоко, сухое обезжиренное молоко, молочный жир, эмульгатор -лецитины (соевый), натуральный ароматизатор – ваниль), мука клейкая рисовая, пюре манго замороженное (манго свежий, сахар), масло подсолнечное рафинированное, крахмал кукурузный, сахар.',
	},
	{
		name: 'Моти «Чай Матча»',
		price: 179,
		imageUrl: '/motis/moti-2.png',
		categoryId: 6,
		ingredients: {
			connect: [{ id: 5 }],
		},
		description:
			'Традиционное японское пирожное дайфукумоти — это сладкий пирожок из рисового теста с тающей во рту начинкой.',
		structure:
			'Творожный сыр м.д.ж. в сухом веществе 60% (пастеризованное коровье молоко, соль пищевая, молокосвертывающий фермент, закваска на культурах молочнокислых микроорганизмов), мука клейкая рисовая, сахар, вода питьевая, белый шоколад (сахар, масло какао, сухое молоко цельное, эмульгатор-лецитины (соевый), натуральный ароматизатор-ваниль ), чай матча (зеленый чай), крахмал кукурузный.',
	},
	{
		name: 'Моти «Пина Колада»',
		price: 179,
		imageUrl: '/motis/moti-3.png',
		categoryId: 6,
		ingredients: {
			connect: [{ id: 3 }, { id: 4 }],
		},
		description:
			'Традиционное японское пирожное с необычной текстурой сливочной тянучки. Приготовлено из особой клейкой муки и творожного сыра.',
		structure:
			'Творожный сыр м.д.ж. в сухом веществе 60% (пастеризованное коровье молоко, соль пищевая, молокосвертывающий фермент, закваска на культурах молочнокислых микроорганизмов), мука клейкая рисовая, сахар, пюре кокос (мякоть кокоса, сахар), пюре ананас (ананас свежий), вода питьевая, белый шоколад (сахар, масло какао, сухое молоко цельное, эмульгатор-лецитины (соевый), натуральный ароматизатор-ваниль), крахмал кукурузный.',
	},
];
