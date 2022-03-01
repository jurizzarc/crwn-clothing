import styled from 'styled-components';

export const CollectionPreviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 30px;
`;

export const CategoryTitle = styled.h1`
    font-size: 28px;
    margin-bottom: 25px;
    text-transform: uppercase;
    cursor: pointer;

    &:hover {
        color: grey;
    }
`;

export const PreviewContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;