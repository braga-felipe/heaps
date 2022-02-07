import React, { useState } from 'react';
import Select from 'react-select';
import { Container } from '@chakra-ui/react';

interface Props {
  label: string;
  value: string;
  message: string;
}

export default function SearchBar({ items, onChange }) {
  const [selectOptions, setSelectedOption] = useState(null);

  return (
    <Container className='search-bar'>
      <Select
        defaultValue={selectOptions}
        onChange={onChange}
        options={items.map((data) => {
          console.log('DATA', data);
          return {
            value: data?.props?.item.name,
            label: data?.props?.item.name,
            ownerId: data?.props?.item.ownerId,
            complete: data?.props?.item.complete,
            SICK_points: data?.props?.item.SICK_points,
            allergies: data?.props?.item.allergies,
            archive: data?.props?.item.archive,
            createdAt: data?.props?.item.createdAt,
            description: data?.props?.item.description,
            diets: data?.props?.item.diets,
            id: data?.props?.item.id,
            isGroceries: data?.props?.item.isGroceries,
            name: data?.props?.item.name,
            owner: data?.props?.item.owner,
            servings: data?.props?.item.servings,
          };
        })}
        isSearchable
        placeholder={'Search...'}
        delimiter='value'
        isClearable
      />
    </Container>
  );
}
