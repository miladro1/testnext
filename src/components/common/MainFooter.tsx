import { Card, CardContent } from '@togetherise/shadcn/components/ui/card';
import { Typography } from './Typography';
import { Togetherise } from '@togetherise/resource/icons/Togetherise';
import { Resource } from './Resource';
import { useMediaQuery } from '@togetherise/hooks/useMediaQuery';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@togetherise/shadcn/components/ui/accordion';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { Separator } from '@togetherise/shadcn/components/ui/separator';

export const MainFooter = () => {
    const isMobile = useMediaQuery("sm")
    const t = useTranslations()

    return (
        <Card className="bg-background-4 text-white rounded-none border-none p-6">
            <CardContent className="grid sm:grid-rows-2 md:grid-rows-1 grid-cols-4 md:grid-cols-6 gap-8 py-2 px-0">
                <div className='col-span-4 row-auto md:col-span-2'>
                    <Togetherise color='white' className="mb-2" />
                    <Typography variant='body3' weight='regular'>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type.
                    </Typography>
                    <div className='flex gap-2 mt-4'>
                        <Resource name='InstagramIcon' className='w-8 h-8' />
                        <Resource name='LinkedinIcon' className='w-8 h-8' />
                        <Resource name='XIcon' className='w-8 h-8' />
                        <Resource name='TelegramIcon' className='w-8 h-8' />
                    </div>
                </div>
                {isMobile ? <Accordion type="single" collapsible className="w-full col-span-full gap-2 flex flex-col -mt-4">
                    <AccordionItem value="invest">
                        <AccordionTrigger><Typography variant='body2' weight='bold'>{t("invest")}</Typography></AccordionTrigger>
                        <AccordionContent className='p-0 flex flex-col gap-3'>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("why_trust")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("invest_eligibility")}</Typography></Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="raise">
                        <AccordionTrigger><Typography variant='body2' weight='bold'>{t("raise")}</Typography></AccordionTrigger>
                        <AccordionContent className='p-0 flex flex-col gap-3'>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("raise_funds")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("franchise_funding")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("fundraising_eligibility")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("apply_for_funding")}</Typography></Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="support_learn">
                        <AccordionTrigger><Typography variant='body2' weight='bold'>{t("support_learn")}</Typography></AccordionTrigger>
                        <AccordionContent className='p-0 flex flex-col gap-3'>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("help")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("contact_us")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("schedule_meeting")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("blog")}</Typography></Link>
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="legal">
                        <AccordionTrigger><Typography variant='body2' weight='bold'>{t("legal")}</Typography></AccordionTrigger>
                        <AccordionContent className='p-0 flex flex-col gap-3'>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("privacy_policy")}</Typography></Link>
                            <Link href={"#"}><Typography variant='body3' weight='regular'>{t("terms_of_use")}</Typography></Link>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion> : <><div className='col-span-1'>
                    <Typography variant="body2" weight='bold' className="mb-4">{t("invest")}</Typography>
                    <ul>
                        <li><a href="#"><Typography variant='body3' weight='regular'>{t("why_trust")}</Typography></a></li>
                        <li><a href="#"><Typography variant='body3' weight='regular'>{t("invest_eligibility")}</Typography></a></li>
                    </ul>
                </div>
                    <div className='col-span-1'>
                        <Typography variant="body2" weight='bold' className="mb-4">{t("raise")}</Typography>
                        <ul>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("raise_funds")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("franchise_funding")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("fundraising_eligibility")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("apply_for_funding")}</Typography></a></li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <Typography variant="body2" weight='bold' className="mb-4">{t("support_learn")}</Typography>
                        <ul>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("help")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("contact_us")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("schedule_meeting")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("blog")}</Typography></a></li>
                        </ul>
                    </div>
                    <div className='col-span-1'>
                        <Typography variant="body2" weight='bold' className="mb-4">{t("legal")}</Typography>
                        <ul>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("privacy_policy")}</Typography></a></li>
                            <li><a href="#"><Typography variant='body3' weight='regular'>{t("terms_of_use")}</Typography></a></li>
                        </ul>
                    </div>
                </>
                }
            </CardContent>
            <CardContent className="py-4 px-0">
                <div className="flex justify-between items-center">
                    <Typography variant='body3' weight='regular'>
                        {t("copy_right")}
                    </Typography>
                </div>
            </CardContent>
            <Separator />
            <CardContent className="py-4 px-0">
                <Typography variant='caption1' weight='regular'>
                    {t("important_notice")}
                </Typography>
            </CardContent>
        </Card>
    );
};
