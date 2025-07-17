"use client";

import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IoIosArrowDown} from "react-icons/io";
import { useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { useAuth } from "@/context/authContext";
import { useRouter } from "next/navigation";
import { useSideBarContext } from "@/context/SideBarContext";
import Image from 'next/image';

export const SideBarAccount = () => {
    const {sideBarCollapse} = useSideBarContext();
    const {setIsSigningIn} = useAuth();
    const router = useRouter();

    const [openCountMenu, setOpenAccountMenu] = useState<boolean>(false);
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
        setOpenAccountMenu(true);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setOpenAccountMenu(false);
    };

    const handleLogout = () => {
        setAnchorEl(null);
        setOpenAccountMenu(false);
        setIsSigningIn(false)
        router.push("/login");
        localStorage.setItem("isLoggedIn","false")
    }

    return (
        <div className={twMerge("flex items-center px-4 py-4 space-y-1 mt-5 hover:bg-secondary/30 hover:cursor-pointer",sideBarCollapse? "justify-center": "justify-between")}>
            <div className="flex items-center justify-start gap-2">
                <button id={sideBarCollapse ? "account-button" : ""} onClick={sideBarCollapse ? handleClick : undefined} className={sideBarCollapse? "cursor-pointer" : ""}>
                    <Image width={32} height={32} className="max-h-8 max-w-8 rounded-full" src='/samir-profile.jpg' alt="avatar"/>
                </button>
                <div className={sideBarCollapse? "hidden" : "block"}>
                    <p className="text-sm text-primary -mb-1">User Name</p>
                    <p className="text-xs text-primary/70">username@gmail.com</p>
                </div>
            </div>
            <div>
                <div className={sideBarCollapse? "hidden" : "flex"}>
                    <Button
                        id="account-button"
                        aria-controls={open ? 'account-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                        color="inherit">
                        <IoIosArrowDown className={twMerge("text-lg rotate-0 transition-all ease-in duration-150",openCountMenu? "-rotate-90" : "rotate-0")} id="account-button" />
                    </Button>
                </div>

                <Menu
                    id="account-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'center',
                        horizontal: 'right',
                    }}
                    transformOrigin={{
                        vertical: 'center',
                        horizontal: 'left',
                    }}
                    slotProps={{
                        list: {
                            'aria-labelledby': 'account-button',
                            className: 'bg-background/80 text-primary', // Tailwind classes for dark background and white text
                        },
                    }}
                >

                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={handleLogout}>Logout</MenuItem>
                </Menu>
            </div>
        </div>
    )
}