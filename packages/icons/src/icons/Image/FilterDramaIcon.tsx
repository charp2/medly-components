import { WithStyle } from '@medly-components/utils';
import React, { FC } from 'react';
import FilterDramaIconSvg from '../../assets/Image/filter_drama_24px_rounded.svg';
import SvgIcon, { SvgIconProps } from '../../SvgIcon';

const FilterDramaIcon: FC<SvgIconProps> & WithStyle = React.memo(props => {
    const { size, withHoverEffect, color, margin, ...restProps } = props;
    return (
        <SvgIcon {...{ size, withHoverEffect, color, margin, ...restProps }}>
            <FilterDramaIconSvg {...restProps} width="1em" height="1em" />
        </SvgIcon>
    );
});

FilterDramaIcon.Style = SvgIcon;
FilterDramaIcon.displayName = 'FilterDramaIcon';

export default FilterDramaIcon
