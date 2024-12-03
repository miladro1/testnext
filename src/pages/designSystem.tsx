import { Typography } from '@togetherise/components/common/Typography'
import { Button } from '@togetherise/shadcn/components/ui/button'
import { Sun1 } from 'iconsax-react'
import React from 'react'

const DesignSystem = () => {
    return (
        <div className='p-16'>
            <div className='mt-10'>Themes</div>
            <div className='border border-black flex gap-8'>
                <div className='flex flex-col gap-4'>
                    <Typography variant='h2'>Primary</Typography>
                    <div className='bg-primary'>Primary</div>
                    <div className='bg-primary-foreground'>Primary-foreground</div>
                    <div className='bg-primary-0'>Primary-0</div>
                    <div className='bg-primary-50'>Primary-50</div>
                    <div className='bg-primary-100'>Primary-100</div>
                    <div className='bg-primary-150'>Primary-150</div>
                    <div className='bg-primary-200'>Primary-200</div>
                    <div className='bg-primary-300'>Primary-300</div>
                    <div className='bg-primary-400'>Primary-400</div>
                    <div className='bg-primary-500'>Primary-500</div>
                    <div className='bg-primary-600'>Primary-600</div>
                    <div className='bg-primary-700'>Primary-700</div>
                    <div className='bg-primary-800'>Primary-800</div>
                    <div className='bg-primary-850'>Primary-850</div>
                    <div className='bg-primary-900'>Primary-900</div>
                    <div className='bg-primary-1000'>Primary-1000</div>

                </div>
                <div className='flex flex-col gap-4'>
                    <Typography variant='h2'>Grey</Typography>
                    <div className='bg-grey-0'>Grey-0</div>
                    <div className='bg-grey-50'>Grey-50</div>
                    <div className='bg-grey-100'>Grey-100</div>
                    <div className='bg-grey-150'>Grey-150</div>
                    <div className='bg-grey-200'>Grey-200</div>
                    <div className='bg-grey-300'>Grey-300</div>
                    <div className='bg-grey-400'>Grey-400</div>
                    <div className='bg-grey-500'>Grey-500</div>
                    <div className='bg-grey-600'>Grey-600</div>
                    <div className='bg-grey-700'>Grey-700</div>
                    <div className='bg-grey-800'>Grey-800</div>
                    <div className='bg-grey-850'>Grey-850</div>
                    <div className='bg-grey-900'>Grey-900</div>
                    <div className='bg-grey-1000'>Grey-1000</div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Typography variant='h2'>Background</Typography>
                    <div className='bg-background-1'>Background-1</div>
                    <div className='bg-background-2'>Background-2</div>
                    <div className='bg-background-3'>Background-3</div>
                    <div className='bg-background-4'>Background-4</div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Typography variant='h2'>Accent</Typography>
                    <div className='bg-accent-0'>Accent-0</div>
                </div>
            </div>
            <div className='mt-10'>TYPOGRAPHY</div>
            <div className='border border-black flex gap-4'>
                <div className="space-y-6">
                    <Typography variant="h" weight='regular'>
                        Regular Example (h)
                    </Typography>
                    <Typography variant="h1" weight='regular'>
                        Regular Example (h1)
                    </Typography>

                    <Typography variant="h2" weight='regular'>
                        Regular Example (h2)
                    </Typography>

                    <Typography variant="h3" weight='regular'>
                        Regular Example (h3)
                    </Typography>

                    <Typography variant="h4" weight='regular'>
                        Regular Example (h4)
                    </Typography>

                    <Typography variant="h5" weight='regular'>
                        Regular Example (h5)
                    </Typography>

                    <Typography variant="h6" weight='regular'>
                        Regular Example (h6)
                    </Typography>

                    <Typography variant="h7" weight='regular'>
                        Regular Example (h7)
                    </Typography>

                    <Typography variant="body1" weight='regular'>
                        Regular Example (body1)
                    </Typography>

                    <Typography variant="body2" weight='regular'>
                        Regular Example (body2)
                    </Typography>

                    <Typography variant="body3" weight='regular'>
                        Regular Example (body3)
                    </Typography>

                    <Typography variant="caption1" weight='regular'>
                        Regular Example (caption1)
                    </Typography>

                    <Typography variant="caption2" weight='regular'>
                        Regular Example (caption2)
                    </Typography>

                    <Typography variant="caption3" weight='regular'>
                        Regular Example (caption3)
                    </Typography>
                </div>
                <div className="space-y-6">
                    <Typography variant="h">
                        Medium Example (h)
                    </Typography>
                    <Typography variant="h1">
                        Medium Example (h1)
                    </Typography>

                    <Typography variant="h2">
                        Medium Example (h2)
                    </Typography>

                    <Typography variant="h3">
                        Medium Example (h3)
                    </Typography>

                    <Typography variant="h4">
                        Medium Example (h4)
                    </Typography>

                    <Typography variant="h5">
                        Medium Example (h5)
                    </Typography>

                    <Typography variant="h6">
                        Medium Example (h6)
                    </Typography>

                    <Typography variant="h7">
                        Medium Example (h7)
                    </Typography>

                    <Typography variant="body1">
                        Medium Example (body1)
                    </Typography>

                    <Typography variant="body2">
                        Medium Example (body2)
                    </Typography>

                    <Typography variant="body3">
                        Medium Example (body3)
                    </Typography>

                    <Typography variant="caption1">
                        Medium Example (caption1)
                    </Typography>

                    <Typography variant="caption2">
                        Medium Example (caption2)
                    </Typography>

                    <Typography variant="caption3">
                        Medium Example (caption3)
                    </Typography>
                </div>
                <div className="space-y-6">
                    <Typography variant="h" weight='bold'>
                        Bold Example (h)
                    </Typography>
                    <Typography variant="h1" weight='bold'>
                        Bold Example (h1)
                    </Typography>

                    <Typography variant="h2" weight='bold'>
                        Bold Example (h2)
                    </Typography>

                    <Typography variant="h3" weight='bold'>
                        Bold Example (h3)
                    </Typography>

                    <Typography variant="h4" weight='bold'>
                        Bold Example (h4)
                    </Typography>

                    <Typography variant="h5" weight='bold'>
                        Bold Example (h5)
                    </Typography>

                    <Typography variant="h6" weight='bold'>
                        Bold Example (h6)
                    </Typography>

                    <Typography variant="h7" weight='bold'>
                        Bold Example (h7)
                    </Typography>

                    <Typography variant="body1" weight='bold'>
                        Bold Example (body1)
                    </Typography>

                    <Typography variant="body2" weight='bold'>
                        Bold Example (body2)
                    </Typography>

                    <Typography variant="body3" weight='bold'>
                        Bold Example (body3)
                    </Typography>

                    <Typography variant="caption1" weight='bold'>
                        Bold Example (caption1)
                    </Typography>

                    <Typography variant="caption2" weight='bold'>
                        Bold Example (caption2)
                    </Typography>

                    <Typography variant="caption3" weight='bold'>
                        Bold Example (caption3)
                    </Typography>
                </div>
            </div>
            <div className='mt-10'>BUTTONS</div>
            <div className='border border-black'>
                <div>
                    <div>primary</div>
                    <div className='flex gap-4 my-2'>
                        <Button size={"lg"} variant={'primary'} disabled>Click me</Button>
                        <Button size={"md"} variant={'primary'}>Click me</Button>
                        <Button size={"sm"} variant={'primary'}>Click me</Button>
                    </div>
                </div>

                <div>
                    <div>secondary</div>
                    <div className='flex gap-4 my-2'>
                        <Button size={"lg"} variant={'secondary'}>Click me</Button>
                        <Button size={"md"} variant={'secondary'}>Click me</Button>
                        <Button size={"sm"} variant={'secondary'}>Click me</Button>
                    </div>
                </div>

                <div>
                    <div>icon</div>
                    <div className='flex gap-4 my-2'>
                        <Button size={"iconLG"} variant={'primary'}><Sun1 /></Button>
                        <Button size={"iconMD"} variant={'primary'}><Sun1 /></Button>
                        <Button size={"iconSM"} variant={'primary'}><Sun1 /></Button>
                    </div>
                    <div className='flex gap-4 my-2'>
                        <Button size={"iconLG"} variant={'secondary'}><Sun1 /></Button>
                        <Button size={"iconMD"} variant={'secondary'}><Sun1 /></Button>
                        <Button size={"iconSM"} variant={'secondary'}><Sun1 /></Button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default DesignSystem