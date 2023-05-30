import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'
import '../../styles/modals.css';

export const Modals = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const finalRef = React.useRef(null)

    return (
        <>
            <Button mt={4} onClick={onOpen} className='btnM'>
                Ver Más
            </Button>
            <Modal finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Leña en Saco</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Puede ir información mas detallada sobre como hacen las leña, como se troza, envuleve, etc.
                        Además de poner videos informativos si ese fuera el caso.
                    </ModalBody>
                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Cerrar
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}
