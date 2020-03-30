import { WithStyle } from '@medly-components/utils';
import React, { SFC } from 'react';
import HomeSvg from '../assets/Home.svg';
import SvgIcon, { SvgIconProps } from '../SvgIcon';

export const HomeIcon: SFC<SvgIconProps> & WithStyle = React.memo(props => (
    <SvgIcon {...props}>
        <HomeSvg {...props} width="1em" height="1em" />
    </SvgIcon>
));

HomeIcon.Style = SvgIcon;
HomeIcon.displayName = 'HomeIcon';
