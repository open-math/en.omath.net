import { authorContribution } from '#project/utils/contributions';

export default defineTopic({
    title: 'Элементарные уравнения',
    description: `
        Научимся решать простейшие уравнения и преобразовывать равенства.
        Просто, наглядно, с примерами и без заучивания наизусть кучи странных правил.
        Это ключевой и необходимый навык в математике и всех остальных точных науках.
    `,
    contributions: [
        {
            contributor: $CONTRIBUTOR.gwynerva,
            description: authorContribution,
        },
    ],
});
