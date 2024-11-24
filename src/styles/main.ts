import styled from '@emotion/styled';

export const TableContainerStyled = styled.div`
  position: relative;
  width: 100%;
  overflow-x: auto;
  border: 1px solid #dee2e6;
  border-radius: 8px;
  font-size: 14px;
`;

export const TableStyled = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: #212529;
`;

export const TableHeaderStyled = styled.thead`
  // border-bottom: 1px solid #dee2e6;
`;

export const TableRowStyled = styled.tr`
  border-bottom: 1px solid #dee2e6;
  cursor: pointer;

  &:hover {
    background-color: #f1f1f1;
  }
`;

export const TableCellStyled = styled.td`
  padding: 15px 10px;
  border-bottom: 1px solid #dee2e6;
  text-align: left;

  ${(props: any) =>
    props.head &&
    `
    font-weight: 500;
    color: #495057;
    border-bottom: 2px solid #dee2e6;
  `}
`;

export const TableHeaderCellStyled = styled(TableCellStyled)`
  font-weight: 700;
  color: #495057;
  background-color: #f8f9fa;
`;

export const FooterStyled = styled.div`
  text-align: right;
  padding: 0.2rem 0;
`;
