import { ActionIcon, Center, Navbar, SimpleGrid } from "@mantine/core"
import { IconAdjustments, IconRectangle, IconLetterP } from '@tabler/icons';
import { Element, selectedElement } from "../../states/main";


const elementList = [
  {
    element: Element.Button,
    icon: <IconAdjustments size={26} />
  },
  {
    element: Element.Paragraph,
    icon: <IconLetterP size={26} />
  }
]


export const Menu = () => {
  return (
    <Navbar width={{ base: 300 }} p="xs">
      <SimpleGrid cols={3} >
        {elementList.map(({ element, icon }) => (
          <Center >
            <ActionIcon key={element} onClick={() => selectedElement.value = element}>
              {icon}
            </ActionIcon>
          </Center>
        ))}
      </SimpleGrid>
    </Navbar>
  )
}
