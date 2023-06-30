import { Tabs, Typography ,Toolbar, useTheme, useMediaQuery } from '@mui/material';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const mypages = [
    { name: "HOME", url: "/adminhome" },
    { name: "ABOUT", url: "/about" },
    { name: "CONTACT", url: "/contact" },
];

 const AdminDashboard = () => {
    const [value, setValue] = useState();
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down("md"));
    console.log(isMatch);

    return (
   
                <Toolbar>
                    {
                    isMatch ? (
                        <>
                            <Typography sx={{ fontSize: "1.5rem", padding: "3%", fontFamily:"sans-serif"}}>
                                BROKER
                            </Typography>
                        </>
                    ) : (
                        <>
                            <Tabs textColor="inherit" value={value} onChange={(e, value) => setValue(value)} indicatorColor="secondary">                                
                            {mypages.map((page,index)=>(
                              <Link key={index} 
                               to={page.url}
                               style={{
                                padding:"12px 12px",
                                color:"white",
                                textDecoration:"none",
                                fontSize:"16px",
                               }}
                               >
                              {page.name}
                                </Link> 
                            ))}
                            </Tabs>
                        </>
                    )}
                    {/* <Avatar
              sx={{ width: 40, height: 40,padding:0 }}
              alt='edupala profile'
              src='https://miro.medium.com/max/1400/0*0fClPmIScV5pTLoE.jpg'
            /> */}
                </Toolbar>
    );
};
export default AdminDashboard;