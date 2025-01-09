import Button from '@/components/Button/Button';
import GradientIcon from '@/components/GradientIcon/Icon';
import Input from '@/components/Input';
import React from 'react';
import toast from 'react-hot-toast';
import { IoMdClose } from 'react-icons/io';
import { useLoginActions, useLoginState } from './store';

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToRegister: () => void;
}

const LoginModal = ({
  isOpen,
  onClose,
  onSwitchToRegister
}: LoginModalProps) => {
  const { username, password, isLoading, error } = useLoginState();
  const { setState, resetForm, login } = useLoginActions();
  React.useEffect(() => {
    if (!isOpen) {
      resetForm();
    }
  }, [isOpen]);

  const handleLogin = async (e?: React.FormEvent) => {
    e?.preventDefault();
    try {
      const result = await login();
      if (result) {
        onClose();
        toast.success('Đăng nhập thành công');
      }
    } catch (error) {
      console.error('Login failed:', error);
    }
  };

  const handleClose = () => {
    onClose();
  };

  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50 p-4"
      onClick={handleOutsideClick}
    >
      <div className="bg-white rounded-xl shadow-lg w-full max-w-[420px] p-6 sm:p-8 relative animate-in fade-in duration-200">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-800">
            Chào mừng trở lại!
          </h2>
          <p className="text-gray-500 mt-1">Đăng nhập để tiếp tục</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          <Input
            label="Tài khoản"
            type="text"
            value={username}
            onChange={(e) => setState('username', e.target.value)}
            placeholder="Tài khoản"
            disabled={isLoading}
            required
          />
          <Input
            label="Mật khẩu"
            rightLabel={
              <button
                type="button"
                className="text-sm text-gray-600 hover:text-gray-900"
              >
                Quên mật khẩu?
              </button>
            }
            value={password}
            onChange={(e) => setState('password', e.target.value)}
            placeholder="••••••••"
            disabled={isLoading}
            showPasswordToggle
            required
            autoComplete="password"
          />

          {error && <div className="text-red-500 text-sm">{error}</div>}

          <div className="space-y-3 pt-2">
            <Button
              text="Đăng nhập"
              onClick={handleLogin}
              fullWidth
              isLoading={isLoading}
              disabled={isLoading}
            />

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Hoặc</span>
              </div>
            </div>

            <div className="text-center">
              <p className="text-gray-600">
                Chưa có tài khoản?{' '}
                <button
                  type="button"
                  onClick={onSwitchToRegister}
                  className="text-blue-600 hover:text-blue-700 font-medium transition-colors"
                >
                  Đăng ký ngay
                </button>
              </p>
            </div>
          </div>
        </form>

        <button
          onClick={handleClose}
          className="absolute top-4 right-2 p-1"
          type="button"
          aria-label="Close"
        >
          <GradientIcon icon={IoMdClose} />
        </button>
      </div>
    </div>
  );
};

export default LoginModal;
