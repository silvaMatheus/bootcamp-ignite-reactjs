import { Icon, Link as ChackraLink, LinkProps as ChackraLinkProps, Text } from '@chakra-ui/react';
import { ElementType } from 'react';
import { ActiveLink } from '../ActiveLink';

interface NavLinkProps extends ChackraLinkProps {
  icon: ElementType;
  children: string;
  href: string;
}


export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChackraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20"></Icon>
        <Text ml="4" fontWeight="mediun">{children}</Text>
      </ChackraLink>
    </ActiveLink>

  )
}
