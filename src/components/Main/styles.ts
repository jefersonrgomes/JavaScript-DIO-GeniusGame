import styled, { css } from "styled-components";
import { RiGroupLine, RiBuilding4Line, RiMapPin2Line, RiMailLine, RiLinksLine } from 'react-icons/ri'
export const Container = styled.div`
      display: flex;
      align-items: center;
      background: var(--white);
      padding: 11px 16px;
      height: 100%;
`;

export const Flex = styled.div`
          
`;

export const Avatar = styled.img`
          border-radius: 100%;

`;

export const Row = styled.ul`
        
        li{
                color: whitesmoke !important;;
          }
`;

export const Column = styled.ul`
        
`;
const iconsCss = css`
width: 16px;
height: 16px;
`;

export const PeapleIcon = styled(RiGroupLine)`${iconsCss}`;
export const CompanyIcon = styled(RiBuilding4Line)`${iconsCss}`;
export const LocationIcon = styled(RiMapPin2Line)`${iconsCss}`;
export const emailIcon = styled(RiMailLine)`${iconsCss}`;