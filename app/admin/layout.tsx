import { auth } from "@/auth"
import { AppSidebar } from "@/components/AppSideBar"
import CustomAvatar from "@/components/CustomAvatar"
import CustomBreadCrump from "@/components/CustomBreadCrump"
import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { db } from "@/database/drizzle"
import { users } from "@/database/schema"
import { eq } from "drizzle-orm"
import { redirect } from "next/navigation"
import "../../style/admin.css"
import {ModeToggle} from "@/components/theme-toggle/ModeToggle";
export default async function Layout({ children }: { children: React.ReactNode }) {
  const session = await auth()
  if (!session?.user?.id) redirect("/sign-in");

  const isAdmin = await db
    .select({ isAdmin: users.role })
    .from(users)
    .where(eq(users.id, session.user.id))
    .limit(1)
    .then((res) => res[0]?.isAdmin === "ADMIN");

  if (!isAdmin) redirect("/");
  
  return (
    <SidebarProvider>
    <AppSidebar />
    <SidebarInset>
      <header className="flex w-full h-16 justify-between items-center gap-2 border-b px-4">
        <div className="flex items-center gap-2">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <CustomBreadCrump />
        </div>
      <div className="flex items-center gap-4">
          <CustomAvatar />
          <ModeToggle />
      </div>
      </header>
      
      <main className="min-h-screen w-full flex-1 rounded-xl bg-muted/50 bg-[#F8F8FF]">
          {children}
      </main>
      
    </SidebarInset>
  </SidebarProvider>
  )
}
