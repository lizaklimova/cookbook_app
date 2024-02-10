import { FC, useState } from 'react';
import {
  ArrowDown,
  Option,
  Options,
  Select,
  SelectContainer,
  SelectName,
  SelectWrap,
} from './SearchTypeSelector.styled';
import { useDispatch, useSelector } from 'react-redux';
import { updateSearchTypeAction } from '../../../redux/search/slice';
import { selectSearchType } from '../../../redux/search/selectors';
import useTheme from 'hooks/useTheme';

const SearchTypeSelector: FC = () => {
  const dispatch = useDispatch();
  const searchType = useSelector(selectSearchType);
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = useState(false);

  const onSearchTypeChange = (event: React.MouseEvent<HTMLLIElement>) => {
    const value = event.currentTarget.dataset.value;

    dispatch(updateSearchTypeAction(value));
    closeDropdown();
  };

  const openDropdown = () => {
    setIsOpen(true);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  return (
    <SelectWrap>
      <SelectName>Search by:</SelectName>
      <SelectContainer>
        <Select onClick={openDropdown} $theme={theme}>
          {searchType === 'query' ? 'Title' : 'Ingredients'}
          <ArrowDown />
        </Select>

        {isOpen && (
          <Options>
            <Option data-value="query" onClick={onSearchTypeChange}>
              Title
            </Option>
            <Option data-value="ingredient" onClick={onSearchTypeChange}>
              Ingredients
            </Option>
          </Options>
        )}
      </SelectContainer>
    </SelectWrap>
  );
};

export default SearchTypeSelector;
