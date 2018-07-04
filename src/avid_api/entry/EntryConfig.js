/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from '../../package.json';
import EntryWrapper from './EntryWrapper';

export default {
    factory: (config) => {
        return new EntryWrapper(config);
    },
    config: {
        breakpoints: {
            0: 'narrow',
            250: 'small',
            705: 'medium',
            945: 'wide',
            1350: 'extrawide',
        },
        dockable: false,
        timeline: false,
        inspector: false,
        inspectorConfig: {
            playerEditModeOn: false,
        },
        isMultiInstance: true,
        color: 'rgb(232, 108, 49)',
        unrenderOnHide: false,
    },
    menuIcon: {
        group: 200,
        orderInGroup: 202,
        title: appConfig['identity']['appName'],
        icon: `data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJmZWF0aGVyIGZlYXRoZXItc3F1YXJlIj4KICAgIDxyZWN0IHg9IjMiIHk9IjMiIHdpZHRoPSIxOCIgaGVpZ2h0PSIxOCIgcng9IjIiIHJ5PSIyIj48L3JlY3Q+Cjwvc3ZnPg==`,
        gradient: ['#ba2f82', '#cf4c85'],
    },
};
