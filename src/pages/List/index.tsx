import React, { useEffect, useState } from "react";
import { api } from "../../api/api";
import { blockUserApi, getAllBlockedUsersApi } from "../../api/blockedApi";
import { Header } from "../../components/Header";
import { ListItem } from "../../components/ListItem";
import { BlockedUser } from "../../global/globalTypes";
import { Container, ListContainer } from "./styles";

export function List() {
  // useStates
  const [blockedUsers, setBlockedUsers] = useState<BlockedUser[]>([]);
  const [refresh, setRefresh] = useState<boolean>(false);
  //   functions
  async function blockUser(username: string, block: number) {
    const { worked, data } = await blockUserApi(username, block);
    console.log(worked, data);
  }
  //   useEffects
  useEffect(() => {
    async function action() {
      const { data, message, worked } = await getAllBlockedUsersApi();
      if (worked) {
        setBlockedUsers(data.data);
        setRefresh(!refresh);
      }
    }

    action();
  }, [refresh]);
  return (
    <>
      <Header title="List" />

      <Container>
        <ListContainer>
          {blockedUsers.map((blockedUser) => {
            return (
              <ListItem
                key={blockedUser.id}
                text={blockedUser.username}
                checkValue={blockedUser.isBlocked === 1}
                setCheck={(newVal: boolean) => {
                  blockUser(
                    blockedUser.username,
                    blockedUser.isBlocked === 1 ? 0 : 1
                  );
                }}
              />
            );
          })}
        </ListContainer>
      </Container>
    </>
  );
}
