import { Stack } from "@mui/material";
import UserCard from "./UserCard";

export default function UserCardList({ users }: { users: any }) {
    return (
        <Stack spacing={2}>
            {users.map((u:any) => (
                <UserCard key={u.id} user={u} />
            ))}
        </Stack>
    );
}
