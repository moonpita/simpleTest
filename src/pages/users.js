import React, { useState } from "react";
import Layout from '@/shared/layout/layout'
import { User } from '@/shared/ui/user/user'
import { InfiniteScroll } from "@/shared/ui/infiniteScroll/infiniteScroll";
import s from '@/styles/users.module.scss'
import { PublicApi } from "@/shared/api/api";

export default function Users({initialUsers}) {
  const [usersList, setUsersList] = useState(initialUsers);
  const [page, setPage] = useState(1);

  const loadMoreUsers = async () => {
    const newUsers = await PublicApi.fetchUsers(page);
    console.log(PublicApi);
    setUsersList([
      ...usersList,
      ...newUsers
    ]);
    setPage((page) => page + 1);
  }

  const usersListElements = usersList.map(user =>
    <User
      className={s.user}
      key={user.id}
      name={user.login}
      image={user.avatar_url}
      id={user.id}
      nodeId={user.node_id}
    />
  );

  return (
    <Layout>
    <h1 className={s.title}>Список пользователей</h1>
    <ul className={s.list} style={{height: "600px"}}>
      <InfiniteScroll
        listItems={usersListElements}
        lastRowHandler={loadMoreUsers} 
      />
     </ul>
    </Layout>
  );
}

export async function getServerSideProps() {
  const initialUsers = await PublicApi.fetchUsers(1);

  return {
    props: {
      initialUsers
    }
  }

}