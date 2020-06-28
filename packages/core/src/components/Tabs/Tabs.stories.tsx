import { AddIcon, DashboardIcon, DateRangeIcon, DeleteIcon, EditIcon, ViewColumnIcon } from '@medly-components/icons';
import { defaultTheme, TabsTheme } from '@medly-components/theme';
import { select } from '@storybook/addon-knobs';
import React, { useState } from 'react';
import { Tabs } from './Tabs';
import { Props } from './types';

export const ThemeInterface: React.FC<TabsTheme> = () => null;
ThemeInterface.defaultProps = {
    ...defaultTheme.tabs
};

const size: Props['tabSize'][] = ['S', 'M', 'L'];
const tabBg: Props['tabBackground'][] = ['WHITE', 'GREY'];
const tabStyle: Props['tabStyle'][] = ['OPEN', 'CLOSED'];

export const Basic = () => (
    <Tabs aria-label="Basic Tabs" tabSize={select('Tab Size', size, 'S')}>
        <Tabs.Tab id="tab1" label="Add" hide helperText="Details">
            Content for the add panel
        </Tabs.Tab>
        <Tabs.Tab id="tab2" label="Edit" helperText="Details">
            Content for the edit panel
        </Tabs.Tab>
        <Tabs.Tab id="tab3" label="Delete" helperText="Details">
            Content for the delete panel
        </Tabs.Tab>
    </Tabs>
);

export const WithIcon = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="WithIcon Tabs" tabSize={select('Tab Size', size, 'S')}>
            <Tabs.Tab id="tab1" label="Add" icon={AddIcon}>
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit" icon={EditIcon} count={68}>
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete" icon={DeleteIcon} disabled={true} count={10}>
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const WithDescriptionAndCount = () => {
    return (
        <Tabs
            defaultActive="tab1"
            aria-label="WithDescriptionAndCount Tabs"
            tabSize={select('Tab Size', size, 'S')}
            tabBackground={select('Tab Background', tabBg, 'WHITE')}
            tabStyle={select('Tab Style', tabStyle, 'OPEN')}
        >
            <Tabs.Tab id="tab1" label="Add" helperText="Details" count={68} icon={DashboardIcon}>
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit" helperText="Details" count={10} icon={DateRangeIcon}>
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete" helperText="Details" count={30} icon={ViewColumnIcon} disabled={true}>
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Uncontrolled = () => {
    return (
        <Tabs defaultActive="tab1" aria-label="Uncontrolled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};

export const Controlled = () => {
    const [active, setActiveTab] = useState('tab1');
    return (
        <Tabs active={active} onChange={setActiveTab} aria-label="Controlled Tabs">
            <Tabs.Tab id="tab1" label="Add">
                Content for the add panel
            </Tabs.Tab>
            <Tabs.Tab id="tab2" label="Edit">
                Content for the edit panel
            </Tabs.Tab>
            <Tabs.Tab id="tab3" label="Delete">
                Content for the delete panel
            </Tabs.Tab>
        </Tabs>
    );
};
