import React from 'react'
import { Button, Card, CardBody, CardFooter, Heading, Image, Stack, Text } from '@chakra-ui/react'

export const CardsH = () => {
    return (
        <>
            <Card
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '100px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />

                <Stack>
                    <CardBody>
                        <Heading size='md'>Direction</Heading>
                        <Text py='1'>
                            Direccion: Fundo Santa Orfelia km 10 camino Imperial-Cholchol por Hualacura
                        </Text>
                    </CardBody>
                        <Button variant='solid' colorScheme='green' className='btnss'>
                            <a href="https://api.whatsapp.com/send?phone=964478130">WhatsApp</a>
                        </Button>
                </Stack>
            </Card>
        </>
    )
}
