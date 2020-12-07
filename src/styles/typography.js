import { css } from 'styled-components';
import theme from './theme';
import media from './media';

export default () => css`
  * {
    /* color: ${theme.colors.white}; */
    font-family: ${theme.values.fonts.primary};
    font-weight: 400;
    letter-spacing: ${theme.values.letterSpacing};
  }

  html {
    font-family: ${theme.values.fonts.primary};
    color: ${theme.colors.black.black_1};
    font-size: ${theme.values.fontSize};
    font-weight: 400;
  }

  h1 {
    font-size: 2.4em;
    font-weight: 700;
    line-height: 2.625rem;
    letter-spacing: -0.7px;

    ${media.lg`
      font-size: 3.5rem;
      font-weight: 700;
      line-height: 3.75rem;
      letter-spacing: -0.1px;
    `};
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 2.25rem;

    ${media.lg`
      font-size: 2rem;
      line-height: 2.625rem;
    `};
  }

  h3 {
    font-size: 1.333rem;
    line-height: 2.25rem;
    font-weight: 700;
    ${media.lg`
      font-size: 1.5rem;
      line-height: 2.25rem;
    `};
  }

  h4 {
    font-size: 1.25rem;
    line-height: 1.5rem;
    font-family: ${theme.values.fonts.primary};
    font-weight: 700;
    ${media.lg`
      font-size: 1.125rem;
      line-height: 1.625rem;
    `};
  }

  h5 {
    font-size: 1rem;
    text-transform: uppercase;
    line-height: 1.125rem;
    letter-spacing: 1.05px;
    font-family: ${theme.values.fonts.primary};
    font-weight: 700;
    ${media.lg`
      font-size: 1rem;
      line-height: 1.375rem;
      letter-spacing: 1.2px;
    `};
  }

  h6 {
    font-size: 0.8rem;
  }

  /* p,
  li,
  a,
  dt,
  dd,
  span,
  input,
  label,
  button {
    font-size: 0.9375rem;
    line-height: 1.438rem;
    font-family: ${theme.values.fonts.primary};
    &.large {
      font-size: 1.063rem;
      line-height: 1.625rem;
    }
    &.legal {
      font-size: 0.75rem;
      line-height: 1.125rem;
    }
    ${media.lg`
      font-size: 1rem;
      line-height: 1.5rem;
      &.large {
        font-size: 1.25rem;
        line-height: 2rem;
      }
      &.legal {
        font-size: 0.75rem;
        line-height: 1.125rem;
      }
    `};
  } */
  .scrollbar-custom-page {
    ::-webkit-scrollbar {
      transition: all 0.2s;
      width: 12px;
    }

    ::-webkit-scrollbar-track {
      transition: all 0.2s;
      background: ${({ theme: { colors } }) => colors.gray.gray_9};
    }

    ::-webkit-scrollbar-thumb {
      transition: all 0.2s;
      background: ${({ theme: { colors } }) => colors.gray.gray_3};
    }
  }

  .scroll-custom-panel {
    &::-webkit-scrollbar-track {
      border-radius: 10px;
      background: ${({ theme: { colors } }) => colors.gray.gray_9};
    }

    &::-webkit-scrollbar {
      width: 6px;
      height: 6px;
      background: ${({ theme: { colors } }) => colors.gray.gray_9};
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 10px;
      -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
      background: ${({ theme: { colors } }) => colors.gray.gray_3};
    }
  }
`;
