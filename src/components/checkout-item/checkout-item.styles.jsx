import styled from 'styled-components';

export const CheckoutItemContainer = styled.div`
    width: 100%;
    display: flex;
    min-height: 100px;
    border-bottom: 1px solid darkgrey;
    padding: 15px 0;
    font-size: 20px;
    align-items: center;
`;

export const CheckoutItemImageContainer = styled.div`
    width: 23%;
    padding-right: 15px;

    img {
        width: 100%;
        height: 100%;
    }
`;

export const BaseSpan = styled.span`
    width: 23%;
`;

export const ItemQuantity = styled(BaseSpan)`
    display: flex;
`;

export const ItemArrow = styled.div`
    cursor: pointer;
`;

export const ItemValue = styled.span`
    margin: 0 10px;
`;

export const RemoveItemButton = styled.div`
    padding-left: 12px;
    cursor: pointer;
`;