import styled from "styled-components";

export type BaseFlexProps = {
  align?: "flex-start" | "flex-end" | "center" | "stretch" | "baseline";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  width?: string;
  height?: string;
  gap?: number;
};

export const BaseFlex = styled.div<BaseFlexProps>`
  display: flex;
  justify-content: ${(props) => props.justify || "flex-start"};
  align-items: ${(props) => props.align || "flex-start"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "unset"};
  box-sizing: border-box;
  gap: ${(props) => props.gap || "0"}rem;
`;

export const Row = styled(BaseFlex)`
  flex-direction: row;
`;

export const Column = styled(BaseFlex)`
  flex-direction: column;
`;
