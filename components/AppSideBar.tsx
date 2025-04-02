import * as React from "react"
import { Home, User,BookOpen,BookUp,Users} from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar"
import { VersionSwitcher } from "./version-switcher"
import Link from "next/link"
import { NavUser } from "./nav-user"

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  user: {
    name: "Admin",
    email: "Admin@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
}

const items = [
  {
    title: "Home",
    url: "/admin/home",
    icon: Home,
  },
  {
    title: "All Users",
    url: "/admin/users",
    icon: Users ,
  },
  {
    title: "All Books",
    url: "/admin/books",
    icon: BookOpen,
  },
  {
    title: "Borrowed Requests",
    url: "/admin/borrowed",
    icon: BookUp ,
  },
  {
    title: "Account Requests",
    url: "/admin/account",
    icon: User,
  },
]

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title} className="p-2 ">
                  <SidebarMenuButton asChild>
                    <Link prefetch={true} href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
