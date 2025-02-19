import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import SideEffect1507200LineIconSvg from '../../assets/GSDD/SideEffect_1507_200_Line.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const SideEffect1507200LineIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <SideEffect1507200LineIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

SideEffect1507200LineIcon.Style = SvgIcon;
SideEffect1507200LineIcon.displayName = 'SideEffect1507200LineIcon';

export default SideEffect1507200LineIcon
