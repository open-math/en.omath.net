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
        loadingSvg: defaultAssets.loadingSvg,
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
        editLinkPrefix: 'https://github.com/open-math/en.omath.net/blob/main/content/',
        reportIssueLink: 'https://github.com/open-math/en.omath.net/issues/',
    },
    sponsors: {
        enabled: true,
        becomeSponsorLink: 'https://boosty.to/omath.en',
        defaultSponsorMessages: ['I support "Open Math"!'],
    },
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
            gtag: 'G-9CF498N3Q1',
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
