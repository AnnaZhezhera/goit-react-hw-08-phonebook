import React from 'react';
import { FilterBlock, FindContactWrapp } from './FilterBlock.styled';
import { setNameFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from 'redux/contacts/selectors';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredName = useSelector(selectNameFilter);

  return (
    <FindContactWrapp>
      <FilterBlock>
        Find contacts by name
        <input
          type="text"
          name="filter"
          value={filteredName}
          onChange={event => dispatch(setNameFilter(event.currentTarget.value))}
        />
      </FilterBlock>
    </FindContactWrapp>
  );
}
