export default defineContributor({
    editor: true,
    displayName: 'Peter Radko',
    short: 'Geniuses are not born — they become!',
    links: {
        'My site': 'https://radkopeter.ru/',
        GitHub: 'https://github.com/Gwynerva',
        Telegram: 'https://t.me/math_head',
        Email: 'mailto:newpetya@inbox.ru',
    },
    description: (
        <>
            <P>
                Сфера интересов: программирование, математика и смежные области. Создаю полезные проекты и занимаюсь
                самообразованием. Свободно владею английским. Люблю делиться тем, что узнал. Излагаю материал просто и
                наглядно в своих роликах и онлайн-учебниках. Мечтатель.
            </P>

            <P>
                Больше 10 лет занимаюсь созданием бесплатных образовательных проектов. Проект "Открытая Математика", на
                котором вы сейчас находитесь и движок <Ref to="https://github.com/erudit-js/erudit">Erudit</Ref>, на
                котором работает этот сайт -- пик моего опыта в этой сфере.
            </P>
        </>
    ),
});
