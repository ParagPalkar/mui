import styled from '@emotion/styled'
import { AppBar, Badge, Avatar, Box, Toolbar, Typography, ListItemIcon, Switch } from '@mui/material'
import SpaSharpIcon from '@mui/icons-material/SpaSharp';
import MailIcon from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';




const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between"
})

const Icons = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "20px",

}))


const Navbar = ({mode,setMode}) => {
    return (
        <AppBar position="sticky" >
            <StyledToolbar>
                <Typography variant="h7" sx={{ display: { xs: "none", sm: "block" } }}>
                    P A R A G
                </Typography>
                <SpaSharpIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Icons>
                
              <Switch onChange={e=>setMode(mode === "dark" ? "light" : "dark")} />
            
                    <Badge badgeContent={4} color="error">
                        <MailIcon color="action" />
                    </Badge>
                    <Badge badgeContent={4} color="error">
                        <Notifications color="action" />
                    </Badge>
                    <Avatar
                            >P</Avatar>
                            
                </Icons>
                
            </StyledToolbar>
            
            
        </AppBar>
    )
}

export default Navbar