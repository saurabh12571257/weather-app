import React, { PropsWithChildren } from 'react'


const Layout = ({children}: PropsWithChildren) => {
  return(
    <div className = "bg-gradient-to-br from-background to-muted" >
        header
        <main className = "min-h-screen container mx-auto px-4 py-8" >
        {children}
        </main>
        footer
    </div>
  );
};

export default Layout;
