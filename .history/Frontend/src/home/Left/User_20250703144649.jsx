import * as React from 'react';
import { styled } from '@mui/material/styles';
import Badge from '@mui/material/Badge';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import useConversation from '../../stateManage/useConversation';
import { useSocketContext } from "../../context/SocketContext.jsx";

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    backgroundColor: '#44b700',
    color: '#44b700',
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    '&::after': {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      animation: 'ripple 1.2s infinite ease-in-out',
      border: '1px solid currentColor',
      content: '""',
    },
  },
  '@keyframes ripple': {
    '0%': { transform: 'scale(.8)', opacity: 1 },
    '100%': { transform: 'scale(2.4)', opacity: 0 },
  },
}));

export default function User({ user, onClick }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const { onlineUsers } = useSocketContext();
  const isOnline = onlineUsers.includes(user._id);

  const handleClick = () => {
    setSelectedConversation(user);
    if (onClick) onClick(); // ← trigger mobile chat view
  };

  return (
    <div
      className={`hover:bg-slate-600 duration-300 ${isSelected ? "bg-slate-700" : ""}`}
      onClick={handleClick}
    >
      <div className="flex space-x-0 hover:bg-slate-600 duration-400 cursor-pointer">
        <div>
          <Stack direction="row" spacing={2} className="p-4">
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
              variant={isOnline ? "dot" : undefined}
            >
              <Avatar
                alt="User Avatar"
                src="https://upload.wikimedia.org/wikipedia/commons/a/ac/Default_pfp.jpg"
                sx={{ width: 45, height: 45 }}
              />
            </StyledBadge>
          </Stack>
        </div>
        <div className="py-2 pt-4">
          <h1 className="text-sm font-bold">{user.name}</h1>
          <span className="text-sm">{user.email}</span>
        </div>
      </div>
    </div>
  );
}
