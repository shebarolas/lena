import React from 'react'
import { Card, CardBody, CardFooter, Stack, ButtonGroup, Button, Text, Image, Heading } from '@chakra-ui/react'
import '../../styles/cards.css'
import lena4 from '../../imgs/leña4.jpg'
import { Modals } from './Modals'
import { Menus } from './Menus'
export const Cards = () => {
  return (
    <>
        <Card maxW='sm' className='background'>
              <CardBody className='padding'>
                <Image
                  src={lena4}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  className='img'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Leña en saco</Heading>
                  <Text>
                    Leña de eucaliptus seca, trozada, picada y envasada en formatos de metro cubico
                  </Text>
                  <Menus/>
                </Stack>
              </CardBody>
              <CardFooter className="grid">
                <ButtonGroup spacing='2' className='btns'>
                  <Button variant='solid' colorScheme='blue' className='btnColor'>
                    Comprar
                  </Button>
                  <Modals/>
                </ButtonGroup>
              </CardFooter>
            </Card>
    </>
  )
}
