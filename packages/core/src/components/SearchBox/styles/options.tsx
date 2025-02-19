import { css } from '@medly-components/utils';
import { OptionStyled } from '../../SingleSelect/Options/Option/Option.styled';
import { Props } from '../types';

const activeOptionStyle = ({ theme }: Props) => {
    return css`
        border: 1.5px solid ${theme.searchBox.borderColor.active};
        border-top: 0;
        box-shadow: ${theme.searchBox.options.boxShadow};
        padding-bottom: 1.2rem;
        &::before {
            display: block;
            content: '';
            border-top: 0.1rem solid ${theme.colors.grey[200]};
            height: 0.1rem;
            margin: 0 auto 0.8rem;
        }
    `;
};

const nonActiveOptionStyle = () => {
    return css`
        border: none;
        padding-bottom: 0;
        &::before {
            display: none;
        }
    `;
};

const getMediumOptionStyle = ({ theme }: Props) => {
    const border = theme.searchBox.borderRadius.M.active;
    return css`
        top: 4.4rem;
        border-radius: 0 0 ${border} ${border};
        li {
            padding: 0 2.4rem;
            span,
            strong {
                font-size: 1.6rem;
                line-height: 2.6rem;
            }
        }
    `;
};

const getSmallOptionStyle = ({ theme }: Props) => {
    const border = theme.searchBox.borderRadius.S.active;
    return css`
        top: 3.6rem;
        border-radius: 0 0 ${border} ${border};
        li {
            padding: 0 2rem;
            span,
            strong {
                font-size: 1.4rem;
                line-height: 2.2rem;
            }
        }
    `;
};

export const getOptionsStyles = ({ theme, size, areOptionsVisible }: Props & { areOptionsVisible?: boolean }) => css`
    box-shadow: none;
    border: none;
    padding: 0;
    box-sizing: content-box;
    left: -1.5px;
    overflow-x: hidden;
    overflow-y: auto;
    background-color: ${theme.colors.white};
    ${areOptionsVisible ? activeOptionStyle : nonActiveOptionStyle};
    max-height: 21rem;

    svg {
        display: none;
    }

    strong {
        font-weight: normal;
    }

    ${OptionStyled} {
        &:hover {
            background-color: ${theme.colors.grey[50]};
        }
    }
    &::before {
        width: 82%;
    }
    ${size === 'M' ? getMediumOptionStyle : getSmallOptionStyle};
`;
