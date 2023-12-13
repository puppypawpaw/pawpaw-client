'use client';

import Toast from '@/utils/notification';
import { loginWithEmailAndPassword } from '@/service/auth';
import Button from '../../Button';

// just for login page
export default function TestLoginModal() {
  return (
    <div className="fixed bottom-4 right-4 flex justify-center items-center">
      <div className="bg-white w-80 rounded-[10px] flex flex-col justify-between p-4 shadow-searchTab">
        <Button
          fullWidth
          variant="primary"
          onClickAction={async () => {
            try {
              await loginWithEmailAndPassword({
                email: 'test1@gmail.com',
                password: '1234',
              });
              window.location.href = '/';
            } catch (e) {
              if (e instanceof Error) {
                Toast.error(e.message);
              }
            }
          }}
        >
          테스트 계정 로그인하기
        </Button>
      </div>
    </div>
  );
}
