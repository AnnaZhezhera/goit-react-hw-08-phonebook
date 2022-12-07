import React from 'react';
import { setNameFilter } from '../../redux/filterSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectNameFilter } from 'redux/contacts/selectors';
import css from './FilterBlock.module.css';

export default function Filter() {
  const dispatch = useDispatch();
  const filteredName = useSelector(selectNameFilter);

  return (
    <div className={css.findContactWrapp}>
      <label className={css.label}>
        Find contacts by name
        <input
          className={css.input}
          type="text"
          name="filter"
          value={filteredName}
          onChange={event => dispatch(setNameFilter(event.currentTarget.value))}
        />
      </label>
    </div>
  );
}
