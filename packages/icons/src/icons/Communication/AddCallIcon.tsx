import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import AddCallIconSvg from '../../assets/Communication/add_call_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const AddCallIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <AddCallIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

AddCallIcon.Style = SvgIcon;
AddCallIcon.displayName = 'AddCallIcon';

export default AddCallIcon
