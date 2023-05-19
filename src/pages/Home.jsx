import React from 'react'
import { SlideBar } from '../components/SlideBar'
import { Hero } from '../components/slider/Hero'
import '../styles/home.css'
import { Card, CardHeader, CardBody, CardFooter, Stack, Divider, ButtonGroup, Button, Text, Image } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import lena4 from '../imgs/leña4.jpg'

export const Home = () => {
  return (
    <div className='home'>
      <SlideBar />
      <Hero />
      <div className="super">
        <div className="informacion">
          <Heading className="heading">Nuestros Productos</Heading>
          <div className="general">
            <Card maxW='sm' className='background'>
              <CardBody className='padding'>
                <Image
                  src={lena4}
                  alt='Green double couch with wooden legs'
                  borderRadius='lg'
                  className='img'
                />
                <Stack mt='6' spacing='3'>
                  <Heading size='md'>Living room Sofa</Heading>
                  <Text>
                    This sofa is perfect for modern tropical spaces, baroque inspired
                    spaces, earthy toned spaces and for people who love a chic design with a
                    sprinkle of vintage design.
                  </Text>
                  <Text color='blue.600' fontSize='2xl'>
                    $450
                  </Text>
                </Stack>
              </CardBody>
              <Divider/>
              <CardFooter>
                <ButtonGroup spacing='2'>
                  <Button variant='solid' colorScheme='blue'>
                    Buy now
                  </Button>
                  <Button variant='ghost' colorScheme='blue'>
                    Add to cart
                  </Button>
                </ButtonGroup>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
