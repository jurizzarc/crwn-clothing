import { useNavigate } from 'react-router-dom';

import {
    DirectoryItemBackground,
    DirectoryItemBody,
    DirectoryItemContainer
} from './directory-item.styles';

const DirectoryItem = ({ category }) => {
    const { imageUrl, title, route } = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route);

    return (
        <DirectoryItemContainer onClick={onNavigateHandler}>
            <DirectoryItemBackground imageUrl={imageUrl} />
            <DirectoryItemBody>
                <h2>{title}</h2>
                <p>Shop Now</p>
            </DirectoryItemBody>
        </DirectoryItemContainer>
    );
};

export default DirectoryItem;