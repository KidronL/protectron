import { columns } from "@/app/vault/columns";
import { Credential } from "@/types";
import { VaultTable } from "@/app/vault/vault-table";

async function getData(): Promise<Credential[]> {

    return [
        {
            id: 1,
            username: "exampleusername",
            password: "123@Easy$treet",
            url: "https://www.example.com",
            notes: "This is an example for credentials."
        },
        {
            id: 2,
            username: "fakeuser",
            password: "DW445%L173",
            url: "https://www.fakesite.com",
            notes: "Just coming up with examples of credentials for the table."
        },
        {
            id: 3,
            username: "testuser1",
            password: "Th1sIsF@k3!",
            url: "https://www.test-site.com",
            notes: "Another test case to make sure everything is doing what it should."
        },
    ]
}

export default async function VaultPage() {
    const data = await getData();

    return (
        <div className="container mx-auto py-10">
            <VaultTable columns={columns} data={data} />
        </div>
    )
}
