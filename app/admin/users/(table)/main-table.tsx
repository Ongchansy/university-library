
import { columns, Users } from "./columns"
import { DataTable } from "./data-table"
import { db } from "@/database/drizzle"
import { users } from "@/database/schema"


export default async function MianTable() {
  const user = await db.select().from(users).then((res) => res)


  return (
    <div >
        <div className='flex justify-between items-center py-5'>
            <h1 className="text-xl font-semibold text-sidebar-foreground">All Users</h1>
        </div>
      <DataTable columns={columns} data={user as Users} />
    </div>
  )
}
