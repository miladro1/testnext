import { Sheet, SheetTrigger, SheetContent } from "@togetherise/shadcn/components/ui/sheet"
import { Button } from "@togetherise/shadcn/components/ui/button"
import Link from "next/link"
import { Togetherise } from "@togetherise/resource/icons/Togetherise"
import { useTranslations } from "next-intl"
import { DropdownLinkItem, HoverDropdownLink } from "./DropdownLink"
import { navigationMenuTriggerStyle } from "@togetherise/shadcn/components/ui/navigation-menu"
import { ArchiveBook, CalendarTick, CallCalling, MoneyRecive, ShieldSecurity, Shop, TaskSquare } from "iconsax-react"
import { FAQIcon } from "@togetherise/resource/icons/FAQIcon"
import { Typography } from "./Typography"
import { Resource } from "./Resource"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@togetherise/shadcn/components/ui/accordion"

const InvestSubPaths = [
    {
        label: "why_trust",
        href: "why_trust",
        icon: <ShieldSecurity />
    },
    {
        label: "invest_eligibility",
        href: "invest_eligibility",
        icon: <ArchiveBook />
    }
]

const RaiseSubPaths = [
    {
        label: "raise_funds",
        href: "raise_funds",
        icon: <MoneyRecive />
    },
    {
        label: "franchise_funding",
        href: "franchise_funding",
        icon: <Shop />
    },
    {
        label: "fundraising_eligibility",
        href: "fundraising_eligibility",
        icon: <ArchiveBook />
    },
    {
        label: "apply_for_funding",
        href: "apply_for_funding",
        icon: <TaskSquare />
    }
]

const SupportSubPath = [
    {
        label: "help",
        href: "help",
        icon: <FAQIcon />
    },
    {
        label: "contact_us",
        href: "contact_us",
        icon: <CallCalling />
    },
    {
        label: "schedule_meeting",
        href: "schedule_meeting",
        icon: <CalendarTick />
    }
]

export const MainHeader = () => {
    const t = useTranslations()
    return (
        <header className="flex h-[84px] w-full shrink-0 items-center  px-4 md:px-6 lg:px-12 border-b border-b-grey-400 justify-between">
            <Sheet>
                <Togetherise className="md:hidden" />
                <SheetTrigger asChild>
                    <Button variant="ghost" size="iconMD" className="md:hidden">
                        <Resource name="HamburgerIcon2" />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <SheetContent>
                    <div className="grid gap-2 py-6">
                        <Accordion type="single" collapsible className="w-full gap-2 flex flex-col">
                            <AccordionItem value="invest">
                                <AccordionTrigger><Typography variant="body2">{t("invest")}</Typography></AccordionTrigger>
                                <AccordionContent className="border rounded-sm">
                                    {InvestSubPaths.map(item => <DropdownLinkItem key={item.href} href={item.href} icon={item.icon} label={item.label} />)}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="raise">
                                <AccordionTrigger><Typography variant="body2">{t("raise")}</Typography></AccordionTrigger>
                                <AccordionContent className="border rounded-sm">
                                    {RaiseSubPaths.map(item => <DropdownLinkItem key={item.href} href={item.href} icon={item.icon} label={item.label} />)}
                                </AccordionContent>
                            </AccordionItem>
                            <AccordionItem value="blog">
                                <Link href={"#"}>
                                    <Typography variant="body2">{t("blog")}</Typography>
                                </Link>
                            </AccordionItem>
                            <AccordionItem value="support">
                                <AccordionTrigger><Typography variant="body2">{t("supportNav")}</Typography></AccordionTrigger>
                                <AccordionContent className="border rounded-sm">
                                    {SupportSubPath.map(item => <DropdownLinkItem key={item.href} href={item.href} icon={item.icon} label={item.label} />)}
                                </AccordionContent>
                            </AccordionItem>
                        </Accordion>
                    </div>
                </SheetContent>
            </Sheet>
            <div className="hidden md:flex items-center">
                <Link href="#" className="mr-6 hidden md:flex" prefetch={false}>
                    <Togetherise />
                    <span className="sr-only">{t("togetherise")}</span>
                </Link>
                <HoverDropdownLink label={t("invest")} items={InvestSubPaths} />
                <HoverDropdownLink label={t("raise")} items={RaiseSubPaths} />
                <Link href={"#"} className={navigationMenuTriggerStyle()}>
                    <Typography variant='body2' weight='bold'>{t("blog")}</Typography>
                </Link>
                <HoverDropdownLink label={t("supportNav")} items={SupportSubPath} />
            </div>
        </header>
    )
}
