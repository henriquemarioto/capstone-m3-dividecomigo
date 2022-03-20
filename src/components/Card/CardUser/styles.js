import styled from "styled-components";
import { css } from "styled-components";

export const ContentInfo = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  gap: 5px;
`;

export const ContentContainer = styled.div`
  width: 100%;
`;

export const MenuContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  .close-menu {
    font-size: 25px;
    background: transparent;
    color: var(--dark-gray);
  }
`;

export const UserInfo = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

export const StatusContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;

  ${({ status }) => {
    switch (status) {
      case "pending":
        return css`
          color: var(--blue);
        `;
      case "unpaid":
        return css`
          color: var(--red);
        `;
      case "paid":
        return css`
          color: var(--green);
        `;
      default:
        break;
    }
  }}

  span {
    font-weight: 700;
    font-size: 15px;
    line-height: 18px;
    white-space: nowrap;
  }

  svg {
    font-size: 20px;
  }
`;

export const PerfilDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  gap: 8px;

  img {
    border-radius: 100%;
    height: 40px;
  }

  h3 {
    font-weight: 900;
    font-size: 17px;
    line-height: 20px;
  }
`;

export const DivSelect = styled.div`
  cursor: pointer;

  .radioInput {
    cursor: pointer;
    appearance: none;
    width: 15px;
    height: 15px;
    border: 1px solid var(--dark-gray);
    border-radius: 100%;
    outline: none;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .radioInput::before {
    content: "";
    position: absolute;
    height: 9px;
    width: 9px;
    background-color: var(--dark-gray);
    border-radius: 100%;
    opacity: 0;
  }
  .radioInput:checked::before {
    opacity: 1;
  }
`;

export const InfoFind = styled.div`
  display: flex;

  align-items: center;
  gap: 4px;
  font-size: 10px;
  img {
    border-radius: 3px;
    width: 13px;
    height: 13px;
  }
`;
export const ContentRequest = styled.div`
  button {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    color: var(--blue);
    font-weight: 500;
  }
  color: var(--blue);
`;
