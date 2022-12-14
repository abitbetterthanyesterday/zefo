import { Box, Heading, Stack, VStack } from '@chakra-ui/react'

import LandingPageFeatureCard from '../LandingPageFeatureCard/LandingPageFeatureCard'

import { featuresContent } from './content'

const LandingPageFeaturesList = () => {
  const currentFeatures = featuresContent.filter(({ isFuture }) => !isFuture)
  const futureFeatures = featuresContent.filter(({ isFuture }) => isFuture)

  return (
    <Box paddingBottom={24}>
      <VStack gap={12}>
        <Heading>Feature packed</Heading>
        <Stack gap="sm">
          {currentFeatures.map((feature, key) => (
            <LandingPageFeatureCard key={key} {...feature} />
          ))}
        </Stack>
        <Heading>And more to come</Heading>
        <Box
          style={{
            WebkitMaskImage: 'linear-gradient(black, transparent 90%)',
            zIndex: 0,
          }}
        >
          <Stack gap={'sm'}>
            {futureFeatures.map((feature, key) => (
              <LandingPageFeatureCard key={key} {...feature} />
            ))}
          </Stack>
        </Box>
      </VStack>
    </Box>
  )
}

export default LandingPageFeaturesList
