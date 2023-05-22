import React from 'react'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    Button
} from '@chakra-ui/react'

export const Menus = () => {
    return (
        <div className="menus">
            <Menu>
                <MenuButton as={Button}>
                    Cantidad
                </MenuButton>
                <MenuList>
                    <MenuItem>1</MenuItem>
                    <MenuItem>2</MenuItem>
                    <MenuItem>3</MenuItem>
                    <MenuItem>4</MenuItem>
                    <MenuItem>5+</MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}
