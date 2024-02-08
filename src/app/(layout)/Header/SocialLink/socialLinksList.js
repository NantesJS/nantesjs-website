import { GitHub, Rss, Slack, Twitch, Twitter, Youtube } from 'react-feather'

export const socialLinksList = [
    {
        // eslint-disable-next-line @stylistic/max-len
        href: 'https://join.slack.com/t/nantesjs/shared_invite/enQtNTM0MjA0NTE0NTkzLTc3YWRkMjk3MTg3ZjEwYzVhYTA1YTA1OGE3MTdkMGE2ZjgzNzE1YzMwYWQwYmU0ZTEzNDhkZWUwZGY2ZjQ5OWY',
        label: 'Slack',
        icon: <Slack />
    },
    {
        href: 'https://twitter.com/NantesJS',
        label: 'Twitter',
        icon: <Twitter />
    },
    {
        href: 'https://github.com/NantesJS',
        label: 'Github',
        icon: <GitHub />
    },
    {
        href: '/rss.xml',
        label: 'RSS',
        icon: <Rss />
    },
    {
        href: 'https://www.youtube.com/c/NantesJS',
        label: 'YouTube',
        icon: <Youtube />
    },
    {
        href: 'https://twitch.tv/nantesjs',
        label: 'Twitch',
        icon: <Twitch />
    }
]
