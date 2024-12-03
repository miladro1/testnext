import * as React from "react"
import { NavMain } from "@togetherise/shadcn/components/nav-main"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  useSidebar,
} from "@togetherise/shadcn/components/ui/sidebar"
import { PATHS } from "@togetherise/core/routes/routes.path"
import { cn } from "../lib/utils"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const sidebar = useSidebar()
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader className={cn("flex justify-center", sidebar.open ? "h-[64px]" : "h-[48px]")}>
        {/* <div className="relative h-full">
          <Image
            src={sidebar.open ? BigLogo : SmallLogo}
            alt="Logo"
            fill
          />
        </div> */}
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={PATHS.navMain} shared={PATHS.dashboardSharedAccessPages} />
      </SidebarContent>
      {/* <SidebarFooter> */}
        {/* place logout button here */}
        {/* <SidebarTrigger className="ms-auto" /> */}
      {/* </SidebarFooter> */}
      <SidebarRail />
    </Sidebar>
  )
}
