import { translations, defaultAssets, defaultElements, defaultCountElements } from '@open-math/shared/index';

export default defineEruditConfig({
    language: {
        current: 'en',
        translations,
    },
    site: {
        originUrl: 'https://en.omath.net/',
        baseUrl: '/',
        title: 'Open Math',
        short: 'Clear and interesting',
        logotype: defaultAssets.logotype,
        style: {
            brandColor: 'light-dark(#1879d9, #4e94d9)',
        },
        favicon: defaultAssets.favicon,
    },
    seo: {
        siteTitle: 'Open Math',
        useBookSiteTitle: true,
        image: defaultAssets.ogImage,
    },
    indexPage: {
        title: 'Open Math',
        short: 'Theory, summaries, and problem book all in one',
        description: `
            A modern mathematics textbook -- clear, interesting, detailed.
            Written so that you can understand everything on your own.
            No dry lists of formulas and theorems.
            Only a narrative approach with many examples and exercises for reinforcement.
            Anyone willing can contribute to the materials!
        `,
        topImage: defaultAssets.indexPageBanner,
        seo: {
            title: 'Open Math',
            description: `
                A modern mathematics textbook -- clear, interesting, detailed.
                Theory, summaries, and problem book all in one.
                Written so that you can understand everything on your own!
            `,
        },
    },
    contributors: {
        enabled: true,
        becomeContributorLink: 'https://github.com/open-math/en.omath.net/blob/main/CONTRIBUTION.md',
        howToImproveLink: 'https://github.com/open-math/en.omath.net/blob/main/CONTRIBUTION.md',
        editLinkPrefix: 'https://github.com/open-math/en.omath.net/blob/main/',
        reportIssueLink: 'https://github.com/open-math/en.omath.net/issues/',
    },
    // sponsors: {
    //     enabled: true,
    //     becomeSponsorLink: 'https://boosty.to/omath',
    //     defaultSponsorMessages: ['Я поддерживаю "Открытую Математику"'],
    // },
    // customLinks: [
    //     {
    //         label: 'Telegram',
    //         href: 'https://t.me/omath_official',
    //         icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19.777 4.43a1.5 1.5 0 0 1 2.062 1.626l-2.268 13.757c-.22 1.327-1.676 2.088-2.893 1.427c-1.018-.553-2.53-1.405-3.89-2.294c-.68-.445-2.763-1.87-2.507-2.884c.22-.867 3.72-4.125 5.72-6.062c.785-.761.427-1.2-.5-.5c-2.302 1.738-5.998 4.381-7.22 5.125c-1.078.656-1.64.768-2.312.656c-1.226-.204-2.363-.52-3.291-.905c-1.254-.52-1.193-2.244-.001-2.746z"/></g></svg>',
    //     },
    // ],
    repository: {
        type: 'github',
        name: 'open-math/en.omath.net',
        branch: 'main',
    },
    analytics: {
        yandex: {
            verification: '7d97dac84bd592c6',
            metricsId: '106425766',
        },
        google: {
            verification: 'hbTull_8pcvJm4alie8PVq6-f87heZXqSGp6DVFsJPk',
            gtag: 'G-NE4S66HSF0',
        },
    },
    ads: {
        aside: {
            provider: 'yandex',
            blockId: 'R-A-18528824-1',
        },
        bottom: {
            provider: 'yandex',
            blockId: 'R-A-18528824-2',
        },
    },
    elements: defaultElements,
    countElements: defaultCountElements,
});
