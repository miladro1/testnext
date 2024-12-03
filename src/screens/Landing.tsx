import { HeroSection } from '@togetherise/components/PerPage/Landing/HeroSection'
import { TogetheriseWays } from '@togetherise/components/PerPage/Landing/TogetheriseWays'
import { useMainLayout } from '@togetherise/hooks/Layout/useMainLayout'
import React from 'react'

const Landing = () => {
    return (
        <div>
            <HeroSection />
            <TogetheriseWays />
        </div>
    )
}

export const LandingScreen = useMainLayout(<Landing />)