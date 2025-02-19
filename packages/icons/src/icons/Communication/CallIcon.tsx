import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import CallIconSvg from '../../assets/Communication/call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const CallIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <CallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

CallIcon.Style = SvgIcon;
CallIcon.displayName = 'CallIcon';

export default CallIcon
