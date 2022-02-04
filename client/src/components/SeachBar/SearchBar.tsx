import React, { useState } from "react";
import Select from "react-select";
import { AppProps } from "next/app";
import axios from "axios";
import { user } from "../../redux/reducers/user";
import { useGet_All_ItemsQuery } from "../../generated/graphql";
import ItemList from "../ItemList/ItemList";
import { Container } from "@chakra-ui/react";

interface Props {
  label: string;
  value: string;
  message: string;
}

export default function SearchBar({ options }) {
  const [selectOptions, setSelectedOption] = useState(null);
  // const [dataOptions, setDataOptions] = React.useState();
  // const [{ error, fetching, data }]= useGet_All_ItemsQuery();


  //   .map(item => {
//     return {
// SICK_points: item.SICK_points,
// allergies: item.allergies,
// archive: item.archive,
// complete: item.complete,
// createdAt: item.createdAt,
// description: item.description,
// diets: item.diets,
// id: item.id,
// isGroceries: item.isGroceries,
// name: item.name,
// owner: item.owner,
// ownerId: item.ownerId,
// servings: item.servings
//     }
//   });

  console.log("items in search bar: ", options);

  return (
    <Container className="search-bar">
      <Select
        defaultValue={selectOptions}
        onChange={setSelectedOption}
        options={options.map((data) => {
          return {
            value: data.name,
            label: data.name,
            ownerId: data.ownerId,
            complete: data.complete,
          };
        })}
        isSearchable
        placeholder
        delimiter="value"
      />
    </Container>
  );
}
