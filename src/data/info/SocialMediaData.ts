import {Settings} from '../../settings/Settings';

export interface ISocialMedia {
    displayName: string;
    imageSrc: string;
    imageAlt: string;
    href: string;
    tooltipMessage: string;
}

// 使用 Vite 的导入.env 变量
const getImagePath = (path: string): string => {
    // 移除开头的斜杠，因为 import.meta.env.BASE_URL 已经包含了斜杠
    const cleanPath = path.startsWith('/') ? path.slice(1) : path;
    return `${import.meta.env.BASE_URL}${cleanPath}`;
};

export const SocialMediaData: ISocialMedia[] = [
    {
        displayName: 'Github',
        imageSrc: getImagePath('ico/github-logo.png'),
        imageAlt: 'GitHub',
        href: Settings.GITHUB_URL,
        tooltipMessage: 'Show us some love ⭐ on GitHub',
    },
    {
        displayName: 'Medium',
        imageSrc: getImagePath('ico/medium-logo.png'),
        imageAlt: 'Medium',
        href: Settings.MEDIUM_URL,
        tooltipMessage: 'Read our AI content on Medium',
    },
    {
        displayName: 'YouTube',
        imageSrc: getImagePath('ico/youtube-logo.png'),
        imageAlt: 'YouTube',
        href: Settings.YOUTUBE_URL,
        tooltipMessage: 'Watch our AI tutorials on YouTube'
    },
    {
        displayName: 'Twitch',
        imageSrc: getImagePath('ico/twitch-logo.png'),
        imageAlt: 'Twitch',
        href: Settings.TWITCH_URL,
        tooltipMessage: 'Fight along with us in Kaggle competitions on Twitch'
    },
];