"use client"

import { ChevronRight, ChevronLeft } from "lucide-react"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@togetherise/shadcn/components/ui/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@togetherise/shadcn/components/ui/sidebar"
import { useDirection } from "@togetherise/hooks/useDirection"
import { useTranslations } from "next-intl"
import type { Icon } from "iconsax-react"
import { useRouter } from "next/router"

interface INavItem {
  title: string
  url: string
  icon?: Icon
  isActive?: boolean
  items?: {
    title: string
    url: string
  }[]
}

export function NavMain({
  items,
  shared
}: {
  items: INavItem[]
  shared: INavItem[]
}) {
  const router = useRouter()
  const t = useTranslations()
  const direction = useDirection();

  const handleNavigate = (url: string) => {
    router.push(url)
  }

  return (
    <SidebarGroup>
      {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
      <SidebarMenu>
        {items.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild >
                <SidebarMenuButton tooltip={t(item.title)} size={"lg"} onClick={() => !item.items && handleNavigate(item.url)}>
                  {item.icon && <item.icon style={{ width: 24, height: 24 }} />}
                  <span>{t(item.title)}</span>
                  {(item.items && item.items.length > 0) && (direction == "ltr"
                    ? <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    : <ChevronLeft className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />)}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && item.items.length > 0 && <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild className="p-4" onClick={() => handleNavigate(subItem.url)}>
                        {/* <a href={subItem.url}> */}
                        <span>{t(subItem.title)}</span>
                        {/* </a> */}
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>}
            </SidebarMenuItem>
          </Collapsible>
        ))}
        <hr className="border-grey-300 my-6" />
        {shared.map((item) => (
          <Collapsible
            key={item.title}
            asChild
            defaultOpen={item.isActive}
            className="group/collapsible"
          >
            <SidebarMenuItem>
              <CollapsibleTrigger asChild >
                <SidebarMenuButton tooltip={t(item.title)} size={"lg"}>
                  {item.icon && <item.icon style={{ width: 24, height: 24 }} />}
                  <span>{t(item.title)}</span>
                  {(item.items && item.items.length > 0) && (direction == "ltr"
                    ? <ChevronRight className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                    : <ChevronLeft className="ms-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />)}
                </SidebarMenuButton>
              </CollapsibleTrigger>
              {item.items && item.items.length > 0 && <CollapsibleContent>
                <SidebarMenuSub>
                  {item.items?.map((subItem) => (
                    <SidebarMenuSubItem key={subItem.title}>
                      <SidebarMenuSubButton asChild className="p-4">
                        <a href={subItem.url}>
                          <span>{t(subItem.title)}</span>
                        </a>
                      </SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  ))}
                </SidebarMenuSub>
              </CollapsibleContent>}
            </SidebarMenuItem>
          </Collapsible>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  )
}
