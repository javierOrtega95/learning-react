import {
  Badge,
  Button,
  Card,
  Flex,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableRow,
  Title,
} from "@tremor/react";
import { useRef, useState } from "react";
import { useAppSelector } from "../../store/hooks/store";
import { type UserWithId } from "../types";
import { DeleteUser } from "./DeleteUser";
import { UserForm } from "./UserForm";

export default function ListOfUsers() {
  const users = useAppSelector((state) => state.users);

  const [openUserForm, setOpenUserForm] = useState(false);
  const [openDeleteUser, setOpenDeleteUser] = useState(false);

  const userRef = useRef<UserWithId>();
  const userId = useRef<string>("");

  const handleOpenUserForm = (user?: UserWithId) => {
    userRef.current = user;
    setOpenUserForm(true);
  };

  const handleCloseUserForm = () => {
    userRef.current = undefined;
    setOpenUserForm(false);
  };

  const handleOpenDeleteUser = (id: string) => {
    userId.current = id;
    setOpenDeleteUser(true);
  };

  const handleCloseDeleteUser = () => {
    userId.current = "";
    setOpenDeleteUser(false);
  };

  return (
    <>
      <Card className="mt-3">
        <Flex justifyContent="between" className="space-x-2">
          <Flex justifyContent="start">
            <Title>Users</Title>
            <Badge className="ml-3">{users.length}</Badge>
          </Flex>
          <Button variant="light" onClick={() => handleOpenUserForm()}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <title>Add user</title>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </Button>
        </Flex>
        <Table className="mt-2">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Id</TableHeaderCell>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Email</TableHeaderCell>
              <TableHeaderCell>Actions</TableHeaderCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {users.map((user) => (
              <TableRow key={user.name}>
                <TableCell>{user.id}</TableCell>
                <TableCell style={{ display: "flex", alignItems: "center" }}>
                  <img
                    style={{
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      marginRight: "8px",
                    }}
                    src={`https://unavatar.io/github/${user.github}`}
                    alt={user.name}
                  />
                  {user.name}
                </TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>
                  <button
                    type="button"
                    onClick={() => handleOpenUserForm(user)}
                    className="hover:text-tremor-brand"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <title>Edit element</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={() => handleOpenDeleteUser(user.id)}
                    type="button"
                    className="hover:text-red-600"
                  >
                    <svg
                      aria-label="Remove element"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <title>Remove element</title>
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>

      <UserForm
        open={openUserForm}
        user={userRef.current}
        onClose={handleCloseUserForm}
      />

      <DeleteUser
        open={openDeleteUser}
        userId={userId.current}
        onClose={handleCloseDeleteUser}
      />
    </>
  );
}
