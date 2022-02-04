import React, { useState } from "react";
import Select from "react-select";
import { AppProps } from "next/app";
import axios from "axios";
import { user } from "../../redux/reducers/user";
import { useGet_All_ItemsQuery } from '../../generated/graphql'

interface Props {
  label: string;
  value: string;
  message: string;
}


export default function SearchBar() {
  const [selectOptions, setSelectedOption] = useState(null);
  const [{ error, fetching, data }]= useGet_All_ItemsQuery();

  // const getDataOptions = () => {
  //   axios({
  //     method: "post",
  //     url: "http://localhost:3000",
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

  // getDataOptions();


const massagedOptions = data?.getAllItems.map((data) => {
            if (data.complete === false) {
              return {
                value: data.name,
                label: data.name,
                ownerId: data.ownerId,
                complete: data.complete
              }
            }
          })

console.log('massagedData ',massagedOptions);
  return (
    <div className="search-bar">
      <Select
        defaultValue={selectOptions}
        onChange={setSelectedOption}
        options={massagedOptions}
        isSearchable
        placeholder
        delimiter="value"
      />
    </div>
  );
}
