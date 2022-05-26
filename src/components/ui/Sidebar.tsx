import {
  Divider,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import InboxOutlinedIcon from "@mui/icons-material/InboxOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import { Box } from "@mui/system";

const menuItems: string[] = ["Inbox", "Start", "Send Email", "Draf"];

export const Sidebar = () => {
  return (
    <Drawer anchor="left" open={false} onClose={() => console.log("fechou")}>
      <Box sx={{ width: 250 }}>
        <Box sx={{ padding: "5px 10px" }}>
          <Typography variant="h4">Menu</Typography>
        </Box>

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>

        <Divider />

        <List>
          {menuItems.map((item, index) => (
            <ListItemButton key={index}>
              <ListItemIcon>
                {index % 2 ? <InboxOutlinedIcon /> : <EmailOutlinedIcon />}
              </ListItemIcon>
              <ListItemText primary={item} />
            </ListItemButton>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
