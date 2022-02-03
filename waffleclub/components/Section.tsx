import styled from "styled-components";
import {Red, YellowCream} from "../consts";

const StyledSection = styled.section<{ flex?: boolean }>`
  padding-block: 9rem;

  &:nth-of-type(even) {
    background: ${YellowCream};
    color: ${Red};
  }

  h2 {
    max-width: 1500px;
    margin: auto;
    text-align: center;
    margin-block-end: 3rem;
  }

  .content {
    padding-left: 2rem;
    padding-right: 2rem;
    max-width: 1500px;
    margin: auto;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    ${p => p.flex ? 'display:flex; flex-direction: column;' : ''};
    @media (min-width: 778px) {
      ${p => p.flex ? 'flex-direction: row;' : ''};
    }

    p {
      max-width: 650px;
      margin: auto;
      margin-block-end: 1rem;
    }

    img {
      border-radius: 20px;
      max-width: 90%;
      @media (min-width: 778px) {
        max-width: 45%;
      }
    }
  }
`;

export const Section = ({
                          title,
                          children,
                          contentStyle,
                          flex,
                          ...props
                        }: { flex?: boolean; title?: string; children?: JSX.Element[] | JSX.Element; id?: string; style?: any; contentStyle?: any }) =>
  <StyledSection flex={flex} {...props}>
    {title && <h2>{title}</h2>}
    <div className="content" style={contentStyle || undefined}>
      {children}
    </div>
  </StyledSection>
