import { Box, Heading, Text, VStack } from '@chakra-ui/react'

import { SellPointContent } from '../LandingPageSellPointsList/content'

interface Props extends SellPointContent {}

const LandingPageSellPointCard = ({ title, content }: Props) => {
  return (
    <VStack
      flexGrow={1}
      w={'100%'}
      alignItems={'stretch'}
      padding={4}
      borderRadius={'xl'}
      border={'2px'}
      marginTop={0}
    >
      <Heading>{title}</Heading>
      <Box
        h={2}
        border={'2px'}
        borderRadius={'full'}
        background={'yellow.300'}
      />
      {content.map((sentence, key) => (
        <Text key={key}>{sentence}</Text>
      ))}
    </VStack>
  )
}

export default LandingPageSellPointCard
