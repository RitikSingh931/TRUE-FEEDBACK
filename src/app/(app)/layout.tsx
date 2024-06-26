import Navbar from '@/components/Navbar';

import Container from '@/components/Container';


interface RootLayoutProps {
  children: React.ReactNode;
}

export default async function RootLayout({ children }: RootLayoutProps) {
 
  return (
    <>
    <div className="h-full min-h-screen flex flex-col">
     
      
     <Container />
      {children}
    </div>
    </>
  );
}