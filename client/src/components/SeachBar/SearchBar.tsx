import React, { useState } from "react";
import Select from "react-select";
import { AppProps } from "next/app";
import axios from "axios";
import { user } from "../../redux/reducers/user";
import { useGet_All_ItemsQuery } from '../../generated/graphql';
import ItemList from '../ItemList/ItemList';

interface Props {
  label: string;
  value: string;
  message: string;
}

export default function SearchBar() {
  const [selectOptions, setSelectedOption] = useState(null);
  // const [dataOptions, setDataOptions] = React.useState();
  // const [{ error, fetching, data }]= useGet_All_ItemsQuery();

  // const getDataOptions = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:4000/graphql",
  //     data: {
  //       query: `query {
  //         getAllItems {
  //           name
  //           ownerId
  //           complete
  //         }
  //       }`,
  //     },
  //   })
  //     .then((response) => {
  //       console.log("getDataOptions response :", response);


  //       const massagedDataOptions = response.data.data.getAllItems.map(
  //         (data) => {
  //           if (data.complete === false) {
  //             return {
  //               value: data.name,
  //               label: data.name,
  //               ownerId: data.ownerId,
  //               complete: data.complete
  //             }
  //           }
  //         }
  //       );
  //       console.log("massaged data", massagedDataOptions);
  //       // dataOptions(response.data.data);
  //       setDataOptions(massagedDataOptions);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };




  // const massagedOptions = dataOptions.getAllItems.map((data) => {
  //   if (data.complete === false) {
  //     return {
  //       value: data.name,
  //       label: data.name,
  //       ownerId: data.ownerId,
  //       complete: data.complete
  //     }
  //   }
  // })

  return (
    <Container className='search-bar'>
      <Select
        defaultValue={selectOptions}
        onChange={setSelectedOption}
        options={selectOptions}
        isMulti
        isSearchable
        placeholder
        delimiter='value'
      />
    </Container>
  );
}
