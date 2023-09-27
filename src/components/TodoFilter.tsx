import React from 'react';
import { SortTypes } from '../types/Todo';

type Props = {
  handleSort: (type:string) => void;
  sortType: SortTypes;
};

const types = ['All', 'Active', 'Completed'];

export const TodoFilter: React.FC<Props> = ({ handleSort, sortType }) => {
  return (
    <nav className="filter" data-cy="Filter">
      {types.map((type:string) => (
        <a
          href="#/"
          className={`filter__link ${type.toLowerCase() === sortType ? 'selected' : ''}`}
          data-cy={`FilterLink${type}`}
          key={type}
          onClick={() => handleSort(type.toLowerCase())}
        >
          {type}
        </a>
      ))}
    </nav>
  );
};
