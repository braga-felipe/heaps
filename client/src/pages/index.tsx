import type { NextPage } from "next";
import { Box, Container, Flex, Heading, Spacer } from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { getAllItems } from "../redux/actions/items";
import { useGet_All_ItemsQuery, useMeQuery } from "../generated/graphql";
import Home from "../components/Home/Home";
import { useEffect } from "react";
import { getInitialUser } from "../redux/actions/user";
import "@fontsource/lobster";
import Avatar from "../components/Assets/Avatar";

export interface State {
  user?;
  items?;
  chats?;
}

const IndexPage: NextPage = () => {
  const dispatch = useDispatch();

  const getItemsList = () => {
    const [{ data, fetching }] = useGet_All_ItemsQuery();
    return data && data.getAllItems;
  };

  // TODO:take care of async with then?
  const getMeData = () => {
    const [{ data }] = useMeQuery();
    return data && data.me;
  };

  const itemList = getItemsList();

  const meUser = getMeData();

  useEffect(() => {
    dispatch(getAllItems(itemList));
    meUser && dispatch(getInitialUser(meUser));
  });

  return (
    <Container sx={{ height: '412px', width: '375px', }}>
      <Flex flexDirection="row">
        {meUser && <Heading sx={HcStyle()}>Hello, {meUser.username}!</Heading>}
        <Heading sx={HStyle()}>Heaps </Heading>
      </Flex>
      <Home />
    </Container>
  );
};
function HStyle() {
  return {
    position: "fixed",
    fontFamily: "Lobster",
    fontSize: "3xl",
    margin: "2%",
    color: "#5D55B4;",
  };
}

function HcStyle() {
  return {
    position: "fixed",
    left: "250px",
    fontSize: "xs",
    zIndex: "1",
    backgroundColor: "transparent",
    width: "100%",
    marginTop: "10px",
    color: "#5D55B4",
  };
}

export default IndexPage;
