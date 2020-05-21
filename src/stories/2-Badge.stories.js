import React from 'react';
import { action } from '@storybook/addon-actions';
import Badge, { colors } from '../ui/atoms/Badge';

export default {
    title: 'Badge',
    component: Badge,
};

export const Purple = () => <Badge text="Developer" color={colors.grey}/>;

export const Grey = () => <Badge text="Designer" color={colors.purple}/>;
