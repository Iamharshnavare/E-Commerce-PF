"use client";
import { useState } from "react";
import { Search, ShoppingCart, Bell, User } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function Navbar() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  return (
    <nav className="w-full border-b bg-[#FFF9EF]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 gap-4">
          <div className="shrink-0 flex items-center">
            <div className="text-2xl font-bold text-primary leading-none">
              Logo
            </div>
          </div>
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className={"bg-[#FFF9EF]"}>Categories</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[min(90vw,500px)] gap-3 p-4 sm:grid-cols-1 md:grid-cols-2 md:gap-4 bg-[#FFF9EF]">
                    <ListItem title="Wall Hangings">
                      Description
                    </ListItem>
                    <ListItem  title="Rugs">
                      Description
                    </ListItem>
                    <ListItem  title="Bags">
                      Description
                    </ListItem>
                    <ListItem title="Others">
                      Special offers and discounts
                    </ListItem>
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-[#FFF9EF]"
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-[#FFF9EF] px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div 
            className={`transition-all duration-300 ease-in-out mx-6 ${
              isSearchExpanded ? 'flex-1 max-w-2xl' : 'flex-1 max-w-md'
            }`}
          >
            <div className="relative flex items-center">
              <Search className="absolute left-3 text-muted-foreground w-4 h-4 pointer-events-none" />
              <Input
                type="search"
                placeholder="Search products..."
                className={`pl-10 h-10 transition-all duration-300 ${isSearchExpanded ? 'bg-white' : ''}`}
                onFocus={() =>{ 
                  setIsSearchExpanded(true)
                  className="bg-white"
                }}
                onBlur={() => setIsSearchExpanded(false)}
              />
            </div>
          </div>
          <div className="flex items-center gap-1 shrink-0">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <Badge 
                variant="destructive" 
                className="absolute -top-1 -right-1 h-5 w-5 flex items-center justify-center p-0 text-xs pointer-events-none"
              >
                0
              </Badge>
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute top-1 right-1 h-2 w-2 bg-destructive rounded-full pointer-events-none"></span>
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

function ListItem({ href, title, children }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className="flex flex-col items-start select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
}