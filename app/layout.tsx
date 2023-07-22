import "../styles/globals.css";
<<<<<<< HEAD
import Sidebar from "@/components/ui/Sidebar/Sidebar";
=======
import MainPage from "@/components/pages/MainPage";
>>>>>>> f8d1080 (Design: 메인 피드 레이아웃 설정 #2)

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
<<<<<<< HEAD
        <Sidebar>
          <main className="p-8 m-auto ml-64">{children}</main>
        </Sidebar>
=======
        <div className="fixed left-0 w-64 h-screen bg-blue-300">d</div>
        <main className="p-8 m-auto ml-64 ">
          <div className="flex h-screen gap-10 border-2 ">
            <div className="h-screen border-2 border-black">
              <MainPage></MainPage>
            </div>
            <div className="flex-col bg-white border-2 border-red-500 top-8 right-8">
              <div>ddddddddddddd</div>
            </div>
          </div>
          {children}
        </main>
>>>>>>> b5e7dcf (Chore: 메인 페이지 폴더와 피드 파일 생성)
      </body>
    </html>
  );
}
