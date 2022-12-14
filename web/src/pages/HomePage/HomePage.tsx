import { Box, Container } from '@chakra-ui/react'

import { MetaTags } from '@redwoodjs/web'

import LandingPageFab from 'src/components/LandingPage/LandingPageFAB'
import LandingPageFeaturesList from 'src/components/LandingPage/LandingPageFeaturesList'
import LandingPageFooter from 'src/components/LandingPage/LandingPageFooter'
import LandingPageHero from 'src/components/LandingPage/LandingPageHero'
import LandingPageSellPointsList from 'src/components/LandingPage/LandingPageSellPointsList'

const HomePage = () => {
  return (
    <Box
      position={'relative'}
      backgroundImage={'logo-bg-2.png'}
      backgroundSize={'32rem'}
    >
      <Container as="main">
        <MetaTags
          title="Zefo"
          description="The no BS second hand paragliding marketplace"
        />
        <LandingPageHero />
        <LandingPageFab />
        <LandingPageSellPointsList />
        <LandingPageFeaturesList />
      </Container>
      <LandingPageFooter />
    </Box>
  )
}

export default HomePage
