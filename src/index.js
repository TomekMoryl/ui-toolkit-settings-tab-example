/**
 * Copyright 2017 by Avid Technology, Inc.
 */

import appConfig from './package.json';

import ViewConfig from './avid_api/view/ViewConfig';
import AppEntry from './avid_api/entry/EntryConfig';
import settingsTabEntry from './avid_api/setting_tab/user-settings/settingsTabConfig'
import workflowTabEntry from './avid_api/setting_tab/workflow/WorkFlowTabEntry'

export const avid = [
    {
        name: `${appConfig['identity']['appName']}-view`,
        provides: ['views'],
        create: () => ViewConfig,
    },
    {
        name: `${appConfig['identity']['appName']}-default-theme`,
        provides: ['theme'],
        create: () => ({
            key: 'dark',
            css: './style.css',
        }),
    },
    {
        name: appConfig['identity']['appName'],
        provides: ['apps'],
        create: () => AppEntry,
    },

    {
        name: `${appConfig['identity']['appName']}-setting-tab`,
        provides: ['user-settings'],
        create: () => settingsTabEntry,
    },
    {
        name: `${appConfig['identity']['appName']}-workflow`,
        provides: ['workflow-settings'],
        create: () => workflowTabEntry,
    }

];
