import React, { useState } from "react";
import Select from "react-select";
import { AppProps } from "next/app";
import axios from "axios";
import { user } from "../../redux/reducers/user";

interface Props {
  label: string;
  value: string;
  message: string;
}


export default function SearchBar() {
  const [selectOptions, setSelectedOption] = useState(null);
  const [dataOptions, setDataOptions] = React.useState();

  const getDataOptions = () => {
    axios({
      method: "post",
      url: "http://localhost:4000/graphql",
      data: {
        query: `query {
          getAllItems {
            name
            ownerId
            complete
          }
        }`,
      },
    })
      .then((response) => {
        console.log("getDataOptions response :", response.data);

        const massagedDataOptions = response.data.data.getAllItems.map(
          (data) => {
            if (data.complete === false) {
              return {
                value: data.name,
                label: data.name,
                ownerId: data.ownerId,
                complete: data.complete
              }
            }
          }
        );
        console.log("massaged data", massagedDataOptions);
        // dataOptions(response.data.data);
        setDataOptions(massagedDataOptions);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  getDataOptions();

  return (
    <div className="search-bar">
      <Select
        defaultValue={selectOptions}
        onChange={setSelectedOption}
        options={dataOptions}
        isMulti
        isSearchable
        placeholder
        delimiter="value"
      />
    </div>
  );
}
