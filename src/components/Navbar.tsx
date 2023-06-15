import React from 'react'
import { HStack, Image, Text } from '@chakra-ui/react'
import logo from '../assets/logo.webp'
import { ColorModeSwitch } from './ColorModeSwitch'

export const Navbar = () => {
    return (
        <HStack justify={'space-between'} padding={'10px'}>
            <Image src={logo} boxSize={'60px'} />
            <ColorModeSwitch />
        </HStack>
    )
}
